import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    const API_URL = "https://jsonplaceholder.typicode.com/users";
    fetch(API_URL)
      .then((res) => res.json())
      .then((users) => this.setState({robots: users}));
  }

  handleOnChangeSearch = (event) => {
    this.setState({ searchField: event.target.value }
      )}

  render() {
    const {robots, searchField} = this.state;
    const filteredRobots = robots.filter((robo) =>
      robo.name.toLowerCase().includes(searchField.toLowerCase()));

    return ( robots.length ?
      <div className="tc">
        <h1 className="title">RoboFriends</h1>
        <SearchBox searchChange={this.handleOnChangeSearch} value={searchField} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div> :
      <h2>Loading...</h2>
    );
  }
};
  

export default App;
