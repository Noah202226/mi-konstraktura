import React from "react";

const ServicesCards = () => {
  return (
    <div className="md:flex items-start justify-around mt-[-20px]">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="/s1.jpg" alt="Build" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Design and Build
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            We do concept to execution of interior design works for residential
            and commercial requirements.
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Cabinets</div>
            <div className="badge badge-outline">Chairs</div>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="/s2.jpg" alt="Build" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Design and Build
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            We do concept to execution of interior design works for residential
            and commercial requirements.
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Cabinets</div>
            <div className="badge badge-outline">Chairs</div>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="/s3.png" alt="Build" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Design and Build
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            We do concept to execution of interior design works for residential
            and commercial requirements.
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Cabinets</div>
            <div className="badge badge-outline">Chairs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
