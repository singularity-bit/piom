import { useState } from "react";
import Button from "../Button";
import "./Card.css";
function Card({ header, image, title, content }) {
  const [isActive, setActive] = useState(false);
  const handleClick = () => setActive(!isActive);
  return (
    <div className={isActive ? "card border-success m-3 h-100" : "card border-dark m-3 h-100"}>
        <div className="card-header">{header}</div>
        <div className={isActive ?'card-body text-success':'card-body text-dark'}>
          <img src={image} loading="lazy" className="card-img-top mb-2" alt={title} />
          <h5 className="card-title">{title}</h5>
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
