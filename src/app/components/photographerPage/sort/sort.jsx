import "./sort.css"
export default function sort({ likes }) {
    return (
        <select onChange={likes} name="" id="">
            <option  value="Popularité">Popularité</option>
            <option value="Date">Date</option>
            <option value="Titre">Titre</option>
        </select>
    )
}