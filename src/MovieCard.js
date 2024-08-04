import React from 'react';
import './MovieCard.css';
const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <h3>{movie.title}</h3>
    <img src={movie.posterURL} alt={`${movie.title} poster`} />
    <p>{movie.description}</p>
    <p>Rating: {movie.rating}</p>
  </div>
);

export default MovieCard;
