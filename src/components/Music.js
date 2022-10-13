import uta from "../audio/uta.mp3"
import ang from "../audio/anglianhua.mp3"
import guilty from "../audio/guilty.mp3"
import homura from "../audio/Homura.mp3"
import juju from "../audio/juju.mp3"
import {Howl} from 'howler';
import {useState, useRef} from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import "./Music.css"


const Music = () => {
    const [started,setStarted] = useState(false);
    const [displayMusic, setDisplayMusic] = useState("🔊")
    const [color,setColor] = useState('teal')

    const songs = [uta,ang,juju,homura,guilty];
    let sound = new Howl({
        src: songs, 
        loop: true,
        volume: 0.5,
    })

    const musicRef = useRef(sound);

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