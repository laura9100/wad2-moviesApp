import React, { useState } from "react";
export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [tvFavorites, setTvFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [myPlaylist, setMyPlaylist] = useState([] ) 

  const addToFavorites = (movie) => {
    setFavorites([...favorites,movie.id])
  };

  
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToPlaylist = (movie) => {
    setMyPlaylist([...myPlaylist,movie.id])
  }; 

  console.log(myPlaylist)

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        tvFavorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        myPlaylist,
        addToPlaylist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;