/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var LoginView = require('./views/Login.js');
var Router = require('react-native-router');



var {
  StyleSheet,
  Text,
  Navigator,
  AppRegistry,
  AsyncStorage
} = React;



var firstRoute = {
  name: 'QueUp',
  component: LoginView
};


var QueUp = React.createClass({

 render: function() {
    return (
      <Router 
        firstRoute={firstRoute} 
      /> 
    );
  }

});

AppRegistry.registerComponent('QueUp', () => QueUp);
