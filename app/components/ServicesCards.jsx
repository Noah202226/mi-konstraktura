import React from "react";

const ServicesCards = () => {
  return (
    <div className="bg-transparent relative mt-10 m-1 md:m-0 w-46 md:w-full flex-row md:flex items-center md:items-start justify-stretch md:justify-around md:mt-[-10px]">
      <p className="absolute text-white bg-gray-700 rounded-xl p-4 w-full md:w-11/12 text-center text-4xl z-10 opacity-90 mt-[-50px]">
        Services
      </p>
      <div className="card w-full  md:w-96 mb-2 md:mb-0 bg-base-100 shadow-xl">
        <figure>
          <img src="/s1.jpg" alt="Build" className="services-card-image" />
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

      <div className="card w-full md:w-96 mb-2 md:mb-0 bg-base-100 shadow-xl">
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

      <div className="card w-full md:w-96 mb-2 md:mb-0 bg-base-100 shadow-xl">
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
