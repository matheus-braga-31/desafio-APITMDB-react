import React from "react";
import axios from "axios";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const ContainerM = styled.div`
  background-color: #660708;
`;

const SearchInput = styled.input`
  margin: 5%;
  width: 25vw;
  height: 4vh;
  border-radius: 10px;
  margin-top: 25vh;
  border: none;
  font-size: 1.5vw;
  box-shadow: inset 0 0 1em #f5f3f4, 0 0 1em red;
`;

const MoviesContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Informations = styled.div`
  text-decoration: none;
  width: 30vw;
  height: 60vh;
  border: solid 0.5px;
  margin-bottom: 3vh;
  color: white;
  background-color: #a4161a;
  box-shadow: inset 0 0 1em gold, 0 0 1em red;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  &:hover {
    cursor: pointer;
    width: 31vw;
    height: 61vh;
    box-shadow: inset 0 0 0.5em gold, 0 0 1.5em red;
    transition: all 0.7s;
  }
`;

const Name = styled.h2``;

const ImgVote = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MovieBanner = styled.img`
  width: 12vw;
`;

const CountryBox = styled.div``;

const VoteBox = styled.div`
  background-color: #d3d3d3;
  height: 5vh;
  width: 5vw;
  color: black;
  border-radius: 2px;
  margin-left: 5vw;
  box-shadow: 3px 3px #161a1d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OverviewBox = styled.div`
  width: 90%;
  height: 30%;
  overflow: scroll;
`;

const apiFilmes = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=c46de2fe6856ee0696877e35e9de24d5"
});

export default class App extends React.Component {
  state = {
    listaDeFilmes: [],
    filmesFiltrados: []
  };

  async componentDidMount() {
    this.getFilmes();
  }

  getFilmes = async () => {
    const response = await apiFilmes.get();
    const filmes = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
        description: item.overview,
        origin: item.origin_country,
        vote: item.vote_avarage
      };
    });

    this.setState({
      listaDeFilmes: filmes,
      filmesFiltrados: filmes
    });
  };

  filtrarFilmes = (event) => {
    const { listaDeFilmes } = this.state;

    if (event.target.value === "") {
      this.setState({
        filmesFiltrados: listaDeFilmes
      });
      return;
    }

    const filmesFiltradosConvertidos = listaDeFilmes.filter((item) => {
      if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }

      const semFilmes = () => {
        if (!!item.title) {
          return;
          <p>Sinto muito... Não temos esse filme :-(</p>;
        }
      };
    });
    this.setState({
      filmesFiltrados: filmesFiltradosConvertidos
    });
  };

  render() {
    return (
      <ContainerM>
        <GlobalStyle />
        <SearchInput
          type="text"
          placeholder="digite o nome do filme..."
          onChange={this.filtrarFilmes}
        />
        <MoviesContainer>
          {this.state.filmesFiltrados.map((item) => (
            <Informations key={item.id}>
              <Name>{item.title}</Name>
              <ImgVote>
                <MovieBanner
                  src={item.poster_path}
                  alt="Banner do filme ${item.title}"
                />
                <CountryBox>
                  <p>{item.origin_country}</p>
                </CountryBox>
                <VoteBox>
                  <p>{item.vote_average}</p>
                </VoteBox>
              </ImgVote>
              <OverviewBox>
                <p>{item.overview}</p>
              </OverviewBox>
            </Informations>
          ))}
        </MoviesContainer>
      </ContainerM>
    );
  }
}

// baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=c46de2fe6856ee0696877e35e9de24d5'})
