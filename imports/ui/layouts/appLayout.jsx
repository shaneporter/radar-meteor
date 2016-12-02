import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

//import { Lists } from '../../api/lists/lists.js';

const AppLayout = () => (
  <div>
    <h1>This is the main layout!</h1>
  </div>
);

AppLayout.propTypes = {

};

export default createContainer(() => {
  return {

  }
}, AppLayout);