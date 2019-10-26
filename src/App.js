import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Header from "./components/Header";
import Card from "./Card";
import Row from "./Row";
import Col from "./Col";
import "./styles/styles.css"


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Header />
        <Row />
        <Col />
        <Card />
      </div>
    </Router>
  );
}

export default App;
