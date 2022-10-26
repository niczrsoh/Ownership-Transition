'reach 0.1';
const commonInteract = {
 
  reportReject: Fun([Bytes(1)], Null),
  reportPayment: Fun([Bytes(1),UInt], Null),
  reportTransfer: Fun([Bytes(1),UInt], Null)
};
const manufacturerInteract = {
  ...commonInteract,
  reportUser: Bytes(128),//zr
  reportName: Bytes(128),
  reportPrice: UInt,
  reportItemContract: Fun([Bytes(128),Bytes(128),UInt],Null),
  reportShipping: Fun([Bytes(128)],Bytes(256))
};
const retailerInteract = {
  ...commonInteract,
 // reportUser: Bytes(128),//zr
  reportOwner: Fun([Bytes(128)], Null),
  confirmPurchase: Fun([Bytes(128),UInt], Bool)
};
export const main = Reach.App(() => {
  const manufacturer = Participant('manufacturer', manufacturerInteract);
  const retailer = Participant('retailer', retailerInteract);
  init();
  
 
  manufacturer.only(()=>{
    const mName  = declassify(interact.reportUser);
    const iname=declassify(interact.reportName);
    const iprice=declassify(interact.reportPrice);
     //interact.reportItemContract(mName,iname,iprice);
  })
  manufacturer.publish(mName,iname,iprice);
  commit();
  
  retailer.only(() => { 
    //const rName = declassify(interact.reportUser);
    const willBuy = declassify(interact.confirmPurchase(iname,iprice)); });
  retailer.publish(willBuy);

  if (!willBuy) {
    commit();
    manufacturer.interact.reportReject('M');
    retailer.interact.reportReject('R');
    exit();
  } 
  commit();
  retailer.pay(iprice);
  manufacturer.interact.reportPayment('M',iprice);
  retailer.interact.reportPayment('R',iprice);
  commit();

  manufacturer.only(()=>{const message = declassify(interact.reportShipping(iname));})
  manufacturer.publish(message)
  transfer(iprice).to(manufacturer);
  commit();
 
  manufacturer.interact.reportTransfer('M',iprice);
  retailer.interact.reportTransfer('R',iprice);
  retailer.interact.reportOwner(iname);
  exit();
});