import React, { useState } from "react";
import "./destination.css";
import { data } from "../../data";
import Navbar from "../../componenets/navbar/Navbar";
function Destination() {
  const des = data.destinations;
  const [value, setValue] = useState(0);

  const { description, images, distance, name, travel } = des[value];

  return (
    <div className="destination--bg">
      <Navbar />
      <div className="destination">
        <div className="destination-header">
          <h1 className="des-num">01</h1>
          <span className="des-span">pick your destination</span>
        </div>
      </div>

      <div className="destination-container">
        <img src={images} alt="" />
        <main className="destination-info-sec">
          <div className="destination-btn">
            {des.map((item, index) => {
              return (
                <a
                  href="#"
                  key={index.id}
                  onClick={() => {
                    setValue(index);
                  }}
                  className={`des-btn ${index === value && "active-btn"}`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="des-info">
            <p className="des-header-p">{name}</p>
            <p>{description}</p>
            <div className="des-line"></div>
            <div className="des-distance">
              <article>
                <h4>avg. distance</h4>
                <h2>{distance}</h2>
              </article>
              <aside>
                <h4>est. travle time</h4>
                <h2>{travel}</h2>
              </aside>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Destination;
