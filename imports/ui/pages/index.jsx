import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class Index extends Component {

    addTeam() {
        Meteor.call( 'addTeam', count, ( error ) => {
            if (error) {
                console.log( error );
            }
        });        
    }

    render() {
        return (
            <div>
                <p>index page</p>
                <button className="btn btn-primary" onClick={this.addTeam}>Test</button>
            </div>
        );
    }
}

/*

*/

Index.propTypes = {

};

export default createContainer(() => {
  return {

  }
}, Index);
