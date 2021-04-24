import "./styles/App.css";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid"
import React from "react";

const App = () => {
  return (
    <div className="App">
      <Header />
      <CardGrid />
    </div>
  );
}

export default App;
