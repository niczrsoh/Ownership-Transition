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
      6: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      8: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
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
  const {data: [v326, v327], secs: v329, time: v328, didSend: v79, from: v325 } = txn1;
  ;
  const v338 = stdlib.safeAdd(v328, v327);
  stdlib.protect(ctc1, await interact.acceptWager(v326), {
    at: './index.rsh:60:29:application',
    fs: ['at ./index.rsh:59:15:application call to [unknown function] (defined at: ./index.rsh:59:18:function exp)'],
    msg: 'acceptWager',
    who: 'Jodie'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v325, v326, v327, v338],
    evt_cnt: 0,
    funcNum: 1,
    lct: v328,
    onlyIf: true,
    out_tys: [],
    pay: [v326, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v344, time: v343, didSend: v88, from: v342 } = txn2;
      
      const v346 = stdlib.add(v326, v326);
      sim_r.txns.push({
        amt: v326,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v347 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v348 = v343;
      const v355 = v346;
      
      if (await (async () => {
        const v363 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v363;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v464 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v467 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:108:14:decimal', stdlib.UInt_max, '2'), v326);
        const v469 = v464 ? v325 : v342;
        sim_r.txns.push({
          kind: 'from',
          to: v469,
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
    timeoutAt: ['time', v338],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v325, v326, v327, v338],
      evt_cnt: 0,
      funcNum: 2,
      lct: v328,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v482, time: v481, didSend: v260, from: v480 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v325,
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
    const {data: [], secs: v482, time: v481, didSend: v260, from: v480 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeOut(), {
      at: './index.rsh:46:55:application',
      fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:62:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeOut',
      who: 'Jodie'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v344, time: v343, didSend: v88, from: v342 } = txn2;
    const v346 = stdlib.add(v326, v326);
    ;
    let v347 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v348 = v343;
    let v355 = v346;
    
    let txn3 = txn2;
    while (await (async () => {
      const v363 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v363;})()) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v375, v376], secs: v378, time: v377, didSend: v120, from: v374 } = txn4;
      ;
      const v379 = stdlib.addressEq(v325, v374);
      stdlib.assert(v379, {
        at: './index.rsh:79:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Jodie'
        });
      const v386 = stdlib.safeAdd(v377, v327);
      const v390 = stdlib.protect(ctc0, await interact.guessNumber(), {
        at: './index.rsh:84:63:application',
        fs: ['at ./index.rsh:83:19:application call to [unknown function] (defined at: ./index.rsh:83:22:function exp)'],
        msg: 'guessNumber',
        who: 'Jodie'
        });
      const v391 = stdlib.protect(ctc0, await interact.giveNumber(), {
        at: './index.rsh:85:63:application',
        fs: ['at ./index.rsh:83:19:application call to [unknown function] (defined at: ./index.rsh:83:22:function exp)'],
        msg: 'giveNumber',
        who: 'Jodie'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v325, v326, v327, v342, v355, v375, v376, v386, v390, v391],
        evt_cnt: 2,
        funcNum: 5,
        lct: v377,
        onlyIf: true,
        out_tys: [ctc0, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:87:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v393, v394], secs: v396, time: v395, didSend: v132, from: v392 } = txn5;
          
          ;
          const v404 = stdlib.safeAdd(v395, v327);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v386],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v325, v326, v327, v342, v355, v375, v376, v386],
          evt_cnt: 0,
          funcNum: 6,
          lct: v377,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v448, time: v447, didSend: v213, from: v446 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v325,
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
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v448, time: v447, didSend: v213, from: v446 } = txn6;
        ;
        const v449 = stdlib.addressEq(v342, v446);
        const v450 = stdlib.addressEq(v325, v446);
        const v451 = v449 ? true : v450;
        stdlib.assert(v451, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:88:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Jodie'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeOut(), {
          at: './index.rsh:46:55:application',
          fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:88:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Jodie'
          });
        
        return;
        
        }
      else {
        const {data: [v393, v394], secs: v396, time: v395, didSend: v132, from: v392 } = txn5;
        ;
        const v397 = stdlib.addressEq(v342, v392);
        stdlib.assert(v397, {
          at: './index.rsh:87:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Jodie'
          });
        const v404 = stdlib.safeAdd(v395, v327);
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 4,
          funcNum: 7,
          out_tys: [ctc0, ctc0, ctc0, ctc0],
          timeoutAt: ['time', v404],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v325, v326, v327, v342, v355, v375, v376, v393, v394, v404],
            evt_cnt: 0,
            funcNum: 8,
            lct: v395,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v430, time: v429, didSend: v179, from: v428 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v342,
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
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v430, time: v429, didSend: v179, from: v428 } = txn7;
          ;
          const v431 = stdlib.addressEq(v342, v428);
          const v432 = stdlib.addressEq(v325, v428);
          const v433 = v431 ? true : v432;
          stdlib.assert(v433, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:98:48:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Jodie'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeOut(), {
            at: './index.rsh:46:55:application',
            fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:98:48:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeOut',
            who: 'Jodie'
            });
          
          return;
          
          }
        else {
          const {data: [v409, v410, v411, v412], secs: v414, time: v413, didSend: v144, from: v408 } = txn6;
          ;
          const v415 = stdlib.addressEq(v325, v408);
          stdlib.assert(v415, {
            at: './index.rsh:97:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Jodie'
            });
          const v416 = stdlib.digest([ctc0, ctc0], [v411, v412]);
          const v417 = stdlib.digestEq(v376, v416);
          stdlib.assert(v417, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:99:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Jodie'
            });
          const v418 = stdlib.digest([ctc0, ctc0], [v409, v410]);
          const v419 = stdlib.digestEq(v375, v418);
          stdlib.assert(v419, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:100:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Jodie'
            });
          const v420 = stdlib.eq(v410, v393);
          let v421;
          if (v420) {
            v421 = stdlib.checkedBigNumberify('./index.rsh:5:37:decimal', stdlib.UInt_max, '1');
            }
          else {
            const v422 = stdlib.safeAdd(v412, v394);
            const v423 = stdlib.eq(v422, v410);
            let v424;
            if (v423) {
              v424 = stdlib.checkedBigNumberify('./index.rsh:5:80:decimal', stdlib.UInt_max, '2');
              }
            else {
              const v426 = stdlib.eq(v422, v393);
              const v427 = v426 ? stdlib.checkedBigNumberify('./index.rsh:6:46:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:6:48:decimal', stdlib.UInt_max, '1');
              v424 = v427;
              }
            v421 = v424;
            }
          const cv347 = v421;
          const cv348 = v413;
          const cv355 = v355;
          
          v347 = cv347;
          v348 = cv348;
          v355 = cv355;
          
          txn3 = txn6;
          continue;}
        
        }
      
      
      
      }
    const v464 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v467 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:108:14:decimal', stdlib.UInt_max, '2'), v326);
    const v469 = v464 ? v325 : v342;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v347), {
      at: './index.rsh:114:28:application',
      fs: ['at ./index.rsh:113:9:application call to [unknown function] (defined at: ./index.rsh:113:26:function exp)'],
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
  
  
  const v321 = stdlib.protect(ctc0, interact.deadline, 'for Marco\'s interact field deadline');
  const v322 = stdlib.protect(ctc0, interact.wager, 'for Marco\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v322, v321],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:54:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v322, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v326, v327], secs: v329, time: v328, didSend: v79, from: v325 } = txn1;
      
      sim_r.txns.push({
        amt: v326,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v338 = stdlib.safeAdd(v328, v327);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v326, v327], secs: v329, time: v328, didSend: v79, from: v325 } = txn1;
  ;
  const v338 = stdlib.safeAdd(v328, v327);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v338],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v325, v326, v327, v338],
      evt_cnt: 0,
      funcNum: 2,
      lct: v328,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v482, time: v481, didSend: v260, from: v480 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v325,
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
    const {data: [], secs: v482, time: v481, didSend: v260, from: v480 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeOut(), {
      at: './index.rsh:46:55:application',
      fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:62:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeOut',
      who: 'Marco'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v344, time: v343, didSend: v88, from: v342 } = txn2;
    const v346 = stdlib.add(v326, v326);
    ;
    let v347 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v348 = v343;
    let v355 = v346;
    
    let txn3 = txn2;
    while (await (async () => {
      const v363 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v363;})()) {
      const v366 = stdlib.protect(ctc0, await interact.guessNumber(), {
        at: './index.rsh:72:53:application',
        fs: ['at ./index.rsh:71:19:application call to [unknown function] (defined at: ./index.rsh:71:22:function exp)'],
        msg: 'guessNumber',
        who: 'Marco'
        });
      const v367 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:73:72:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:71:19:application call to [unknown function] (defined at: ./index.rsh:71:22:function exp)'],
        msg: 'random',
        who: 'Marco'
        });
      const v368 = stdlib.digest([ctc0, ctc0], [v367, v366]);
      const v370 = stdlib.protect(ctc0, await interact.giveNumber(), {
        at: './index.rsh:75:53:application',
        fs: ['at ./index.rsh:71:19:application call to [unknown function] (defined at: ./index.rsh:71:22:function exp)'],
        msg: 'giveNumber',
        who: 'Marco'
        });
      const v371 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:76:62:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:71:19:application call to [unknown function] (defined at: ./index.rsh:71:22:function exp)'],
        msg: 'random',
        who: 'Marco'
        });
      const v372 = stdlib.digest([ctc0, ctc0], [v371, v370]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v325, v326, v327, v342, v355, v368, v372],
        evt_cnt: 2,
        funcNum: 4,
        lct: v348,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:79:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v375, v376], secs: v378, time: v377, didSend: v120, from: v374 } = txn4;
          
          ;
          const v386 = stdlib.safeAdd(v377, v327);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [v375, v376], secs: v378, time: v377, didSend: v120, from: v374 } = txn4;
      ;
      const v379 = stdlib.addressEq(v325, v374);
      stdlib.assert(v379, {
        at: './index.rsh:79:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Marco'
        });
      const v386 = stdlib.safeAdd(v377, v327);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 5,
        out_tys: [ctc0, ctc0],
        timeoutAt: ['time', v386],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v325, v326, v327, v342, v355, v375, v376, v386],
          evt_cnt: 0,
          funcNum: 6,
          lct: v377,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v448, time: v447, didSend: v213, from: v446 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v325,
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
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v448, time: v447, didSend: v213, from: v446 } = txn6;
        ;
        const v449 = stdlib.addressEq(v342, v446);
        const v450 = stdlib.addressEq(v325, v446);
        const v451 = v449 ? true : v450;
        stdlib.assert(v451, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:88:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Marco'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeOut(), {
          at: './index.rsh:46:55:application',
          fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:88:52:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Marco'
          });
        
        return;
        
        }
      else {
        const {data: [v393, v394], secs: v396, time: v395, didSend: v132, from: v392 } = txn5;
        ;
        const v397 = stdlib.addressEq(v342, v392);
        stdlib.assert(v397, {
          at: './index.rsh:87:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Marco'
          });
        const v404 = stdlib.safeAdd(v395, v327);
        const txn6 = await (ctc.sendrecv({
          args: [v325, v326, v327, v342, v355, v375, v376, v393, v394, v404, v367, v366, v371, v370],
          evt_cnt: 4,
          funcNum: 7,
          lct: v395,
          onlyIf: true,
          out_tys: [ctc0, ctc0, ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:97:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v409, v410, v411, v412], secs: v414, time: v413, didSend: v144, from: v408 } = txn6;
            
            ;
            const v420 = stdlib.eq(v410, v393);
            let v421;
            if (v420) {
              v421 = stdlib.checkedBigNumberify('./index.rsh:5:37:decimal', stdlib.UInt_max, '1');
              }
            else {
              const v422 = stdlib.safeAdd(v412, v394);
              const v423 = stdlib.eq(v422, v410);
              let v424;
              if (v423) {
                v424 = stdlib.checkedBigNumberify('./index.rsh:5:80:decimal', stdlib.UInt_max, '2');
                }
              else {
                const v426 = stdlib.eq(v422, v393);
                const v427 = v426 ? stdlib.checkedBigNumberify('./index.rsh:6:46:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:6:48:decimal', stdlib.UInt_max, '1');
                v424 = v427;
                }
              v421 = v424;
              }
            const cv347 = v421;
            const cv348 = v413;
            const cv355 = v355;
            
            await (async () => {
              const v347 = cv347;
              const v348 = cv348;
              const v355 = cv355;
              
              if (await (async () => {
                const v363 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                
                return v363;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v464 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                const v467 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:108:14:decimal', stdlib.UInt_max, '2'), v326);
                const v469 = v464 ? v325 : v342;
                sim_r.txns.push({
                  kind: 'from',
                  to: v469,
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
          timeoutAt: ['time', v404],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v325, v326, v327, v342, v355, v375, v376, v393, v394, v404],
            evt_cnt: 0,
            funcNum: 8,
            lct: v395,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v430, time: v429, didSend: v179, from: v428 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v342,
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
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v430, time: v429, didSend: v179, from: v428 } = txn7;
          ;
          const v431 = stdlib.addressEq(v342, v428);
          const v432 = stdlib.addressEq(v325, v428);
          const v433 = v431 ? true : v432;
          stdlib.assert(v433, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:98:48:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Marco'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeOut(), {
            at: './index.rsh:46:55:application',
            fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:30:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:98:48:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeOut',
            who: 'Marco'
            });
          
          return;
          
          }
        else {
          const {data: [v409, v410, v411, v412], secs: v414, time: v413, didSend: v144, from: v408 } = txn6;
          ;
          const v415 = stdlib.addressEq(v325, v408);
          stdlib.assert(v415, {
            at: './index.rsh:97:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Marco'
            });
          const v416 = stdlib.digest([ctc0, ctc0], [v411, v412]);
          const v417 = stdlib.digestEq(v376, v416);
          stdlib.assert(v417, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:99:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Marco'
            });
          const v418 = stdlib.digest([ctc0, ctc0], [v409, v410]);
          const v419 = stdlib.digestEq(v375, v418);
          stdlib.assert(v419, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:100:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Marco'
            });
          const v420 = stdlib.eq(v410, v393);
          let v421;
          if (v420) {
            v421 = stdlib.checkedBigNumberify('./index.rsh:5:37:decimal', stdlib.UInt_max, '1');
            }
          else {
            const v422 = stdlib.safeAdd(v412, v394);
            const v423 = stdlib.eq(v422, v410);
            let v424;
            if (v423) {
              v424 = stdlib.checkedBigNumberify('./index.rsh:5:80:decimal', stdlib.UInt_max, '2');
              }
            else {
              const v426 = stdlib.eq(v422, v393);
              const v427 = v426 ? stdlib.checkedBigNumberify('./index.rsh:6:46:decimal', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:6:48:decimal', stdlib.UInt_max, '1');
              v424 = v427;
              }
            v421 = v424;
            }
          const cv347 = v421;
          const cv348 = v413;
          const cv355 = v355;
          
          v347 = cv347;
          v348 = cv348;
          v355 = cv355;
          
          txn3 = txn6;
          continue;}
        
        }
      
      
      
      }
    const v464 = stdlib.eq(v347, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v467 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:108:14:decimal', stdlib.UInt_max, '2'), v326);
    const v469 = v464 ? v325 : v342;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v347), {
      at: './index.rsh:114:28:application',
      fs: ['at ./index.rsh:113:9:application call to [unknown function] (defined at: ./index.rsh:113:26:function exp)'],
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
  appApproval: `ByAMAAEIUAIgBSgGmAGoATAmAwEAAQEAIjUAMRhBBJgqZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQYMQAI4SYEHDEABKkkkDEAAVCQSRCQ0ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gAQX/NsusDIGNAMhClsPRDT/MQASNANXACAxABIRRLEisgE0AyVbsggjshA0/7IHs0IDuUgkNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf8hCVs1/kk1BUlKIls1/SRbNfyBEFs1+4EYWzX6gARAKnUwNP0WUDT8FlA0+xZQNPoWULAyBjQDIQpbDEQ0/zEAEkQ0A1d4IDT7FjT6FlABEkQ0A1dYIDT9FjT8FlABEkQ0/DT+EkEABiM1+EIAJzT6NAOBoAFbCEk19zT8EkEAByEENfZCAAojIjT3NP4STTX2NPY1+DT/NAMhBVs0AyEHWzQDVzAgNPgyBjQDJVtCApJJIQgMQABTSCEINAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEYbSsDLAyBjQDIQlbD0Q0A1cwIDEAEjT/MQASEUSxIrIBNAMlW7III7IQNP+yB7NCAo9IIQg0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEFWzX+IQdbNf1XMCA1/CVbNftXWCA1+ld4IDX5STUFSSJbNfgkWzX3gASzUfePNPgWUDT3FlCwMgY0AyEJWwxENPwxABJEMgY0/Qg19jT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUDT3FlA09hZQKEsBVwB/ZylLAVd/MWdIJDUBMgY1AkIB/kkhBAxAANdJgQQMQACPSCEGNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEFWzX+IQdbNf1XMCA1/CVbNftJNQVJVwAgNfpXICA1+YAEYF2kKzT6UDT5ULA0/zEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQKEsBVwB/ZylLAVd/IWdIIQg1ATIGNQJCAWEhBBJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyELWw9EsSKyATQDIQVbsggjshA0A1cAILIHs0IBBEkjDEAASEgjNAESRDQESSISTDQCEhFEKGRJNQMhBVs1/4AEmouRdLAyBjQDIQtbDEQ0/4gBPDQDVwAgNP80AyEHWzEAIzIGNP9JCEIAX0iBoI0GiAEcIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JFs1/oAErNEfwzT/FlA0/hZQsDT/iADsMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgBzNf81/jX9Nfw1+zX6Nfk0/SMSQQAkNPk0+hZQNPsWUDT8UDT/FlAoSwFXAFhnSCEGNQEyBjUCQgA6sSKyASEENPoLsggjshA0/DT5NP0hBBJNsgezQgAAMRkhBhJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
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
                "name": "v326",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v327",
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
                "name": "v326",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v327",
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
                "name": "v375",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v376",
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
                "name": "v393",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v394",
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
                "name": "v409",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v410",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v411",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v412",
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
                "name": "v375",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v376",
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
                "name": "v393",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v394",
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
                "name": "v409",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v410",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v411",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v412",
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
  Bytecode: `0x608060405260405162001c3738038062001c378339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b6118ba806200037d6000396000f3fe60806040526004361061008f5760003560e01c8063ab53f2c611610056578063ab53f2c61461010a578063aff5115f1461012d578063c798003714610140578063e533a29d14610153578063ebdbfdcc1461016657005b80631e93b0f1146100985780632c10a159146100bc5780633a825029146100cf5780637eea518c146100e257806383230757146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca366004611397565b610179565b6100966100dd3660046113af565b610308565b6100966100f0366004611397565b61060b565b34801561010157600080fd5b506001546100a9565b34801561011657600080fd5b5061011f610789565b6040516100b39291906113c1565b61009661013b366004611430565b610826565b61009661014e366004611397565b610a8b565b610096610161366004611397565b610c22565b610096610174366004611430565b610dbe565b610189600160005414600961101e565b6101a38135158061019c57506001548235145b600a61101e565b6000808055600280546101b590611453565b80601f01602080910402602001604051908101604052809291908181526020018280546101e190611453565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b505050505080602001905181019061024691906114dc565b905061025981606001514310600b61101e565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161028a929190611555565b60405180910390a16102a381602001513414600861101e565b6102ab61126b565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160019052514392019190915251800160208201516040015261030381611044565b505050565b610318600860005414602261101e565b6103328135158061032b57506001548235145b602361101e565b60008080556002805461034490611453565b80601f016020809104026020016040519081016040528092919081815260200182805461037090611453565b80156103bd5780601f10610392576101008083540402835291602001916103bd565b820191906000526020600020905b8154815290600101906020018083116103a057829003601f168201915b50505050508060200190518101906103d59190611592565b90506103fb60405180606001604052806000815260200160008152602001600081525090565b61040d8261012001514310602461101e565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fb5f4492f0483ed233efaa2cb34f0ab323e6b41dcb420ae73ce00030dbfd06b489060c00160405180910390a16104803415601e61101e565b8151610498906001600160a01b03163314601f61101e565b6040805160608581013560208301526080860135928201929092526104de91016040516020818303038152906040528051906020012060001c8360c0015114602061101e565b6040805161052a9161050491602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114602161101e565b60e082015160408401351415610543576001815261059e565b61055983602001606001358361010001516111b9565b60208201819052604084013514156105775760026040820152610596565b8160e0015181602001511461058d576001610590565b60005b60408201525b604081015181525b6105a661126b565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169301929092528351818401805191909152805143920191909152608085015190519091015261060581611044565b50505050565b61061b600160005414600d61101e565b6106358135158061062e57506001548235145b600e61101e565b60008080556002805461064790611453565b80601f016020809104026020016040519081016040528092919081815260200182805461067390611453565b80156106c05780601f10610695576101008083540402835291602001916106c0565b820191906000526020600020905b8154815290600101906020018083116106a357829003601f168201915b50505050508060200190518101906106d891906114dc565b90506106ec8160600151431015600f61101e565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161071d929190611555565b60405180910390a16107313415600c61101e565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561076e573d6000803e3d6000fd5b5060008080556001819055610785906002906112c4565b5050565b60006060600054600280805461079e90611453565b80601f01602080910402602001604051908101604052809291908181526020018280546107ca90611453565b80156108175780601f106107ec57610100808354040283529160200191610817565b820191906000526020600020905b8154815290600101906020018083116107fa57829003601f168201915b50505050509050915091509091565b610836600660005414601661101e565b6108508135158061084957506001548235145b601761101e565b60008080556002805461086290611453565b80601f016020809104026020016040519081016040528092919081815260200182805461088e90611453565b80156108db5780601f106108b0576101008083540402835291602001916108db565b820191906000526020600020905b8154815290600101906020018083116108be57829003601f168201915b50505050508060200190518101906108f39190611627565b905061090b6040518060200160405280600081525090565b61091c8260e001514310601861101e565b7f5371140060fe309c492663b0377a291d12d8d92a35dabb2b67a32d0ade04bb66338460405161094d9291906116d3565b60405180910390a16109613415601461101e565b606082015161097c906001600160a01b03163314601561101e565b61098a4383604001516111b9565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e08401528582013561010084015283516101208401526008600055436001559051610a6091839101611704565b60405160208183030381529060405260029080519060200190610a849291906112fe565b5050505050565b610a9b600660005414601b61101e565b610ab581351580610aae57506001548235145b601c61101e565b600080805560028054610ac790611453565b80601f0160208091040260200160405190810160405280929190818152602001828054610af390611453565b8015610b405780601f10610b1557610100808354040283529160200191610b40565b820191906000526020600020905b815481529060010190602001808311610b2357829003601f168201915b5050505050806020019051810190610b589190611627565b9050610b6c8160e00151431015601d61101e565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610b9d929190611555565b60405180910390a1610bb13415601961101e565b6060810151610be5906001600160a01b03163314610bdb5781516001600160a01b03163314610bde565b60015b601a61101e565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561076e573d6000803e3d6000fd5b610c32600860005414602761101e565b610c4c81351580610c4557506001548235145b602861101e565b600080805560028054610c5e90611453565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8a90611453565b8015610cd75780601f10610cac57610100808354040283529160200191610cd7565b820191906000526020600020905b815481529060010190602001808311610cba57829003601f168201915b5050505050806020019051810190610cef9190611592565b9050610d04816101200151431015602961101e565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb607763383604051610d35929190611555565b60405180910390a1610d493415602561101e565b6060810151610d7d906001600160a01b03163314610d735781516001600160a01b03163314610d76565b60015b602661101e565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f1935050505015801561076e573d6000803e3d6000fd5b610dce600560005414601261101e565b610de881351580610de157506001548235145b601361101e565b600080805560028054610dfa90611453565b80601f0160208091040260200160405190810160405280929190818152602001828054610e2690611453565b8015610e735780601f10610e4857610100808354040283529160200191610e73565b820191906000526020600020905b815481529060010190602001808311610e5657829003601f168201915b5050505050806020019051810190610e8b919061178b565b9050610ea36040518060200160405280600081525090565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051610ed49291906116d3565b60405180910390a1610ee83415601061101e565b8151610f00906001600160a01b03163314601161101e565b610f0e4383604001516111b9565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e08401526006600055436001559051610a609183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816107855760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6020810151516001141561113c576110966040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8151516001600160a01b039081168083528351602090810151818501908152855160409081015181870190815287516060908101518716818901908152858a01518401516080808b019182526005600055436001558551978801989098529451938601939093529051908401525190931691810191909152905160a082015260c001604051602081830303815290604052600290805190602001906103039291906112fe565b60208101515160021461115457805160600151611158565b8051515b6001600160a01b03166108fc611177600284600001516020015161120c565b6040518115909202916000818181858888f1935050505015801561119f573d6000803e3d6000fd5b50600080805560018190556111b6906002906112c4565b50565b6000826111c6838261182b565b91508110156112065760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161103b565b92915050565b6000811580611230575082826112228183611843565b925061122e9083611862565b145b6112065760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b604482015260640161103b565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016112bf60405180606001604052806000815260200160008152602001600081525090565b905290565b5080546112d090611453565b6000825580601f106112e0575050565b601f0160209004906000526020600020908101906111b69190611382565b82805461130a90611453565b90600052602060002090601f01602090048101928261132c5760008555611372565b82601f1061134557805160ff1916838001178555611372565b82800160010185558215611372579182015b82811115611372578251825591602001919060010190611357565b5061137e929150611382565b5090565b5b8082111561137e5760008155600101611383565b6000604082840312156113a957600080fd5b50919050565b600060a082840312156113a957600080fd5b82815260006020604081840152835180604085015260005b818110156113f5578581018301518582016060015282016113d9565b81811115611407576000606083870101525b50601f01601f191692909201606001949350505050565b6000606082840312156113a957600080fd5b60006060828403121561144257600080fd5b61144c838361141e565b9392505050565b600181811c9082168061146757607f821691505b602082108114156113a957634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff811182821017156114ba57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146114d757600080fd5b919050565b6000608082840312156114ee57600080fd5b6040516080810181811067ffffffffffffffff8211171561151f57634e487b7160e01b600052604160045260246000fd5b60405261152b836114c0565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461158357600080fd5b80604085015250509392505050565b600061014082840312156115a557600080fd5b6115ad611488565b6115b6836114c0565b815260208301516020820152604083015160408201526115d8606084016114c0565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b600061010080838503121561163b57600080fd5b6040519081019067ffffffffffffffff8211818310171561166c57634e487b7160e01b600052604160045260246000fd5b81604052611679846114c0565b8152602084015160208201526040840151604082015261169b606085016114c0565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161144c60208301848035825260208082013590830152604090810135910152565b81516001600160a01b0316815261014081016020830151602083015260408301516040830152606083015161174460608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b600060a0828403121561179d57600080fd5b60405160a0810181811067ffffffffffffffff821117156117ce57634e487b7160e01b600052604160045260246000fd5b6040526117da836114c0565b815260208301516020820152604083015160408201526117fc606084016114c0565b6060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561183e5761183e611815565b500190565b600081600019048311821515161561185d5761185d611815565b500290565b60008261187f57634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122039857c3ce83cf6f573eb3ec00bb3e87925aa865a63024290ec72961b7a58f26164736f6c634300080c0033`,
  BytecodeLen: 7223,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:56:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:62:65:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:110:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:70:9:after expr stmt',
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
    fs: ['at ./index.rsh:98:48:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
