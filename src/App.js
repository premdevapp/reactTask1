import "./App.css";
import React, { Component } from "react";
import { UserInput } from "./components/UserInput/UserInput";
import { UserOutput } from "./components/UserOutput/UserOutput";

export class App extends Component {
  state = {
    username: "default Name",
  };

  userNameChangedHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <UserInput
          changed={this.userNameChangedHandler}
          currentValue={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
      </div>
    );
  }
}
