/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var LoginView = require('./views/Login.js');
var ClassListView = require('./views/ClassList.js');
var AddClassView = require('./views/AddClass.js');
var HandRaiserView = require('./views/HandRaiser.js');
var HomeView = require('./views/Home.js');

var Router = require('react-native-router');



var {
  StyleSheet,
  Text,
  Navigator,
  AppRegistry
} = React;



var firstRoute = {
  name: 'QueUp',
  component: LoginView
};


var QueUp = React.createClass({

 render() {
    return (
      <Router firstRoute={firstRoute} /> 
    );
  }

});


AppRegistry.registerComponent('QueUp', () => QueUp);
