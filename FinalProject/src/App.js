import './App.css';
import axios from "axios";
import React, { Component } from "react";
import Card from "./components/Card";

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    //.get("https://indonesia-covid-19.mathdro.id/api")
    //.then((response) => console.log(response.data));
    .then((response) => this.setState({users: response.data}));
  }

  render() {
    return (
      <>
      {this.state.users.map((item) => {
        return (
        <Card
         name={item.name} 
         username={item.username}
         email={item.email} 
         phone={item.phone}
        />
        );
      })}
      </>
    );
  }
}


export default App;
