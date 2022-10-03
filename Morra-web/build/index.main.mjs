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
  const {data: [v280, v281], secs: v283, time: v282, didSend: v58, from: v279 } = txn1;
  ;
  const v292 = stdlib.safeAdd(v282, v281);
  stdlib.protect(ctc1, await interact.acceptWager(v280), {
    at: './index.rsh:62:29:application',
    fs: ['at ./index.rsh:61:15:application call to [unknown function] (defined at: ./index.rsh:61:18:function exp)'],
    msg: 'acceptWager',
    who: 'Jodie'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v279, v280, v281, v292],
    evt_cnt: 0,
    funcNum: 1,
    lct: v282,
    onlyIf: true,
    out_tys: [],
    pay: [v280, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v298, time: v297, didSend: v67, from: v296 } = txn2;
      
      const v300 = stdlib.add(v280, v280);
      sim_r.txns.push({
        amt: v280,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v301 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v302 = v297;
      const v309 = v300;
      
      if (await (async () => {
        const v317 = stdlib.eq(v301, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v317;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v409 = stdlib.eq(v301, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v412 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:105:14:decimal', stdlib.UInt_max, '2'), v280);
        const v414 = v409 ? v279 : v296;
        sim_r.txns.push({
          kind: 'from',
          to: v414,
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
    timeoutAt: ['time', v292],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v279, v280, v281, v292],
      evt_cnt: 0,
      funcNum: 2,
      lct: v282,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v427, time: v426, didSend: v228, from: v425 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v279,
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
    const {data: [], secs: v427, time: v426, didSend: v228, from: v425 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeOut(), {
      at: './index.rsh:48:55:application',
      fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:47:30:function exp)', 'at ./index.rsh:64:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeOut',
      who: 'Jodie'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v298, time: v297, didSend: v67, from: v296 } = txn2;
    const v300 = stdlib.add(v280, v280);
    ;
    let v301 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v302 = v297;
    let v309 = v300;
    
    let txn3 = txn2;
    while (await (async () => {
      const v317 = stdlib.eq(v301, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v317;})()) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc0, ctc2],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v326, v327], secs: v329, time: v328, didSend: v95, from: v325 } = txn4;
      ;
      const v330 = stdlib.addressEq(v279, v325);
      stdlib.assert(v330, {
        at: './index.rsh:79:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Jodie'
        });
      const v337 = stdlib.safeAdd(v328, v281);
      const v341 = stdlib.protect(ctc0, await interact.guessNumber(), {
        at: './index.rsh:84:63:application',
        fs: ['at ./index.rsh:83:19:application call to [unknown function] (defined at: ./index.rsh:83:22:function exp)'],
        msg: 'guessNumber',
        who: 'Jodie'
        });
      const v342 = stdlib.protect(ctc0, await interact.giveNumber(), {
        at: './index.rsh:85:63:application',
        fs: ['at ./index.rsh:83:19:application call to [unknown function] (defined at: ./index.rsh:83:22:function exp)'],
        msg: 'giveNumber',
        who: 'Jodie'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v279, v280, v281, v296, v309, v326, v327, v337, v341, v342],
        evt_cnt: 2,
        funcNum: 5,
        lct: v328,
        onlyIf: true,
        out_tys: [ctc0, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:87:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v344, v345], secs: v347, time: v346, didSend: v107, from: v343 } = txn5;
          
          ;
          const v355 = stdlib.safeAdd(v346, v281);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v337],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v279, v280, v281, v296, v309, v326, v327, v337],
          evt_cnt: 0,
          funcNum: 6,
          lct: v328,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v393, time: v392, didSend: v181, from: v391 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v279,
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
        const {data: [], secs: v393, time: v392, didSend: v181, from: v391 } = txn6;
        ;
        const v394 = stdlib.addressEq(v296, v391);
        const v395 = stdlib.addressEq(v279, v391);
        const v396 = v394 ? true : v395;
        stdlib.assert(v396, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:88:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Jodie'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeOut(), {
          at: './index.rsh:48:55:application',
          fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:47:30:function exp)', 'at ./index.rsh:88:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Jodie'
          });
        
        return;
        
        }
      else {
        const {data: [v344, v345], secs: v347, time: v346, didSend: v107, from: v343 } = txn5;
        ;
        const v348 = stdlib.addressEq(v296, v343);
        stdlib.assert(v348, {
          at: './index.rsh:87:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Jodie'
          });
        const v355 = stdlib.safeAdd(v346, v281);
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 7,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v355],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v279, v280, v281, v296, v309, v326, v327, v344, v345, v355],
            evt_cnt: 0,
            funcNum: 8,
            lct: v346,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v375, time: v374, didSend: v147, from: v373 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v296,
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
          const {data: [], secs: v375, time: v374, didSend: v147, from: v373 } = txn7;
          ;
          const v376 = stdlib.addressEq(v296, v373);
          const v377 = stdlib.addressEq(v279, v373);
          const v378 = v376 ? true : v377;
          stdlib.assert(v378, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:96:48:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Jodie'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeOut(), {
            at: './index.rsh:48:55:application',
            fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:47:30:function exp)', 'at ./index.rsh:96:48:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeOut',
            who: 'Jodie'
            });
          
          return;
          
          }
        else {
          const {data: [v360, v361], secs: v363, time: v362, didSend: v117, from: v359 } = txn6;
          ;
          const v364 = stdlib.addressEq(v279, v359);
          stdlib.assert(v364, {
            at: './index.rsh:95:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Jodie'
            });
          const v365 = stdlib.digest([ctc0, ctc0], [v360, v361]);
          const v366 = stdlib.digestEq(v327, v365);
          stdlib.assert(v366, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:97:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Jodie'
            });
          const v367 = stdlib.safeAdd(v361, v345);
          const v368 = stdlib.eq(v367, v326);
          let v369;
          if (v368) {
            v369 = stdlib.checkedBigNumberify('./index.rsh:5:53:decimal', stdlib.UInt_max, '2');
            }
          else {
            const v371 = stdlib.eq(v367, v344);
            const v372 = v371 ? stdlib.checkedBigNumberify('./index.rsh:6:46:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:7:5:decimal', stdlib.UInt_max, '1');
            v369 = v372;
            }
          const cv301 = v369;
          const cv302 = v362;
          const cv309 = v309;
          
          v301 = cv301;
          v302 = cv302;
          v309 = cv309;
          
          txn3 = txn6;
          continue;}
        
        }
      
      
      
      }
    const v409 = stdlib.eq(v301, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v412 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:105:14:decimal', stdlib.UInt_max, '2'), v280);
    const v414 = v409 ? v279 : v296;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v301), {
      at: './index.rsh:111:28:application',
      fs: ['at ./index.rsh:110:9:application call to [unknown function] (defined at: ./index.rsh:110:26:function exp)'],
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
  
  
  const v275 = stdlib.protect(ctc0, interact.deadline, 'for Marco\'s interact field deadline');
  const v276 = stdlib.protect(ctc0, interact.wager, 'for Marco\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v276, v275],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:56:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v276, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v280, v281], secs: v283, time: v282, didSend: v58, from: v279 } = txn1;
      
      sim_r.txns.push({
        amt: v280,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v292 = stdlib.safeAdd(v282, v281);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v280, v281], secs: v283, time: v282, didSend: v58, from: v279 } = txn1;
  ;
  const v292 = stdlib.safeAdd(v282, v281);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v292],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v279, v280, v281, v292],
      evt_cnt: 0,
      funcNum: 2,
      lct: v282,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v427, time: v426, didSend: v228, from: v425 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v279,
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
    const {data: [], secs: v427, time: v426, didSend: v228, from: v425 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeOut(), {
      at: './index.rsh:48:55:application',
      fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:47:30:function exp)', 'at ./index.rsh:64:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeOut',
      who: 'Marco'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v298, time: v297, didSend: v67, from: v296 } = txn2;
    const v300 = stdlib.add(v280, v280);
    ;
    let v301 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v302 = v297;
    let v309 = v300;
    
    let txn3 = txn2;
    while (await (async () => {
      const v317 = stdlib.eq(v301, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v317;})()) {
      const v320 = stdlib.protect(ctc0, await interact.guessNumber(), {
        at: './index.rsh:74:63:application',
        fs: ['at ./index.rsh:73:19:application call to [unknown function] (defined at: ./index.rsh:73:22:function exp)'],
        msg: 'guessNumber',
        who: 'Marco'
        });
      const v321 = stdlib.protect(ctc0, await interact.giveNumber(), {
        at: './index.rsh:75:53:application',
        fs: ['at ./index.rsh:73:19:application call to [unknown function] (defined at: ./index.rsh:73:22:function exp)'],
        msg: 'giveNumber',
        who: 'Marco'
        });
      const v322 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:76:62:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:73:19:application call to [unknown function] (defined at: ./index.rsh:73:22:function exp)'],
        msg: 'random',
        who: 'Marco'
        });
      const v323 = stdlib.digest([ctc0, ctc0], [v322, v321]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v279, v280, v281, v296, v309, v320, v323],
        evt_cnt: 2,
        funcNum: 4,
        lct: v302,
        onlyIf: true,
        out_tys: [ctc0, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:79:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v326, v327], secs: v329, time: v328, didSend: v95, from: v325 } = txn4;
          
          ;
          const v337 = stdlib.safeAdd(v328, v281);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [v326, v327], secs: v329, time: v328, didSend: v95, from: v325 } = txn4;
      ;
      const v330 = stdlib.addressEq(v279, v325);
      stdlib.assert(v330, {
        at: './index.rsh:79:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Marco'
        });
      const v337 = stdlib.safeAdd(v328, v281);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 5,
        out_tys: [ctc0, ctc0],
        timeoutAt: ['time', v337],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v279, v280, v281, v296, v309, v326, v327, v337],
          evt_cnt: 0,
          funcNum: 6,
          lct: v328,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v393, time: v392, didSend: v181, from: v391 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v279,
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
        const {data: [], secs: v393, time: v392, didSend: v181, from: v391 } = txn6;
        ;
        const v394 = stdlib.addressEq(v296, v391);
        const v395 = stdlib.addressEq(v279, v391);
        const v396 = v394 ? true : v395;
        stdlib.assert(v396, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:88:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Marco'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeOut(), {
          at: './index.rsh:48:55:application',
          fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:47:30:function exp)', 'at ./index.rsh:88:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Marco'
          });
        
        return;
        
        }
      else {
        const {data: [v344, v345], secs: v347, time: v346, didSend: v107, from: v343 } = txn5;
        ;
        const v348 = stdlib.addressEq(v296, v343);
        stdlib.assert(v348, {
          at: './index.rsh:87:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Marco'
          });
        const v355 = stdlib.safeAdd(v346, v281);
        const txn6 = await (ctc.sendrecv({
          args: [v279, v280, v281, v296, v309, v326, v327, v344, v345, v355, v322, v321],
          evt_cnt: 2,
          funcNum: 7,
          lct: v346,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:95:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v360, v361], secs: v363, time: v362, didSend: v117, from: v359 } = txn6;
            
            ;
            const v367 = stdlib.safeAdd(v361, v345);
            const v368 = stdlib.eq(v367, v326);
            let v369;
            if (v368) {
              v369 = stdlib.checkedBigNumberify('./index.rsh:5:53:decimal', stdlib.UInt_max, '2');
              }
            else {
              const v371 = stdlib.eq(v367, v344);
              const v372 = v371 ? stdlib.checkedBigNumberify('./index.rsh:6:46:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:7:5:decimal', stdlib.UInt_max, '1');
              v369 = v372;
              }
            const cv301 = v369;
            const cv302 = v362;
            const cv309 = v309;
            
            await (async () => {
              const v301 = cv301;
              const v302 = cv302;
              const v309 = cv309;
              
              if (await (async () => {
                const v317 = stdlib.eq(v301, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                
                return v317;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v409 = stdlib.eq(v301, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                const v412 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:105:14:decimal', stdlib.UInt_max, '2'), v280);
                const v414 = v409 ? v279 : v296;
                sim_r.txns.push({
                  kind: 'from',
                  to: v414,
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
          timeoutAt: ['time', v355],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v279, v280, v281, v296, v309, v326, v327, v344, v345, v355],
            evt_cnt: 0,
            funcNum: 8,
            lct: v346,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v375, time: v374, didSend: v147, from: v373 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v296,
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
          const {data: [], secs: v375, time: v374, didSend: v147, from: v373 } = txn7;
          ;
          const v376 = stdlib.addressEq(v296, v373);
          const v377 = stdlib.addressEq(v279, v373);
          const v378 = v376 ? true : v377;
          stdlib.assert(v378, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:96:48:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Marco'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeOut(), {
            at: './index.rsh:48:55:application',
            fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:47:30:function exp)', 'at ./index.rsh:96:48:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeOut',
            who: 'Marco'
            });
          
          return;
          
          }
        else {
          const {data: [v360, v361], secs: v363, time: v362, didSend: v117, from: v359 } = txn6;
          ;
          const v364 = stdlib.addressEq(v279, v359);
          stdlib.assert(v364, {
            at: './index.rsh:95:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Marco'
            });
          const v365 = stdlib.digest([ctc0, ctc0], [v360, v361]);
          const v366 = stdlib.digestEq(v327, v365);
          stdlib.assert(v366, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:97:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Marco'
            });
          const v367 = stdlib.safeAdd(v361, v345);
          const v368 = stdlib.eq(v367, v326);
          let v369;
          if (v368) {
            v369 = stdlib.checkedBigNumberify('./index.rsh:5:53:decimal', stdlib.UInt_max, '2');
            }
          else {
            const v371 = stdlib.eq(v367, v344);
            const v372 = v371 ? stdlib.checkedBigNumberify('./index.rsh:6:46:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:7:5:decimal', stdlib.UInt_max, '1');
            v369 = v372;
            }
          const cv301 = v369;
          const cv302 = v362;
          const cv309 = v309;
          
          v301 = cv301;
          v302 = cv302;
          v309 = cv309;
          
          txn3 = txn6;
          continue;}
        
        }
      
      
      
      }
    const v409 = stdlib.eq(v301, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v412 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:105:14:decimal', stdlib.UInt_max, '2'), v280);
    const v414 = v409 ? v279 : v296;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v301), {
      at: './index.rsh:111:28:application',
      fs: ['at ./index.rsh:110:9:application call to [unknown function] (defined at: ./index.rsh:110:26:function exp)'],
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
  appApproval: `ByANAAEIUAIgBSgGgAGQAVgwJgMBAAEBACI1ADEYQQRmKmRJIls1ASRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEGDEACBUmBBwxAAPZJJAxAAFQkEkQkNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEF/zbLrAyBjQDIQpbD0Q0/zEAEjQDVwAgMQASEUSxIrIBNAMlW7III7IQNP+yB7NCA4dIJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf9JNQVJIls1/iRbNf2ABIJre3Y0/hZQNP0WULAyBjQDIQpbDEQ0/zEAEkQ0A1dgIDT+FjT9FlABEkQ0/TQDgYgBWwhJNfw0AyELWxJBAAchBDX7QgANIyI0/DQDIQlbEk01+zT/NAMhBVs0AyEHWzQDVzAgNPsyBjQDJVtCApRJIQgMQABTSCEINAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEYbSsDLAyBjQDIQlbD0Q0A1cwIDEAEjT/MQASEUSxIrIBNAMlW7III7IQNP+yB7NCApFIIQg0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEFWzX+IQdbNf1XMCA1/CVbNfshC1s1+ldgIDX5STUFSSJbNfgkWzX3gASzUfePNPgWUDT3FlCwMgY0AyEJWwxENPwxABJEMgY0/Qg19jT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5UDT4FlA09xZQNPYWUChLAVcAf2cpSwFXfxlnSCQ1ATIGNQJCAf9JIQQMQADYSYEEDEAAkEghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBVs1/iEHWzX9VzAgNfwlWzX7STUFSSJbNfpXCCA1+YAET287RDT6FlA0+VCwNP8xABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5UDT4FlAoSwFXAH9nKUsBV38JZ0ghCDUBMgY1AkIBYSEEEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQxbD0SxIrIBNAMhBVuyCCOyEDQDVwAgsgezQgEESSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEFWzX/gASai5F0sDIGNAMhDFsMRDT/iAE8NANXACA0/zQDIQdbMQAjMgY0/0kIQgBfSIGgjQaIARwiNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwNP+IAOwyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAHM1/zX+Nf01/DX7Nfo1+TT9IxJBACQ0+TT6FlA0+xZQNPxQNP8WUChLAVcAWGdIIQY1ATIGNQJCADqxIrIBIQQ0+guyCCOyEDT8NPk0/SEEEk2yB7NCAAAxGSEGEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
                "name": "v280",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v281",
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
                "name": "v280",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v281",
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
                "name": "v326",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v327",
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
                "name": "v344",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v345",
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
                "name": "v360",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v361",
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
                "name": "v326",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v327",
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
                "name": "v344",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v345",
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
                "name": "v360",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v361",
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
  Bytecode: `0x608060405260405162001b8438038062001b848339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611807806200037d6000396000f3fe60806040526004361061008f5760003560e01c8063ab53f2c611610056578063ab53f2c61461010a578063aff5115f1461012d578063c798003714610140578063e533a29d14610153578063ebdbfdcc1461016657005b80631e93b0f1146100985780632c10a159146100bc578063422eb85c146100cf5780637eea518c146100e257806383230757146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca3660046112f6565b610179565b6100966100dd366004611320565b610308565b6100966100f03660046112f6565b61056a565b34801561010157600080fd5b506001546100a9565b34801561011657600080fd5b5061011f6106e8565b6040516100b3929190611343565b61009661013b366004611320565b610785565b61009661014e3660046112f6565b6109ea565b6100966101613660046112f6565b610b81565b610096610174366004611320565b610d1d565b6101896001600054146009610f7d565b6101a38135158061019c57506001548235145b600a610f7d565b6000808055600280546101b5906113a0565b80601f01602080910402602001604051908101604052809291908181526020018280546101e1906113a0565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b50505050508060200190518101906102469190611429565b905061025981606001514310600b610f7d565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161028a9291906114a2565b60405180910390a16102a3816020015134146008610f7d565b6102ab6111ca565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160019052514392019190915251800160208201516040015261030381610fa3565b505050565b6103186008600054146021610f7d565b6103328135158061032b57506001548235145b6022610f7d565b600080805560028054610344906113a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610370906113a0565b80156103bd5780601f10610392576101008083540402835291602001916103bd565b820191906000526020600020905b8154815290600101906020018083116103a057829003601f168201915b50505050508060200190518101906103d591906114df565b90506103f4604051806040016040528060008152602001600081525090565b61040682610120015143106023610f7d565b7f443eedfa7cb93bcf21ba813a200d6756eee22aa1d3e6f8f9e753ebc0faaa84aa3384604051610437929190611574565b60405180910390a161044b3415601e610f7d565b8151610463906001600160a01b03163314601f610f7d565b604080516104af9161048991602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360c00151146020610f7d565b6104c58360200160200135836101000151611118565b80825260a083015114156104df57600260208201526104fb565b60e08201518151146104f25760016104f5565b60005b60208201525b6105036111ca565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283810151818401805191909152805143920191909152608085015190519091015261056481610fa3565b50505050565b61057a600160005414600d610f7d565b6105948135158061058d57506001548235145b600e610f7d565b6000808055600280546105a6906113a0565b80601f01602080910402602001604051908101604052809291908181526020018280546105d2906113a0565b801561061f5780601f106105f45761010080835404028352916020019161061f565b820191906000526020600020905b81548152906001019060200180831161060257829003601f168201915b50505050508060200190518101906106379190611429565b905061064b8160600151431015600f610f7d565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161067c9291906114a2565b60405180910390a16106903415600c610f7d565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106cd573d6000803e3d6000fd5b50600080805560018190556106e490600290611223565b5050565b6000606060005460028080546106fd906113a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610729906113a0565b80156107765780601f1061074b57610100808354040283529160200191610776565b820191906000526020600020905b81548152906001019060200180831161075957829003601f168201915b50505050509050915091509091565b6107956006600054146016610f7d565b6107af813515806107a857506001548235145b6017610f7d565b6000808055600280546107c1906113a0565b80601f01602080910402602001604051908101604052809291908181526020018280546107ed906113a0565b801561083a5780601f1061080f5761010080835404028352916020019161083a565b820191906000526020600020905b81548152906001019060200180831161081d57829003601f168201915b505050505080602001905181019061085291906115a5565b905061086a6040518060200160405280600081525090565b61087b8260e0015143106018610f7d565b7f5371140060fe309c492663b0377a291d12d8d92a35dabb2b67a32d0ade04bb6633846040516108ac929190611574565b60405180910390a16108c034156014610f7d565b60608201516108db906001600160a01b031633146015610f7d565b6108e9438360400151611118565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260086000554360015590516109bf91839101611651565b604051602081830303815290604052600290805190602001906109e392919061125d565b5050505050565b6109fa600660005414601b610f7d565b610a1481351580610a0d57506001548235145b601c610f7d565b600080805560028054610a26906113a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610a52906113a0565b8015610a9f5780601f10610a7457610100808354040283529160200191610a9f565b820191906000526020600020905b815481529060010190602001808311610a8257829003601f168201915b5050505050806020019051810190610ab791906115a5565b9050610acb8160e00151431015601d610f7d565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610afc9291906114a2565b60405180910390a1610b1034156019610f7d565b6060810151610b44906001600160a01b03163314610b3a5781516001600160a01b03163314610b3d565b60015b601a610f7d565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106cd573d6000803e3d6000fd5b610b916008600054146026610f7d565b610bab81351580610ba457506001548235145b6027610f7d565b600080805560028054610bbd906113a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610be9906113a0565b8015610c365780601f10610c0b57610100808354040283529160200191610c36565b820191906000526020600020905b815481529060010190602001808311610c1957829003601f168201915b5050505050806020019051810190610c4e91906114df565b9050610c638161012001514310156028610f7d565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb607763383604051610c949291906114a2565b60405180910390a1610ca834156024610f7d565b6060810151610cdc906001600160a01b03163314610cd25781516001600160a01b03163314610cd5565b60015b6025610f7d565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156106cd573d6000803e3d6000fd5b610d2d6005600054146012610f7d565b610d4781351580610d4057506001548235145b6013610f7d565b600080805560028054610d59906113a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610d85906113a0565b8015610dd25780601f10610da757610100808354040283529160200191610dd2565b820191906000526020600020905b815481529060010190602001808311610db557829003601f168201915b5050505050806020019051810190610dea91906116d8565b9050610e026040518060200160405280600081525090565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051610e33929190611574565b60405180910390a1610e4734156010610f7d565b8151610e5f906001600160a01b031633146011610f7d565b610e6d438360400151611118565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e084015260066000554360015590516109bf9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816106e45760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6020810151516001141561109b57610ff56040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8151516001600160a01b039081168083528351602090810151818501908152855160409081015181870190815287516060908101518716818901908152858a01518401516080808b019182526005600055436001558551978801989098529451938601939093529051908401525190931691810191909152905160a082015260c0016040516020818303038152906040526002908051906020019061030392919061125d565b6020810151516002146110b3578051606001516110b7565b8051515b6001600160a01b03166108fc6110d6600284600001516020015161116b565b6040518115909202916000818181858888f193505050501580156110fe573d6000803e3d6000fd5b506000808055600181905561111590600290611223565b50565b6000826111258382611778565b91508110156111655760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610f9a565b92915050565b600081158061118f575082826111818183611790565b925061118d90836117af565b145b6111655760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610f9a565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161121e60405180606001604052806000815260200160008152602001600081525090565b905290565b50805461122f906113a0565b6000825580601f1061123f575050565b601f01602090049060005260206000209081019061111591906112e1565b828054611269906113a0565b90600052602060002090601f01602090048101928261128b57600085556112d1565b82601f106112a457805160ff19168380011785556112d1565b828001600101855582156112d1579182015b828111156112d15782518255916020019190600101906112b6565b506112dd9291506112e1565b5090565b5b808211156112dd57600081556001016112e2565b60006040828403121561130857600080fd5b50919050565b60006060828403121561130857600080fd5b60006060828403121561133257600080fd5b61133c838361130e565b9392505050565b82815260006020604081840152835180604085015260005b818110156113775785810183015185820160600152820161135b565b81811115611389576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806113b457607f821691505b6020821081141561130857634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561140757634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461142457600080fd5b919050565b60006080828403121561143b57600080fd5b6040516080810181811067ffffffffffffffff8211171561146c57634e487b7160e01b600052604160045260246000fd5b6040526114788361140d565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146114d057600080fd5b80604085015250509392505050565b600061014082840312156114f257600080fd5b6114fa6113d5565b6115038361140d565b815260208301516020820152604083015160408201526115256060840161140d565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b6001600160a01b03831681526080810161133c60208301848035825260208082013590830152604090810135910152565b60006101008083850312156115b957600080fd5b6040519081019067ffffffffffffffff821181831017156115ea57634e487b7160e01b600052604160045260246000fd5b816040526115f78461140d565b815260208401516020820152604084015160408201526116196060850161140d565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b81516001600160a01b0316815261014081016020830151602083015260408301516040830152606083015161169160608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b600060a082840312156116ea57600080fd5b60405160a0810181811067ffffffffffffffff8211171561171b57634e487b7160e01b600052604160045260246000fd5b6040526117278361140d565b815260208301516020820152604083015160408201526117496060840161140d565b6060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561178b5761178b611762565b500190565b60008160001904831182151516156117aa576117aa611762565b500290565b6000826117cc57634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220b49481deefd0fc8bf3f0c1c2e800b6c1fdc0013dacfcde262ecc1a50dd6277ba64736f6c634300080c0033`,
  BytecodeLen: 7044,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:58:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:64:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:107:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:72:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:80:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:88:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:89:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:96:48:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
