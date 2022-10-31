import React from 'react';

const exports = {};

exports.ReportRejectManufacturer = class extends React.Component {
  render() {
    return (
      <div>
        The attacher reject the item
      </div>
    );
  }
}
exports.ReportRejectRetailer = class extends React.Component {
  render() {
    return (
      <div>
       You reject the item
      </div>
    );
  }
}
exports.ReportPaymentManufacturer = class extends React.Component {
  render() {
    const {payment} = this.props;
    return (
      <div>
       The attacher paid {payment} Algo to the contract
      </div>
    );
  }
}
exports.ReportPaymentRetailer = class extends React.Component {
  render() {
    const {payment} = this.props;
    return (
      <div>
       You paid {payment} Algo to the contract
      </div>
    );
  }
}
exports.ReportTransferManufacturer = class extends React.Component {
  render() {
    const {payment} = this.props;
    return (
      <div>
       The contract paid {payment} to you
      </div>
    );
  }
}
exports.ReportTransferRetailer = class extends React.Component {
  render() {
    const {payment} = this.props;
    return (
      <div>
       You paid {payment} to the contract
      </div>
    );
  }
}

export default exports;