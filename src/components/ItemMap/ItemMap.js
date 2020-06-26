import React, { Component } from "react";
import { connect } from 'react-redux';

class ItemMap extends Component {

componentDidMount() {
    this.props.dispatch({type: 'GET_ITEMS_LIST'})
}

test = () => {
    console.log('in test', this.props.item);
}
    

  render() {
    return (
      <div>
       <p></p>
       <button onClick={this.test}>hi</button>
       <ul>
           {this.props.item.map(item => (
               <li>
                   {item.description} | {item.image_url}
               </li>
           ))}
       </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps)(ItemMap);
