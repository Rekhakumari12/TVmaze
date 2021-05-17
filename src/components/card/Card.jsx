import React from 'react';
import filteredData from '../filteredData';
import './card.css'
import { Link } from 'react-router-dom';
const Card = ({ singleData, cat }) => {
  const {image, name, rating, summary, id} = filteredData(singleData);
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
      <div className="m-2 card_custom_style">
        <div className="card" style={{ width: "20rem" }}>
          <img src={image} alt={name} />
          <div className="card-body">
            <Link to={`/shows/${id}`}><h6 className="card-title font-weight-bold">{name}</h6></Link>
            <p className="card-text summary d-inline">{summary?summary:"This is the show"}...</p>&nbsp;&nbsp;<p className="d-inline rating"><i className="fas fa-star star_icon text-warning"></i>{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;