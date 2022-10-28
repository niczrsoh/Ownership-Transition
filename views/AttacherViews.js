import React from 'react';
import OwnershipView from './OwnershipView';

const exports = {...OwnershipView};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Attacher">
        <h2>Attacher (Bob)</h2>
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
        <h2>Login as retailer</h2>
        Enter your username and password
        <hr />
        <br></br>
        <div className="group">
        <input type='text' id='uName' value={uName}  onChange={(e) => this.setState({uName: e.currentTarget.value})}   required/>
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Username: &nbsp;</label>
        </div>
        <div className="group">
        <input type='password' name='password' value={password} onChange={(e) => this.setState({password: e.currentTarget.value})}   required/>
        <span className="highlight"></span>
      <span className="bar"></span>
        <label>Password: &nbsp;</label>
        </div>
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

exports.Attach = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {ctcInfoStr} = this.state || {};
    return (
      <div>
        Please paste the contract info to attach to:
        <br /><br></br>
        <textarea spellCheck="false"
          className='ContractInfo'
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          disabled={!ctcInfoStr}
          onClick={() => parent.attach(ctcInfoStr)}
        >Attach</button>
      </div>
    );
  }
}

exports.Attaching = class extends React.Component {
  render() {
    return (
      <div>
        Attaching, please wait...
      </div>
    );
  }
}

exports.AcceptTerms = class extends React.Component {
  render() {
    const {price, standardUnit, parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div>
        <br /> Price: {price} {standardUnit}
        <br />
        <button
          disabled={disabled}
          onClick={() => {
            this.setState({disabled: true});
            parent.termsAccepted();
          }}
        >Accept terms and pay</button>
      </div>
    );
  }
}

exports.WaitingForTurn = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for the other player...
        <br />Think about which move you want to play.
      </div>
    );
  }
}
exports.ConfirmPurchase = class extends React.Component {
  render() {
    const {name, price, standardUnit,parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div>
        Do you want to purchase <h4 id='itemname'>{name}</h4> for {price}{standardUnit}?
        <br />
        <button
        disabled={disabled}
          onClick={() => {
            this.setState({disabled: true});
            parent.confirmPurchase2();
          }}
        >Accept terms and pay price</button>
      </div>
    );
  }
}


exports.reportOwner = class extends React.Component {
    render() {
      const {name} = this.props;
      const {disabled} = this.state || {};
      return (
        <div>
         Now Bob owns <h4 id='itemname'>{name}!</h4>
          <br />
        </div>
      );
    }
  }
export default exports;