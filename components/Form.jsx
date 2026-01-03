import RegularButton from "./RegularButton";
import Select from "./Select";
import { useEffect, useRef } from "react";

export default function Form({ handleSubmit, handleChange, isFirstRender }) {
  const divRef = useRef(null);
  useEffect(() => {
    !isFirstRender && divRef.current.focus();
  }, []);

  return (
    <div className="form-container" ref={divRef} tabIndex={-1}>
      <form className="wrapper">
        <Select handleChange={handleChange} />

        <RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
      </form>
    </div>
  );
}
