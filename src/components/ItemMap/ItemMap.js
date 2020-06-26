import React, { Component } from "react";
import { connect } from "react-redux";

class ItemMap extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_ITEMS_LIST" });
  }

  test = () => {
    console.log("in test", this.props.item);
  };

  //   deleteClicked = () => {
  //     this.props.dispatch({
  //       type: "DELETE_ITEM",
  //       action: action.payload,
  //     });
  //   };

  render() {
    return (
      <div>
        <p></p>
        <button onClick={this.test}>hi</button>
        <ul>
          {this.props.item.map((item) => (
            <li>
              {item.description} |{item.image_url} |
              <button
                onClick={(id) => {
                  this.props.dispatch({
                    type: "DELETE_ITEM",
                    payload: item.id,
                  });
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps)(ItemMap);

// <button onClick={this.deleteClicked}>DELETE</button>
