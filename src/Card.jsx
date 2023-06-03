import './Card.css'

export function Card (props){
    return(
        <>
        <div className="card">
            <p className="card-content">Hola {props.name}!</p>
            <p className="card-content">Tu Juego favorito es: {props.game}</p>
        </div>
        </>
    )
}