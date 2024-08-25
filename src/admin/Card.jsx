import React from "react";

export default function Card({
  id,
  title,
  price,
  category,
  image,
  description,
}) {
  return (
    <div className='card'>
      <img src={image} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>
          {title} - {price}$
        </h5>
        <p className='card-text'>{description}</p>

        <p className='card-text'>{category}</p>
      </div>
    </div>
  );
}
