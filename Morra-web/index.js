//import our view code and CSS
import React from 'react';
import AppViews from './views/AppViews'
import DeployerViews from './views/DeployerViews'
import AttacherViews from './views/AttacherViews'
import {renderDOM, renderView} from './views/render'
import './index.css'
//import compiled backend
import * as backend from './build/index.main.mjs'
//load the stdlib as reach
import {loadStdlib} from '@reach-sh/stdlib'
const reach = loadStdlib(process.env)//process.env is passed cuz react compiles reach stdlib in such a way does not have direct access to the env variables which are used to select desired standard library

import {ALGO_MyAlgoConnect as MyAlgoConnect} 
 from '@reach-sh/stdlib';
reach.setWalletFallback(reach.walletFallback({providerEnv:'TestNet', MyAlgoConnect }));
//define handToInt ,outcome and defaults enum ,aslo standradUnit constant
const fingers = [0,1,2,3,4,5]
const guess = [0,1,2,3,4,5,6,7,8,9,10]
const intToOutcome =['Jodie wins!','Draw!','Marco wins!']
const {standardUnit} = reach;
const defaults = {defaultFundAmt:'10', defaultWager:'3', standardUnit}

//start defining the main application view as App in React component
//tell it what to do once it mounts which is the React term for starting
class App extends React.Component{
    constructor(props){
        super(props);
        //initialize the component state to display Connect Account dialog
        this.state={view: 'ConnectAccount', ...defaults};
    }
    //took into React's componentDidMount lifecycle event which is called when the component starts
    async componentDidMount(){
        //getDefaultAccount is ued to access default browser account. For example, when using ethereum, it can discover the currently-selected MetaMask account
        const acc = await reach.getDefaultAccount();
        const balAtomic =await reach.balanceOf(acc);
        const bal =reach.formatCurrency(balAtomic,4);
        this.setState({acc,bal});
        //to see if we can access the Reach developer testing network faucet
        if(await reach.canFundFromFaucet()){
            //to display FundAccount dialog
            this.setState({view:'FundAccount'});
        }else{
            //skip to Choose Role.
            this.setState({view:'DeployerOrAttacher'});
        }
    }
    //define the process when user click on the Fund Account button
    async fundAccount(fundAmount) {
        //transfer funds from faucet to the user's account
        await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
        //set the component state to display choose role
        this.setState({view: 'DeployerOrAttacher'});
      }
      render(){return renderView(this, AppViews)}
      //define the skip button that will set the component state to display choose role
      async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }
//set on subcomponent whether user choose for attacher or deployer
      selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
  selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
    //render approriate view 
   
}
//define Player class
class Player extends React.Component {
    //provide random callback
    random() { return reach.hasRandom.random(); }
    //provide getHand callback
    async guessNumber() { // Fun([], UInt)
        //set the component state to display Guess Number dialog,
        // and wait for a Promise which can be resolved via user interaction
      const guess = await new Promise(resolveNumber => {
        this.setState({view: 'GuessNumber', playable: true, resolveNumber});
      });
      this.setState({view: 'DoneForPlayNum', guess});
      return guess;
    }
    async giveNumber() { //    Fun([], UInt)
        //set the component state to display Give Number dialog,
        // and wait for a Promise which can be resolved via user interaction
      const number = await new Promise(resolveNumber => {
        this.setState({view: 'GiveNumber', playable: true, resolveNumber});
      });
      //set the component state to display Waiting for results
      this.setState({view: 'WaitingForResults', number});
      return number;
    }
    //set the component state to display Done
    seeOutcome(i) { this.setState({view: 'Done', outcome: intToOutcome[i]}); }
    //set the component state to display Timeout
    informTimeout() { this.setState({view: 'Timeout'}); }
    //set the component state to display Draw
    informDraw(){ this.setState({view: 'Draw'})}
    //define what happens when user clicks 0,1,2,3,4,5,6,7,8,9,10
    playMorra(number) { this.state.resolveNumber(number); }
    playGuest(guess) {this.state.resolveNumber(guess); }
  }

  class Deployer extends Player {
    constructor(props) {
      super(props);
      //set the component state to display Set Wager dialog
      this.state = {view: 'SetWager'};
    }
    //define what to do when the user clicks the set wager button
    //which is to set the component state to Deploy dialog
    setWager(wager) { this.setState({view: 'Deploy', wager}); }
    //define what to do when the deploy button was clicked
    async deploy() {
    //triggers a deploy of the contract
      const ctc = this.props.acc.contract(backend);
      //set the component state to deploying display
      this.setState({view: 'Deploying', ctc});
      //set the wager property
      this.wager = reach.parseCurrency(this.state.wager); // UInt
      //set the deadline property based on which connector is being used
      this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt
     //start running the Reach program as Marco, using the this React component as participant interact interface object
      backend.Marco(ctc, this);
      //set the component state to display Waiting for Attacher display
      const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
      this.setState({view: 'WaitingForAttacher', ctcInfoStr});
    }
    //render the approriate view from deployer view js file
    render() { return renderView(this, DeployerViews); }
  }

  class Attacher extends Player {
    constructor(props) {
      super(props);
      //set the component state to Attach display
      this.state = {view: 'Attach'};
    }
    //define what happens when user clicks on the Attach button
    attach(ctcInfoStr) {
        //call acc.attach
      const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
      //set the component state to Attaching display
      this.setState({view: 'Attaching'});
      //running the Program as Jodie, using the this React component as the participant interact interface object
      backend.Jodie(ctc, this);
    }
    async acceptWager(wagerAtomic) { // Fun([UInt], Null)
      const wager = reach.formatCurrency(wagerAtomic, 4);
      //set the component state to display Accept Terms dialog and wait for a Promise which can be resolved via user interaction
      return await new Promise(resolveAcceptedP => {
        this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
      });
    }
    //happening when user clicks the Accept Terms and Pay Wager button
    termsAccepted() {
      this.state.resolveAcceptedP();
      //set the component state to display Waiting for Turn display
      this.setState({view: 'WaitingForTurn'});
    }
    //render the approriate view from AttacherViews
    render() { return renderView(this, AttacherViews); }
  }

  //call a small helper function from render.js to render our App component
  renderDOM(<App />);