import React from "react";

import Icon from "./PageAssets/Icon.png";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h1`
  text-shadow: 1px 1px #ba181b;
`;

const ImgBox = styled.div`
  width: 40vw;
  height: 30vh;
  border: solid 0.5rem;
  border-radius: 20%;
  box-shadow: 5px 5px #ba181b;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 12vw;
`;

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Title> Os melhores filmes, as melhores séries</Title>
        <ImgBox>
          <Image src={Icon} alt="ícone da página" />
        </ImgBox>
      </Container>
    );
  }
}
