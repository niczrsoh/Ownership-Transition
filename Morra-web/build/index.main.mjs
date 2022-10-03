// Automatically generated with Reach 0.1.12 (4ca32459)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (4ca32459)';
export const _backendVersion = 24;

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
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1],
      6: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1],
      8: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1, ctc1]
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
export async function Jodie(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Jodie expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Jodie expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v317, v318], secs: v320, time: v319, didSend: v79, from: v316 } = txn1;
  ;
  const v329 = stdlib.safeAdd(v319, v318);
  stdlib.protect(ctc1, await interact.acceptWager(v317), {
    at: './index.rsh:61:29:application',
    fs: ['at ./index.rsh:60:15:application call to [unknown function] (defined at: ./index.rsh:60:18:function exp)'],
    msg: 'acceptWager',
    who: 'Jodie'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v316, v317, v318, v329],
    evt_cnt: 0,
    funcNum: 1,
    lct: v319,
    onlyIf: true,
    out_tys: [],
    pay: [v317, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v335, time: v334, didSend: v88, from: v333 } = txn2;
      
      const v337 = stdlib.add(v317, v317);
      sim_r.txns.push({
        amt: v317,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v338 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v339 = v334;
      const v346 = v337;
      
      if (await (async () => {
        const v354 = stdlib.eq(v338, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v354;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v448 = stdlib.eq(v338, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v451 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:104:14:decimal', stdlib.UInt_max, '2'), v317);
        const v453 = v448 ? v316 : v333;
        sim_r.txns.push({
          kind: 'from',
          to: v453,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v329],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v316, v317, v318, v329],
      evt_cnt: 0,
      funcNum: 2,
      lct: v319,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v466, time: v465, didSend: v251, from: v464 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v316,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v466, time: v465, didSend: v251, from: v464 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeOut(), {
      at: './index.rsh:47:55:application',
      fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:63:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeOut',
      who: 'Jodie'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v335, time: v334, didSend: v88, from: v333 } = txn2;
    const v337 = stdlib.add(v317, v317);
    ;
    let v338 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v339 = v334;
    let v346 = v337;
    
    let txn3 = txn2;
    while (await (async () => {
      const v354 = stdlib.eq(v338, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v354;})()) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc0, ctc2],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v363, v364], secs: v366, time: v365, didSend: v116, from: v362 } = txn4;
      ;
      const v367 = stdlib.addressEq(v316, v362);
      stdlib.assert(v367, {
        at: './index.rsh:78:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Jodie'
        });
      const v374 = stdlib.safeAdd(v365, v318);
      const v378 = stdlib.protect(ctc0, await interact.guessNumber(), {
        at: './index.rsh:83:63:application',
        fs: ['at ./index.rsh:82:19:application call to [unknown function] (defined at: ./index.rsh:82:22:function exp)'],
        msg: 'guessNumber',
        who: 'Jodie'
        });
      const v379 = stdlib.protect(ctc0, await interact.giveNumber(), {
        at: './index.rsh:84:63:application',
        fs: ['at ./index.rsh:82:19:application call to [unknown function] (defined at: ./index.rsh:82:22:function exp)'],
        msg: 'giveNumber',
        who: 'Jodie'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v316, v317, v318, v333, v346, v363, v364, v374, v378, v379],
        evt_cnt: 2,
        funcNum: 5,
        lct: v365,
        onlyIf: true,
        out_tys: [ctc0, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:86:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v381, v382], secs: v384, time: v383, didSend: v128, from: v380 } = txn5;
          
          ;
          const v392 = stdlib.safeAdd(v383, v318);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v374],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v316, v317, v318, v333, v346, v363, v364, v374],
          evt_cnt: 0,
          funcNum: 6,
          lct: v365,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v432, time: v431, didSend: v204, from: v430 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v316,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v432, time: v431, didSend: v204, from: v430 } = txn6;
        ;
        const v433 = stdlib.addressEq(v333, v430);
        const v434 = stdlib.addressEq(v316, v430);
        const v435 = v433 ? true : v434;
        stdlib.assert(v435, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:87:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Jodie'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeOut(), {
          at: './index.rsh:47:55:application',
          fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:87:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Jodie'
          });
        
        return;
        
        }
      else {
        const {data: [v381, v382], secs: v384, time: v383, didSend: v128, from: v380 } = txn5;
        ;
        const v385 = stdlib.addressEq(v333, v380);
        stdlib.assert(v385, {
          at: './index.rsh:86:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Jodie'
          });
        const v392 = stdlib.safeAdd(v383, v318);
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 7,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v392],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v316, v317, v318, v333, v346, v363, v364, v381, v382, v392],
            evt_cnt: 0,
            funcNum: 8,
            lct: v383,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v414, time: v413, didSend: v170, from: v412 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v333,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v414, time: v413, didSend: v170, from: v412 } = txn7;
          ;
          const v415 = stdlib.addressEq(v333, v412);
          const v416 = stdlib.addressEq(v316, v412);
          const v417 = v415 ? true : v416;
          stdlib.assert(v417, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:95:48:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Jodie'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeOut(), {
            at: './index.rsh:47:55:application',
            fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:95:48:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeOut',
            who: 'Jodie'
            });
          
          return;
          
          }
        else {
          const {data: [v397, v398], secs: v400, time: v399, didSend: v138, from: v396 } = txn6;
          ;
          const v401 = stdlib.addressEq(v316, v396);
          stdlib.assert(v401, {
            at: './index.rsh:94:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Jodie'
            });
          const v402 = stdlib.digest([ctc0, ctc0], [v397, v398]);
          const v403 = stdlib.digestEq(v364, v402);
          stdlib.assert(v403, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:96:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Jodie'
            });
          const v404 = stdlib.eq(v363, v381);
          let v405;
          if (v404) {
            v405 = stdlib.checkedBigNumberify('./index.rsh:5:37:decimal', stdlib.UInt_max, '1');
            }
          else {
            const v406 = stdlib.safeAdd(v398, v382);
            const v407 = stdlib.eq(v406, v363);
            let v408;
            if (v407) {
              v408 = stdlib.checkedBigNumberify('./index.rsh:5:80:decimal', stdlib.UInt_max, '2');
              }
            else {
              const v410 = stdlib.eq(v406, v381);
              const v411 = v410 ? stdlib.checkedBigNumberify('./index.rsh:6:46:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:6:48:decimal', stdlib.UInt_max, '1');
              v408 = v411;
              }
            v405 = v408;
            }
          const cv338 = v405;
          const cv339 = v399;
          const cv346 = v346;
          
          v338 = cv338;
          v339 = cv339;
          v346 = cv346;
          
          txn3 = txn6;
          continue;}
        
        }
      
      
      
      }
    const v448 = stdlib.eq(v338, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v451 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:104:14:decimal', stdlib.UInt_max, '2'), v317);
    const v453 = v448 ? v316 : v333;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v338), {
      at: './index.rsh:110:28:application',
      fs: ['at ./index.rsh:109:9:application call to [unknown function] (defined at: ./index.rsh:109:26:function exp)'],
      msg: 'seeOutcome',
      who: 'Jodie'
      });
    
    return;
    }
  
  
  
  };
