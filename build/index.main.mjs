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
  
  
  const v101 = stdlib.protect(ctc0, interact.reportUser, 'for attacher\'s interact field reportUser');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 5,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1, ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v105, v106, v107, v108, v109], secs: v111, time: v110, didSend: v38, from: v104 } = txn1;
  ;
  const v114 = stdlib.protect(ctc2, await interact.confirmPurchase(v106, v107, v108, v109), {
    at: './index.rsh:38:56:application',
    fs: ['at ./index.rsh:36:16:application call to [unknown function] (defined at: ./index.rsh:36:20:function exp)'],
    msg: 'confirmPurchase',
    who: 'attacher'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v104, v107, v101, v114],
    evt_cnt: 2,
    funcNum: 1,
    lct: v110,
    onlyIf: true,
    out_tys: [ctc0, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v116, v117], secs: v119, time: v118, didSend: v48, from: v115 } = txn2;
      
      ;
      if (v117) {
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
  const {data: [v116, v117], secs: v119, time: v118, didSend: v48, from: v115 } = txn2;
  ;
  if (v117) {
    const txn3 = await (ctc.sendrecv({
      args: [v104, v107, v115],
      evt_cnt: 0,
      funcNum: 2,
      lct: v118,
      onlyIf: true,
      out_tys: [],
      pay: [v107, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v129, time: v128, didSend: v69, from: v127 } = txn3;
        
        sim_r.txns.push({
          amt: v107,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v104,
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
    const {data: [], secs: v129, time: v128, didSend: v69, from: v127 } = txn3;
    ;
    const v132 = stdlib.addressEq(v115, v127);
    stdlib.assert(v132, {
      at: './index.rsh:51:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'attacher'
      });
    ;
    const v140 = 'R';
    stdlib.protect(ctc3, await interact.reportTransfer(v140, v107, v105, v106), {
      at: './index.rsh:54:35:application',
      fs: ['at ./index.rsh:54:35:application call to [unknown function] (defined at: ./index.rsh:54:35:function exp)', 'at ./index.rsh:54:35:application call to "liftedInteract" (defined at: ./index.rsh:54:35:application)'],
      msg: 'reportTransfer',
      who: 'attacher'
      });
    
    return;
    
    
    }
  else {
    const v126 = 'R';
    stdlib.protect(ctc3, await interact.reportReject(v126), {
      at: './index.rsh:46:35:application',
      fs: ['at ./index.rsh:46:35:application call to [unknown function] (defined at: ./index.rsh:46:35:function exp)', 'at ./index.rsh:46:35:application call to "liftedInteract" (defined at: ./index.rsh:46:35:application)'],
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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  
  
  const v94 = stdlib.protect(ctc0, interact.reportDetails, 'for deployer\'s interact field reportDetails');
  const v95 = stdlib.protect(ctc1, interact.reportID, 'for deployer\'s interact field reportID');
  const v96 = stdlib.protect(ctc0, interact.reportName, 'for deployer\'s interact field reportName');
  const v97 = stdlib.protect(ctc1, interact.reportPrice, 'for deployer\'s interact field reportPrice');
  const v99 = stdlib.protect(ctc0, interact.reportUser, 'for deployer\'s interact field reportUser');
  
  const txn1 = await (ctc.sendrecv({
    args: [v99, v96, v97, v94, v95],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:33:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc1, ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v105, v106, v107, v108, v109], secs: v111, time: v110, didSend: v38, from: v104 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v105, v106, v107, v108, v109], secs: v111, time: v110, didSend: v38, from: v104 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v116, v117], secs: v119, time: v118, didSend: v48, from: v115 } = txn2;
  ;
  if (v117) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v129, time: v128, didSend: v69, from: v127 } = txn3;
    ;
    const v132 = stdlib.addressEq(v115, v127);
    stdlib.assert(v132, {
      at: './index.rsh:51:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'deployer'
      });
    const v134 = 'M';
    stdlib.protect(ctc3, await interact.reportTransfer(v134, v107, v116, v106), {
      at: './index.rsh:52:35:application',
      fs: ['at ./index.rsh:52:35:application call to [unknown function] (defined at: ./index.rsh:52:35:function exp)', 'at ./index.rsh:52:35:application call to "liftedInteract" (defined at: ./index.rsh:52:35:application)'],
      msg: 'reportTransfer',
      who: 'deployer'
      });
    
    ;
    return;
    
    
    }
  else {
    const v124 = 'M';
    stdlib.protect(ctc3, await interact.reportReject(v124), {
      at: './index.rsh:45:35:application',
      fs: ['at ./index.rsh:45:35:application call to [unknown function] (defined at: ./index.rsh:45:35:function exp)', 'at ./index.rsh:45:35:application call to "liftedInteract" (defined at: ./index.rsh:45:35:application)'],
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
  appApproval: `ByAEAAECICYCAQAAIjUAMRhBAZspZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQACwSSQMQABHJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDJVs1/4AEQbFATbA0/4gBXDQDVyggMQASRLEisgE0/7III7IQNANXACCyB7NCANBIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/kk1BUlXAIA1/VeAARc1/IAEPYExGjT9UDT8FlEHCFCwNPxBABs0/zT+FlAxAFAoSwFXAEhnSCQ1ATIGNQJCAIxCAG1IgaCNBogA0iI0ARJENARJIhJMNAISEURJNQVJSklXAIA1/1eAgDX+gYACWzX9gYgCgYABWDX8gYgDWzX7gART2v95NP9QNP5QNP0WUDT8UDT7FlCwMQA0/RZQKEsBVwAoZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
                "name": "v105",
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
                "name": "v106",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v107",
                "type": "uint256"
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
                "name": "v108",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v109",
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
                "name": "v105",
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
                "name": "v106",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v107",
                "type": "uint256"
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
                "name": "v108",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v109",
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
                "name": "v116",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v117",
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
                "name": "v116",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v117",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000c9438038062000c9483398101604081905262000026916200025c565b60008055436003556040517fab46c1e568ea04aeed3b799a6537d8fc7a3959bd0b6fe82c95233d98618e92179062000062903390849062000324565b60405180910390a16200007834156007620000e0565b6040805180820182526000602080830182815233808552868301518601518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000d792600292909101906200010a565b50505062000424565b81620001065760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200011890620003e7565b90600052602060002090601f0160209004810192826200013c576000855562000187565b82601f106200015757805160ff191683800117855562000187565b8280016001018555821562000187579182015b82811115620001875782518255916020019190600101906200016a565b506200019592915062000199565b5090565b5b808211156200019557600081556001016200019a565b60405160a081016001600160401b0381118282101715620001e157634e487b7160e01b600052604160045260246000fd5b60405290565b600060808284031215620001fa57600080fd5b604051608081016001600160401b03811182821017156200022b57634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60008183036101e08112156200027157600080fd5b604080519081016001600160401b0381118282101715620002a257634e487b7160e01b600052604160045260246000fd5b604052835181526101c0601f198301811315620002be57600080fd5b620002c8620001b0565b9250620002d98660208701620001e7565b8352620002ea8660a08701620001e7565b602084015261012085015160408401526200030a866101408701620001e7565b606084015293909301516080820152602083015250919050565b60006102008201905060018060a01b038416825282516020830152602083015162000374604084018251805182526020810151602083015260408101516040830152606081015160608301525050565b602081810151805160c08601528082015160e086015260408082015161010087015260609182015161012087015280840151610140870152818401518051610160880152928301516101808701528201516101a086015201516101c0840152608001516101e09092019190915292915050565b600181811c90821680620003fc57607f821691505b602082108114156200041e57634e487b7160e01b600052602260045260246000fd5b50919050565b61086080620004346000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780637eea518c14610078578063832307571461008b578063ab53f2c6146100a0578063b3a95f4f146100c357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100863660046105b7565b6100d6565b34801561009757600080fd5b50600154610065565b3480156100ac57600080fd5b506100b5610262565b60405161006f9291906105cf565b6100526100d136600461062c565b6102ff565b6100e6600260005414600d6104bc565b610100813515806100f957506001548235145b600e6104bc565b6000808055600280546101129061063e565b80601f016020809104026020016040519081016040528092919081815260200182805461013e9061063e565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a3919061068f565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516101d6929190610712565b60405180910390a16101ef81602001513414600b6104bc565b604081015161020a906001600160a01b03163314600c6104bc565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610247573d6000803e3d6000fd5b506000808055600181905561025e906002906104e1565b5050565b6000606060005460028080546102779061063e565b80601f01602080910402602001604051908101604052809291908181526020018280546102a39061063e565b80156102f05780601f106102c5576101008083540402835291602001916102f0565b820191906000526020600020905b8154815290600101906020018083116102d357829003601f168201915b50505050509050915091509091565b61030f60016000541460096104bc565b6103298135158061032257506001548235145b600a6104bc565b60008080556002805461033b9061063e565b80601f01602080910402602001604051908101604052809291908181526020018280546103679061063e565b80156103b45780601f10610389576101008083540402835291602001916103b4565b820191906000526020600020905b81548152906001019060200180831161039757829003601f168201915b50505050508060200190518101906103cc9190610747565b90507fa6c12590ff8fbe309dd54315a963aadd00f86b78b509fdbc8017118f07c8d5d333836040516103ff9291906107ac565b60405180910390a1610413341560086104bc565b61042360c0830160a08401610808565b156104a65760408051606080820183526000808352602080840182815284860183815287516001600160a01b03908116808852898501518452338352600295869055436001558851808601919091529251838901529051168185015285518082039094018452608001909452815192936104a0939192019061051e565b50505050565b6000808055600181905561025e906002906104e1565b8161025e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546104ed9061063e565b6000825580601f106104fd575050565b601f01602090049060005260206000209081019061051b91906105a2565b50565b82805461052a9061063e565b90600052602060002090601f01602090048101928261054c5760008555610592565b82601f1061056557805160ff1916838001178555610592565b82800160010185558215610592579182015b82811115610592578251825591602001919060010190610577565b5061059e9291506105a2565b5090565b5b8082111561059e57600081556001016105a3565b6000604082840312156105c957600080fd5b50919050565b82815260006020604081840152835180604085015260005b81811015610603578581018301518582016060015282016105e7565b81811115610615576000606083870101525b50601f01601f191692909201606001949350505050565b600060c082840312156105c957600080fd5b600181811c9082168061065257607f821691505b602082108114156105c957634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461068a57600080fd5b919050565b6000606082840312156106a157600080fd5b6040516060810181811067ffffffffffffffff821117156106d257634e487b7160e01b600052604160045260246000fd5b6040526106de83610673565b8152602083015160208201526106f660408401610673565b60408201529392505050565b8035801515811461068a57600080fd5b6001600160a01b038316815281356020808301919091526060820190610739908401610702565b151560408301529392505050565b60006040828403121561075957600080fd5b6040516040810181811067ffffffffffffffff8211171561078a57634e487b7160e01b600052604160045260246000fd5b60405261079683610673565b8152602083015160208201528091505092915050565b600060e08201905060018060a01b038416825282356020830152602083013560408301526040830135606083015260608301356080830152608083013560a08301526107fa60a08401610702565b151560c08301529392505050565b60006020828403121561081a57600080fd5b61082382610702565b939250505056fea26469706673582212203d7bfc4b467c8e42a5185caf408c0cbb0e318eb9567ff298d5411dfa209b606364736f6c634300080c0033`,
  BytecodeLen: 3220,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:34:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:50:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:55:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:44:13:after expr stmt semicolon',
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
