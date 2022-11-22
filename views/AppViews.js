import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className='dashboard'>
        <div className='logo'>
          <br></br>Although we are simple,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>but we provide the BEST SOLUTION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br><br></br>
        </div>
      <div className="App">
        <header className="App-header" id="root">
          <h1>Ownership Transition</h1>
          <br></br>
          {content}
        </header>
      </div></div>
    );
  }
}
exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
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
        Login as {role} <br/><br/>
        Please select a role:
        <br />
        <p>
          <button
            onClick={() => parent.selectDeployer("retailer")}
          >Deployer</button>
          <br /> Create an item, deploy the contract.<br></br>
          Sell it to the <b>BUYER</b>.<br></br>
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
        <font size="+2">Please select a <b>role</b>:</font>
        <hr />
        <p>
          <button
            onClick={() => parent.selectDeployer("manufacturer")}
          >Manufacturer</button>
          <br />  <div className="selection">
            ☑️ Create an item, <b>deploy</b> the contract.<br></br>
            <b>&nbsp; &nbsp; &nbsp; Sell</b> it to the <b>retailer</b>.
          </div><br></br>
        </p>
        <p>
          <button
            onClick={() => parent.DeployerOrAttacher("retailer")}
          >Retailer</button>
          <br /> <div className="selection">☑️ <b>Attach</b> to the <b>Manufacturer's</b> contract.<br></br>
          <div className="center">or</div>
          ☑️ Create an item, <b>deploy</b> the contract.</div><br></br>
        </p>
        <p>
          <button
            onClick={() => parent.selectAttacher("buyer")}
          >Buyer</button>
          <br /> <div className="selection"> ☑️ <b>Attach</b> to the <b>Retailer's</b> contract. </div><br></br>
        </p>
      </div>
    );
  }
}

export default exports;