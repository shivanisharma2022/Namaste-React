import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    this.intervalId = null;

    console.log("Child constructor called");
  }

  async componentDidMount() {
    console.log("Child component did mount called");

    const data = await fetch("https://api.github.com/users/shivanisharma2022");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);

    this.intervalId = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate called");
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    console.log("Child componentWillUnmount called");
  }

  render() {
    console.log("Child render called");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
