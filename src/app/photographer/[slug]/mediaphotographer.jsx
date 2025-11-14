import { getAllMediasForPhotographer,updateNumberOfLikes } from "../../lib/prisma-db"
import MediaCard from "../../components/cardmedia/cardmedia"
import "./photographer.css"
export default async function dataphoto({ params }) {
    const { slug } = await params
    const dataphoto = await getAllMediasForPhotographer(parseInt(slug))
    
    

    return (
        <div className="containermedia">
        {dataphoto.map((e,index)=>(
           <MediaCard key={e.id} title={e.title} idx={index} picture={e.image} picturename={e.title} nblike={e.likes} video={e.video} id={e.id} dataformodal={dataphoto}/>
        ))}
        </div>
    )
}