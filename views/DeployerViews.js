import React from 'react';
import OwnershipView from './OwnershipView';

const exports = {...OwnershipView};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content,role} = this.props;
    return (
      <div className="Deployer">
        <h2><b>Deployer {role}</b></h2>
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
        <h2>Login as <b>{role}</b></h2>
        <hr />
        <br></br>
        <div class="group">
        <input type='text' col="18" id='uName' value={uName}  onChange={(e) => this.setState({uName: e.currentTarget.value})}   required/>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Username: &nbsp;</label>
        </div>
        <div class="group">
        <input type='password' name='password' value={password} onChange={(e) => this.setState({password: e.currentTarget.value})}   required/>
        <span class="highlight"></span>
      <span class="bar"></span>
        <label>Password: &nbsp;</label>
        </div>
        <button class="button2" onClick={()=>parent.reportUser(uName,password)}>Save</button>
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
        <div>User fails to log in</div>
        <button
          onClick={() => parent.login()}
        >Login Again</button>
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
        <h4>Create an item</h4>
        <div class="group">
        <input
          type='text'
          placeholder={''}
          onChange={(e) => this.setState({name: e.currentTarget.value})}
        /> 
        <span class="highlight"></span>
      <span class="bar"></span>
        <label>  
        Item Name:</label>
        </div>
        <button
          onClick={() => parent.reportName(name)}
        >Confirm</button>
      </div>
    );
  }
}
function calculation(a,b){
  console.log(a+b);
  return (a+b).toFixed(4);
}
exports.reportPrice = class extends React.Component {
  render() {
    const {parent, balance,name, defaultPrice, standardUnit} = this.props;
    const price = (this.state || {}).price || defaultPrice;
    const bal = calculation(Number(price), Number(balance)) || balance; 
    return (
      <div>
        <h4>Enter your {name} price</h4>
        <div class="group" >
          <br></br>
        <input
          type='number'
          placeholder={defaultPrice}
          onChange={(e) => this.setState({price: e.currentTarget.value})}
        /> 
        <span class="highlight"></span>
      <span class="bar"></span>
      <label><font size="+1">Price: <strong>({standardUnit})</strong></font></label>
        </div>
        <div class="group">
          <br></br><br></br>
        <table class='financial'>
          <tr>
        <th>Balance <b>now</b>: </th><td><b>{balance}</b> &nbsp;ALGO</td></tr><br/>
        <tr>
        <th>Balance <b>after</b> item was sold:</th><br></br> <tr><b>{bal}</b> &nbsp;ALGO</tr>
        </tr>
        <span class="highlight"></span>
      <span class="bar"></span>
      <label><font size="+1">Financial Preview: <strong>({standardUnit})</strong></font></label>
      </table>
        </div>
        <button
          onClick={() => parent.reportPrice(price)}
        >Confirm</button>
      </div>
    );
  }

}
exports.reportDetails = class extends React.Component {
  render() {
    const {parent,name} = this.props;
    const product = (this.state || {}).product;
    const origin = (this.state || {}).origin;
    const phone = (this.state || {}).phone; 
    const details = product+"&&&&&"+origin+"{}{}{}"+phone;
    return (
      <div>
        <h3>State {name} details and origin</h3>
        {/*Details*/}
        <div class="group">
        <br></br><br></br>
        <textarea
          name="itemDetail" rows="4" cols="50"
          placeholder='Details out the item'
          onChange={(e) => this.setState({product: e.currentTarget.value})}
        /> 
        <span class="highlight"></span>
      <span class="bar"></span>
        <label className='details'>  
        {name} details: </label>
        </div>
        {/*Origin*/}
        <div class="group">
        <br></br>
        <input
          type='text'
          placeholder='Details out the origin of your item'
          onChange={(e) => this.setState({origin: e.currentTarget.value})}
        /> 
        <span class="highlight"></span>
      <span class="bar"></span><br/>
        <label className='details'>  
        {name} origin:</label>
        </div>
     {/*Phone Number*/}
        <div class="group">
          <br></br>
        <input type="tel" name="phone" placeholder="010-1234567" pattern="[0-9]{3}-[0-9]{7}" 
         onChange={(e) => this.setState({phone: e.currentTarget.value})}
        />
        <span class="highlight"></span>
      <span class="bar"></span><br/>
        <label className='details'>  
         Phone number: </label>
        </div>
        <button
          onClick={() => parent.reportDetails(details)}
        >Confirm</button>
      </div>
    );
  }
}
exports.Deploy = class extends React.Component {
  render() {
    const {parent, name, price, id,details, standardUnit} = this.props;
    var words = details.split("&&&&&");
    var words2 = words[1].split("{}{}{}");
    return (
      <div>
        <table>
          <tr>
        <th>Item ID: </th> <td><b> {id} </b></td> <br></br>
        </tr>
        <tr>
        <th>Item name: </th><td><b>{name}</b></td> <br></br>
        </tr><tr>
        <th>Price (pay to deploy): </th><td><b>{price} {standardUnit}</b> </td><br></br>
        </tr><tr>
        <th>Item detail: </th><td><b>{words[0]}</b></td> <br></br>
        </tr><tr>
        <th>Item origin: </th><td><b>{words2[0]}</b></td> <br></br>
        </tr><tr>
        <th>Phone Number: </th><td><b>{words2[1]}</b></td> <br></br>
        </tr></table>
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
    const {ctcInfoStr,user} = this.props;
    return (
      <div>
        <p class='left'>
        Waiting for Attacher to join...
        <br /> {user}, please give them your contract info:
        </p>
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