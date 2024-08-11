import React from 'react';
import BoxV from './boxV';
function Boxes(props) {
  const boxImps = [];
  for (let i = 0; i < 35; i++) {
    boxImps.push(<BoxV key={i} index={i} p={props.pos} l={props.loc}/>);
  }
  if(props.pos==='top')
  return <div style={{display:'flex',position:'absolute',top:'10%'}}>{boxImps}</div>
  else 
  return <div style={{display:'flex',position:'absolute',bottom:'0',transform:'rotate(180deg)'}}>{boxImps}</div>
 
}

export default Boxes;