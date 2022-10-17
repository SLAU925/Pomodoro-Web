import uta from "../audio/uta.mp3"
import ang from "../audio/anglianhua.mp3"
import guilty from "../audio/guilty.mp3"
import homura from "../audio/Homura.mp3"
import juju from "../audio/juju.mp3"
import piano from "../audio/piano.mp3";
import Music from "./Music"
import { Button } from "@chakra-ui/react"

import {useState} from "react";


const Play = () => {
    const play = [piano,uta,ang,juju,homura,guilty];
    const [song,setSong] = useState(0);


    const changeSong = () =>{
        if(song === play.length -1){
            setSong(0)
        }else{
            setSong(song => song+1)
        };
    }

    return <div>
        <Music track={play[song]} />
        {/* <Button onClick={changeSong}>^</Button> */}
    </div>
}

export default Play;    