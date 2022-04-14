import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

const Container = styled.div`
  height: 20vh;
  background-color: #0b090a;
`;

const List = styled.ul`
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`;

const ListItem = styled.li`
  text-decoration: none;
  list-style: none;
  &:hover {
    cursor: pointer;
    font-weight: bolder;
    transition: all 0.4s;
  }
`;

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Container>
    );
  }
}
