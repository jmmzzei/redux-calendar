import React from "react";
import "./App.css";
import {Navbar} from "./components/Navbar";
import Calendar from "./containers/Calendar";

function App() {
  return (
    <>
      <Navbar />
      <Calendar />
    </>
  );
}

export default App;
