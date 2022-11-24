import React from 'react';

const exports = {};

exports.ReportRejectDeployer = class extends React.Component {
  render() {
    return (
      <div>
        The attacher <b>reject</b> the item 
      </div>
    );
  }
}
exports.ReportRejectAttacher = class extends React.Component {
  render() {
    return (
      <div>
       You <b>reject</b> the item 
      </div>
    );
  }
}
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
exports.ReportTransferDeployer = class extends React.Component {
  render() {
    const {payment,user,item} = this.props;
    return (
      <div>
         {user.replace(' ','')} bought {item} <br/><br/> 
          <b>{user}</b> paid <b>{payment} Algo</b> to the contract <br/><br/>
          The contract paid <b>{payment} Algo</b> to you <br/><br/>
          Now <b>{user} own</b> the item

      </div>
    );
  }
}

export default exports;