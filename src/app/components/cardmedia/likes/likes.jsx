"use client"
import "./likes.css"
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import addlikes from "../../../action/addlikes.jsx"

export default function likes({id,nblike}) {
    const [likes,setLikes] = useState(parseInt(nblike))

    const handleLike = async ()=>{
        console.log(parseInt(id) )
        setLikes(likes+1)
        await addlikes(parseInt(id),parseInt(likes))
    }

    return (
        <div className="likesadd">
            <p id={parseInt(id)}  className="mediatitle">{likes}</p>
            <FaHeart className="eart"  onClick={handleLike} />
        </div>
    )
}