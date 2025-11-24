"use client"
import "./buttonmodal.css"
import Image from "next/image"
import { useState } from "react"
import ModalMedia from "../modal/ModalMedia"
export default function picturecard({ picture, video, picturename,dataformodal,indexselected }) {
    const [isOpen, setisOpen] = useState(false)
    const [index,setIndex] = useState()

    const handleCilck = ()=>{
       setisOpen(!isOpen)
       setIndex(indexselected)
    }

    return (
        <>
            {picture &&
                <Image onClick={handleCilck} className="video" src={`/${picture}`} alt={picturename} width={350} height={300} />

            }
            {video &&

                <video onClick={handleCilck} className="video" src={`/${video}`} alt={picturename} autoPlay loop />
            }
            {isOpen && 
                <ModalMedia ind={index} Click={()=> setisOpen(!isOpen)} data={dataformodal} />

            }
        </>
    )
}