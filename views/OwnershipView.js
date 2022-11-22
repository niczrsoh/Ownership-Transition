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
exports.ReportTransferAttacher = class extends React.Component {
  render() {
    const {payment,user,item} = this.props;
    return (
      <div>
       You paid <b>{payment} Algo</b> to the contract <br/><br/>
       Now <b>you own {item}</b> from {user}
      </div>
    );
  }
}

export default exports;