// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function attacher(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for attacher expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for attacher expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v98 = stdlib.protect(ctc0, interact.reportUser, 'for attacher\'s interact field reportUser');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v102, v103, v104, v105], secs: v107, time: v106, didSend: v36, from: v101 } = txn1;
  ;
  const v110 = stdlib.protect(ctc2, await interact.confirmPurchase(v103, v104), {
    at: './index.rsh:36:56:application',
    fs: ['at ./index.rsh:34:16:application call to [unknown function] (defined at: ./index.rsh:34:20:function exp)'],
    msg: 'confirmPurchase',
    who: 'attacher'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v101, v104, v98, v110],
    evt_cnt: 2,
    funcNum: 1,
    lct: v106,
    onlyIf: true,
    out_tys: [ctc0, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v112, v113], secs: v115, time: v114, didSend: v46, from: v111 } = txn2;
      
      ;
      if (v113) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v112, v113], secs: v115, time: v114, didSend: v46, from: v111 } = txn2;
  ;
  if (v113) {
    const txn3 = await (ctc.sendrecv({
      args: [v101, v104, v111],
      evt_cnt: 0,
      funcNum: 2,
      lct: v114,
      onlyIf: true,
      out_tys: [],
      pay: [v104, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v125, time: v124, didSend: v67, from: v123 } = txn3;
        
        sim_r.txns.push({
          amt: v104,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v101,
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc1, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v125, time: v124, didSend: v67, from: v123 } = txn3;
    ;
    const v128 = stdlib.addressEq(v111, v123);
    stdlib.assert(v128, {
      at: './index.rsh:48:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'attacher'
      });
    ;
    const v136 = 'R';
    stdlib.protect(ctc3, await interact.reportTransfer(v136, v104, v102, v103), {
      at: './index.rsh:51:35:application',
      fs: ['at ./index.rsh:51:35:application call to [unknown function] (defined at: ./index.rsh:51:35:function exp)', 'at ./index.rsh:51:35:application call to "liftedInteract" (defined at: ./index.rsh:51:35:application)'],
      msg: 'reportTransfer',
      who: 'attacher'
      });
    
    return;
    
    
    }
  else {
    const v122 = 'R';
    stdlib.protect(ctc3, await interact.reportReject(v122), {
      at: './index.rsh:43:35:application',
      fs: ['at ./index.rsh:43:35:application call to [unknown function] (defined at: ./index.rsh:43:35:function exp)', 'at ./index.rsh:43:35:application call to "liftedInteract" (defined at: ./index.rsh:43:35:application)'],
      msg: 'reportReject',
      who: 'attacher'
      });
    
    return;
    }
  
  
  
  };
export async function deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  
  
  const v92 = stdlib.protect(ctc0, interact.reportID, 'for deployer\'s interact field reportID');
  const v93 = stdlib.protect(ctc1, interact.reportName, 'for deployer\'s interact field reportName');
  const v94 = stdlib.protect(ctc0, interact.reportPrice, 'for deployer\'s interact field reportPrice');
  const v96 = stdlib.protect(ctc1, interact.reportUser, 'for deployer\'s interact field reportUser');
  
  const txn1 = await (ctc.sendrecv({
    args: [v96, v93, v94, v92],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:31:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:31:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v102, v103, v104, v105], secs: v107, time: v106, didSend: v36, from: v101 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v102, v103, v104, v105], secs: v107, time: v106, didSend: v36, from: v101 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v112, v113], secs: v115, time: v114, didSend: v46, from: v111 } = txn2;
  ;
  if (v113) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v125, time: v124, didSend: v67, from: v123 } = txn3;
    ;
    const v128 = stdlib.addressEq(v111, v123);
    stdlib.assert(v128, {
      at: './index.rsh:48:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'deployer'
      });
    const v130 = 'M';
    stdlib.protect(ctc3, await interact.reportTransfer(v130, v104, v112, v103), {
      at: './index.rsh:49:35:application',
      fs: ['at ./index.rsh:49:35:application call to [unknown function] (defined at: ./index.rsh:49:35:function exp)', 'at ./index.rsh:49:35:application call to "liftedInteract" (defined at: ./index.rsh:49:35:application)'],
      msg: 'reportTransfer',
      who: 'deployer'
      });
    
    ;
    return;
    
    
    }
  else {
    const v120 = 'M';
    stdlib.protect(ctc3, await interact.reportReject(v120), {
      at: './index.rsh:42:35:application',
      fs: ['at ./index.rsh:42:35:application call to [unknown function] (defined at: ./index.rsh:42:35:function exp)', 'at ./index.rsh:42:35:application call to "liftedInteract" (defined at: ./index.rsh:42:35:application)'],
      msg: 'reportReject',
      who: 'deployer'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAEAAECICYCAQAAIjUAMRhBAY4pZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQACwSSQMQABHJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDJVs1/4AEQbFATbA0/4gBTzQDVyggMQASRLEisgE0/7III7IQNANXACCyB7NCAMNIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/kk1BUlXAIA1/VeAARc1/IAEPYExGjT9UDT8FlEHCFCwNPxBABs0/zT+FlAxAFAoSwFXAEhnSCQ1ATIGNQJCAH9CAGBIgaCNBogAxSI0ARJENARJIhJMNAISEURJNQVJSlcAgDX/V4CANf6BgAJbNf2BiAJbNfyABH15Hfo0/1A0/lA0/RZQNPwWULAxADT9FlAoSwFXAChnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"}],"internalType":"struct T0","name":"elem2","type":"tuple"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"internalType":"struct T1","name":"v174","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"}],"internalType":"struct T0","name":"elem2","type":"tuple"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"internalType":"bool","name":"elem2","type":"bool"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"}],"internalType":"struct T0","name":"elem1","type":"tuple"},{"internalType":"bool","name":"elem2","type":"bool"}],"internalType":"struct T3","name":"v176","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v178","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062000c5d9081380391601f1980601f85011683019360018060401b0392848610848711176200036e578190604096875285398301926101609081818603126200038457855160a08101818110868211176200036e5787528151815260209062000082620000718884860162000389565b9783830198895260a0850162000389565b9688820197885261012084015194606083019586526101408095015160808401908152436003558a51958587018781108b8211176200036e578c52600080975260049a60ff8c54166200035757916101809391620001257fd44ab96476256c597ac1663c7d5ae5d86cd9449ca211edc85db4a52921c779b696948f80620001199151973389528b518d8a01525190880190620003d7565b5160c0860190620003d7565b8951908401525190820152a15180159081156200034a575b50156200033357346200031c57865192878401848110878211176200030957885281840193838552339052518352600195868355438755875193338386015251888501528784526060840184811087821117620002f65788528351958611620002e357600254908782811c92168015620002d8575b83831014620002c55750601f811162000279575b508093601f8611600114620002115750509183949184939462000205575b50501b916000199060031b1c1916176002555b516108629081620003fb8239f35b015192503880620001e4565b600283528183209493928692918316915b888383106200025e575050501062000244575b505050811b01600255620001f7565b015160001960f88460031b161c1916905538808062000235565b85870151885590960195948501948793509081019062000222565b60028352818320601f870160051c810191838810620002ba575b601f0160051c019087905b828110620002ae575050620001c6565b8481550187906200029e565b909150819062000293565b634e487b7160e01b845260229052602483fd5b91607f1691620001b2565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b634e487b7160e01b845260418852602484fd5b865163100960cb60e01b8152600981880152602490fd5b865163100960cb60e01b8152600881880152602490fd5b905060015414386200013d565b8c5163100960cb60e01b81526007818e0152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b91908260809103126200038457604051608081016001600160401b038111828210176200036e5760405260608082948051845260208101516020850152604081015160408501520151910152565b60608091805184526020810151602085015260408101516040850152015191015256fe6080604081815260048036101561001e575b505050361561001c57005b005b600092833560e01c9081631e93b0f11461063657508063534dc109146102c257806383230757146102a3578063ab53f2c6146102335763f5a239bc0361001157602036600319011261022f578282516100768161068c565b5281516100828161068c565b8135815260ff825416610218577f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a83805133815283516020820152a16002845403610201576100cf6106d8565b916060838051810103126101fd57835190606082016001600160401b038111838210176101ea5785526101046020850161078d565b825261011d60608686015195602085019687520161078d565b928583019384525180159081156101de575b50156101c757835134036101b05791516001600160a01b03929033908416036101995750848093819382935116905190828215610190575bf1156101865790602091818055816001556101806107bd565b51908152f35b51903d90823e3d90fd5b506108fc610167565b602490601286519163100960cb60e01b8352820152fd5b602490601186519163100960cb60e01b8352820152fd5b602490601086519163100960cb60e01b8352820152fd5b9050600154143861012f565b634e487b7160e01b875260418252602487fd5b8480fd5b50600f602492519163100960cb60e01b8352820152fd5b50600e602492519163100960cb60e01b8352820152fd5b8280fd5b50503461029f578160031936011261029f57815461024f6106d8565b91805193849283526020828185015284518093850152815b83811061028857505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610267565b5080fd5b50503461029f578160031936011261029f576020906001549051908152f35b50919060c036600319011261029f578181516102dd8161068c565b5280516102e9816106bd565b83358152608036602319011261022f578151936001600160401b036080860181811187821017610623578452602495863581526020966044358883015260643586830152608435606083015287850191825260a43591821515830361061f5786860192835260ff85541661060a5760e07f259923c9706ca01af004fdcca16578d9ec1a7d8c9ae4e4e22b77b5b1edf9016b91606089519133835289518d8401525180518b8401528c810151828401528a8101516080840152015160a08201528451151560c0820152a1600193848854036105f6576103c56106d8565b9287848051810103126105f257875193888501858110878211176105e057895288906103f28c820161078d565b86520151968a85019788525180159081156105d5575b50156105c057346105ab57518890156105945750865192610428846106bd565b88845289840196898852888501908a825260018060a01b0380935116809652518852338152600297888b554388558951958c87015251898601525116606084015260608352608083018381108582111761058257875282519384116105715750506104938454610652565b601f8111610538575b508690601f83116001146104d95792829391839288946104ce575b50501b916000199060031b1c191617905551908152f35b0151925038806104b7565b848752878720919083601f198116895b8b888383106105215750505010610508575b505050811b019055610180565b015160001960f88460031b161c191690553880806104fb565b8686015188559096019594850194879350016104e9565b61056190858852888820601f850160051c8101918a8610610567575b601f0160051c01906107a6565b3861049c565b9091508190610554565b634e487b7160e01b88526041905286fd5b50634e487b7160e01b88526041905286fd5b955050505050818055556105a66107bd565b610180565b50600d87519163100960cb60e01b8352820152fd5b50600c87519163100960cb60e01b8352820152fd5b905086541438610408565b634e487b7160e01b8b5260418452848bfd5b8880fd5b600b87519163100960cb60e01b8352820152fd5b50855163100960cb60e01b8152600a81860152fd5b8780fd5b634e487b7160e01b865260418352602486fd5b84903461029f578160031936011261029f576020906003548152f35b90600182811c92168015610682575b602083101461066c57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610661565b602081019081106001600160401b038211176106a757604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b038211176106a757604052565b6040519060006002546106ea81610652565b80855260019180831690811561076e5750600114610728575b5050829003601f01601f191682016001600160401b038111838210176106a757604052565b600260009081526020935091836000805160206108368339815191525b83851061075a57505050508301013880610703565b805488860183015293019284908201610745565b919250506020925060ff191682850152151560051b8301013880610703565b51906001600160a01b03821682036107a157565b600080fd5b8181106107b1575050565b600081556001016107a6565b6107c8600254610652565b806107d05750565b601f81116001146107e357506000600255565b600260005261082890601f0160051c600080516020610836833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6107a6565b600060208120816002555556fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 3165,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:32:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:47:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:52:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:41:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "attacher": attacher,
  "deployer": deployer
  };
export const _APIs = {
  };
