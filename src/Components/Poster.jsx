import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;
const ImageContainer = styled.div``;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  height: 230px;
  margin-bottom: 5px;
  border-radius: 4px;
  &:hover {
    box-shadow: inset 0 -20px 30px black;
    transform: scale(1.5);
  }
  transition: all 0.2s linear;
`;
const Title = styled.div``;
const List = styled.ul``;

const Item = styled.li``;

const Poster = ({ id, title, imageUrl, genres, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `http://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../asset/unnamed.png")
          }
        />
        <Title>
          {title.length > 15 ? `${title.substring(0, 18)}...` : title}
        </Title>
        {genres && genres.length > 0 && (
          <List>
            {genres.map((genre) => (
              <Item key={genre.id}>{genre.name}</Item>
            ))}
          </List>
        )}
      </ImageContainer>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  genre: PropTypes.array,
  isMovie: PropTypes.bool.isRequired,
};

export default Poster;
