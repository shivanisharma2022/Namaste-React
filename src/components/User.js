import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //    API Call
  //   const timer = setInterval(() => {
  //     console.log("Namaste React OP");
  //   }, 1000);
  //   console.log("useEffect");

  //   return () => {
  //     clearInterval(timer);
  //     console.log("useEffect return");
  //   };
  // }, []);

  // console.log("render");

  return (
    <div className="user-card m-4 p-4 bg-gray-100 rounded-2xl">
      <h1>Count : {count}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Noida</h3>
      <h4>Contact: itsme@shivani30</h4>
    </div>
  );
};

export default User;
