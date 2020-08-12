import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
`;
const Background = styled.div`
  width: 100vw;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center, center;
  filter: blur(3px);
  opacity: 0.5;
`;
const Content = styled.div`
  width: 90%;
  height: 80vh;
  position: relative;
  top: -80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  grid-template-rows: 1fr;
`;
const Image = styled.div`
  width: 400px;
  height: 600px;

  background-image: url(${(props) => props.img});
  background-size: cover;
  border-radius: 10px;
  position: relative;
  left: 30%;
  top: -20px;
`;
const InfoCon = styled.div`
  position: relative;
  left: -140px;
`;
const Title = styled.div`
  color: white;
  font-size: 50px;
`;

const Info = styled.div`
  margin: 20px;
  color: white;
  font-size: 15px;
`;
const Span = styled.span`
  margin: 0 7px;
  &:nth-child(1) {
    padding-right: 7px;
  }
  &:not(:last-child) {
    border-right: 2px solid white;
  }
`;

const Desc = styled.p`
  color: white;
  font-size: 16px;
  width: 50vw;
  height: 20px;
  line-height: 1.5;
`;

const Season = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: 250px;
  height: 500px;
  width: 950px;
  gap: 10px;
`;

const Poster = styled.div`
  width: 170px;
  height: 250px;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  margin-top: 200px;
  border-radius: 10px;
  margin-bottom: 20px;
  &:hover {
    height: 270px;
    width: 190px;
  }
`;

const Detail = ({ item, isLoading, error }) =>
  isLoading ? null : (
    <Container>
      <Background
        bgImage={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
      />
      <Content>
        <Image img={`http://image.tmdb.org/t/p/w300${item.poster_path}`} />

        <InfoCon>
          <Title>{item.original_title ? item.original_title : item.name}</Title>
          <Info>
            <Span>
              {item.release_date
                ? item.release_date.substring(0, 4)
                : item.first_air_date.substring(0, 4)}
            </Span>
            {item.genres &&
              item.genres.length > 0 &&
              item.genres.map((genre) => (
                <Span key={genre.id}> {genre.name} </Span>
              ))}
            {item.origin_country &&
              item.origin_country.length > 0 &&
              item.origin_country.map((country) => (
                <Span key={item.origin_country[0]}>{country}</Span>
              ))}
          </Info>
          <Desc>{item.overview}</Desc>
          <Season>
            {item.seasons && item.seasons[1] && (
              <Poster
                key={item.seasons.air_date}
                imgUrl={`http://image.tmdb.org/t/p/original${item.seasons[1].poster_path}`}
              />
            )}
            {item.seasons && item.seasons[2] && (
              <Poster
                key={item.seasons.air_date}
                imgUrl={`http://image.tmdb.org/t/p/original${item.seasons[2].poster_path}`}
              />
            )}
            {item.seasons && item.seasons[3] && (
              <Poster
                key={item.seasons.air_date}
                imgUrl={`http://image.tmdb.org/t/p/original${item.seasons[3].poster_path}`}
              />
            )}
            {item.seasons && item.seasons[4] && (
              <Poster
                key={item.seasons.air_date}
                imgUrl={`http://image.tmdb.org/t/p/original${item.seasons[4].poster_path}`}
              />
            )}
            {item.seasons && item.seasons[5] && (
              <Poster
                key={item.seasons.air_date}
                imgUrl={`http://image.tmdb.org/t/p/original${item.seasons[5].poster_path}`}
              />
            )}
          </Season>
        </InfoCon>
      </Content>
    </Container>
  );

Detail.propTypes = {
  item: PropTypes.object,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

export default Detail;
