import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from "./components/Header";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
class App extends Component {
  render() {
    return (
      <div>
        <Header />,
        <Services />,
        <Footer />
      </div>
    );
  }
}

export default App;
