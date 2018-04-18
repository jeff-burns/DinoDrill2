import React, { Component } from "react";

import "./App.css";

import Header from "./components/Header";
import Profiles from "./components/Profiles";
import Footer from "./components/Footer";

const json = "/dinosaurs.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(json)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          data: data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log("APP DATA", this.state.data);
    return (
      <div className="App">
        <Header />
        <main>
          <section id="profiles-container">
            <Profiles dinos={this.state.data} />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

// <div className="App">
// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
// To get started, edit <code>src/App.js</code> and save to reload.
// </p>
// </div>