export async function Marco(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Marco expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Marco expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v312 = stdlib.protect(ctc0, interact.deadline, 'for Marco\'s interact field deadline');
  const v313 = stdlib.protect(ctc0, interact.wager, 'for Marco\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v313, v312],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:55:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v313, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v317, v318], secs: v320, time: v319, didSend: v79, from: v316 } = txn1;
      
      sim_r.txns.push({
        amt: v317,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v329 = stdlib.safeAdd(v319, v318);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v317, v318], secs: v320, time: v319, didSend: v79, from: v316 } = txn1;
  ;
  const v329 = stdlib.safeAdd(v319, v318);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v329],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v316, v317, v318, v329],
      evt_cnt: 0,
      funcNum: 2,
      lct: v319,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v466, time: v465, didSend: v251, from: v464 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v316,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v466, time: v465, didSend: v251, from: v464 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeOut(), {
      at: './index.rsh:47:55:application',
      fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:63:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeOut',
      who: 'Marco'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v335, time: v334, didSend: v88, from: v333 } = txn2;
    const v337 = stdlib.add(v317, v317);
    ;
    let v338 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v339 = v334;
    let v346 = v337;
    
    let txn3 = txn2;
    while (await (async () => {
      const v354 = stdlib.eq(v338, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v354;})()) {
      const v357 = stdlib.protect(ctc0, await interact.guessNumber(), {
        at: './index.rsh:73:63:application',
        fs: ['at ./index.rsh:72:19:application call to [unknown function] (defined at: ./index.rsh:72:22:function exp)'],
        msg: 'guessNumber',
        who: 'Marco'
        });
      const v358 = stdlib.protect(ctc0, await interact.giveNumber(), {
        at: './index.rsh:74:53:application',
        fs: ['at ./index.rsh:72:19:application call to [unknown function] (defined at: ./index.rsh:72:22:function exp)'],
        msg: 'giveNumber',
        who: 'Marco'
        });
      const v359 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:75:62:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:72:19:application call to [unknown function] (defined at: ./index.rsh:72:22:function exp)'],
        msg: 'random',
        who: 'Marco'
        });
      const v360 = stdlib.digest([ctc0, ctc0], [v359, v358]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v316, v317, v318, v333, v346, v357, v360],
        evt_cnt: 2,
        funcNum: 4,
        lct: v339,
        onlyIf: true,
        out_tys: [ctc0, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:78:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v363, v364], secs: v366, time: v365, didSend: v116, from: v362 } = txn4;
          
          ;
          const v374 = stdlib.safeAdd(v365, v318);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [v363, v364], secs: v366, time: v365, didSend: v116, from: v362 } = txn4;
      ;
      const v367 = stdlib.addressEq(v316, v362);
      stdlib.assert(v367, {
        at: './index.rsh:78:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Marco'
        });
      const v374 = stdlib.safeAdd(v365, v318);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 5,
        out_tys: [ctc0, ctc0],
        timeoutAt: ['time', v374],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v316, v317, v318, v333, v346, v363, v364, v374],
          evt_cnt: 0,
          funcNum: 6,
          lct: v365,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v432, time: v431, didSend: v204, from: v430 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v316,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v432, time: v431, didSend: v204, from: v430 } = txn6;
        ;
        const v433 = stdlib.addressEq(v333, v430);
        const v434 = stdlib.addressEq(v316, v430);
        const v435 = v433 ? true : v434;
        stdlib.assert(v435, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:87:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Marco'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeOut(), {
          at: './index.rsh:47:55:application',
          fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:87:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Marco'
          });
        
        return;
        
        }
      else {
        const {data: [v381, v382], secs: v384, time: v383, didSend: v128, from: v380 } = txn5;
        ;
        const v385 = stdlib.addressEq(v333, v380);
        stdlib.assert(v385, {
          at: './index.rsh:86:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Marco'
          });
        const v392 = stdlib.safeAdd(v383, v318);
        const txn6 = await (ctc.sendrecv({
          args: [v316, v317, v318, v333, v346, v363, v364, v381, v382, v392, v359, v358],
          evt_cnt: 2,
          funcNum: 7,
          lct: v383,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:94:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v397, v398], secs: v400, time: v399, didSend: v138, from: v396 } = txn6;
            
            ;
            const v404 = stdlib.eq(v363, v381);
            let v405;
            if (v404) {
              v405 = stdlib.checkedBigNumberify('./index.rsh:5:37:decimal', stdlib.UInt_max, '1');
              }
            else {
              const v406 = stdlib.safeAdd(v398, v382);
              const v407 = stdlib.eq(v406, v363);
              let v408;
              if (v407) {
                v408 = stdlib.checkedBigNumberify('./index.rsh:5:80:decimal', stdlib.UInt_max, '2');
                }
              else {
                const v410 = stdlib.eq(v406, v381);
                const v411 = v410 ? stdlib.checkedBigNumberify('./index.rsh:6:46:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:6:48:decimal', stdlib.UInt_max, '1');
                v408 = v411;
                }
              v405 = v408;
              }
            const cv338 = v405;
            const cv339 = v399;
            const cv346 = v346;
            
            await (async () => {
              const v338 = cv338;
              const v339 = cv339;
              const v346 = cv346;
              
              if (await (async () => {
                const v354 = stdlib.eq(v338, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                
                return v354;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v448 = stdlib.eq(v338, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                const v451 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:104:14:decimal', stdlib.UInt_max, '2'), v317);
                const v453 = v448 ? v316 : v333;
                sim_r.txns.push({
                  kind: 'from',
                  to: v453,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v392],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v316, v317, v318, v333, v346, v363, v364, v381, v382, v392],
            evt_cnt: 0,
            funcNum: 8,
            lct: v383,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v414, time: v413, didSend: v170, from: v412 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v333,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v414, time: v413, didSend: v170, from: v412 } = txn7;
          ;
          const v415 = stdlib.addressEq(v333, v412);
          const v416 = stdlib.addressEq(v316, v412);
          const v417 = v415 ? true : v416;
          stdlib.assert(v417, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:95:48:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Marco'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeOut(), {
            at: './index.rsh:47:55:application',
            fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:95:48:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeOut',
            who: 'Marco'
            });
          
          return;
          
          }
        else {
          const {data: [v397, v398], secs: v400, time: v399, didSend: v138, from: v396 } = txn6;
          ;
          const v401 = stdlib.addressEq(v316, v396);
          stdlib.assert(v401, {
            at: './index.rsh:94:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Marco'
            });
          const v402 = stdlib.digest([ctc0, ctc0], [v397, v398]);
          const v403 = stdlib.digestEq(v364, v402);
          stdlib.assert(v403, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:96:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Marco'
            });
          const v404 = stdlib.eq(v363, v381);
          let v405;
          if (v404) {
            v405 = stdlib.checkedBigNumberify('./index.rsh:5:37:decimal', stdlib.UInt_max, '1');
            }
          else {
            const v406 = stdlib.safeAdd(v398, v382);
            const v407 = stdlib.eq(v406, v363);
            let v408;
            if (v407) {
              v408 = stdlib.checkedBigNumberify('./index.rsh:5:80:decimal', stdlib.UInt_max, '2');
              }
            else {
              const v410 = stdlib.eq(v406, v381);
              const v411 = v410 ? stdlib.checkedBigNumberify('./index.rsh:6:46:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:6:48:decimal', stdlib.UInt_max, '1');
              v408 = v411;
              }
            v405 = v408;
            }
          const cv338 = v405;
          const cv339 = v399;
          const cv346 = v346;
          
          v338 = cv338;
          v339 = cv339;
          v346 = cv346;
          
          txn3 = txn6;
          continue;}
        
        }
      
      
      
      }
    const v448 = stdlib.eq(v338, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v451 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:104:14:decimal', stdlib.UInt_max, '2'), v317);
    const v453 = v448 ? v316 : v333;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v338), {
      at: './index.rsh:110:28:application',
      fs: ['at ./index.rsh:109:9:application call to [unknown function] (defined at: ./index.rsh:109:26:function exp)'],
      msg: 'seeOutcome',
      who: 'Marco'
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
  appApproval: `ByANAAEIUAIgBSgGgAGQAVgwJgMBAAEBACI1ADEYQQR+KmRJIls1ASRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEGDEACHUmBBwxAAQ5JJAxAAFQkEkQkNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEF/zbLrAyBjQDIQpbD0Q0/zEAEjQDVwAgMQASEUSxIrIBNAMlW7III7IQNP+yB7NCA59IJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUlXACA1/yELWzX+IQlbNf1JNQVJIls1/CRbNfuABIJre3Y0/BZQNPsWULAyBjQDIQpbDEQ0/zEAEkQ0A1dgIDT8FjT7FlABEkQ0/jT9EkEABiM1+UIAJzT7NAOBiAFbCEk1+DT+EkEAByEENfdCAAojIjT4NP0STTX3NPc1+TT/NAMhBVs0AyEHWzQDVzAgNPkyBjQDJVtCApRJIQgMQABTSCEINAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEYbSsDLAyBjQDIQlbD0Q0A1cwIDEAEjT/MQASEUSxIrIBNAMlW7III7IQNP+yB7NCApFIIQg0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEFWzX+IQdbNf1XMCA1/CVbNfshC1s1+ldgIDX5STUFSSJbNfgkWzX3gASzUfePNPgWUDT3FlCwMgY0AyEJWwxENPwxABJEMgY0/Qg19jT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5UDT4FlA09xZQNPYWUChLAVcAf2cpSwFXfxlnSCQ1ATIGNQJCAf9JIQQMQADYSYEEDEAAkEghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBVs1/iEHWzX9VzAgNfwlWzX7STUFSSJbNfpXCCA1+YAET287RDT6FlA0+VCwNP8xABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5UDT4FlAoSwFXAH9nKUsBV38JZ0ghCDUBMgY1AkIBYSEEEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQxbD0SxIrIBNAMhBVuyCCOyEDQDVwAgsgezQgEESSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEFWzX/gASai5F0sDIGNAMhDFsMRDT/iAE8NANXACA0/zQDIQdbMQAjMgY0/0kIQgBfSIGgjQaIARwiNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwNP+IAOwyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAHM1/zX+Nf01/DX7Nfo1+TT9IxJBACQ0+TT6FlA0+xZQNPxQNP8WUChLAVcAWGdIIQY1ATIGNQJCADqxIrIBIQQ0+guyCCOyEDT8NPk0/SEEEk2yB7NCAAAxGSEGEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 152,
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
                "internalType": "uint256",
                "name": "v317",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v318",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
                "internalType": "uint256",
                "name": "v317",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v318",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
        "internalType": "struct T7",
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
                "internalType": "uint256",
                "name": "v363",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v364",
                "type": "uint256"
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
    "name": "_reach_e4",
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
                "internalType": "uint256",
                "name": "v381",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v382",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
                "internalType": "uint256",
                "name": "v397",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v398",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
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
        "internalType": "struct T7",
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
                "internalType": "uint256",
                "name": "v363",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v364",
                "type": "uint256"
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
    "name": "_reach_m4",
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
                "internalType": "uint256",
                "name": "v381",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v382",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
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
                "internalType": "uint256",
                "name": "v397",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v398",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
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
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001bb138038062001bb18339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611834806200037d6000396000f3fe60806040526004361061008f5760003560e01c8063ab53f2c611610056578063ab53f2c61461010a578063aff5115f1461012d578063c798003714610140578063e533a29d14610153578063ebdbfdcc1461016657005b80631e93b0f1146100985780632c10a159146100bc578063422eb85c146100cf5780637eea518c146100e257806383230757146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca366004611323565b610179565b6100966100dd36600461134d565b610308565b6100966100f0366004611323565b610597565b34801561010157600080fd5b506001546100a9565b34801561011657600080fd5b5061011f610715565b6040516100b3929190611370565b61009661013b36600461134d565b6107b2565b61009661014e366004611323565b610a17565b610096610161366004611323565b610bae565b61009661017436600461134d565b610d4a565b6101896001600054146009610faa565b6101a38135158061019c57506001548235145b600a610faa565b6000808055600280546101b5906113cd565b80601f01602080910402602001604051908101604052809291908181526020018280546101e1906113cd565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b50505050508060200190518101906102469190611456565b905061025981606001514310600b610faa565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161028a9291906114cf565b60405180910390a16102a3816020015134146008610faa565b6102ab6111f7565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160019052514392019190915251800160208201516040015261030381610fd0565b505050565b6103186008600054146021610faa565b6103328135158061032b57506001548235145b6022610faa565b600080805560028054610344906113cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610370906113cd565b80156103bd5780601f10610392576101008083540402835291602001916103bd565b820191906000526020600020905b8154815290600101906020018083116103a057829003601f168201915b50505050508060200190518101906103d5919061150c565b90506103fb60405180606001604052806000815260200160008152602001600081525090565b61040d82610120015143106023610faa565b7f443eedfa7cb93bcf21ba813a200d6756eee22aa1d3e6f8f9e753ebc0faaa84aa338460405161043e9291906115a1565b60405180910390a16104523415601e610faa565b815161046a906001600160a01b03163314601f610faa565b604080516104b69161049091602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360c00151146020610faa565b8160e001518260a0015114156104cf576001815261052a565b6104e58360200160200135836101000151611145565b6020820181905260a083015114156105035760026040820152610522565b8160e0015181602001511461051957600161051c565b60005b60408201525b604081015181525b6105326111f7565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169301929092528351818401805191909152805143920191909152608085015190519091015261059181610fd0565b50505050565b6105a7600160005414600d610faa565b6105c1813515806105ba57506001548235145b600e610faa565b6000808055600280546105d3906113cd565b80601f01602080910402602001604051908101604052809291908181526020018280546105ff906113cd565b801561064c5780601f106106215761010080835404028352916020019161064c565b820191906000526020600020905b81548152906001019060200180831161062f57829003601f168201915b50505050508060200190518101906106649190611456565b90506106788160600151431015600f610faa565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106a99291906114cf565b60405180910390a16106bd3415600c610faa565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106fa573d6000803e3d6000fd5b506000808055600181905561071190600290611250565b5050565b60006060600054600280805461072a906113cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610756906113cd565b80156107a35780601f10610778576101008083540402835291602001916107a3565b820191906000526020600020905b81548152906001019060200180831161078657829003601f168201915b50505050509050915091509091565b6107c26006600054146016610faa565b6107dc813515806107d557506001548235145b6017610faa565b6000808055600280546107ee906113cd565b80601f016020809104026020016040519081016040528092919081815260200182805461081a906113cd565b80156108675780601f1061083c57610100808354040283529160200191610867565b820191906000526020600020905b81548152906001019060200180831161084a57829003601f168201915b505050505080602001905181019061087f91906115d2565b90506108976040518060200160405280600081525090565b6108a88260e0015143106018610faa565b7f5371140060fe309c492663b0377a291d12d8d92a35dabb2b67a32d0ade04bb6633846040516108d99291906115a1565b60405180910390a16108ed34156014610faa565b6060820151610908906001600160a01b031633146015610faa565b610916438360400151611145565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260086000554360015590516109ec9183910161167e565b60405160208183030381529060405260029080519060200190610a1092919061128a565b5050505050565b610a27600660005414601b610faa565b610a4181351580610a3a57506001548235145b601c610faa565b600080805560028054610a53906113cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610a7f906113cd565b8015610acc5780601f10610aa157610100808354040283529160200191610acc565b820191906000526020600020905b815481529060010190602001808311610aaf57829003601f168201915b5050505050806020019051810190610ae491906115d2565b9050610af88160e00151431015601d610faa565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610b299291906114cf565b60405180910390a1610b3d34156019610faa565b6060810151610b71906001600160a01b03163314610b675781516001600160a01b03163314610b6a565b60015b601a610faa565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106fa573d6000803e3d6000fd5b610bbe6008600054146026610faa565b610bd881351580610bd157506001548235145b6027610faa565b600080805560028054610bea906113cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610c16906113cd565b8015610c635780601f10610c3857610100808354040283529160200191610c63565b820191906000526020600020905b815481529060010190602001808311610c4657829003601f168201915b5050505050806020019051810190610c7b919061150c565b9050610c908161012001514310156028610faa565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb607763383604051610cc19291906114cf565b60405180910390a1610cd534156024610faa565b6060810151610d09906001600160a01b03163314610cff5781516001600160a01b03163314610d02565b60015b6025610faa565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156106fa573d6000803e3d6000fd5b610d5a6005600054146012610faa565b610d7481351580610d6d57506001548235145b6013610faa565b600080805560028054610d86906113cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610db2906113cd565b8015610dff5780601f10610dd457610100808354040283529160200191610dff565b820191906000526020600020905b815481529060010190602001808311610de257829003601f168201915b5050505050806020019051810190610e179190611705565b9050610e2f6040518060200160405280600081525090565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051610e609291906115a1565b60405180910390a1610e7434156010610faa565b8151610e8c906001600160a01b031633146011610faa565b610e9a438360400151611145565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e084015260066000554360015590516109ec9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816107115760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b602081015151600114156110c8576110226040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8151516001600160a01b039081168083528351602090810151818501908152855160409081015181870190815287516060908101518716818901908152858a01518401516080808b019182526005600055436001558551978801989098529451938601939093529051908401525190931691810191909152905160a082015260c0016040516020818303038152906040526002908051906020019061030392919061128a565b6020810151516002146110e0578051606001516110e4565b8051515b6001600160a01b03166108fc6111036002846000015160200151611198565b6040518115909202916000818181858888f1935050505015801561112b573d6000803e3d6000fd5b506000808055600181905561114290600290611250565b50565b60008261115283826117a5565b91508110156111925760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610fc7565b92915050565b60008115806111bc575082826111ae81836117bd565b92506111ba90836117dc565b145b6111925760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610fc7565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161124b60405180606001604052806000815260200160008152602001600081525090565b905290565b50805461125c906113cd565b6000825580601f1061126c575050565b601f016020900490600052602060002090810190611142919061130e565b828054611296906113cd565b90600052602060002090601f0160209004810192826112b857600085556112fe565b82601f106112d157805160ff19168380011785556112fe565b828001600101855582156112fe579182015b828111156112fe5782518255916020019190600101906112e3565b5061130a92915061130e565b5090565b5b8082111561130a576000815560010161130f565b60006040828403121561133557600080fd5b50919050565b60006060828403121561133557600080fd5b60006060828403121561135f57600080fd5b611369838361133b565b9392505050565b82815260006020604081840152835180604085015260005b818110156113a457858101830151858201606001528201611388565b818111156113b6576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806113e157607f821691505b6020821081141561133557634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561143457634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461145157600080fd5b919050565b60006080828403121561146857600080fd5b6040516080810181811067ffffffffffffffff8211171561149957634e487b7160e01b600052604160045260246000fd5b6040526114a58361143a565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146114fd57600080fd5b80604085015250509392505050565b6000610140828403121561151f57600080fd5b611527611402565b6115308361143a565b815260208301516020820152604083015160408201526115526060840161143a565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b6001600160a01b03831681526080810161136960208301848035825260208082013590830152604090810135910152565b60006101008083850312156115e657600080fd5b6040519081019067ffffffffffffffff8211818310171561161757634e487b7160e01b600052604160045260246000fd5b816040526116248461143a565b815260208401516020820152604084015160408201526116466060850161143a565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b81516001600160a01b031681526101408101602083015160208301526040830151604083015260608301516116be60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b600060a0828403121561171757600080fd5b60405160a0810181811067ffffffffffffffff8211171561174857634e487b7160e01b600052604160045260246000fd5b6040526117548361143a565b815260208301516020820152604083015160408201526117766060840161143a565b6060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156117b8576117b861178f565b500190565b60008160001904831182151516156117d7576117d761178f565b500290565b6000826117f957634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220fcbcc0fe1abf178b394daf9e7677da01d7a75d36593d96ac877bb2763a2ee53264736f6c634300080c0033`,
  BytecodeLen: 7089,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:57:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:63:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:106:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:71:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:79:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:87:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:88:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:95:48:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Jodie": Jodie,
  "Marco": Marco
  };
export const _APIs = {
  };
