"use client"
import "./buttonactionform.css"
import { useState } from "react"
import FormContact from "../contactform/contactform"
export default function buttonform({phname}) {
    const [isOpen, setisOpen] = useState(false)
    console.log(isOpen)
    return (<div>
        <button onClick={() => setisOpen(!isOpen)} className="buttonaction">Contactez-moi</button>
        {isOpen && <FormContact name={phname}  close={() => setisOpen(!isOpen)}/>}
    </div>
    )

}