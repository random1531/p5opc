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


    const leftnav = () => setIndex(actualindex > 0 ? actualindex - 1 : data?.length - 1)
    const rightnav = () => setIndex(actualindex < lg - 1 ? actualindex + 1 : 0)


    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };

    }, []);

    const usekeyboard = (e) => {
        if (e.key === "ArrowRight") {
            rightnav()
        }
        if (e.key === "ArrowLeft") {
            leftnav()
        }
        if (e.key === "Escape") {
            Click()
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", usekeyboard)
    })

    return (
        <div className="modalmedia">
            <ImCross className="exit" onClick={Click} />
            <div className="contentmodal">
                <FaAngleLeft aria-label="left navigation" className="arrow" onClick={leftnav} />
                {item && item.image &&
                    <Image className="media" src={`/${item.image}`} width={400} height={300} alt={item.title} />
                }{
                    item && item.video &&
                    <video className="media" src={`/${item.video}`} autoPlay loop />
                }
                <FaAngleRight className="arrow" onClick={rightnav} />
            </div>
        </div>
    )
}