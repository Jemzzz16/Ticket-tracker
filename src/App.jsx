import React from "react";
import logo from "./logo.svg";
import "./App.css";
import reactDom from "react-dom";
import Card from "./Components/Card";
import team from "./Data/team";

function App() {
  const getTeamMembers = (team) => {
    <Card key={team.id} />;
  };
  return (
    <div className="App">
      <Card team={team.map(getTeamMembers)} />
    </div>
  );
}

export default App;
