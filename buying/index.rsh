'reach 0.1'

const Involver ={
    seePrice: Fun([],UInt),
    getDescription: Fun([],BytesDyn)
}
export const main = Reach.App(() =>{
    const Creator = Participant('Creator',{
        ...Involver
    })
    const Bidder = Participant('Bidder',{
        ...Involver
    })
    const Buyer = Participant('Buyer',{
        ...Involver
    })
    init()
    Bidder.only(()=>{
        const price = declassify(interact.seePrice())
    })
    Bidder.publish(price)
    commit()
    Buyer.only(()=>{
        const description = declassify(interact.getDescription())
    })
    Buyer.publish(description)
    commit()
}
)