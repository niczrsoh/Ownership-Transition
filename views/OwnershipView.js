import React from 'react';

const exports = {};

exports.ReportRejectDeployer = class extends React.Component {
  render() {
    return (
      <div>
        The attacher reject the item 
      </div>
    );
  }
}
exports.ReportRejectAttacher = class extends React.Component {
  render() {
    return (
      <div>
       You reject the item 
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
       {user} paid {payment} Algo to the contract <br/><br/>
       The contract paid {payment} Algo to you <br/><br/>
       Now {user} own the item
      </div>
    );
  }
}
exports.ReportTransferAttacher = class extends React.Component {
  render() {
    const {payment,user,item} = this.props;
    return (
      <div>
       You paid {payment} Algo to the contract <br/><br/>
       Now you own {item} from {user}
      </div>
    );
  }
}

export default exports;