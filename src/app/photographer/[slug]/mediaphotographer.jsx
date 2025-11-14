import { getAllMediasForPhotographer,updateNumberOfLikes } from "../../lib/prisma-db"
import MediaCard from "../../components/cardmedia/cardmedia"
import "./photographer.css"
export default async function dataphoto({ params }) {
    const { slug } = await params
    const dataphoto = await getAllMediasForPhotographer(parseInt(slug))
    
    const handlelike = (e)=>{
        updateNumberOfLikes(e.id,e.likes+1)
    }

    return (
        <div className="containermedia">
        {dataphoto.map((e)=>(
           <MediaCard key={e.id} title={e.title}  picture={e.image} picturename={e.title} nblike={e.likes} video={e.video} id={e.id} />
        ))}
        </div>
    )
}