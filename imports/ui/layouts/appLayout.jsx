import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

//import { Lists } from '../../api/lists/lists.js';

class AppLayout extends Component {

  render() {
    return (
      <div className="container">
        <h1>This is the main layout!</h1>
        {this.props.children}
      </div>
    );
  }
}

AppLayout.propTypes = {

};

export default createContainer(() => {

  return {

  }
}, AppLayout);