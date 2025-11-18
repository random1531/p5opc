"use client"
import "./sort.css"
import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function sort({ likes }) {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState("Popularité")

    const handleClose = (e) => {
        setSelected(e)
        setIsOpen(!isOpen)
    }

    return (
        <div className="list">
            {!isOpen &&
                <div onClick={() => setIsOpen(!isOpen)} className="listSort">
                    <p >{selected}</p>
                    <FaChevronDown />
                </div>
            }
            {isOpen &&
                <div className="listSortExtand" >
                    <div >
                        <div onClick={()=> handleClose("Popularité")} className="firstsort" >
                            <option onClick={likes} value="Popularité">Popularité</option>
                            <FaChevronUp />
                        </div>
                        <hr></hr>
                        <div onClick={()=> handleClose("Date")} >

                            <option onClick={likes} value="Date">Date</option>
                        </div>
                        <hr></hr>
                        <div onClick={()=> handleClose("Titre")} >

                            <option onClick={likes} value="Titre">Titre</option>
                        </div>
                    </div>
                </div>
            }

        </div>

    )
}