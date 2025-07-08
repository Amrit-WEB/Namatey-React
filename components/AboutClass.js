import { Component } from "react";
import UserClass from "./UserClass";

class AboutClass extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Did Mount");
  }

  componentDidUpdate() {
    console.log("Parent Did Update");
  }
  componentWillUnmount() {
    console.log("Parent Will Unmount");
  }
  render() {
    console.log("Parent Render");
    return (
      <>
        <h1>About Us</h1>
        <UserClass name="Amritanshu" />
      </>
    );
  }
}
export default AboutClass;
