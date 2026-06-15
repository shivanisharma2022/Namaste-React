import User from "./User";
//import UserClass from "./UserClass";
import React from "react";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Welcome to our restaurant review website! We are passionate about food and dining experiences, and we created this platform to help food lovers
        discover the best restaurants in town. Whether you're looking for a cozy café, a fine dining experience, or a hidden gem, we've got you covered.
      </p>

      <User name={"Shivani Sharma"} />
    </div>
  );
};

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent constructor called");
//   }
//   componentDidMount() {
//     console.log("Parent component did mount called");
//   }
//   render() {
//     console.log("Parent render called");
//     return (
//       <div>
//         <h1>About Us</h1>
//         <p>
//           Welcome to our restaurant review website! We are passionate about food
//           and dining experiences, and we created this platform to help food
//           lovers discover the best restaurants in town. Whether you're looking
//           for a cozy café, a fine dining experience, or a hidden gem, we've got
//           you covered.
//         </p>

//         <UserClass name={"Shivani Sharma (class)"} location={"Noida (class)"} />
//       </div>
//     );
//   }
// }

export default About;
