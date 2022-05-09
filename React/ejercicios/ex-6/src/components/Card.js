export default function Card(props) {
    return (
        <div className="card w-50 m-auto" >{/* le damos width al contenedor para que la imagen se adapte y no al revés */}
            <img src={props.img} className="card-img-top" alt="Header" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.buttonLink} className="btn btn-primary">{props.buttonText}</a>
            </div>
        </div>
    )
}