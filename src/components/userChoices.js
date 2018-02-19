import React from "react";

export default function UserChoices(props) {
  // console.log(props.oldChoices);
  let oldChoicesStr = props.oldChoices.join(", ");

  return (
    <div>
      <h3>List of prior choices: {oldChoicesStr}</h3>
    </div>
  );
}
