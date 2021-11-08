import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";

const UpcomingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]);

  


  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='Discover Movies'
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