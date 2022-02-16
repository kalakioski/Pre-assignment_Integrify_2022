import React from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <>
      <SearchBar />
      <Button>Search</Button>
      <Card />
    </>
  );
}

export default App;
