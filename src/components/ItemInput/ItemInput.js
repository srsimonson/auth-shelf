import React, { Component } from "react";
import { connect } from "react-redux";

class ItemInput extends Component {
  state = {
    description: " ",
    image_url: " ",
    user_id: " ",
  };

  componentDidMount() {
    this.setState({
      user_id: this.props.user.id,
    });
  }
  handleInputChangeFor = (description) => (event) => {
    this.setState({
      [description]: event.target.value,
    });
    // console.log(this.props.user.id);
    // console.log(this.state);
    // console.log(this.props);
  };

  handleItemButton = (item) => {
    this.props.dispatch({ type: "ADD_ITEMS", payload: this.state });
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
  user: state.user,
});

export default connect(mapStateToProps)(ItemInput);
