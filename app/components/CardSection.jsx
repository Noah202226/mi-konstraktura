import React from "react";

const CardSection = ({ img, title, description }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-2 ">
      <figure>
        <img src={img} alt="Album" className="carditem" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Inquire</button>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
