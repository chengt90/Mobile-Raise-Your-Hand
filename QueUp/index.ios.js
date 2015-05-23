/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
console.log("FISAT");
'use strict';

var React = require('react-native');
var LoginView = require('./views/Login.js');
var ClassListView = require('./views/ClassList.js');
var AddClassView = require('./views/AddClass.js');
var HandRaiserView = require('./views/HandRaiser.js');
var HomeView = require('./views/Home.js');


var {
  Text,
  Navigator,
  AppRegistry
} = React;

var QueUp = React.createClass({


  renderScene: function(route, navigator) {
      switch (route.id) {
        case 'login':
          return <LoginView navigator={navigator}/>;
        case 'ClassList':
          return <HandRaiserView navigator={navigator}/>;
        case 'AddClass':
          return <AddClassView navigator={navigator}/>;
        case 'Home':
          return <HomeView navigator={navigator}/>;
        default:
          return (
            <Login navigator={navigator}/>
          );
      }

  },

 render: function () {

    return (
      <Navigator
      style={{backgroundColor: '#ffffff'}}
      initialRoute={{ id: "login" }}
      renderScene={this.renderScene} />
    )
  }

});


AppRegistry.registerComponent('QueUp', () => QueUp);
