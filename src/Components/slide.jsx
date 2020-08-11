import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0;
  margin: 0;
  height: 300px;
  position: relative;
  overflow: hidden;
`;
const Input = styled.input`
  display: none;
  text-align: center;
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  text-align: center;
  [id="btn1"]:checked ~ List {
    margin-left: 0%;
  }
  [id="btn2"]:checked ~ List {
    margin-left: -100%;
  }
  [id="btn3"]:checked ~ List {
    margin-left: -200%;
  }
  [id="btn4"]:checked ~ List {
    margin-left: -300%;
  }

  [id="btn1"]:checked ~ [name="btn"] > Label:nth-child(1) {
    background: #666;
  }
  [id="btn2"]:checked ~ [name="btn"] > Label:nth-child(2) {
    background: #666;
  }
  [id="btn3"]:checked ~ [name="btn"] > Label:nth-child(3) {
    background: #666;
  }
  [id="btn4"]:checked ~ [name="btn"] > Label:nth-child(4) {
    background: #666;
  }
`;
const List = styled.ul`
  width: 400%;
  height: 100%;
  transition: 1s;
  ::after {
    content: "";
    display: block;
    clear: both;
  }
`;
const Item = styled.li`
  float: left;
  width: 25%;
  height: 100%;
  :nth-child(1) {
    background-color: pink;
  }
  :nth-child(2) {
    background-color: white;
  }
  :nth-child(3) {
    background-color: blue;
  }
  :nth-child(4) {
    background-color: yellow;
  }
`;
const Label = styled.label`
  display: inline-block;
  vertical-align: middle;
  width: 10px;
  height: 10px;
  border: 2px solid #666;
  background: #fff;
  transition: 0.3s;
  border-radius: 50%;
  cursor: pointer;
`;
const Wrapper = styled.div``;

export default Slide = () => {
  <Container id="slide">
    <Input type="radio" name="btn" id="btn1" checked />
    <Input type="radio" name="btn" id="btn2" checked />
    <Input type="radio" name="btn" id="btn3" checked />
    <Input type="radio" name="btn" id="btn4" checked />
    <List>
      <Item>slid 1</Item>
      <Item>slid 2</Item>
      <Item>slid 3</Item>
      <Item>slid 4</Item>
    </List>
    <Wrapper className="btn-wrapper">
      <Label htmlFor="bnt1">1</Label>
      <Label htmlFor="bnt2">2</Label>
      <Label htmlFor="bnt3">3</Label>
      <Label htmlFor="bnt4">4</Label>
    </Wrapper>
  </Container>;
};
