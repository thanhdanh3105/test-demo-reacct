import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Thành Danh",
    address: "Đồng Nai",
    age: 23,
  };
  // JSX
  handleOnClick(e) {
    console.log(">> Click Me Button");
    this.setState({
      name: "JusTin",
      age: Math.floor(Math.random() * 100) + 1,
    });
  }
  handleOnMouseOver(e) {
    // console.log(e.pageX);
  }
  render() {
    return (
      <div>
        My name is {this.state.name} and i {this.state.age}
        <button
          onClick={(e) => {
            this.handleOnClick(e);
          }}
        >
          {" "}
          Click Me{" "}
        </button>
        <button onMouseOver={this.handleOnMouseOver}> Hover Me </button>
      </div>
    );
  }
}

export default MyComponent;
