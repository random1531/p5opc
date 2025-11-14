"use client"
import "./contactform.css"
import { useState ,useEffect} from "react"
export default function contactform({ name, close }) {
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [succes,SetSucces]=useState(false)

    const form = {
        name: nom,
        surname: prenom,
        emails: email,
        mesg: message
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        SetSucces(!succes)
    }
useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    return (

        <div className="test">
                {succes && <p>Formulaire envoyer avec succes</p>}
            <div className="containerform">
                <div className="headform">
                    <h3>Contactez-moi</h3>
                    <p>{name}</p>
                    <p onClick={close} className="exitcross">X</p>
                </div>
                <form action="">

                    <div className="formsection">
                        <label htmlFor="prenom">Prénom</label>
                        <input className="champ" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} type="text" />
                    </div>
                    <div className="formsection">
                        <label htmlFor="nom">Nom</label>
                        <input className="champ" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} type="text" />
                    </div>
                    <div className="formsection">
                        <label htmlFor="email">Email</label>
                        <input className="champ" id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
                    </div>
                    <div className="formsection">
                        <label htmlFor="message">Votre message</label>
                        <input className="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} type="text" />
                    </div>
                    <button onClick={handleSubmit} className="sendbutton">Envoyer</button>
                </form>
            </div>
        </div>


    )
}