import { getAllPhotographers } from "../lib/prisma-db"
import Image from "next/image"
import "./photographers.css"
import Link from "next/link"


export default async function photographers() {
    const DataPhotographer = await getAllPhotographers()
    return (
        <div className="photographers">
            {DataPhotographer.map((item) => (
                <Link href={`/photographer/${item.id}`} aria-label={item.name} key={item.id}>
                    <div className="photographercard">
                        <Image className="photographerportrait" src={`/${item.portrait}`} alt={item.name} width={300} height={300} />
                        <h2 aria-label={item.name} className="photographername">{item.name}</h2>
                        <p className="photographerlocalisation">{item.city},{item.country}</p>
                        <p className="photographertagline">{item.tagline}</p>
                        <p className="photographerprice">{item.price}€/jour</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}