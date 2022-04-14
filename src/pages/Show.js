import React from "react";
import axios from "axios";

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
  background-color: black;
`;

const SearchInput = styled.input`
  margin: 5%;
  width: 25vw;
  height: 4vh;
  border-radius: 10px;
  border: none;
  font-size: 1.5vw;
  box-shadow: inset 0 0 1em #f5f3f4, 0 0 1em red;
  margin-top: 25vh;
`;

const TvShowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const InformationsBox = styled.div`
  text-decoration: none;
  width: 25vw;
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
    width: 27vw;
    height: 61vh;
    box-shadow: inset 0 0 0.5em gold, 0 0 1.5em red;
    transition: all 0.7s;
  }
`;

const Title = styled.h2``;

const ImgVoteBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`;

const Banner = styled.img`
  width: 10vw;
`;

const OriginBox = styled.div`
  background-color: #d3d3d3;
  height: 5vh;
  width: 5vw;
  color: black;
  border-radius: 2px;
  margin-left: 2vw;
  box-shadow: 3px 3px #161a1d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VoteBox = styled.div`
  background-color: #d3d3d3;
  height: 5vh;
  width: 5vw;
  color: black;
  border-radius: 2px;
  margin-left: 2vw;
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

const apiSeries = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/popular?api_key=c46de2fe6856ee0696877e35e9de24d5"
});

export default class App extends React.Component {
  state = {
    listaDeSeries: [],
    seriesFiltrados: []
  };

  async componentDidMount() {
    this.getSeries();
  }

  getSeries = async () => {
    const response = await apiSeries.get();
    const series = response.data.results.map((item) => {
      return {
        ...item,
        title: item.name,
        poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
        description: item.overview,
        origin: item.origin_country,
        vote: item.vote_avarage
      };
    });

    this.setState({
      listaDeSeries: series,
      seriesFiltrados: series
    });
  };

  filtrarSeries = (event) => {
    const { listaDeSeries } = this.state;

    if (event.target.value === "") {
      this.setState({
        seriesFiltrados: listaDeSeries
      });
      return;
    }

    const seriesFiltradosConvertidos = listaDeSeries.filter((item) => {
      if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }

      const semSeries = () => {
        if (!!item.title) {
          return;
          <p>Sinto muito... Não temos esse filme :-(</p>;
        }
      };
    });
    this.setState({
      seriesFiltrados: seriesFiltradosConvertidos
    });
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <SearchInput
          type="text"
          placeholder="digite o nome da série..."
          onChange={this.filtrarSeries}
        />
        <TvShowContainer>
          {this.state.seriesFiltrados.map((item) => (
            <InformationsBox key={item.id}>
              <Title>{item.name}</Title>
              <ImgVoteBox>
                <Banner
                  src={item.poster_path}
                  alt="Banner da Série ${item.title}"
                />
                <OriginBox>
                  <p>{item.origin_country}</p>
                </OriginBox>
                <VoteBox>
                  <p>{item.vote_average}</p>
                </VoteBox>
              </ImgVoteBox>
              <OverviewBox>
                <p>{item.overview}</p>
              </OverviewBox>
            </InformationsBox>
          ))}
        </TvShowContainer>
      </Container>
    );
  }
}

// const apiSeries = axios.create({
// baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=c46de2fe6856ee0696877e35e9de24d5"})
