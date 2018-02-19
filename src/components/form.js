import React from "react";

export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="number" min="1" max="100" />
      <button type="submit">guess</button>
    </form>
  );
}

/*
Show to ChrisK
<input type="submit" value="guess" />
<button type="submit">guess</button>
*/
