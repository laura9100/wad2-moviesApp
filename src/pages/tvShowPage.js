import React from "react";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTvShows} from '../api/tmdb-api'
import PageTemplate from "../components/templateTvShowListPage";




const TvShowsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('tvShows', getTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;

 // Redundant, but necessary to avoid app crashing.
 const Tvfavorites = shows.filter(s => s.favorite)
 localStorage.setItem('favorites', JSON.stringify(Tvfavorites))


  return (
    <PageTemplate
      title="TV Shows"
      shows={shows}
      action={(show) => {
      }}
    />
);
};
export default TvShowsPage;
