'reach 0.1';
const commonInteract = {
  reportReject: Fun([Bytes(1)], Null),
  reportTransfer: Fun([Bytes(1),UInt,Bytes(128),Bytes(128)], Null),
  reportRole: Bytes(128),
};
const deployerInteract = {
  ...commonInteract,
  reportUser: Bytes(128),//zr
  reportName: Bytes(128),
  reportPrice: UInt,
  reportID: UInt,
};
const attacherInteract = {
  ...commonInteract,
  reportUser: Bytes(128),//zr
  reportPayment: Fun([Bytes(128),UInt], Null),
  confirmPurchase: Fun([Bytes(128),UInt], Bool)
};
export const main = Reach.App(() => {
  const deployer = Participant('deployer', deployerInteract);
  const attacher = Participant('attacher', attacherInteract);
  init();

  deployer.only(()=>{
    const mName  = declassify(interact.reportUser);
    const iname=declassify(interact.reportName);
    const iprice=declassify(interact.reportPrice);
    const id=declassify(interact.reportID);
  })
  deployer.publish(mName,iname,iprice, id);
  commit();
  
  attacher.only(() => { 
    const rName = declassify(interact.reportUser);
    const willBuy = declassify(interact.confirmPurchase(iname,iprice)); });
 
  attacher.publish(rName,willBuy);

  if (!willBuy) {
    commit();
    deployer.interact.reportReject('M');
    attacher.interact.reportReject('R');
    exit();
  } 

  commit();
  attacher.pay(iprice);
  deployer.interact.reportTransfer('M',iprice,rName,iname);
  transfer(iprice).to(deployer);
  attacher.interact.reportTransfer('R',iprice,mName,iname);
  commit();

  exit();
});
