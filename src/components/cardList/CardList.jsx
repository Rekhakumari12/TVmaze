import React from 'react'
import Card from '../card/Card';
import './cardList.css';
const CardList = ({ data, cat }) => {
  return (
    <div className="container mt-5">
      {data.length > 0 ?
        <div className="card_area">
          <div className="row">
            {data.length !== 0 ? data.map((singleData, i) => {
              return <Card key={i} singleData={singleData} cat={cat} />
            }) : ""}
          </div>
        </div> : ""}
    </div>
  )
}
export default CardList;
