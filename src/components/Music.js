import {Howl} from 'howler';
import {useState, useRef} from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import "./Music.css"
import { useEffect } from "react"


const Music = (props) => {
    const [started,setStarted] = useState(false);
    const [displayMusic, setDisplayMusic] = useState("🔊")
    const [color,setColor] = useState('teal')

    let track = props.track;
    let sound = new Howl({
            src: [track], 
            loop: true,
            volume: 1,
        })
    const musicRef = useRef(sound);

    useEffect(()=>{
        musicRef.current.src = [track]
        console.log(musicRef.current)
    },[track])

    
    

    

    const playMusic = () => {
        if(started){
            return
        }else{
            setStarted(true);
            musicRef.current.play()
        }
        
    }
    const pauseMusic = () =>{
        if(started){
            musicRef.current.pause()
            setStarted(false)
        }
    }

    const musicHandler = () => {
        console.log(props.track)
        if(started){
            setDisplayMusic("🔇")
            setColor('red')
            pauseMusic();
        }else{
            playMusic();
            setDisplayMusic("🔊")
            setColor('teal')
        }
    }


    return <ButtonGroup className="my-btn">
        <Button size="md" colorScheme={color} onClick={musicHandler}>{displayMusic}</Button>
    </ButtonGroup>
    
}


export default Music;