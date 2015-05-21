'use strict';
var React = require('react-native');
var {
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} = React;

var HandRaiserView = module.exports = React.createClass({

  getInitialState: function () {
    return {
      called: false,
      intervalId: 0
    };
  },

  handleHandRaise: function () {
    console.log("Hand Raise Request.");
    fetch("http://localhost:3000/raiseHand", {
      method: "POST",
      token:"TOKEN",
    })
    .then(function (res) {
      console.log(res);
    });
  },

  componentWillMount: function () {
    this.setState({
      intervalId: setInterval(()=>{
        fetch("http://localhost:3000/isCalled", {
        method: "GET",
        token:"TOKEN",
        })
        .then(function (res) {
          this.handleCalledOn();
        }.bind(this));
        console.log("tick");
      }, 700)
    });
  },

  handleCalledOn: function (res) {
    console.log(res);
    this.setState({
      called: true
    });
  },

  handleBack: function () {
    clearInterval(this.state.intervalId);
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