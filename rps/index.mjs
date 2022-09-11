//Front end where we give them functionality by sending data to backend
//import the reach standard library
import { loadStdlib} from "@reach-sh/stdlib";
//import the backend from build folder due to rsh file break down into build folder.
import * as backend from './build/index.main.mjs'
//set a constant for stdlib for easy reference
const stdlib = loadStdlib()
//create those two test users
//to test it in this ide
//create test account & nid to put how many test tokens
//network speak micro algo so need to change it to algo
const startingBalance = stdlib.parseCurrency(100);//parseCurrency starting speak in micro algo
//store the new acc to alice acc & bob acc
//why await -> need to create the account and wait the returned actual value
const  accAlice = await stdlib.newTestAccount(startingBalance)
const accBob = await stdlib.newTestAccount(startingBalance)

//tie the user to the contract, set the contract to backend
const ctcAlice = accAlice.contract(backend)
//attach bob ctc to alice contract
//Bob want to join Alice contract
const ctcBob = accBob.contract(backend, ctcAlice.getInfo())

const HAND = ['Rock','Paper','Scissors'];
const OUTCOME= ['Bob wins','Draw','Alice wins'];
const Player = (Who) => ({
    //() means no argument , {return ?}
    getHand: () => {
        //get a random number// using Math.floor so that the returned value is a whole number
        const hand = Math.floor(Math.random() * 3);
        console.log(`${Who} played ${HAND[hand]}`)
        return hand; 
    },
    seeOutcome: (outcome) =>{
        console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },
})

await Promise.all([
    ctcAlice.p.Alice({
        //Alice interact object
        ...Player('Alice'),
    }),
    ctcBob.p.Bob({
        //Bob interact object
        ...Player('Bob'),
    })
]);