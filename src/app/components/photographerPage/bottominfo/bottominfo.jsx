import "./bottominfo.css"

export default function bottominfo({totallikes,price}){
    return(
        <div className="bottominfo">
           <span>
            {totallikes}
            </span> 
            <span>
                {price}€/jour
            </span>
        </div>
    )
}