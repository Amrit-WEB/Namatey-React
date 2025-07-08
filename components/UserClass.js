import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Child Constructor");
    super(props);
    this.state = {
      count: 1,
    };
  }

  componentDidMount() {
    console.log("Child Did Mount");
  }
  componentDidUpdate() {
    console.log("Child Did Update");
  }
  componentWillUnmount() {
    console.log("Child Will Unmount");
  }
  render() {
    console.log("Child Render");
    return (
      <>
        <p>
          Hello {this.state.count} times, {this.props.name}
        </p>
        <button
          onClick={() => {
            //NEVER USE LIKE THIS TO UPDATE STATE VAIABLE
            // this.state.count = this.state.count + 1;

            //USE IT LIKE THIS - BY setState Method GIVEN BY REACT
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Your Hello
        </button>
      </>
    );
  }
}
export default UserClass;
