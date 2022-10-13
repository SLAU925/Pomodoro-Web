import uta from "../audio/uta.mp3"
import ang from "../audio/anglianhua.mp3"
import guilty from "../audio/guilty.mp3"
import homura from "../audio/Homura.mp3"
import juju from "../audio/juju.mp3"
import {Howl} from 'howler';
import {useState, useRef} from "react";
import { Button } from '@chakra-ui/react'
import "./Music.css"


const Music = () => {
    const [started,setStarted] = useState(false);
    const [displayMusic, setDisplayMusic] = useState("🔊")
    const [color,setColor] = useState('teal')
    
    const sound = new Howl({
        src: [ang,uta,juju,homura,guilty], 
        loop: true 
    })

    const musicRef = useRef(sound);

    const playMusic = () => {
        if(started){
            console.log(started)
            return
        }else{
            console.log(started)
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


    return <Button className="my-btn" size="md" colorScheme={color} onClick={musicHandler}>{displayMusic}</Button>

    
}


export default Music;