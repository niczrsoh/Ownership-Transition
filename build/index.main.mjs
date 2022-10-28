// Automatically generated with Reach 0.1.12 (96568703)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (96568703)';
export const _backendVersion = 25;

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
      2: [ctc0, ctc1, ctc0],
      3: [ctc0, ctc1]
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
export async function manufacturer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for manufacturer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for manufacturer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc5 = stdlib.T_Address;
  
  
  const v114 = stdlib.protect(ctc0, interact.reportID, 'for manufacturer\'s interact field reportID');
  const v115 = stdlib.protect(ctc1, interact.reportName, 'for manufacturer\'s interact field reportName');
  const v116 = stdlib.protect(ctc0, interact.reportPrice, 'for manufacturer\'s interact field reportPrice');
  const v117 = stdlib.protect(ctc1, interact.reportUser, 'for manufacturer\'s interact field reportUser');
  
  const txn1 = await (ctc.sendrecv({
    args: [v117, v115, v116, v114],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:34:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v122, v123, v124, v125], secs: v127, time: v126, didSend: v34, from: v121 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v122, v123, v124, v125], secs: v127, time: v126, didSend: v34, from: v121 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v132, v133], secs: v135, time: v134, didSend: v44, from: v131 } = txn2;
  ;
  if (v133) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v145, time: v144, didSend: v65, from: v143 } = txn3;
    ;
    const v148 = stdlib.addressEq(v131, v143);
    stdlib.assert(v148, {
      at: './index.rsh:49:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'manufacturer'
      });
    const v150 = 'M';
    stdlib.protect(ctc3, await interact.reportPayment(v150, v124), {
      at: './index.rsh:50:38:application',
      fs: ['at ./index.rsh:50:38:application call to [unknown function] (defined at: ./index.rsh:50:38:function exp)', 'at ./index.rsh:50:38:application call to "liftedInteract" (defined at: ./index.rsh:50:38:application)'],
      msg: 'reportPayment',
      who: 'manufacturer'
      });
    
    const v155 = stdlib.protect(ctc4, await interact.reportShipping(v123), {
      at: './index.rsh:54:76:application',
      fs: ['at ./index.rsh:54:20:application call to [unknown function] (defined at: ./index.rsh:54:23:function exp)'],
      msg: 'reportShipping',
      who: 'manufacturer'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v121, v124, v155],
      evt_cnt: 1,
      funcNum: 3,
      lct: v144,
      onlyIf: true,
      out_tys: [ctc4],
      pay: [stdlib.checkedBigNumberify('./index.rsh:55:16:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v157], secs: v159, time: v158, didSend: v85, from: v156 } = txn4;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v121,
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
      tys: [ctc5, ctc0, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [v157], secs: v159, time: v158, didSend: v85, from: v156 } = txn4;
    ;
    const v160 = stdlib.addressEq(v121, v156);
    stdlib.assert(v160, {
      at: './index.rsh:55:16:dot',
      fs: [],
      msg: 'sender correct',
      who: 'manufacturer'
      });
    ;
    stdlib.protect(ctc3, await interact.reportTransfer(v150, v124), {
      at: './index.rsh:59:39:application',
      fs: ['at ./index.rsh:59:39:application call to [unknown function] (defined at: ./index.rsh:59:39:function exp)', 'at ./index.rsh:59:39:application call to "liftedInteract" (defined at: ./index.rsh:59:39:application)'],
      msg: 'reportTransfer',
      who: 'manufacturer'
      });
    
    return;
    
    
    
    
    }
  else {
    const v140 = 'M';
    stdlib.protect(ctc3, await interact.reportReject(v140), {
      at: './index.rsh:44:39:application',
      fs: ['at ./index.rsh:44:39:application call to [unknown function] (defined at: ./index.rsh:44:39:function exp)', 'at ./index.rsh:44:39:application call to "liftedInteract" (defined at: ./index.rsh:44:39:application)'],
      msg: 'reportReject',
      who: 'manufacturer'
      });
    
    return;
    }
  
  
  
  };
export async function retailer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for retailer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for retailer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc5 = stdlib.T_Address;
  
  
  const v118 = stdlib.protect(ctc0, interact.reportUser, 'for retailer\'s interact field reportUser');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v122, v123, v124, v125], secs: v127, time: v126, didSend: v34, from: v121 } = txn1;
  ;
  const v130 = stdlib.protect(ctc2, await interact.confirmPurchase(v123, v124), {
    at: './index.rsh:39:56:application',
    fs: ['at ./index.rsh:37:16:application call to [unknown function] (defined at: ./index.rsh:37:20:function exp)'],
    msg: 'confirmPurchase',
    who: 'retailer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v121, v124, v118, v130],
    evt_cnt: 2,
    funcNum: 1,
    lct: v126,
    onlyIf: true,
    out_tys: [ctc0, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v132, v133], secs: v135, time: v134, didSend: v44, from: v131 } = txn2;
      
      ;
      if (v133) {
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
    tys: [ctc5, ctc1, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v132, v133], secs: v135, time: v134, didSend: v44, from: v131 } = txn2;
  ;
  if (v133) {
    const txn3 = await (ctc.sendrecv({
      args: [v121, v124, v131],
      evt_cnt: 0,
      funcNum: 2,
      lct: v134,
      onlyIf: true,
      out_tys: [],
      pay: [v124, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v145, time: v144, didSend: v65, from: v143 } = txn3;
        
        sim_r.txns.push({
          amt: v124,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc1, ctc5],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v145, time: v144, didSend: v65, from: v143 } = txn3;
    ;
    const v148 = stdlib.addressEq(v131, v143);
    stdlib.assert(v148, {
      at: './index.rsh:49:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'retailer'
      });
    const v152 = 'R';
    stdlib.protect(ctc3, await interact.reportPayment(v152, v124), {
      at: './index.rsh:51:34:application',
      fs: ['at ./index.rsh:51:34:application call to [unknown function] (defined at: ./index.rsh:51:34:function exp)', 'at ./index.rsh:51:34:application call to "liftedInteract" (defined at: ./index.rsh:51:34:application)'],
      msg: 'reportPayment',
      who: 'retailer'
      });
    
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v157], secs: v159, time: v158, didSend: v85, from: v156 } = txn4;
    ;
    const v160 = stdlib.addressEq(v121, v156);
    stdlib.assert(v160, {
      at: './index.rsh:55:16:dot',
      fs: [],
      msg: 'sender correct',
      who: 'retailer'
      });
    ;
    stdlib.protect(ctc3, await interact.reportTransfer(v152, v124), {
      at: './index.rsh:60:35:application',
      fs: ['at ./index.rsh:60:35:application call to [unknown function] (defined at: ./index.rsh:60:35:function exp)', 'at ./index.rsh:60:35:application call to "liftedInteract" (defined at: ./index.rsh:60:35:application)'],
      msg: 'reportTransfer',
      who: 'retailer'
      });
    
    stdlib.protect(ctc3, await interact.reportOwner(v123), {
      at: './index.rsh:61:32:application',
      fs: ['at ./index.rsh:61:32:application call to [unknown function] (defined at: ./index.rsh:61:32:function exp)', 'at ./index.rsh:61:32:application call to "liftedInteract" (defined at: ./index.rsh:61:32:application)'],
      msg: 'reportOwner',
      who: 'retailer'
      });
    
    return;
    
    
    
    
    }
  else {
    const v142 = 'R';
    stdlib.protect(ctc3, await interact.reportReject(v142), {
      at: './index.rsh:45:35:application',
      fs: ['at ./index.rsh:45:35:application call to [unknown function] (defined at: ./index.rsh:45:35:function exp)', 'at ./index.rsh:45:35:application call to "liftedInteract" (defined at: ./index.rsh:45:35:application)'],
      msg: 'reportReject',
      who: 'retailer'
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
  appApproval: `ByAFAAECAyAmAgEAACI1ADEYQQHkKWRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kkDEAAnEklDEAASCUSRCU0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFNf6ABExa3ME0/lCwNP8xABJEsSKyATQDIQRbsggjshA0/7IHs0IBGEgkNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hBFs1/oAEQbFATbA0/ogBWDQDVyggMQASRDT/NP4WUChLAVcAKGdIJTUBMgY1AkIA5kkjDEAAZEgjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hBFs1/kk1BUlXAIA1/VeAARc1/IAEPYExGjT9UDT8FlEHCFCwNPxBABs0/zT+FlAxAFAoSwFXAEhnSCQ1ATIGNQJCAH9CAGBIgaCNBogAxSI0ARJENARJIhJMNAISEURJNQVJSlcAgDX/V4CANf6BgAJbNf2BiAJbNfyABH15Hfo0/1A0/lA0/RZQNPwWULAxADT9FlAoSwFXAChnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
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
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v122",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v123",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v124",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v125",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v122",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v123",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v124",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v125",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v132",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v133",
                "type": "bool"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem5",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem6",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem7",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T9",
                "name": "v157",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v132",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v133",
                "type": "bool"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem5",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem6",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem7",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T9",
                "name": "v157",
                "type": "tuple"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000e4f38038062000e4f83398101604081905262000026916200022e565b60008055436003556040517f6ad9343e64db9c5e842b1392b7a6aa1af1afd1e289032ce7a50662be3247539390620000629033908490620002e2565b60405180910390a16200007834156007620000e0565b6040805180820182526000602080830182815233808552868301518601518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000d792600292909101906200010a565b505050620003ba565b81620001065760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000118906200037d565b90600052602060002090601f0160209004810192826200013c576000855562000187565b82601f106200015757805160ff191683800117855562000187565b8280016001018555821562000187579182015b82811115620001875782518255916020019190600101906200016a565b506200019592915062000199565b5090565b5b808211156200019557600081556001016200019a565b604051608081016001600160401b0381118282101715620001e157634e487b7160e01b600052604160045260246000fd5b60405290565b600060808284031215620001fa57600080fd5b62000204620001b0565b90508151815260208201516020820152604082015160408201526060820151606082015292915050565b60008183036101608112156200024357600080fd5b604080519081016001600160401b03811182821017156200027457634e487b7160e01b600052604160045260246000fd5b60405283518152610140601f1983018113156200029057600080fd5b6200029a620001b0565b9250620002ab8660208701620001e7565b8352620002bc8660a08701620001e7565b602084810191909152610120860151604085015294015160608301529283015250919050565b60006101808201905060018060a01b038416825282516020830152602083015162000332604084018251805182526020810151602083015260408101516040830152606081015160608301525050565b602081810151805160c08601529081015160e0850152604081015161010085015260608101516101208501525060408101516101408401526060810151610160840152509392505050565b600181811c908216806200039257607f821691505b60208210811415620003b457634e487b7160e01b600052602260045260246000fd5b50919050565b610a8580620003ca6000396000f3fe6080604052600436106100565760003560e01c806315cee6c61461005f5780631e93b0f1146100725780637eea518c1461009657806383230757146100a9578063ab53f2c6146100be578063b3a95f4f146100e157005b3661005d57005b005b61005d61006d3660046107c9565b6100f4565b34801561007e57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100a43660046107e2565b6102e8565b3480156100b557600080fd5b50600154610083565b3480156100ca57600080fd5b506100d3610490565b60405161008d9291906107f4565b61005d6100ef366004610851565b61052d565b61010460036000541460116106ce565b61011e8135158061011757506001548235145b60126106ce565b60008080556002805461013090610863565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610863565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c191906108b4565b90507f5a17dba80974b9dfb1f45b2eb70698f0af976398a51a1f51f26c5ba0739b1420338360405161026492919060006101408201905060018060a01b038416825282356020830152602083013560408301526040830135606083015260608301356080830152608083013560a083015260a083013560c083015260c083013560e083015261010060e08401358184015280840135610120840152509392505050565b60405180910390a16102783415600f6106ce565b8051610290906001600160a01b0316331460106106ce565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102cd573d6000803e3d6000fd5b50600080805560018190556102e4906002906106f3565b5050565b6102f8600260005414600d6106ce565b6103128135158061030b57506001548235145b600e6106ce565b60008080556002805461032490610863565b80601f016020809104026020016040519081016040528092919081815260200182805461035090610863565b801561039d5780601f106103725761010080835404028352916020019161039d565b820191906000526020600020905b81548152906001019060200180831161038057829003601f168201915b50505050508060200190518101906103b59190610919565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516103e892919061099c565b60405180910390a161040181602001513414600b6106ce565b604081015161041c906001600160a01b03163314600c6106ce565b6040805180820182526000808252602080830182815285516001600160a01b0316808552868301518252600390935543600155845191820192909252905192810192909252906060015b6040516020818303038152906040526002908051906020019061048a929190610730565b50505050565b6000606060005460028080546104a590610863565b80601f01602080910402602001604051908101604052809291908181526020018280546104d190610863565b801561051e5780601f106104f35761010080835404028352916020019161051e565b820191906000526020600020905b81548152906001019060200180831161050157829003601f168201915b50505050509050915091509091565b61053d60016000541460096106ce565b6105578135158061055057506001548235145b600a6106ce565b60008080556002805461056990610863565b80601f016020809104026020016040519081016040528092919081815260200182805461059590610863565b80156105e25780601f106105b7576101008083540402835291602001916105e2565b820191906000526020600020905b8154815290600101906020018083116105c557829003601f168201915b50505050508060200190518101906105fa91906108b4565b90507fa6c12590ff8fbe309dd54315a963aadd00f86b78b509fdbc8017118f07c8d5d3338360405161062d9291906109d1565b60405180910390a1610641341560086106ce565b61065160c0830160a08401610a2d565b156106b85760408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088528985015184523383526002909555436001558751938401949094529051958201959095529351169083015290608001610466565b600080805560018190556102e4906002906106f3565b816102e45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546106ff90610863565b6000825580601f1061070f575050565b601f01602090049060005260206000209081019061072d91906107b4565b50565b82805461073c90610863565b90600052602060002090601f01602090048101928261075e57600085556107a4565b82601f1061077757805160ff19168380011785556107a4565b828001600101855582156107a4579182015b828111156107a4578251825591602001919060010190610789565b506107b09291506107b4565b5090565b5b808211156107b057600081556001016107b5565b600061012082840312156107dc57600080fd5b50919050565b6000604082840312156107dc57600080fd5b82815260006020604081840152835180604085015260005b818110156108285785810183015185820160600152820161080c565b8181111561083a576000606083870101525b50601f01601f191692909201606001949350505050565b600060c082840312156107dc57600080fd5b600181811c9082168061087757607f821691505b602082108114156107dc57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146108af57600080fd5b919050565b6000604082840312156108c657600080fd5b6040516040810181811067ffffffffffffffff821117156108f757634e487b7160e01b600052604160045260246000fd5b60405261090383610898565b8152602083015160208201528091505092915050565b60006060828403121561092b57600080fd5b6040516060810181811067ffffffffffffffff8211171561095c57634e487b7160e01b600052604160045260246000fd5b60405261096883610898565b81526020830151602082015261098060408401610898565b60408201529392505050565b803580151581146108af57600080fd5b6001600160a01b0383168152813560208083019190915260608201906109c390840161098c565b151560408301529392505050565b600060e08201905060018060a01b038416825282356020830152602083013560408301526040830135606083015260608301356080830152608083013560a0830152610a1f60a0840161098c565b151560c08301529392505050565b600060208284031215610a3f57600080fd5b610a488261098c565b939250505056fea264697066735822122064a1d5e32fa741a4a7558d546b07a9917b1e5e691558afe2503180757f727a6864736f6c634300080c0033`,
  BytecodeLen: 3663,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:35:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:48:11:after expr stmt semicolon',
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
    at: './index.rsh:57:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:43:13:after expr stmt semicolon',
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
  "manufacturer": manufacturer,
  "retailer": retailer
  };
export const _APIs = {
  };
