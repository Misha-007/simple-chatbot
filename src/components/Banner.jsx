import React from "react";
import burger from "../assets/burger.jpg";
const Banner = () => (
  <section className="banner">
    <div className="content">
      <h1>Fast food, made fresh, right to your door</h1>
      <span className="call-to-action">
        Explore Our Menu <i className="fas fa-long-arrow-alt-right"></i>
      </span>
    </div>
    <img src={burger} alt="burger" />
  </section>
);

export default Banner;
