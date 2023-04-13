import { Link } from "react-router-dom";


const Item = ({ id, name, description, img }) => {


    return (

        <div className="card d-flex justify-content-between m-3">
            <img className="card-img-top h50" src={img} alt={name}></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            <Link className="btn btn-primary" to={`/item/${id}`}>ver detalle</Link>
        </div>
    )
}

export default Item