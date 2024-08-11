import React from 'react';
import styled from 'styled-components';
import { keyframes } from "styled-components";
var t1 = Math.floor(Math.random() * 2) + 2;
var t2 = Math.floor(Math.random() * 2);
var box = keyframes`
  0%  {transform: scaleY(${t2}) }
  100% {transform: scaleY(${t1})}
`;

var DivStyle = styled.div`
  width:${props => props.s2}vw;
  height: ${props => props.s1}vh;
  margin: 1vh 0.4vw;
  background-color: ${props => props.c};
  transform-origin: top;
  animation: ${box} ${props => props.a}s ease infinite alternate;
`;
DivStyle.shouldForwardProp = (prop) => ['s1','s2' ,'c', 'p', 'a'].includes(prop);

function BoxImp(props) {
  var color = props.c;
  var size1 = props.s1;
  var size2 = props.s2;
  var p1 = props.p;
  var a1 = Math.floor(Math.random() * 4)+1.5;
  return <DivStyle c={color} s1={size1} s2={size2} p={p1} a={a1}/>
      
      
}

export default BoxImp;