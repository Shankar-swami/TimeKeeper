import React, { useState,useEffect,useRef,useReducer } from 'react'

function useStopwatch(){
    const[time,setTime]=useState(0)
    const[running,setRunning]=useState(false)
    const intervalRef=useRef(null)
    const sound=useRef(null)

    useEffect(()=>{
        if(running){
            intervalRef.current=setInterval(()=>{
                setTime(prevTime=>prevTime+10)
            },10)
        }else if(running && intervalRef.current){
            clearInterval(intervalRef.current)
        }

        return()=>clearInterval(intervalRef.current)
    },[running])

    const start=()=>{
        setRunning(true)
    }
    const stop=()=>{
        setRunning(false)
    }
    const reset=()=>{
      setRunning(false)
      setTime(0)
    }

    const hours = Math.floor(time / 3600000); // 1 hour = 3600000 ms
    const minutes = Math.floor((time % 3600000) / 60000); // 1 minute = 60000 ms
    const seconds = Math.floor((time % 60000) / 1000); // 1 second = 1000 ms
    const milliseconds = Math.floor(time % 1000); // Remaining milliseconds

    return{time,start,stop,reset,running,minutes,seconds,milliseconds,hours}
}

export default useStopwatch