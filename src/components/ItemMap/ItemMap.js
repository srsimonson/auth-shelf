import React, { Component } from "react";

class ItemMap extends Component {

    

  render() {
    return (
      <div>
       <p></p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  description: state.description,
  image_url: state.image_url,
});

export default ItemMap;
