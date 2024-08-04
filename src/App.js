// App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import './App.css';
const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleAddMovie = (newMovie) => {
    const updatedMovies = [...movies, { ...newMovie}];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  const handleFilter = (filterCriteria) => {
    const { title, rating } = filterCriteria;
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase()) &&
      (rating === '' || movie.rating === rating)
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="app">
      <AddMovie onAdd={handleAddMovie} />
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
