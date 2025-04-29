import React, { useRef } from 'react';
import './App.css'
import useStopwatch from './useStopwatch'
function App(){

  const sound = useRef(null); 

  const{start,stop,reset,minutes,seconds,milliseconds,hours}=useStopwatch()

  const handleStart = () => {
    start();
    if (sound.current) {
      sound.current.loop = true;
      sound.current.play(); // Start audio and loop
    }
  };

  const handleStop = () => {
    stop();
    if (sound.current) {
      sound.current.loop = false;
      sound.current.pause(); // Stop audio
      sound.current.currentTime = 0; // Reset audio
    }
  };

  const handleReset = () => {
    reset();
    if (sound.current) {
      sound.current.loop = false;
      sound.current.pause(); // Stop audio
      sound.current.currentTime = 0; // Reset audio
    }
  };

  return(
    <>
    <div id="btn">
      <h1 id='head'>TimeKeeper</h1>
      <div id='parent'>
      <div id='ch1'>
      <h1> HH:</h1>
      <h1>{hours}</h1>
      </div>
    
      <div id='ch1'>
      <h1> MM:</h1>
      <h1>{minutes}</h1>
      </div>

      <div id='ch1'>
      <h1> SE:</h1>
      <h1>{seconds}</h1>
      </div>
      
      <div id='ch1'>
      <h1>MS</h1>
      <h1>{milliseconds}</h1>
      </div>
      </div>

      <div id='p2'>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>Restart</button>
      </div>
    </div>
    <audio ref={sound} src="/sound.mp3" />
    </>
  )
}


export default App