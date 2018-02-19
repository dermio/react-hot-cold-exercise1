import React from "react";

import Feedback from "./feedback";
import Form from "./form";
import UserChoices from "./userChoices";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.getValue = this.getValue.bind(this);
    this.state = {
      targetNumber: 9, // Math.floor((Math.random() * 100) + 1)
      feedback: "Make a Guess",
      currentAnswer: null,
      oldChoices: []
    };
  }

  getValue(event) {
    event.preventDefault();

    const number = parseInt(event.target.children[0].value, 10);
    const newArr = this.state.oldChoices.slice();
    newArr.push(number);

    this.setState({
      currentAnswer: number,
      oldChoices: newArr
    });

    console.log(this.state.currentAnswer);
    event.target.reset(); // clear input field after submission
  }

  render () {
    return (
      <div>
        <h1>Hot or Cold the GAME</h1>
        <div>
          <Feedback
            feedback={this.state.feedback}
            targetNumber={this.state.targetNumber}
            currentAnswer={this.state.currentAnswer}
          />
          <Form onSubmit={this.getValue} />
          <UserChoices oldChoices={this.state.oldChoices} />
        </div>
      </div>
    );
  }
}
