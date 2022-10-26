import React from 'react';
import AppViews from './views/AppViews'
import DeployerViews from './views/DeployerViews'
import AttacherViews from './views/AttacherViews'
import {renderDOM, renderView} from './views/render'
import './index.css'
import * as backend from './build/index.main.mjs'
import {loadStdlib} from '@reach-sh/stdlib'
const reach = loadStdlib(process.env)

import {ALGO_MyAlgoConnect as MyAlgoConnect} 
 from '@reach-sh/stdlib';
reach.setWalletFallback(reach.walletFallback({providerEnv:'TestNet', MyAlgoConnect }));
const handToInt = {'ROCK': 0, 'PAPER': 1, 'SCISSORS': 2};
const intToOutcome = ['Bob wins!', 'Draw!', 'Alice wins!'];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultPrice: '1', standardUnit};

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={view: 'ConnectAccount', ...defaults};
    }
  
    async componentDidMount(){
        const acc = await reach.getDefaultAccount();
        const balAtomic =await reach.balanceOf(acc);
        const bal =reach.formatCurrency(balAtomic,4);
        this.setState({acc,bal});
        if(await reach.canFundFromFaucet()){
            this.setState({view:'FundAccount'});
        }else{
            this.setState({view:'DeployerOrAttacher'});
        }
    }
    async fundAccount(fundAmount) {
        await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
        this.setState({view: 'DeployerOrAttacher'});
      }
      render(){return renderView(this, AppViews)}
      async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }
      selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
      selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
}

class Player extends React.Component {

    reportReject(role){ 
      if(role=='M') this.setState({view: 'ReportRejectManufacturer'}) 
      else this.setState({view: 'ReportRejectRetailer'}) 
  }
  reportPayment(role,payment){ 
    if(role=='M') this.setState({view: 'ReportPaymentManufacturer',payment}) 
    else this.setState({view: 'ReportPaymentRetailer',payment}) 
}
reportTransfer(role,payment){ 
  if(role=='M') this.setState({view: 'ReportTransferManufacturer',payment}) 
  else this.setState({view: 'ReportTransferRetailer',payment}) 
}
  }

  class Deployer extends Player {
    constructor(props){
      super(props);
      this.state = {view:'Login', price: 0, name: "", user: "",ctcInfoStr: ""}
  }
    reportUser(user,uPw){
      console.log("username: "+user+"password: "+uPw)
        if(user=='alice'&&uPw=='1234'){
          console.log(`Successfully login...`)
          this.setState({view:"reportName"})
        }else{
          console.log(`Unsuccessfully login...`)
          this.setState({view: 'LoginFail', who: 'manufacturer'})
        }
    }  
  reportName(name){this.setState({view: 'reportPrice', name});}
  reportPrice(price){this.setState({view: 'Deploy', price});}
  async deploy(){
      const ctc=this.props.acc.contract(backend);
      this.setState({view: 'Deploying', ctc});
      this.reportUser = this.state.user;
      this.reportName = this.state.name;
      this.reportPrice = reach.parseCurrency(this.state.price);
      this.deadline={ETH: 10, ALGO: 100, CFX: 1000}[reach.connector];
      backend.manufacturer(ctc, this);
  const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
  this.setState({view: 'WaitingForAttacher', ctcInfoStr});
}
render() { return renderView(this, DeployerViews); }
  }

  class Attacher extends Player {
    constructor(props) {
      super(props);
      this.state = {view: 'Attach'};
    }
    /*reportUser(user,uPw){
      console.log("username: "+user+"password: "+uPw)
        if(user=='bob'&&uPw=='1234'){
          console.log(`Successfully login...`)
          this.setState({view:"Attach"})
        }else{
          console.log(`Unsuccessfully login...`)
          this.setState({view: 'LoginFail', who: 'retailer'})
        }
    }  
    */
    attach(ctcInfoStr) {
      const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
      this.setState({view: 'Attaching',ctc});
      backend.retailer(ctc, this);
    }

    async confirmPurchase(name,price){
      return await new Promise(resolveAcceptedP => {
          this.setState({view: 'ConfirmPurchase', name, price, resolveAcceptedP});
      });
  }

    confirmPurchase2(){
      this.state.resolveAcceptedP();
      this.setState({view:'reportOwner'})
    }

    reportOwner(item){
          this.setState({view: 'reportOwner',item});
      };

      render(){return renderView(this, AttacherViews);}
  }


  renderDOM(<App />);