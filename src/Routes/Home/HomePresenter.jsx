import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  padding-top: 60px;
  color: white;
`;
const List = styled.ul``;
const Item = styled.li``;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
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
      <List>
        <Title>Popular Movies</Title>
        {popularMovies.map((movie) => (
          <Item key={movie.id}>{movie.title}</Item>
        ))}
      </List>
      <List>
        <Title>Popular TV series</Title>
        {popularShows.map((show) => (
          <Item key={show.id}>{show.name}</Item>
        ))}
      </List>
      <List>
        <Title>Comming Soon</Title>
        {upComingMovies.map((movie) => (
          <Item key={movie.id}>{movie.title}</Item>
        ))}
      </List>
      <List>
        <Title>Top Rated</Title>
        {topRatedShows.map((show) => (
          <Item key={show.id}>{show.name}</Item>
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
