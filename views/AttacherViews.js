import React from 'react';
import OwnershipView from './OwnershipView';

const exports = {...OwnershipView};

exports.Wrapper = class extends React.Component {
  render() {
    const {content,role} = this.props;
    return (
      <div className="Attacher">
        <h2><b>Attacher {role}</b></h2>
        {content}
      </div>
    );
  }
}
exports.Login = class extends React.Component {
  render() {
    const uName = (this.state || {}).uName;
    const password = (this.state || {}).password;
    const {parent,role} = this.props;
    return (
      <div className='login'>
        <h4 className='loginTitle'>Login as <b>{role}</b></h4>
        <hr />
        <div className="loginBox">
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
      </div>
    );
  }
}
exports.LoginFail = class extends React.Component {
  render(){
    const {parent} = this.props;
    return(
      <div className="app">
          <div className="login-form">
        <div>User <b>fails</b> to log in</div>
        <button
          onClick={() => parent.login()}
        >Login Again</button>
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
        <br /><br></br>
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
{/*Test on Searching for the owner*/}
exports.GetOwner = class extends React.Component{
  render(){
    const {owner} = this.props;
    return(
      <div>
        The owner of this product is <strong>{owner}</strong>
      </div>
    )
  }
}

exports.ConfirmPurchase = class extends React.Component {
  render() {
    const {name, price, standardUnit,detail,id,parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div>
        This is the purchasement of <h4 id='itemname'>{name}</h4> with the price <b>{price}{standardUnit}</b>
        <br /><br></br>
        <button
        disabled={disabled}
          onClick={() => {
            this.setState({disabled: true});
            parent.seeDetails(true,name, price, detail,id);
          }}
        >Click to see product details</button>
      <br />
      <button
      onClick={() => {
        this.setState({disabled: true});
        parent.reportReject();
      } }
    >I dont want this item</button>
    <br />
    </div>
    );
  }
}

exports.seeDetails = class extends React.Component {
  render() {
    const {name, price, detail,id,user, standardUnit,parent} = this.props;
    const {disabled} = this.state || {};
    var tid = id.toString();
    var words = detail.split("&&&&&");
    var words2 = words[1].split("{}{}{}");
    var words3 = words2[1].toString().replace(/[^a-z^A-Z^0-9\- ]/g,"");
    var tname = name.replace(/[^a-z^A-Z^0-9 ]/g,"");
    return (
      <div>
        <div class="loginBox">
          <table>
            <tr>
          <th>Item id: </th><td><b>{tid}</b></td> <br></br></tr>
          <tr>
          <th>Item name: </th><td><b>{tname}</b></td> <br></br></tr>
          <tr>
          <th>Price (pay to deploy): </th><td><b>{price}&nbsp; {standardUnit}</b></td> <br></br></tr>
          <tr>
          <th>Item detail: </th><td><b>{words[0]}</b></td> <br></br></tr>
          <tr>
          <th>Item origin: </th><td><b>{words2[0]}</b></td> <br></br></tr>
          <tr>
          <th>Phone Number: </th><td><b>{words3}</b></td> <br></br></tr>
          </table>
          <br /><br></br>
          <button
          disabled={disabled}
            onClick={() => {
              this.setState({disabled: true});
              parent.confirmPurchase2(true);
            }}
          >Accept terms and pay price</button>
                <br />
                <button
                onClick={() => {
          this.setState({disabled: true});
          parent.reportReject();
                } }
              >I dont want this item</button>
        </div>
    <br />
    </div>
    );
  }
}


exports.reportPayment = class extends React.Component {
    render() {
      const {name,price} = this.props;
      const {disabled} = this.state || {};
      return (
        <div>
         Now you will pay <b>{price} Algo</b> for <h4 id='itemname'>{name}</h4>!
          <br />
        </div>
      );
    }
  }
export default exports;