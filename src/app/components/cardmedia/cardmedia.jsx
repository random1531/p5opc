

import "./cardmedia.css"
import Image from "next/image"
import { FaHeart } from "react-icons/fa";



export default function cardmedia({addlikes,video,picture,picturename,title,nblike,type}){

    
    return(
        <div className="cardmedia" >
            {picture && 
            <Image className="video" src={`/${picture}`} alt={picturename} width={350} height={300}/>

            }
            {video &&
            
            <video className="video" src={`/${video}`}  autoPlay loop/>
            }
            <div className="footercard">
                <p className="mediatitle">{title}</p>
                <p className="mediatitle">{nblike}</p>
                <FaHeart className="eart"  onClick={console.log(nblike)}/>
            </div>
        </div>
    )
}