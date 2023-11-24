import { useState } from "react";
import Button from "../Button";
import "./Card.css";
import { Link } from "react-router-dom";
function Card({ header, image, title, content }) {
  const [isActive, setActive] = useState(false);
  const handleClick = () => setActive(!isActive);
  return (
    <div className={isActive ? "card border-success m-3 h-100" : "card border-dark m-3 h-100"}>
        <div className="card-header"><Link to={`/country/${header}`}>{header}</Link></div>
        <div className={isActive ?'card-body text-success':'card-body text-dark'}>
          <img src={image} loading="lazy" className="card-img-top mb-2" alt={title} />
          <Link to={`/capital/${title}`}><h5 className="card-title">{title}</h5></Link>
          <p className="card-text">{content}</p>

          <Button
            title={isActive ? "Remove from favorites" : "Add to favorites"}
            className={isActive ? "btn btn-success" :'btn btn-dark'}
            onClick={handleClick}
          />
         
        </div>
      </div>
  );
}
export default Card;
