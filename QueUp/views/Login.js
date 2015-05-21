'use strict';
var React = require('react-native');
var {
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} = React;

var LoginView = module.exports = React.createClass({

  handlePress: function () {
    this.props.mixins.navTo("ClassList");
  },

render: function () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={styles.TouchableOpacity}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },

  TouchableOpacity: {
    top: 100,
    color: "#f56000"
  }
});