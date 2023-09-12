import "./Card.css"

export default function Card(props){
    return(
        <div className="card">
            <img src="" alt="" className="img-card"></img>
            <h2 className="card-tittle">{props.year}</h2>
            <h2 className="card-tittle">{props.price}</h2>
            <h2 className="card-tittle">{props.model}</h2>
            <h2 className="card-tittle">{props.location}</h2>
        </div>
    )
}