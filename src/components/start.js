import React from "react";
import "./start.css";
import {useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const parentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1.2,
      staggerChildren: 0.6,
    },
  },
};

const childVariants = {
  hidden: {opacity:0, x: "100%",transition: {
    delay: 2,
  } },
  show: {opacity:1, x: "0%", transition: { duration: 2 } },
};

export const options = ["pikachu", "charmander", "bulbasaur", "squirtle", "sandshrew", "meowth", "abra", "cubone"];

function Start() {
  const navigate = useNavigate();
  return (
    <motion.div className="start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3, }}
    >
       {/* <Timer /> */}
      <div className="opt heading">Choose one of the following..</div>
      <motion.div className="opt list" variants={parentVariants} initial="hidden" animate="show">
        {options.map((option, index) => (
            <motion.div key={index} variants={childVariants} className="optList">
            {option}
          </motion.div>
            
        ))}
      </motion.div>
      <motion.button initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:2,delay:6
      }} onClick={()=>{ navigate('/next1', { replace: false });}} className="next">NExt</motion.button>
    </motion.div>
  );
}

export default Start;