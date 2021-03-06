import React, {lazy, Suspense } from "react";
// import TvHeader from "../headerTv";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/ImageList";
import GridListTile from "@material-ui/core/ImageListItem";
import { getShowImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'


const TvHeader = lazy(() => import("../headerTv"));

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: '100vh',
  },
}));

  const TemplateTvPage = ({ show, children }) => {
    const classes = useStyles();
    const { data , error, isLoading, isError } = useQuery(
      ["images", { id: show.id }],
      getShowImages
    );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.posters 

  return (
    <>
    <Suspense fallback={<h1>Getting header</h1>}>
    <TvHeader show={show} />
      </Suspense>
    

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div className={classes.root}>
            <GridList rowHeight={500} className={classes.gridList} cols={1}>
              {images.map((image) => (
                <GridListTile key={image.file_path} className={classes.gridListTile} cols={1}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt={image.poster_path}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};


export default TemplateTvPage;