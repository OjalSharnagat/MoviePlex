import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// 8edc5d83 api key
// 85428faf7b59c658b6fb669ab53d6d12

const  API_URL = 'http://www.omdbapi.com?apikey=8edc5d83';

const App = () => {
  const [searchTerm, setSearchTerm] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>ChillFlix</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
