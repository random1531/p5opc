import { getPhotographer } from "../../lib/prisma-db"
import Buttonform from "../../components/button/buttonactionform"
import Image from "next/image"
import "./photographer.css"
export default async function dataphoto({ params }) {
    const { slug } = await params
    const dataphoto = await getPhotographer(parseInt(slug))
    
    return (
        <div className="head">
            <div>
                <h2 className="photographname">{dataphoto?.name}</h2>
                <p className="photographlocalisation">{dataphoto?.city}, {dataphoto?.country}</p>
                <span className="photographertagline">{dataphoto?.tagline}</span>
            </div>

        <Buttonform phname={dataphoto?.name}/>

        <Image className="photographportrait" src={`/${dataphoto?.portrait}`} alt="" width={200} height={200}/>
        </div>
    )
}