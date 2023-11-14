import { useEffect, useState, useRef } from 'react';
import useSound from 'use-sound';
import RegularButton from '../RegularButton/RegularButton';

export default function PomoTimer() {
  const [seconds, setSeconds] = useState(60);
  const [minutes, setMinutes] = useState(0);
  const [run, setRun] = useState(false);
  const intRef = useRef(null);
  

  

  useEffect(() => {
    if(run) {

      intRef.current = setInterval(() => {
        
        setSeconds(s => {
          let newSec;
          if(s > 0)
            newSec = s - 1;
          else {
            setMinutes(m => {
              let newMin;
              if(m > 0) {
                newMin = m - 1;
                newSec = 59;
              }
              else {
                newSec = 0;
                newMin = 0;
              }
                return newMin;
            });
            return newSec;
          }
            
          if(newSec <= 0 ) {
            setRun(false);
            clearInterval(intRef.current);
            playTimerEnd();
          }
          return newSec;
        })
      }, 1000);
    }
    else {
      clearInterval(intRef.current)
    }

    return() => {clearInterval(intRef.current);}
  }, [run]);


  


  function initSeconds(initSeconds) {
    setSeconds(newTime);
  }

  function decrementSeconds() {
    if(seconds - 1  < 0) {
      if(minutes - 1 >= 0) {
        setMinutes(m => m - 1);
        setSeconds(59);
      }
      else {
        setSeconds(0);
      }
        
    }
    else {
      setSeconds(s => s - 1);
    }
  }


  function incrementSeconds() {
    if(seconds + 1 > 59) {
      setMinutes(m => m + 1);
      setSeconds(0);
    }
    else {
      setSeconds(s => s + 1);
    }
  }
  

  function startCountdown() {
    setRun(true);
  }

  function stopCountdown() {
    setRun(false);
  }

  
  const [playTimerEnd] = useSound("./bell.mp3", {volume: 0.25});

  let displaySeconds, displayMinutes, combinedTime;
  seconds >= 10 ? displaySeconds = seconds : displaySeconds = "0" + seconds;
  minutes >= 10 ? displayMinutes = minutes : displayMinutes = "0" + minutes;
  combinedTime = displayMinutes + ":" + displaySeconds;

  
  
  const componentLayout = 'p-5 flex flex-col gap-5 items-center text-center ';
  
      

  return (
    <div 
      className={componentLayout + 
        `${seconds > 0 || minutes > 0 ? "bg-transparent" : "bg-red-600"}`}
    >
      
      <h2 className='text-xl m-2'>Pomo Timer</h2>
      <div className='italic'>
        <p hidden={run ? false : true}>{`${Math.floor(seconds / 60)} min ${seconds % 60} sec`}</p>
        <input hidden={run ? true : false} className='bg-slate-700 w-min p-3 text-center italic bg-transparent text-2xl' placeholder='1 minute'
          onBlur={(e) => {
            setSeconds(s => s * 60);
          }}

          
          onChange={(e) => {
            setSeconds(s => {
              if(Number.isNaN(parseInt(e.target.value)) || e.target.value == "")
                return 0;
              else {
                return parseInt(e.target.value);
              }
            })
          }}/>
      </div>

      <div className='flex items-center gap-5'>
        {/* <RegularButton onClick={decrementSeconds} buttonText="-"/> */}

        <div className='flex flex-col items-stretch gap-2 '>
          <RegularButton 
            onClick={startCountdown} 
            disabled={run ? true : false} 
            additionalStyles={(
              run ? 
                "cursor-not-allowed bg-slate-500": 
                " bg-slate-300 hover:bg-slate-200"
              )}
            buttonText="Start Countdown"/>

          <RegularButton 
            onClick={stopCountdown} 
            additionalStyles="p-3 bg-yellow-300 hover:bg-yellow-200" 
            buttonText="Stop countdown"/>
        </div>

        {/* <RegularButton onClick={incrementSeconds} buttonText="+"/> */}
      </div>
    </div>
  )
}

