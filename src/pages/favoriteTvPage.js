import React, { useContext } from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getTvShows} from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIcons/removeFromTvFavorites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteShowPage = () => {
  const {tvFavorites: showIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favoriteShowQueries = useQueries(
    showIds.map((showId) => {
      return {
        queryKey: ["show", { id: showId }],
        queryFn: getTvShows,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteShowQueries.find((s) => s.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const shows = favoriteShowQueries.map((q) => q.data);
  //const toDo = () => true;

  return (
    <PageTemplate
    title="Favorite shows"
    shows={shows}
    action={(show) => {
      return (
        <>
          <RemoveFromFavorites show={show} />
          <WriteReview show={show} />
        </>
   );
  }}
/>
);
};

export default FavoriteShowPage;