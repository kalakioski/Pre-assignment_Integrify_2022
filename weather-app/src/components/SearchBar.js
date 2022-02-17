import styled from "styled-components";
import { useState } from "react";
import { Button } from "./Button";

const SearchBarBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const SearchBar = styled.input`
  width: 70vh;
  height: 60px;
  padding: 0px 32px;
  border-radius: 10px;
  border: solid black;
  outline: none;
  background: #ffeccf;
  color: black;
  font-size: 24px;
  font-family: "Red Hat Display", sans-serif;
`;

export const LocationSearch = ({ onKeyFound }) => {
  const apiKey = "0GimKxX72quvpNVqGWhKny9eON4nvbNY";
  const [LocationInput, setLocationInput] = useState("");

  const getLocation = (location) => {
    console.log(location);
    const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${location}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => res.find((l) => l.Rank < 35))
      .then((res) =>
        onKeyFound({
          key: res.Key,
        })
      );
  };

  return (
    <SearchBarBox>
      <SearchBar
        type="text"
        value={LocationInput}
        onChange={(e) => setLocationInput(e.target.value)}
      />
      <Button onClick={() => getLocation(LocationInput)}>Search</Button>
    </SearchBarBox>
  );
};
