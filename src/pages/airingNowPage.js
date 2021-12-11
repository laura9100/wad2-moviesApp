import React from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getAiringNow} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToTvFavorites'

const AiringNowPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('Airing now', getAiringNow)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;

  // Redundant, but necessary to avoid app crashing.
  const tvFavorites = shows.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(tvFavorites))
 

  return (
    <PageTemplate
      title="Airing Now"
     shows={shows}
      action={(show) => {
        return <AddToFavoritesIcon show={show} />
      }}
    />
  );
};

export default AiringNowPage;