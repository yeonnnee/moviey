import React from "react";

import DetailPresenter from "./DetailPresenter";
import { getShow, getMovies } from "../../api";

export default class extends React.Component {
  state = {
    item: null,
    error: null,
    isLoading: true,
  };

  async componentDidMount() {
    try {
      if (this.props.location.pathname.includes("movie")) {
        const movieId = await this.props.match.params.id;
        const fetchMovieData = await getMovies.movieDetail(movieId);
        const movie = await fetchMovieData.data;
        this.setState({
          item: movie,
        });
      } else {
        const showId = await this.props.match.params.id;
        const fetchShowData = await getShow.showDetail(showId);
        const show = await fetchShowData.data;
        this.setState({
          item: show,
        });
      }
    } catch (error) {
      this.setState({
        error: "Something went wrong",
      });
    }
    this.setState({
      isLoading: false,
    });
  }
  render() {
    const { item, error, isLoading } = this.state;
    return <DetailPresenter item={item} error={error} isLoading={isLoading} />;
  }
}
