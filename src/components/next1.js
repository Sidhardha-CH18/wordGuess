import React,{ useEffect, useState}from 'react';
import { options } from "./start";
import "./start.css";
import "./next1.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  function generateRandomArray(length) {
    let arr = new Array(length);
    for (let i = 0; i < length; i++) {
      arr[i] = i;
    }
    shuffleArray(arr);
    return arr;
  } 
 const arr=generateRandomArray(8);
function Next1(props) {
  const [list,setList]=useState(arr);
  const [list1,setList1]=useState(arr.slice(0, 4));
  const [click,setClick]=useState(null);
  const[ans,setAns]=useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
    var a;
    if (click==='yes') {
      if (ans.length===0) {
       a=list1
      } else {
        a= list1.filter((value)=>{
          return ans.includes(value);
        }) 
      }
      if (a.length===1) {
        navigate('/end', { state: { answer:options[a[0]]} });
      }
      const l1=arr.filter((value)=>{
        return !a.includes(value);
      })
      const t1=generateRandomArray(a.length);
      const t2=generateRandomArray(l1.length);
      const t3=[]
      for (let i = 0; i < a.length/2; i++) {
        t3[i]=a[t1[i]]
      }
      for (let i = a.length/2; i < 4; i++) {
        t3[i]=l1[t2[i]]
      }
      setAns(a)
      setList(l1)
      setList1(t3)

    } else if(click==='no'){
      if (ans.length===0) {
       a=arr.slice(4,8)
      } else {
        a= ans.filter((value)=>{
          return !list1.includes(value);
        }) 
      }
      if (a.length===1) {
        navigate('/end', { state: { answer:options[a[0]]} });
      }
      const l1=arr.filter((value)=>{
        return !a.includes(value);
      })
      const t1=generateRandomArray(a.length);
      const t2=generateRandomArray(l1.length);
      const t3=[]
      for (let i = 0; i < a.length/2; i++) {
        t3[i]=a[t1[i]]
      }
      for (let i = a.length/2; i < 4; i++) {
        t3[i]=l1[t2[i]]
      }
      setAns(a)
      setList(l1)
      setList1(t3)
    }
    setClick(null)
  },[click,list1,list,ans,navigate])
    return (<motion.div initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:2
      }}><div className='opt heading headingnext'>is your selected word in this ?</div>
      <div className='opt list listnext' style={{color:'white'}}>
        {list1.map((option, index) => (
        <div className="optList" key={option} >
        <motion.div initial={{opacity:0,transition:{duration:2}}}
        animate={{opacity:1,transition:{duration:2}}}
        exit={{opacity:0}}
        transition={{duration:2
        }}>
          {options[option]}
        </motion.div>
        </div>
    ))}</div><div className='button'><button className='yes' onClick={()=>{setClick('yes')}}>yes</button><button className='no' onClick={()=>{setClick('no')}}>no</button>
</div></motion.div>);
  }
export default Next1;