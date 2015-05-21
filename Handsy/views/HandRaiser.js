'use strict';
var React = require('react-native');
var {
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} = React;

var HandRaiserView = module.exports = React.createClass({

  handleHandRaise: function () {
    console.log("HandRaised");
  },

  handleCalledOn: function () {
    // this.props.mixins.navTo("CalledOn");
  },

  handleBack: function () {
    this.props.mixins.back();
  },

  render: function () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleHandRaise}>
          <Text style={styles.TouchableOpacity}>Raise Hand</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleCalledOn}>
          <Text style={styles.TouchableOpacity}>Go To Called On</Text>
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