import { useState, useEffect } from "react";
import "./App.css";

const Person = (props) => {
  return (
    <>
      <h1>name: {props.name}</h1>
      <h2>Last name: {props.LastName}</h2>
      <h2>Age: {props.Age}</h2>
    </>
  );
};

export default function MyApp() {
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   alert("reload");
  // });
  return (
    <div>
      <Person name={"oise"} LastName={"doe"} Age={30} />
      <Person LastName = 'doe'/>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1-2)}>
        +
      </button>

       <button
        className="eg"
        onClick={() => setCounter((prevCount) => prevCount + 10000000000000000000000)}
      >
        {counter}
      </button>
    </div>
  );
}
