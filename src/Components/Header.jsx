import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  box-shadow: 0 0 20px black;
  position: fixed;
  height: 50px;
`;
const List = styled.ul`
  width: 300px;
  height: 50px;
  margin-left: 20px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Item = styled.li`
  font-size: 15px;
  color: ${(props) => (props.current ? "grey" : "white")};
  &:hover {
    color: grey;
  }
`;
const SLink = styled(Link)``;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">HOME</SLink>
      </Item>
      <Item current={pathname === "/movie"}>
        <SLink to="/movie">MOVIE</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">SEARCH</SLink>
      </Item>
    </List>
  </Header>
));
