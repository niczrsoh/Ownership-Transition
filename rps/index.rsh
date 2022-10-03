'reach 0.1'
//backend file where we define function signatures & data types
//make a reach app
//player is a object

//making custom data around our game: enumeration
const [isHand, ROCK, PAPER, SCISSORS ]= makeEnum(3);
const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3);

const winner = (handAlice,handBob) =>
    ((handAlice + (4-handBob))%3);


//using verification engine: assert
//asert is used for the correct assumption
assert(winner(ROCK,PAPER)==B_WINS);//if alice hand is rock & bob is paper then bob wins
assert(winner(PAPER, ROCK)==A_WINS);
assert(winner(ROCK,ROCK)==DRAW);

//for all UInt made up of handAlice & for all UInt made up of handBob
//assert handAlice & handBob has sometype of outcome from the winner
forall(UInt, handAlice => 
    forall(UInt, handBob =>
    assert(isOutcome(winner(handAlice,handBob)))));
    
    forall(UInt, (hand) => assert(winner(hand, hand)==DRAW));

//define a participant interact interface that will be shared between the two players
const Player = {
    ...hasRandom,
    //getHand takes no arg and return unsigned integer
    getHand: Fun([],UInt),
    //seeOutcome takes unsigned integer and return null
    seeOutcome: Fun([UInt],Null),
    //this func will be called when a timeout occur
    informTimeout: Fun([],Null)
}
export const main = Reach.App(() =>{
//two participants which have player object and their own data/function
    const Alice = Participant('Alice',{
        // specify Alice's interact interface here
        ...Player,//can take every function from the Player object 
        //add wager which is a UInt *[only Alice can get this function]
        //thus, only Alice can provide the wager data
        wager: UInt, 
        //similar to how she provide the wager, she will also provide deadline
        deadline: UInt, //time delta(blocks/rounds)
    })
    const Bob = Participant('Bob', {
        ...Player,
        //only Bob accept wager
        acceptWager: Fun([UInt],Null),
    })
    //run app init to start stepping through the states of the program
    init()
    //write program here
    //inform each of the participants of the timeout by calling this method
    const informTimeout = ()=>{
        each([Alice, Bob],()=>{
            interact.informTimeout();
        })
    };
    Alice.only(()=>{
        //get the wager amount from frontend & declassify it
        const amount = declassify(interact.wager);
        const deadline = declassify(interact.deadline)
    });
    //publish commitAlice and Alice's amount to the blockchain
    //no consequence to her non-participation, so no timeout clause here
    //if she does not start the game, then no one is any worse off
    Alice.publish( amount, deadline)
    //include pay function: to specify some amounts into the contract
        .pay(amount)
    //commit means done writing
    commit()
    //to make Bob does not know Alice hand & salt Alice, use unknowable after commit!
    //unknowable(Bob, Alice(_handAlice, _saltAlice))

    Bob.only(()=>{
        //is just invoking the console.log
        interact.acceptWager(amount);//no return value here
    })
    //Here timeout handler is used.So if Bob failed to participate in the deadline
    //then closeTo is invoked which will send a message and transfer all the funds in the contract to Alice
    Bob.pay(amount)
        .timeout(relativeTime(deadline),()=>closeTo(Alice, informTimeout));
    //must be in consensus
    var outcome = DRAW;//define the loop variable
    invariant(balance()==2*amount && isOutcome(outcome)) //body of loop does not chnage the balance in contract account and the outcome is a valid outcome
    //begins the loop with the condition that it continues ala the outcome is a draw
    while(outcome==DRAW){
        //body if the loop
        //commit the last transaction where Bob accepts the wager
        commit();
        //Alice commit her hand & set unknownable for Bob
        Alice.only(()=>{
            const _handAlice = interact.getHand();
            const [_commitAlice, _saltAlice] = makeCommitment(interact, _handAlice);
            const commitAlice = declassify(_commitAlice);
        })
        Alice.publish(commitAlice).timeout(relativeTime(deadline),()=> closeTo(Bob, informTimeout))
        commit();
        unknowable(Bob, Alice(_handAlice, _saltAlice));
        //Bob sends his hand
        Bob.only(()=>{
            const handBob = declassify(interact.getHand());
        })
        Bob.publish(handBob).timeout(relativeTime(deadline), ()=>closeTo(Alice, informTimeout));
        commit();
        //Alice reveals her hand
           //to declassify the private salt and hand, then check with the commit
    Alice.only(()=>{
        const saltAlice = declassify(_saltAlice);
        const handAlice = declassify(_handAlice);
    })
    Alice.publish(saltAlice, handAlice)
    //adding the same timeout handler to Alice
    //here if Alice does not participate, Bob can claim all the funds
    .timeout(relativeTime(deadline), ()=> closeTo(Bob, informTimeout))
    //to check Alice has these 3 values passed into 
    checkCommitment(commitAlice, saltAlice, handAlice);

    //checking the outcome
    outcome = winner(handAlice, handBob);
    continue;//must use continue in while loop in Reach
    }
//assert that the outcome is never draw 
 assert(outcome==A_WINS || outcome == B_WINS);
 //trnasfer the funds to the winner
 transfer(2*amount).to(outcome == A_WINS?Alice:Bob)
    //make the mathematic outcome before commit
   // const outcome = winner(handAlice, handBob);
    /*Ex:
    Alice = paper which is 1
    Bob = rock which is 0
    (1+(4-0))%3 = 2 so alice win 
    */
   //to allow reach to gurenttee that Bob is win every time
   /*require(handBob == (handAlice + 1)%3);
   assert(outcome == 0);*/
    //if Alice win then outcome will be 2 
    //if Bob win then outcome will be 0
    //else the other number will give a tie
    /*const [forAlice, forBob]=
        outcome == A_WINS ? [2,0]: 
        //if change 2 to 1 then compile error beacuse reach found out that there is token left over in the contract
        outcome == B_WINS ? [0,2]:
                    [1,1];
    //to transfer the total amount to Alice and Bob
    transfer(forAlice * amount).to(Alice);
    transfer(forBob * amount).to(Bob);*/
    commit()

    //to see the result
    each([Alice,Bob], () =>{
        interact.seeOutcome(outcome)
    })
})