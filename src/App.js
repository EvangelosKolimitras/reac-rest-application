import React from "react";
import classes from './App.module.css';
import Button from './components/Button';
import GetData from "./components/Data";
import Form from './components/Form';
import Persons from './components/Persons';
import Theming from './utils/Theme';

class App extends React.Component {

  state = {
    users: [
      { id: 1, name: "evan", username: "evan92" },
      { id: 2, name: "sofia", username: "sofia23" }
    ],
    isVisible: true
  }

  toggle = () => this.setState(() => ({ isVisible: !this.state.isVisible }))

  render() {
    return (
      <div>
        <h2>Welcome people</h2>
        <Button value="Toggle" action={this.toggle} />

        <Form />

        {this.state.isVisible ? <Persons users={this.state.users} /> : null}

        <GetData />
      </div>
    );
  }
};

export default Theming(App, classes.App)
