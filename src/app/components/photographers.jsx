import { getAllPhotographers } from "../lib/prisma-db"
import Image from "next/image"
import "./photographers.css"
import Link from "next/link"


export default async function photographers() {
    const DataPhotographer = await getAllPhotographers()
    return (
        <div className="photographers">
            {DataPhotographer.map((item) => (
                <Link href={`/photographer/${item.id}`} key={item.id}>
                    <div className="photographercard">
                        <Image className="photographerportrait" src={`/${item.portrait}`} alt="" width={300} height={300} />
                        <h3 className="photographername">{item.name}</h3>
                        <p className="photographerlocalisation">{item.city},{item.country}</p>
                        <p className="photographertagline">{item.tagline}</p>
                        <p className="photographerprice">{item.price}€/jour</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}