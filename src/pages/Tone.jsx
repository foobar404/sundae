import React,{useEffect,useState} from 'react'
import * as ToneJS from 'tone'
import styled from "styled-components"
import {mix} from "../util"


const Style = styled.main`
    ${mix.col()}

    nav{
        ${mix.pos("top","left")}
        ${mix.row()}

        button{
            padding:15px 30px;
            border:2px solid black;
            border-radius:30px;
        }
        button:hover{
            background:black;
            color:white;
        }
    }
`


export function Tone() {
    let [song,setSong] = useState("https://tonejs.github.io/audio/berklee/gong_1.mp3")
    let player = new ToneJS.Player(song)
    
    function onDrop(e){
        e.preventDefault()

        Array.from(e.dataTransfer.items).forEach(item=>{
            if(item.kind === 'file'){
                let file = item.getAsFile()
                let reader = new FileReader()
                reader.readAsArrayBuffer(file)

                reader.addEventListener("loadend",async f=>{
                    const audioContext = new AudioContext();
                    const audioBuffer = await audioContext.decodeAudioData(reader.result);
                    setSong(audioBuffer)
        
                    alert("song loaded")
                }) 
            }
        })
    }

    function play(effect=""){
        let distortion = null
        player.disconnect()

        if(effect === "reverb")
            distortion = new ToneJS.Reverb(2).toDestination()
        else if(effect === "eq")
            distortion = new ToneJS.EQ3(5,.1,2).toDestination()
        else if(effect === "distortion")
            distortion = new ToneJS.Distortion(0.8).toDestination()
        else
            player.toDestination()
        
        if(distortion)
            player.connect(distortion)

        ToneJS.loaded().then(() => {
            player.start()
        })
    }

    return (
        <Style onDragOver={e=>{e.preventDefault()}} onDrop={onDrop}>
            <nav>
                <button onClick={()=>play()}>play</button>
                <button onClick={()=>play("reverb")}>reverb</button>
                <button onClick={()=>play("eq")}>eq</button>
                <button onClick={()=>play("distortion")}>distortion</button>
            </nav>

            <p>Drag and Drop audio here</p>
        </Style>
    )
}
