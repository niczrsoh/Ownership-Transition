'reach 0.1'
//2. declare two methods: "getChallenge" & "seeResult" 
const Player={
    getChallenge: Fun([],UInt),
    seeResult: Fun([UInt],Null)
}
//1. make two participants "Pat" and "Vanna"
export const main = Reach.App(()=>{
    const Pat = Participant('Pat',{
        //pat interact with object
        ...Player,
    })
    const Vanna = Participant('Vanna',{
        //vanna interact with object
        ...Player,
    })
    init()
    
    Pat.only(()=>{
        const challengePat = declassify(interact.getChallenge())
    });
    //publish this to the blockchain
    Pat.publish(challengePat)
    commit()
    Vanna.only(()=>{
        const challengeVanna = declassify(interact.getChallenge())
    });
    Vanna.publish(challengeVanna)
    commit()
    
}
)
