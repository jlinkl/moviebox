import React from 'react';
import './App.css';
import MovieBox from './containers/MovieBox';

function App() {
  return (
    <>
      <h1>Upcoming Film Releases for the UK</h1>
      <MovieBox className="movie-box"/>
    </>

  );
}

export default App;
