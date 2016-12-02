import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

const Index = () => (
  <div>This is the index page content</div>
);

Index.propTypes = {

};

export default createContainer(() => {
  return {

  }
}, Index);
