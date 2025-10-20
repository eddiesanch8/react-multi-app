import React, { useState, useEffect } from "react";
import "./css/product.css";
import dotenv from "dotenv";
dotenv.config();

export default function MovieCard() {
  // useEffect here
  return (
    <>
      {movies.map((movie) => (
        <section className="product" key={movie.id}>
          <img
            className="product__img"
            src={movie.image}
            alt={movie.alt_text}
          />
          <h2 className="product__name"> {movie.name}</h2>
          <div className="product__details">
            <p className="product__price">{movie.price}</p>
            <p className="product__location">|{movie.location}|</p>
            <p className="product__condition">{movie.item_condition}</p>
          </div>
          <button className="product__btn">
            <img className="product__cart" src={cart} />
            Add to Cart
          </button>
        </section>
      ))}
    </>
  );
}
