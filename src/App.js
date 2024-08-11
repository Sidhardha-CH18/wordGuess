import React  from 'react';
import Boxes from './components/box';
import { motion, AnimatePresence } from "framer-motion";
import Start from './components/start';
import Next1 from './components/next1';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import EndAnswer from './components/endAnswer';
function Button(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/start', { replace: true });
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="center"
      transition={{ duration: 2 }}
      onClick={handleClick}
    >
      <i className="plays fa fa-play-circle"></i>
    </motion.button>
  );
}
function LocationProvider({ children }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}

function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<>
        <Boxes pos="top"  loc={false}/>
        <Boxes pos="bottom" loc={false}/>
       <Button loc={false}/>
    </>} />
      <Route path="/start" element={<>
      <Start />
    </>} />
    <Route path="/next1" element={<>
      <Next1 />
    </>} />
    <Route path="/end" element={<>
      <EndAnswer />
    </>} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
