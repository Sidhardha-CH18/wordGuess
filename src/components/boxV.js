import React from 'react';

import BoxImp from './boxes';

function BoxV(props) {
    const size1=[8,7,9,5];
    const size2=[2.5,2,3.5,3]
    const color=['red','blue','yellow','green','orange','skyblue'];
    var r1=Math.floor(Math.random() * 4);
    var r2=Math.floor(Math.random() * 6);
    var c=color[r2];
    var s1=size1[r1];
    var s2=size2[r1]
    return <BoxImp key={props.index}  s1={s1}  s2={s2} c={c} p={props.p} loc={props.l}/>;
  }
export default BoxV;