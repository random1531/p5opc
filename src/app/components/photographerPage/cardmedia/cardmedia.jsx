

import "./cardmedia.css"
import Image from "next/image"
import { FaHeart } from "react-icons/fa";
import Likes from "./likes/likes"
import MediaCard from "../buttonmodal/buttonmodal"

export default function cardmedia({id,video,picture,picturename,title,nblike,dataformodal,idx}){
 
    
    return(
        <article className="cardmedia"  aria-label={picturename} >
       
            <MediaCard className="video" indexselected={idx} picture={picture} video={video} picturename={picturename} dataformodal={dataformodal}/>
            <div className="footercard">
                <span className="mediatitle">{title}</span>
              <Likes id={id} nblike={nblike}/>
            </div>
        </article>
    )
}