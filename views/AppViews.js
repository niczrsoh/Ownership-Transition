import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <h1>Ownership Transition</h1>
          <h1>Ownership Transition</h1>
          <br></br>
          {content}
        </header>
      </div>
    );
  }
}
exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
        Please wait while we connect to your account.
        If this takes more than a few seconds, there may be something wrong.
      </div>
    )
  }
}

exports.DeployerOrAttacher = class extends React.Component {
  render() {
    const {parent,role} = this.props;
    return (
      <div>
        Login as {role} <br/><br/>
        Please select a role:
        <br />
        <p>
          <button
            onClick={() => parent.selectDeployer("retailer")}
          >Deployer</button>
          <br /> Create an item, deploy the contract.<br></br>
          Sell it to the BUYER.<br></br>
        </p>
        <p>
          <button
            onClick={() => parent.selectAttacher("retailer")}
          >Attacher</button>
          <br /> Attach to the Manufacturer's contract.<br></br>
          Buy item from the MANUFACTURER.<br></br>
        </p>
      </div>
    );
  }
}

exports.ThreeUsers = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        Please select a role:
        <br />
        <p>
          <button
            onClick={() => parent.selectDeployer("manufacturer")}
          >Manufacturer</button>
          <br /> Create an item, deploy the contract.<br></br>
          Sell it to the RETAILER.<br></br>
        </p>
        <p>
          <button
            onClick={() => parent.DeployerOrAttacher("retailer")}
          >Retailer</button>
          <br /> Attach to the Manufacturer's contract.<br></br>
          or<br></br>
          Create an item, deploy the contract.
        </p>
        <p>
          <button
            onClick={() => parent.selectAttacher("buyer")}
          >Buyer</button>
          <br /> Attach to the Retailer's contract.
        </p>
      </div>
    );
  }
}

export default exports;