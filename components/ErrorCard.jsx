import React from "react";
import RegularButton from "./RegularButton";
import { useEffect, useRef } from "react";

function ErrorCard({ resetError }) {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.focus();
  }, []);

  return (
    <div className="wrapper wrapper--accent" ref={divRef} tabIndex={-1}>
      <p className="p--large">Sorry, there was an error.</p>
      <p className="p--regular">
        Please come back later or click the button below to try restarting the
        game.
      </p>
      <RegularButton handleClick={resetError}>Restart game</RegularButton>
    </div>
  );
}

export default ErrorCard;
