"use client"
import "./sort.css"
import { useState } from "react"
export default function sort({ likes }) {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState("Popularité")

 const handleClose = (e)=>{
     setSelected(e)
    setIsOpen(!isOpen)
}

    return (
<div className="list">
            {!isOpen && 
        <div className="listSort">
            <p onClick={() => setIsOpen(!isOpen)}>{selected}</p>
            </div>
            }
            {isOpen &&
                <div className="listSortExtand" >
                    <div >
                        <option onClick={likes}  value="Popularité">Popularité</option>
                        <hr></hr>
                        <option onClick={likes } value="Date">Date</option>
                        <hr></hr>
                        <option onClick={likes} value="Titre">Titre</option>
                    </div>
                </div>
            }

            </div>

    )
}