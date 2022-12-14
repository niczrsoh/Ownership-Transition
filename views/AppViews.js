import React from 'react';
//import { useState } from "react";
//import { QRCodeCanvas } from "qrcode.react";

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className='dashboard'>
        <div className='logo'>
          <br></br>Wherever you are,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>you can sell & buy the product&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br><br></br>
        </div>
      <div className="App">
        <div></div>
        <header className="App-header" id="root">
          {content}
        </header>
      </div>
      <footer className="copyright">
      <p className="copyrightWords">Copyright© 2022 OWNTRAD. All rights reserved.</p>
    </footer>
      </div>
    );
  }
}

{/*Testing for trasfer cert*/}
exports.ReportTransferAttacher = class extends React.Component {
  render() {
    const {payment,user,item, detail,id} = this.props;
    var tid = id.toString();
    var words = detail.split("&&&&&");
    var words2 = words[1].split("{}{}{}");
    var words3 = words2[1].toString().replace(/[^a-z^A-Z^0-9\- ]/g,"");
    var tname = item.replace(/[^a-z^A-Z^0-9 ]/g,"");
    var current = new Date();
    
    return (
      <div>
       You have successfully own the <b>{item}</b> from {user}<br/>
       Here is your certification:  
         <div class="cert">
          <br></br>
         <strong>OWNTRAD</strong>
         <table class="certTable">
         
            <tr>
          <th>Item id: </th><td><b>{tid}</b></td> <br></br></tr>
          <tr>
          <th>Item name: </th><td><b>{tname}</b></td> <br></br></tr>
          <tr>
          <th>Paid price: </th><td><b>{payment}&nbsp; Algo</b></td> <br></br></tr>
          <tr>
          <th>Item detail: </th><td><b>{words[0]}</b></td> <br></br></tr>
          <tr>
          <th>Item origin: </th><td><b>{words2[0]}</b></td> <br></br></tr>
          <tr>
          <th>Date & Time: </th><td><b>{current.getDate()}/{current.getMonth()} {current.getHours()}.{current.getMinutes()}</b></td> <br></br></tr>
          <tr>
          <th>Phone Number: </th><td><b>{words3}</b></td> <br></br></tr>
          <tr>
          <th>Balance: </th><td><b>100 Algo</b></td> <br></br></tr>
          <tr>
          <th>Transaction: </th><td><b>Shipping To you...</b></td> <br></br></tr>
          </table>
         </div>

{/*<div style={{ background: 'white', padding: '16px' }}>
<div>{qrcode}</div>
</div>*/}
      </div>
    );
  }
}
exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
         <h1>Ownership Transition</h1> 
         <br></br>
        Be patient while connecting to your account...
      </div>
    )
  }
}

exports.DeployerOrAttacher = class extends React.Component {
  render() {
    const {parent,role} = this.props;
    return (
      <div>
        <h2>Sell or Buy</h2>
        Please select a <b>role</b>:
        <br />
        <div className="selectionParent2">
          <div className="selChild">
            <p>
              <button
                onClick={() => parent.selectDeployer("retailer")}
              >Deployer</button><br></br>
              <br />
              <div class='selection'>☑️ Create an item, <b>deploy</b> the contract.<br></br>
              &nbsp; &nbsp; &nbsp;&nbsp;Sell it to the <b>buyer</b>.<br></br></div>
            </p>
          </div>
          <div className="selChild">
            <p>
              <button
                onClick={() => parent.selectAttacher("retailer")}
              >Attacher</button><br></br>
              <br /><div class='selection'>☑️ <b>Attach</b> to the <b>Manufacturer's</b> contract.<br></br>
              &nbsp; &nbsp; &nbsp;&nbsp;Buy item from the <b>manufacturer</b>.<br></br></div>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

exports.ThreeUsers = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
         <h1>Ownership Transition</h1> 
        <font size="+2">Please select a <b>role</b>:</font>
        <hr />
        
        <div class="selectionParent">
          <div class="selChild">
            <button
              onClick={() => parent.selectDeployer("manufacturer")}
            >Manufacturer</button>
            <br /><br/>  <div className="selection">
              ☑️ Create an item, <b>deploy</b> the contract.<br></br>
              <b>&nbsp; &nbsp; &nbsp; Sell</b> it to the <b>retailer</b>.
            </div><br></br>
          </div>
            <div class="selChild">
              <button
                onClick={() => parent.DeployerOrAttacher("retailer")}
              >Retailer</button>
              <br /> <br/><div className="selection">☑️ <b>Attach</b> to the <b>Manufacturer's</b> contract.<br></br>
              <div className="center">or</div>
              ☑️ Create an item, <b>deploy</b> the contract.</div><br></br>
            </div>
            <div class="selChild">
            <button
              onClick={() => parent.selectAttacher("buyer")}
            >Buyer</button><br/>
            <br /> <div className="selection"> ☑️ <b>Attach</b> to the <b>Retailer's</b> contract. </div><br></br>
          </div>
        </div>
        
    
      </div>
    );
  }
}

export default exports;