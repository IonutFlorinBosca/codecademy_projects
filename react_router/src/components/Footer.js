import React from "react";
import { useHistory } from 'react-router-dom';

export default function Footer() {

  // Get the history object
  const history = useHistory();
  console.log(history);
  const goBack = () => {
    // imperatively redirect back
    history.goBack();
  }

  const goForward = () => {
    // imperatively redirect forward
    history.goForward();
  }

  return (
    <footer>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </footer>
  );
}
