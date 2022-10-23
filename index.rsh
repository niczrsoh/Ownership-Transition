'reach 0.1';
const commonInteract = {
  reportUser: Fun([Bytes(3)],Bytes(128)),
  reportReject: Fun([], Null),
  reportPayment: Fun([UInt], Null),
  reportTransfer: Fun([UInt], Null)
};
const manufacturerInteract = {
  ...commonInteract,
  reportName: Fun([],Bytes(128)),
  reportPrice: Fun([],UInt),
  reportItemContract: Fun([Bytes(128),Bytes(128),UInt],Null),
  reportShipping: Fun([Bytes(128)],Bytes(256))
};
const retailerInteract = {
  ...commonInteract,
  reportOwner: Fun([Bytes(128),Bytes(128)], Null),
  confirmPurchase: Fun([Bytes(128),UInt], Bool)
};
export const main = Reach.App(() => {
  const manufacturer = Participant('manufacturer', manufacturerInteract);
  const retailer = Participant('retailer', retailerInteract);
  init();
  
  manufacturer.only(()=>{
    const mName=declassify(interact.reportUser('man'));
    const iname=declassify(interact.reportName());
    const iprice=declassify(interact.reportPrice());
    //interact.reportItemContract(mName,iname,iprice);
  })
  manufacturer.publish(mName, iname,iprice);
  commit();
  retailer.only(() => { 
    const rName = declassify(interact.reportUser('ret'));
    const willBuy = declassify(interact.confirmPurchase(iname,iprice)); });
  retailer.publish(rName, willBuy);
  if (!willBuy) {
    commit();
    each([manufacturer, retailer], () => interact.reportReject());
    exit();
  } 
  commit();
  retailer.pay(iprice);
  each([manufacturer, retailer], () => interact.reportPayment(iprice));
  commit();

  manufacturer.only(()=>{const message = declassify(interact.reportShipping(iname));})
  manufacturer.publish(message)
  transfer(iprice).to(manufacturer);
  commit();
 
  each([manufacturer, retailer], () => interact.reportTransfer(iprice));
  retailer.interact.reportOwner(rName,iname);
  exit();
});