import "./Timer.css"
import {useState, useEffect, useRef} from "react";
import { Button } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Flex } from "@chakra-ui/react"
import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
    md: '14',

}
const theme = extendTheme({ breakpoints })

const Timer = () =>{
    const STARTING_TIME = 1800;
    const [started, setStarted] = useState(false);
    const [timer,setTimer] = useState(STARTING_TIME);
    const timerRef = useRef();
    const [displayTime, setDisplayTime] = useState({min: (Math.floor(timer/60)), sec: timer%60});
    const [displayBtn, setDisplayBtn] = useState("START");
    const [end,setEnd] = useState(false);

    useEffect(()=>{
        if(started){
            timerRef.current = setInterval(()=>{
                setTimer(timer=> timer-1);
            },1000)
        }else{
            clearInterval(timerRef.current);
        }
    },[started]);

    useEffect(()=>{
        if(timer === 0){
            setEnd(true);
            setStarted(false);
        }
        if(timer%60<10){
            setDisplayTime({min: (Math.floor(timer/60)), sec: "0"+(timer%60).toString()});
        }else{
            setDisplayTime({min: (Math.floor(timer/60)), sec: timer%60});
        }
    }, [timer])

    const startHandler = () => {
        if(started){
            setDisplayBtn("RESUME")
        }else{
            setDisplayBtn("PAUSE")
        }
        setStarted(!started);
    }
    const resetHandler = () => {
        setStarted(false);
        setTimer(STARTING_TIME);
        setDisplayBtn("START");
        setEnd(false);
    }
    const addHandler = ()=>{
        setTimer(timer=>timer + 30)
    };
    const decHandler = ()=>{
        if(timer <= 30){
            return
        };
        setTimer(timer=>timer - 30)
    };

    return <div  className="timer-box">
        <Heading className="pad" size='4xl'>{displayTime.min}:{displayTime.sec}</Heading>
            <Flex flexDirection={{base:'column',md: 'row'}}>
                {!end && <Button  margin={1} colorScheme='teal' onClick={startHandler}>{displayBtn}</Button>}
                <Button margin={1} size='md' colorScheme='red' onClick={resetHandler}>RESET</Button>
                <Button margin={1} size='md' colorScheme='teal' onClick={addHandler}>+</Button>
                <Button margin={1} size='md' colorScheme='teal' onClick={decHandler}>-</Button>
            </Flex>
    </div>
}

export default Timer;