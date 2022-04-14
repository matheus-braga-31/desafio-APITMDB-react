import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Icon from "./assets/Icon.png";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Show from "./pages/Show";
import Footer from "./pages/Footer";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div``;

const HeaderContainer = styled.div`
  background-color: #0b090a;
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: fixed;
`;

const IconBox = styled.div`
  width: 30vw;
  background-color: white;
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 10vw;
`;

const NavigationContainer = styled.nav`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #0b090a;
`;

const LinkList = styled.ul`
  height: 100%;
  width: 50vw;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const ListItem = styled.li`
  height: 6vh;
  width: 100%;
  display: flex;
  &:hover {
    font-weight: bolder;
    transition: all 0.4s;
  }
`;
const SectionLink = styled(Link)`
  text-decoration: none;
  color: #f4f1de;
`;

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <GlobalStyle />
          <HeaderContainer>
            <IconBox>
              <Image src={Icon} alt="Ícone da página" />
            </IconBox>
            <NavigationContainer>
              <LinkList>
                <ListItem>
                  <SectionLink to="/">Home</SectionLink>
                </ListItem>
                <ListItem>
                  <SectionLink to="movies">Filmes</SectionLink>
                </ListItem>
                <ListItem>
                  <SectionLink to="show">Séries</SectionLink>
                </ListItem>
              </LinkList>
            </NavigationContainer>
          </HeaderContainer>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="show" element={<Show />} />
          </Routes>
          <Footer />
        </Container>
      </Router>
    );
  }
}
