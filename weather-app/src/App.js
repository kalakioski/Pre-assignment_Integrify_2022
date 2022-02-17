import React from "react";
import styled from "styled-components";
import { Card } from "./components/Card";
import { createGlobalStyle } from "styled-components";
import "./style.css";

const GlobalStyle = createGlobalStyle`
  body {
    background: #FFB13C;
    font-family: 'Red Hat Display', sans-serif;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderWeather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 10vh;
  font-family: "Red Hat Display", sans-serif;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 0.5rem;
`;

function App() {
  return (
    <div>
      <HeaderWeather>Your Local Weather</HeaderWeather>
      <CardContainer>
        <Card />
      </CardContainer>
      <GlobalStyle />
    </div>
  );
}

export default App;
