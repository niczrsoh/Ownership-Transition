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
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultPrice: '1', standardUnit};

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={view: 'ConnectAccount', ...defaults, role:""};
    }
  
    async componentDidMount(){
        const acc = await reach.getDefaultAccount();
        const balAtomic =await reach.balanceOf(acc);
        const bal =reach.formatCurrency(balAtomic,4);
        this.setState({acc,bal});
        if(await reach.canFundFromFaucet()){
            this.setState({view:'FundAccount'});
        }else{
            this.setState({view:'ThreeUsers'});
        }
    }
    async fundAccount(fundAmount) {
        await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
        this.setState({view: 'ThreeUsers'});
      }
      render(){return renderView(this, AppViews)}
      async skipFundAccount() { this.setState({view: 'ThreeUsers'}); }
      DeployerOrAttacher(role) { 
        this.setState({view: 'DeployerOrAttacher', role}); }
      selectAttacher(role) { this.setState({view: 'Wrapper', ContentView: Attacher,role}); }
      selectDeployer(role) { 
        this.setState({view: 'Wrapper',ContentView: Deployer, role}); }
}

class Owner extends React.Component {

    reportReject(role){ 
      if(role=='M') this.setState({view: 'ReportRejectDeployer'}) 
      else this.setState({view: 'ReportRejectAttacher'}) 
    }

    reportTransfer(role,payment,user,item){ 
      payment = parseInt(payment);
      item = item.replace(/[^a-zA-Z ]/g, "");
      user = user.replace(/[^a-zA-Z ]/g, "");
      if(role=='M') this.setState({view: 'ReportTransferDeployer',payment,user,item}) 
      else this.setState({view: 'ReportTransferAttacher',payment,user,item}) 
    }

  }

  class Deployer extends Owner {
    random(){return reach.hasRandom.random();}
    constructor(props){
      super(props);
      const min=1000000000;
      const max=9999999999;
      const id = Math.floor(Math.random() * (max - min + 1) ) + min;
      console.log(id);
      this.reportID = id;
      this.state = {view:'Login',role:this.props.role, balance: this.props.bal, phone: "",
       price: this.props.defaultPrice, name: "", details:"", user: "", id, ctcInfoStr: ""}
  }
    login(){
      this.setState({view:'Login'});
    }
    reportUser(user,uPw){
      console.log("username: "+user+"password: "+uPw)
      if(this.props.role=='manufacturer'){
        if(user=='alice'&&uPw=='a1234'){
          console.log(`Successfully login...`)
          this.setState({view:"reportName", user})
        }else{
          console.log(`Unsuccessfully login...`)
          this.setState({view: 'LoginFail',user})
        }}else{
          if(user=='bob'&&uPw=='b2345'){
            console.log(`Successfully login...`)
            this.setState({view:"reportName", user})
          }else{
            console.log(`Unsuccessfully login...`)
            this.setState({view: 'LoginFail',user})
          }
        }
    }  
  reportName(name){this.setState({view: 'reportPrice', name});}
  reportPrice(price,balance,name){this.setState({view: 'reportDetails', price});}
  reportDetails(details,name){this.setState({view: 'Deploy', details});}
  async deploy(){
      const ctc=this.props.acc.contract(backend);
      this.setState({view: 'Deploying', ctc});
      this.reportUser = this.state.user;
      this.reportName = this.state.name;
      this.reportPrice = this.state.price;
      //inside the details have the product detail, origin and deployer phone number
      //details=detail&&&&&origin{}{}{}phone
      this.reportDetails = this.state.details;
      console.log(this.state.user);
      console.log(this.state.details);
      this.deadline={ETH: 10, ALGO: 100, CFX: 1000}[reach.connector];
      backend.deployer(ctc, this);
  const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
  this.setState({view: 'WaitingForAttacher', ctcInfoStr,user: this.state.user});
}
render() { return renderView(this, DeployerViews); }
  }

  class Attacher extends Owner {
    //edit and change the retailer functions here!!
    constructor(props) {
      super(props);
      this.state = {view: "Login",role: this.props.role, user: "",iname: "", iprice:0, answer: false};
    }
    login(){
      this.setState({view:'Login'});
    }
    reportUser(user,uPw){
      console.log("username: "+user+"password: "+uPw)
      if(this.props.role=='retailer'){
        if(user=='bob'&&uPw=='b2345'){
          console.log(`Successfully login...`)
          this.setState({view:"Attach", user})
        }else{
          console.log(`Unsuccessfully login...`)
          this.setState({view: 'LoginFail',user})
        }}else{
          if(user=='clarke'&&uPw=='c4248'){
            console.log(`Successfully login...`)
            this.setState({view:"Attach", user})
          }else{
            console.log(`Unsuccessfully login...`)
            this.setState({view: 'LoginFail',user})
          }
        }
    }  
    
    attach(ctcInfoStr) {
      this.reportUser = this.state.user;
      const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
      this.setState({view: 'Attaching',ctc});
      backend.attacher(ctc, this);
    }

    async confirmPurchase(name,price){
      price = parseInt(price);
      console.log(name+" "+price);
      return await new Promise(resolveAcceptedP => {
          this.setState({view: 'ConfirmPurchase', name, price, resolveAcceptedP});
      });
    }

    confirmPurchase2(answer){
      this.state.resolveAcceptedP(answer);
      this.setState({view:'reportPayment'})
    }

    reportPayment(name,price){
          price = parseInt(price);
          this.setState({view: 'reportPayment',name, price});
      };
      render(){return renderView(this, AttacherViews);}
  }

  renderDOM(<App />);