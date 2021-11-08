import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)
  
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;


  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}  
      action={(movie)=> {
        return(
        <IconButton aria-label="add to watchlist">
        <PlaylistAdd color="primary" fontSize="large" />
      </IconButton>        
        );
      } 
    } 
    />
  );
};
export default UpcomingMoviesPage;