import React,{useState,useEffect} from "react";
import './end.css'
import { motion } from "framer-motion";
import { useLocation,useNavigate } from "react-router-dom";
import  squirtle  from "./images/squirtle.png";
import pokemon from './images/pokeball.png'
import sandshrew from "./images/sandshrew.png";
import bulbasaur from "./images/bulbasaur.png";
import meowth from "./images/meowth.png";
import abra from "./images/abra.png";
import charmander from "./images/charmander.png";
import cubone  from "./images/cubone.png";
import pikachu from "./images/pikachu.png";

const images={
    'pikachu':[pikachu,'Electric','Mouse Pokémon',['static','Lightning Rod']],
    'squirtle':[squirtle,'Water','Tiny Turtle Pokémon',['Torrent','Rain Dish']],
    'sandshrew':[sandshrew,'Ground','Mouse Pokémon',['Sand Veil','Sand Rush']],
    'bulbasaur':[bulbasaur,'Grass/Poison','Seed Pokémon',['Overgrow','Chlorophyll']],
    'meowth':[meowth,'Normal','Scratch Cat Pokémon',['PickUp & Technician','Unnerve']],
    'abra':[abra,'Psychic','Psi Pokémon',['Synchronise & InnerFocus','Magic Gaurd']],
    'charmander':[charmander,'Fire','Lizard Pokémon',['Blaze','Solar Power']],
    'cubone':[cubone,'Ground','Lonely Pokémon',['Rock Head','Battle Armor']]
}



function EndAnswer(props){
    const st1={animation:'animate1 2s linear infinite'}
     const [clicked,setClicked]=useState(false)
    const [element,setElement]=useState(<div className="pokeCard"><img style={st1}  src={pokemon} className="pokemon" onClick={()=>{setClicked(!clicked)}}  alt="pokemon"/></div>)
    const location=useLocation();
    const [answer,setAnswer]=useState(null)
    const state=location.state;
    const[rotate,setRotate]=useState(null)
    const[display,setDisplay]=useState(null);
    const navigate=useNavigate();
    useEffect(()=>{
    const st2={animation:'animate2 1s linear 1'};
    const st3={animation:'animate3 1s linear 1'};
    const st4={display:'block'}
    const replace=<div style={st3} className="answerCard"><p><span >{state.answer}</span></p><img className="answerImage"  src={images[state.answer][0]} alt={state.answer}/><p><span>Type</span><br/>{images[state.answer][1]}</p><p><span>Species</span> <br/>{images[state.answer][2]}</p><p style={{borderBottomWidth:0}}><span>Abilities</span><br/>{images[state.answer][3][0]}<br/>{images[state.answer][3][1]}</p></div>
    if (clicked===true) {
        setRotate(st2)
        
        setInterval(() => {
            setAnswer(state.answer)
            setElement(replace)
           setClicked(false)
        setRotate(st3)
          }, 1000);
          setInterval(() => {
        setDisplay(st4)
          }, 1400);
        }
    },[clicked,state,answer])
    return (<><div className='answer'>Your Word : <motion.span initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:2
        }}>{answer}</motion.span></div><motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:5
        }} style={rotate}>{element}
    </motion.div><motion.button initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:5
    }} className='restart' style={display} onClick={()=>{navigate('/',{ replace: true })}}>Restart</motion.button>
    </>);
}
export default EndAnswer;