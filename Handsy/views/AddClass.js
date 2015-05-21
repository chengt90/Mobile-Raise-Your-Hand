'use strict';
var React = require('react-native');
var {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  TextInput
} = React;

var AddClassView = module.exports = React.createClass({

  getInitialState: function () {
    return {
      code: ""
    };
  },

  handleJoin: function () {
    console.log("Making Request.");
    fetch("http://localhost:3000/checkCode", {
      method: "POST",
      token:"TOKEN",
      body: this.state.code
    })
    .then(function (res) {
      console.log(res);
    });
  },

  handleBack: function () {
    this.props.mixins.back();
  },

  render: function () {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder={"Code"}
            onChangeText={(text) => this.setState({code: text})}
          />
          <Text style={styles.textDisplay}>{this.state.code}</Text>
        </View>
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
  textInput: {
    width: 150,
    height: 30,
    top: 50,
    backgroundColor: "#000",
    color: "#fff"
  },

  textDisplay: {
    top: 90,
    color: "#000"
  },

  container: {
    flex: 1,
    alignItems: "center",
  },

  TouchableOpacity: {
    top: 100,
    color: "#ff0000"
  }
});