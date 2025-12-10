"use client"
import "./likes.css"
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import addlikes from "../../../../actions/addlikes.jsx"

export default function likes({id,nblike}) {
    const [likes,setLikes] = useState(parseInt(nblike))

    const handleLike = async ()=>{
        
        setLikes(likes+1)
        await addlikes(parseInt(id),parseInt(likes))
    }

    return (
        <div className="likesadd">
            <span id={parseInt(id)}  className="mediatitle">{likes}</span>
            <FaHeart className="eart"  onClick={handleLike} />
        </div>
    )
}