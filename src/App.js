import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Header from "./components/Header";
import Row from "./Row";
import Game from "./components/Game";
import "./styles/styles.css"


function App() {
  return (
    <Router>
      <div className="glow">
        <Header />
        <Row />
        <Game />
      </div>
    </Router>
  );
}

export default App;
