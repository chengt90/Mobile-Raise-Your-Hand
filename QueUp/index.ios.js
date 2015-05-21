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

var {
  Text,
  Navigator,
  AppRegistry
} = React;

var SceneRenderer = React.createClass({

  getInitialState: function () {
    return {
      sceneMixins: {
        navTo: this.navTo,
        back: this.back
      }
    };
  },

  navTo: function (name) {
    var nav = Navigator.getContext(this);
    nav.push({
      name: name,
      index: this.props.route.index + 1 
    });
  },

  back: function (name) {
    var nav = Navigator.getContext(this);
    nav.pop();
  },

  render: function () {

    var scenes = {
      "Login": <LoginView mixins={this.state.sceneMixins} />,
      "ClassList": <ClassListView mixins={this.state.sceneMixins} />,
      "HandRaiser": <HandRaiserView mixins={this.state.sceneMixins} />,
      "AddClass": <AddClassView mixins={this.state.sceneMixins} />
    };
    return scenes[this.props.route.name];
  }

});

var QueUp = React.createClass({

  render: function () {
    return (
      <Navigator
        initialRoute={{name:"Login", index:0}}
        renderScene={(route, navigator) => <SceneRenderer route={route} />}
      />
    );
  }

});


AppRegistry.registerComponent('QueUp', () => QueUp);
