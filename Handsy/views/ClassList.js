'use strict';
var React = require('react-native');
var {
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} = React;

var ClassListView = module.exports = React.createClass({

  handleAddPress: function () {
    this.props.mixins.navTo("AddClass");
  },

  handleClassPress: function () {
    this.props.mixins.navTo("HandRaiser");
  },

  handleBack: function () {
    this.props.mixins.back();
  },

  render: function () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleClassPress}>
          <Text style={styles.TouchableOpacity}>Class1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleAddPress}>
          <Text style={styles.TouchableOpacity}>Add Class</Text>
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