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
  handleOnChangeInput(e) {
    this.setState({
      name: e.target.value,
    });
    // console.log(e.target.value);
  }
  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and i {this.state.age}
        <form
          onSubmit={(e) => {
            this.handleOnSubmit(e);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              this.handleOnChangeInput(e);
            }}
          />
          <button>submit </button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
