'reach 0.1'
//backend file where we define function signatures & data types
//make a reach app
//player is a object
const Player = {
    //getHand takes no arg and return unsigned integer
    getHand: Fun([],UInt),
    //seeOutcome takes unsigned integer and return null
    seeOutcome: Fun([UInt],Null)
}
export const main = Reach.App(() =>{
    //who are the users?? have two participants playing toegethr
    //inherit the Player object
    const Alice = Participant('Alice',{
        // specify Alice's interact interface here
        ...Player,//can take every function from the Player object 
    })
    const Bob = Participant('Bob', {
        ...Player,
    })
    //run app init to start stepping through the states of the program
    init()
    //write program here
    Alice.only(()=>{
        //using interact bc nid to comm with frt end
        //using declassify bc the frt end gives hash values and it nid to be declassified
        const handAlice = declassify(interact.getHand())
    });
    //publish this info to the blockchain
    Alice.publish(handAlice)
    //commit means done writing
    commit()
    Bob.only(()=>{
        const handBob = declassify(interact.getHand())
    })
    Bob.publish(handBob)
    //make the mathematic outcome before commit
    const outcome = (handAlice + (4 - handBob)) % 3
    commit()

    //to see the result
    each([Alice,Bob], () =>{
        interact.seeOutcome(outcome)
    })
})