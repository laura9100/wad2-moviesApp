import React from "react";
import ReactDOM from "react-dom";
import MovieReviewPage from "./pages/movieReviewPage";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TopRatedPage from "./pages/topRatedPage";
import AiringNowPage from "./pages/airingNowPage";
import TvShowsPage from "./pages/tvShowPage";
import tvDetailsPage from "./pages/tvDetailsPage";
import tvReviewPage from "./pages/tvReviewPage";
import LoginPage from "./pages/loginPage";
import AuthProvider from "./contexts/authContext";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";
import MovieProvider from "./contexts/mContext";
import SignUpPage from "./pages/signupPage";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthProvider>
          <AuthHeader />
        <SiteHeader />
        <MovieProvider>
          <MoviesContextProvider>
            {" "}     {/* New Header  */}
       
      <Switch>
      <Route exact path="/reviews/form" component={AddMovieReviewPage} />
      <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
      <Route exact path="/movies/toprated" component={TopRatedPage} />
      <Route exact path="/shows/airingnow" component={AiringNowPage} />
      <Route path="/reviews/:id" component={MovieReviewPage} />
        <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route exact path="/shows/tvShows" component={TvShowsPage} />
        <Route exact path="/shows/:id" component={tvDetailsPage} /> 
        <Route path="/tvreviews/:id" component={tvReviewPage} />
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Redirect from="*" to="/" />
      </Switch>
      </MoviesContextProvider>
      </MovieProvider>
      </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));