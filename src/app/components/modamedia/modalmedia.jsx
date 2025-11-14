"use client"
import "./modalmedia.css"
import { ImCross } from "react-icons/im";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect } from "react"
export default function modalmedia({ data, Click, ind }) {

    const [actualindex, setIndex] = useState(ind)
    const item = data.find((item, index) => index === actualindex)

    const lg = data.length
    console.log(lg)
    const handleCarousel = () => {

    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    console.log(item)
    return (
        <div className="modalmedia">
            <ImCross className="exit" onClick={Click} />
            <div className="contentmodal">
                <FaAngleLeft className="arrow" onClick={() => setIndex(actualindex > 0 ? actualindex - 1 : data?.length - 1)} />
                {item && item.image &&
                    <Image className="media" src={`/${item.image}`} width={400} height={300} alt={item.title} />
                }{
                    item && item.video &&
                    <video className="media" src={`/${item.video}`} autoPlay loop />
                }

                <FaAngleRight className="arrow" onClick={() => setIndex(actualindex < lg - 1 ? actualindex + 1 : 0)} />
            </div>
        </div>
    )
}