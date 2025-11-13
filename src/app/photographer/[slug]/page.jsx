import HeadPhoto from "./dataphotographer"
import Mediaphoto from "./mediaphotographer"
export default function photographer({ params }){
    return(
        <>
        <HeadPhoto params={params}/>
        <Mediaphoto params={params}/>
        </>
    )
}