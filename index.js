import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import { renderDOM, renderView } from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import {loadStdlib} from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

import {ALGO_MyAlgoConnect as MyAlgoConnect}
    from '@reach-sh/stdlib';
reach.setWalletFallback(reach.walletFallback({
    providerEnv: 'TestNet', MyAlgoConnect
}));

const handToInt={'ROCK':0, 'PAPER':1, 'SCISSORS':2};
const intToOutcome = ['Bob wins!', 'Draw!', 'Alice wins!'];
const {standardUnit}=reach;
const defaults = {defaultFundAmt: '10', defaultPrice: '1', standardUnit};

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={view: 'ConnectAccount', ...defaults};
    }
    async componentDidMount(){
        const acc = await reach.getDefaultAccount();
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic, 4);
        this.setState({acc, bal});
        if(await reach.canFundFromFaucet()){
            this.setState({view: 'FundAccount'});
        } else{
            this.setState({view: 'DeployerOrAttacher'});
        }
    }
    render(){return renderView(this, AppViews);}
    async fundAccount(fundAmount){
        await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
        this.setState({view: 'DeployerOrAttacher'});
    }
    async skipFundAccount(){this.setState({view: DeployerOrAttacher});}
    selectAttacher(){this.setState({view: 'Wrapper', ContentView: Attacher});}
    selectDeployer(){this.setState({view: 'Wrapper', ContentView: Deployer});}
}

class Owner extends React.Component{
    random(){return reach.hasRandom.random();}
    async getHand(){
        const hand= await new Promise(resolveHandP =>{
            this.setState({view: 'GetHand', playable: true, resolveHandP})
        });
        this.setState({view: 'WaitingForResults', hand});
        return handToInt[hand];
    }
    seeOutcome(i){this.setState({view: 'Done', outcome: intToOutcome});}
    informTimeout(){this.setState({view: 'Timeout'});}
    playHand(hand){this.state.resolveHandP(hand);}
}

class Deployer extends Owner{
    constructor(props){
        super(props);
        this.state={view: 'reportName'};
        this.state={view: 'reportPrice'};
    }
    reportName(name){this.setState({view: 'Deploy', name});}
    reportPrice(price){this.setState({view: 'Deploy', price});}
    async deploy(){
        const ctc=this.props.acc.contract(backend);
        this.setState({view: 'Deploying', ctc});
        this.name=this.state.name;
        this.price=each.parseCurrency(this.state.price);
        this.deadline={ETH: 10, ALGO: 100, CFX: 1000}[reach.connector];
        backend.manufacturer(ctc, this);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        this.setState({view: 'WaitingForAttacher', ctcInfoStr});
    }
    render(){return renderView(this, DeployerViews);}
}

class Attacher extends Owner{
    constructor(props){
        super(props);
        this.state={view: 'Attach'};
    }
    attach(ctcInfoStr){
        const ctc=this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
        this.setState({view: 'Attaching'});
        backend.Bob(ctc, this);
    }
    async confirmPurchase(name,price){
        const price = reach.formatCurrency(priceAtomic, 4);
        return await new Promis(resolveAcceptedP => {
            this.setState({view: 'AcceptTerms', price,name, resolveAcceptedP});
        });
    }
    
    termsAccepted(){
        this.state.resolveAcceptedP();
        this.setState({view: 'WaitingForTurn'});
    }
    render(){return renderView(this, AttacherViews);}

    async reportOwner(item){
        const price = reach.formatCurrency(priceAtomic, 4);
        return await new Promis(resolveAcceptedP => {
            this.setState({view: 'reportOwner', item, resolveAcceptedP});
        });
    }
}

renderDOM(<App />);