import React, { useContext } from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getShow } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromTvFavorites from "../components/cardIcons/removeFromTvFavorites";

const FavoriteShowsPage = () => {
  const {tvFavorites: showsIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favoriteShowQueries = useQueries(
    showsIds.map((showsId) => {
      return {
        queryKey: ["shows", { id: showsId }],
        queryFn: getShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteShowQueries.find((s) => s.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const shows = favoriteShowQueries.map((q) => q.data);


  return (
    <PageTemplate
      title="Favorite Tv Shows"
      shows={shows}
      action={(show) => {
        return (
          <>
            <RemoveFromTvFavorites show={show} />
            
          </>
        );
      }}
    />
  );
};

export default FavoriteShowsPage;