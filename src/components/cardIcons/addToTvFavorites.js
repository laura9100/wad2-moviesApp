import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToFavoritesTvIcon = ({ show }) => {
  const context = useContext(MoviesContext);

  const handleAddToTvFavorites = (e) => {
    e.preventDefault();
    context.addToTvFavorites(show);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToTvFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesTvIcon;