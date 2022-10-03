'reach 0.1'
//1. make custom data throughtout this program & the mathematic calculation
const [isOutput, J_WINS, DRAW, M_WINS] =makeEnum(3)
const winner = (fingerMarco,fingerJodie,guessMarco,guessJodie) => {
    return ((fingerMarco+fingerJodie)==guessMarco)? 2:
    ((fingerMarco+fingerJodie)==guessJodie)? 0:
    1
} 

//2. do verification by using assert & forall
assert(winner(2,2,4,0)==M_WINS)
assert(winner(2,1,0,3)==J_WINS)
assert(winner(0,1,3,2)==DRAW)
assert(winner(2,2,3,3)==DRAW)
forall(UInt, guessMarco=>
    forall(UInt, guessJodie=>
        forall(UInt, fingerMarco=>
            forall(UInt, fingerJodie=>
                assert(isOutput(winner(fingerMarco,fingerJodie,guessMarco,guessJodie)))))))

/*forall(UInt, guessMarco=>
    forall(UInt, guessJodie=>
        forall(UInt,(hand)=> 
            assert(isOutput(winner(hand,hand,guessMarco,guessJodie))==DRAW))))*/


//3. define the data to be used in this program
const Player={
    ...hasRandom,
    guessNumber: Fun([],UInt),
    giveNumber: Fun([],UInt),
    seeOutcome: Fun([UInt],Null),
    informTimeOut: Fun([],Null)
}

//4. app initialization & define the users & timeout function who will interact with the objects
export const main = Reach.App(()=>{
    const Marco = Participant('Marco',{
        ...Player,
        wager: UInt,
        deadline: UInt
    })
    const Jodie = Participant('Jodie',{
        ...Player,
        acceptWager: Fun([UInt],Null)
    })
    const informTimeOut = () =>{
        each([Marco,Jodie],()=>{interact.informTimeOut();})
    }
    init()
    //5. Marco interact with the program by sending his wager amount and deadline & pay for the wager amount
    Marco.only(()=>{
        const amount = declassify(interact.wager)
        const deadline = declassify(interact.deadline)
    })
    Marco.publish(amount, deadline)
    .pay(amount)
    commit()

    //6. Jodie just accept wager & pay for the wager amount & declare timeout handler here to avoid non-participation from Jodie
    Jodie.only(()=>{
        interact.acceptWager(amount)
    })
    Jodie.pay(amount).timeout(relativeTime(deadline),()=>closeTo(Marco, informTimeOut))
    
    //7. add prerequisite loop structure here with the variable outcome and invariant handler
    var outcome = DRAW
    invariant(balance()==2*amount&&isOutput(outcome))
    //8. making while loop where Marco will commit and reveal his guess and fingers & Jodie will display her hand and fingers
    //8. Here, the outcome will be determined and terminate the loop if the outcome is not a draw
    while(outcome==DRAW){
        commit()
        Marco.only(()=>{
            const guessMarco = declassify(interact.guessNumber())
            const _fingerMarco = interact.giveNumber()
            const [_commitMarco, _saltMarco] = makeCommitment(interact, _fingerMarco)
            const commitMarco = declassify(_commitMarco)
        })
        Marco.publish(guessMarco,commitMarco)
        commit()
        unknowable(Jodie, Marco(_fingerMarco,_saltMarco))

        Jodie.only(()=>{
            const guessJodie = declassify(interact.guessNumber())
            const fingerJodie = declassify(interact.giveNumber())
        })
        Jodie.publish(guessJodie,fingerJodie)
        .timeout(relativeTime(deadline),()=>closeTo(Marco, informTimeOut))
        commit()

    Marco.only(()=>{
        const saltMarco = declassify(_saltMarco)
        const fingerMarco = declassify(_fingerMarco) 
    })
    Marco.publish(saltMarco,fingerMarco)
    .timeout(relativeTime(deadline),()=>closeTo(Jodie, informTimeOut))
    checkCommitment(commitMarco,saltMarco,fingerMarco)
    outcome = winner(fingerMarco,fingerJodie,guessMarco,guessJodie); 
        continue;
    }
    //9. assert that the outcome after the loop should not have Draw
    assert(outcome==M_WINS||outcome==J_WINS)

    //10. make transaction for the participant who win before commit
    transfer(2 * amount).to((outcome==M_WINS)?Marco:Jodie)

    commit()
    
    //11. let Marco and Jodie to see the final outcome
    each([Marco,Jodie],()=>{
        interact.seeOutcome(outcome)
    })

})


