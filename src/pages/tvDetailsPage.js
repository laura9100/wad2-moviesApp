import React from "react";
import { withRouter } from "react-router-dom";
import TvShowDetails from "../components/tvDetails";
import PageTemplate from "../components/templateTvShowPage";
import { getShow } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
const TvDetailsPage = (props) => {
  const { id } = props.match.params

  const { data: show, error, isLoading, isError } = useQuery(
    ["show", { id: id }],
    getShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      {show ? (
        <>
          <PageTemplate show={show}>
            <TvShowDetails show={show} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for show details</p>
      )}
    </>
  );
};

export default withRouter(TvDetailsPage);