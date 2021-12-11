import React from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTopRated} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToTvFavorites'

const AiringNowPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('top rated', getTopRated)

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
      title="Airing npw"
     shows={shows}
      action={(show) => {
        return <AddToFavoritesIcon show={show} />
      }}
    />
  );
};

export default AiringNowPage;