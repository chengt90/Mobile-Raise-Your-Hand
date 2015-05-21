'use strict';
var React = require('react-native');
var {
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} = React;

var AddClassView = module.exports = React.createClass({

  handleJoin: function () {
    this.props.mixins.navTo("ClassList");
  },

  handleBack: function () {
    this.props.mixins.back();
  },

  render: function () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleJoin}>
          <Text style={styles.TouchableOpacity}>Join Class</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleBack}>
          <Text style={styles.TouchableOpacity}>Back</Text>
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
    color: "#ff0000"
  }
});