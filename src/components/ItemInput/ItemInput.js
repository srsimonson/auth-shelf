import React, { Component } from "react";
import { connect } from "react-redux";

class ItemInput extends Component {
  state = {
    description: " ",
    image_url: " ",
  };

  handleInputChangeFor = (description) => (event) => {
    this.setState({
      [description]: event.target.value,
    });
    console.log(this.state);
    console.log(this.props);
  };

  handleItemButton = (item) => {
    console.log("itemClick");
    console.log(item);
      this.props.dispatch({ type: "ADD_ITEMS", payload: this.state});
  };

  render() {
    return (
      <div>
        <input
          placeholder="Description"
          onChange={this.handleInputChangeFor("description")}
        ></input>
        <input
          placeholder="Image Url"
          onChange={this.handleInputChangeFor("image_url")}
        ></input>
        <button onClick={this.handleItemButton}>Add Item</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  description: state.description,
  image_url: state.image_url,
});

export default connect(mapStateToProps)(ItemInput);
