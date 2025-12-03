import { getAllPhotographers } from "../lib/prisma-db"
import Image from "next/image"
import "./photographers.css"
import Link from "next/link"


export default async function photographers() {
    const DataPhotographer = await getAllPhotographers()
    return (
        <div className="photographers">
            {DataPhotographer.map((item) => (
                <Link href={`/photographer/${item.id}`} aria-label={`accedez a la page de ${item.name}`} key={item.id}>
                    <div className="photographercard">
                        <Image className="photographerportrait" src={`/${item.portrait}`} alt={item.name} aria-label={item.name} width={300} height={300} />
                        <h2 aria-label={item.name} className="photographername">{item.name}</h2>
                        <span className="photographerlocalisation">{item.city},{item.country}</span>
                        <span className="photographertagline">{item.tagline}</span>
                        <span className="photographerprice">{item.price}€/jour</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}