import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ShowList from "../tvList";
import Header from "../headerMovieList";
import FilterCard from "../filterTvShowCard";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});


function TvShowListPageTemplate({ shows, title, action }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);
  


  let displayedShows = shows
  .filter((s) => {
    return s.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  })
  .filter((s) => {
    return genreId > 0 ? s.genre_ids.includes(genreId) : true;
  });
    
 
  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };


  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
      {<Header title={title} /> }
      </Grid>
      <Grid item container spacing={5}>
        
      <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
        
      <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
          
        </Grid>
        <ShowList action={action} shows={displayedShows}></ShowList>
    

      </Grid>
    </Grid>
  );
};

export default TvShowListPageTemplate;

