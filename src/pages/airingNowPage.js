import React from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getAiringNow} from '../api/tmdb-api'


const AiringNowPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('Airing now', getAiringNow)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;

 

  return (
    <PageTemplate
      title="Airing Now"
     shows={shows}
      action={(show) => {
      }}
    />
  );
};

export default AiringNowPage;