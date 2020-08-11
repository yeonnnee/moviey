import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 70px 60px;
  color: white;
`;
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: 260px;
  gap: 20px;
  margin-bottom: 50px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const HomePresenter = ({
  popularMovies,
  popularShows,
  upComingMovies,
  topRatedShows,
  error,
  isLoading,
}) =>
  isLoading ? null : (
    <Container>
      <Title>Popular Movies</Title>
      <List>
        {popularMovies.map((movie) => (
          <Poster
            key={movie.popularity}
            id={movie.id}
            title={movie.original_title}
            imageUrl={movie.poster_path}
            genres={movie.genre_ids}
            isMovie={true}
          />
        ))}
      </List>
      <Title>Popular TV series</Title>
      <List>
        {popularShows.map((show) => (
          <Poster
            key={show.popularity}
            id={show.id}
            title={show.original_name}
            imageUrl={show.poster_path}
            genre={show.genre_ids}
            isMovie={false}
          />
        ))}
      </List>
      <Title>Comming Soon</Title>
      <List>
        {upComingMovies.map((movie) => (
          <Poster
            key={movie.popularity}
            id={movie.id}
            title={movie.original_title}
            imageUrl={movie.poster_path}
            genre={movie.genre_ids}
            isMovie={true}
          />
        ))}
      </List>
      <Title>Top Rated</Title>
      <List>
        {topRatedShows.map((show) => (
          <Poster
            key={show.popularity}
            id={show.id}
            title={show.original_name}
            imageUrl={show.poster_path}
            genre={show.genre_ids}
            isMovie={false}
          />
        ))}
      </List>
    </Container>
  );

HomePresenter.propTypes = {
  popularMovies: PropTypes.array,
  popularShows: PropTypes.array,
  upComingMovies: PropTypes.array,
  topRatedShows: PropTypes.array,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

export default HomePresenter;
