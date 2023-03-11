import '../Style-sheets/card.css'

function Card(props) {
    return(
        <div className='card' style={{backgroundColor: props.fondo}}>
            <img src={props.img} className='card__img' alt={`Imagen ${props.title}`}/>
            <h1 className='card__title' sr-only>{props.title}</h1>
            <p className='card__paragraph'>{props.paragraph}</p>
            <button className='card__button' style={{color: props.fondo}}>Learn More</button>
        </div>
    )
}

export default Card;