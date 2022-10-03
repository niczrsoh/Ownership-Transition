//Front end where we give them functionality by sending data to backend
//import the reach standard library and ask object for user input
import { loadStdlib, ask} from "@reach-sh/stdlib";
//import the backend from build folder due to rsh file break down into build folder.
import * as backend from './build/index.main.mjs'
//set a constant for stdlib for easy reference
const stdlib = loadStdlib()

//To determine whether is Alice
const isAlice = await ask.ask(
    'Are you Alice?',
    ask.yesno 
);
const who = isAlice?'Alice':'Bob'

//To create account / load account for the user
console.log(`Starting Rock, Paper,Scissors! as ${who}`);

let acc= null;
const createAcc = await ask.ask(
    'Would you like to create an account? (only possible on devnet)',
    ask.yesno
);
if(createAcc){
    //if want to create account then create a test account like before
    acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000))//giving the starting balance as 1000
}else{
    //asking the user on the existing account
    const secret = await ask.ask(
        'What is your acocunt secret?',(x=>x)
    );
    //load the existing account
    acc=await stdlib.newAccountFromSecret(secret);
}

//To deploy the contract
let ctc=null; 
if(isAlice){
    //Alice's account is used to deploy the contract first,so tie the user to the contract, set the contract to backend
    ctc = acc.contract(backend)
    ctc.getInfo().then((info)=>{
        console.log(`The contract is deployed as = ${JSON.stringify(info)}`)//to deploy and print out the public info
    });
}else{
    const info = await ask.ask(`Please paste the contract information:`,JSON.parse);//to know the player 
    ctc=acc.contract(backend,info)
}


//formatCurrency. change atomic units to standard units due to programmer & user speak standard units
//thus, formatCurrency() displays amounts in standard units. These units are divisible
const fmt = (x) => stdlib.formatCurrency(x,4);//set the currency to 4 decimal places
//find out balance of the user & send it to the fmt function & wait for the balance of who
const getBalance = async () => fmt(await stdlib.balanceOf(acc));
//to get the acc balance 
const before = await getBalance()
console.log(`Your balance is ${before}`)
//get the random 
const interact = {...stdlib.hasRandom}

//define a timeout handler
interact.informTimeout=()=>{
    console.log(('There was a timeout.'));
    process.exit(1)
}

//request for the wager amount / define the acceptWager method depending on who r the user
if(isAlice){
    const amt = await ask.ask('How much do you want to wager?',stdlib.parseCurrency);
    interact.wager = amt;
    interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];
}else{
    interact.acceptWager = async(amt)=>{
        const accepted = await ask.ask(
            `Do you want to accept the wager of ${fmt(amt)}`,ask.yesno
        );
        if(!accepted){
            process.exit(0);
        }
    }
}

//define the shared getHand method

const HAND = ['Rock', 'Paper', 'Scissors'];
const HANDS = {
  'Rock': 0, 'R': 0, 'r': 0,
  'Paper': 1, 'P': 1, 'p': 1,
  'Scissors': 2, 'S': 2, 's': 2,
};
interact.getHand = async () => {
    const hand = await ask.ask(`What hand will you play?`, (x) => {
      const hand = HANDS[x];
      if ( hand === undefined ) {
        throw Error(`Not a valid hand ${hand}`);
      }
      return hand;
    });
    console.log(`You played ${HAND[hand]}`);
    return hand;
  };
  
//define seeOutcome method
const OUTCOME = ['Bob wins','Draw', 'Alice wins'];
interact.seeOutcome=async (outcome)=>{
    console.log(`The outcome is: ${OUTCOME[outcome]}`)
}

//await its completion
const part = isAlice? ctc.p.Alice : ctc.p.Bob;
await part(interact)

const after = await getBalance();
console.log(`Your balance is now ${after}`)

ask.done();


