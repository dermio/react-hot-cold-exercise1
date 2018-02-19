import React from "react";

export default function Feedback(props) {
  /*console.log(props.feedback);
  console.log(typeof props.targetNumber);
  console.log(typeof props.currentAnswer);*/

  let prompt;
  let difference = Math.abs(props.currentAnswer - props.targetNumber);
  // console.log(difference);

  if (props.currentAnswer === null) {
    prompt = "";
  } else if (props.currentAnswer === props.targetNumber) {
    prompt = "You win!"
  } else if (difference <= 25) {
    prompt = "Hot";
  } else {
    prompt = "Cold";
  }

  return (
    <div>
      <h3>Feedback: {prompt}</h3>
    </div>
  );
}
