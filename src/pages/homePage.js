import React from "react";
import PageTemplate from "../components/templateMovieListPage";
// import { useQuery } from 'react-query'
// import Spinner from '../components/spinner'
// import {getMovies} from '../api/movie-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import {useContext} from 'react';
import{MoviesContext} from '../contexts/mContext'

const HomePage = (props) => {
  const context = useContext(MoviesContext)
  // const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)

  // if (isLoading) {
  //   return <Spinner />
  // }

  // if (isError) {
  //   return <h1>{error.message}</h1>
  // }  
  // const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = context.movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  //const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
    title="Discover Movies"
    movies={context.movies}
    action={(movie) => {
      return <AddToFavoritesIcon movie={movie} />
    }}
    />    
  );
};

export default HomePage;