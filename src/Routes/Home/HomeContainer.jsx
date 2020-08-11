import React from "react";

import HomePresenter from "./HomePresenter";
import { getMovies, getShow } from "../../api";

export default class extends React.Component {
  state = {
    popularMovies: null,
    popularShows: null,
    upComingMovies: null,
    topRatedShows: null,
    error: null,
    isLoading: true,
  };

  async componentDidMount() {
    try {
      const fetchPopularMovies = await getMovies.popular();
      const fetchPopularShows = await getShow.popular();
      const fetchUpComingMovies = await getMovies.upComing();
      const fetchTopRatedShows = await getShow.topRated();

      const popularMovies = await fetchPopularMovies.data.results;
      const popularShows = await fetchPopularShows.data.results;
      const upComingMovies = await fetchUpComingMovies.data.results;
      const topRatedShows = await fetchTopRatedShows.data.results;

      this.setState({
        popularMovies: popularMovies,
        popularShows: popularShows,
        upComingMovies: upComingMovies,
        topRatedShows: topRatedShows,
      });
    } catch (error) {
      this.setState({
        error: "Can't find movies information",
      });
    }
    this.setState({
      isLoading: false,
    });
  }
  render() {
    const {
      popularMovies,
      popularShows,
      upComingMovies,
      topRatedShows,
      error,
      isLoading,
    } = this.state;
    console.log(this.state);
    return (
      <HomePresenter
        popularMovies={popularMovies}
        popularShows={popularShows}
        upComingMovies={upComingMovies}
        topRatedShows={topRatedShows}
        error={error}
        isLoading={isLoading}
      />
    );
  }
}
