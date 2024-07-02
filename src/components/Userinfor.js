import React from "react";

class UserInfor extends React.Component {
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

  handleOnChangeInput(e) {
    this.setState({
      name: e.target.value,
    });
    // console.log(e.target.value);
  }
  handleOnChangeAge = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
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
          <label>Your Name </label>
          <input
            value={this.state.name}
            onChange={(e) => {
              this.handleOnChangeInput(e);
            }}
          />
          <label>Your Age </label>
          <input
            value={this.state.age}
            onChange={(e) => {
              this.handleOnChangeAge(e);
            }}
          />
          <button>submit </button>
        </form>
      </div>
    );
  }
}
export default UserInfor;
