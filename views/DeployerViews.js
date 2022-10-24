import React from 'react';
import OwnershipView from './OwnershipView';

const exports = {...OwnershipView};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">
        <h2>Deployer (Alice)</h2>
        {content}
      </div>
    );
  }
}
exports.Login = class extends React.Component {
  render() {
    const uName = (this.state || {}).uName;
    const password = (this.state || {}).password;
    const {parent} = this.props;
    return (
      <div className='login'>
        <h2>Login as manufacturer</h2>
        <br />
        Enter your username and password
        <hr />
        Username: 
        <input type='text' id='uName' value={uName}  onChange={(e) => this.setState({uName: e.currentTarget.value})}   required/>
        <br />
        Password: 
        <input type='password' name='password' value={password} onChange={(e) => this.setState({password: e.currentTarget.value})}   required/>
        <br />
        <button onClick={()=>parent.reportUser(uName,password)}>Save</button>
      </div>
    );
  }
}
exports.LoginFail = class extends React.Component {
  render(){
    return(
      <div className="app">
      <div className="login-form">
        <div className="title">Login as manufacturer</div>
        <div>User fails to log in</div>
      </div>
    </div>
    )
  }
}

exports.reportName = class extends React.Component {
  render() {
    const {parent} = this.props;
    const name = (this.state || {}).name;
    return (
      <div>
        Item Name: <br></br>
        <input
          type='text'
          placeholder={''}
          onChange={(e) => this.setState({name: e.currentTarget.value})}
        /> 
        <br />
        <br></br>
        <button
          onClick={() => parent.reportName(name)}
        >Item Name</button>
      </div>
    );
  }
}

exports.reportPrice = class extends React.Component {
  render() {
    const {parent, defaultPrice, standardUnit} = this.props;
    const price = (this.state || {}).price || defaultPrice;
    return (
      <div>
        <input
          type='number'
          placeholder={defaultPrice}
          onChange={(e) => this.setState({price: e.currentTarget.value})}
        /> {standardUnit}
        <br />
        <button
          onClick={() => parent.reportPrice(price)}
        >Set price</button>
      </div>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent, name, price, standardUnit} = this.props;
    return (
      <div>
        Item name: <strong>{name}</strong> <br></br>
        Price (pay to deploy): <strong>{price}</strong> {standardUnit}
        <br /><br></br>
        <button
          onClick={() => parent.deploy()}
        >Deploy</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying... please wait.</div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipboard(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Waiting for Attacher to join...
        <br /> Please give them this contract info:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipboard(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}

export default exports;