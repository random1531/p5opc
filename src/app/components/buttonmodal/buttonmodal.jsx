"use client"
import "./buttonmodal.css"
import Image from "next/image"
import { useState } from "react"
import ModalMedia from "../../components/modamedia/modalmedia"
export default function picturecard({ picture, video, picturename,dataformodal,indexselected }) {
    const [isOpen, setisOpen] = useState(false)
    const [index,setIndex] = useState()

    const handleCilck = ()=>{
       setisOpen(!isOpen)
       setIndex(indexselected)
    }
console.log(index)
    return (
        <>
            {picture &&
                <Image onClick={handleCilck} className="video" src={`/${picture}`} alt={picturename} width={350} height={300} />

            }
            {video &&

                <video onClick={handleCilck} className="video" src={`/${video}`} autoPlay loop />
            }
            {isOpen && 
                <ModalMedia ind={index} Click={()=> setisOpen(!isOpen)} data={dataformodal} />

            }
        </>
    )
}