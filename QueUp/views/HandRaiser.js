'use strict';
var React = require('react-native');
var SocketIO = require('react-native-swift-socketio');

var {
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} = React;
console.log("Before Socket");
var sockets = new SocketIO("10.6.31.110:8000", {});
sockets.connect();
sockets.on('connect', () => {
  console.log('connecteddddd');
  sockets.emit('handraise', {test:"data"});
});

var HandRaiserView = module.exports = React.createClass({

  getInitialState: function () {
    return {
      called: false,
      intervalId: 0
    };
  },

  handleHandRaise: function () {
    console.log("Hand Raise Request.");
    fetch("http://localhost:8000/api/students/raiseHand", {
      method: "POST",
      token:"TOKEN",
    })
    .then(function (res) {
      console.log(res);
    });
  },

  componentWillMount: function () {
    this.setState({
      intervalId: setInterval(() => {
        fetch("http://localhost:8000/isCalled", {
        method: "GET",
        token:"TOKEN",
        })
        .then(function (res) {
          this.handleCalledOn();
        }.bind(this));
      }, 700)
    });
  },

  handleCalledOn: function (res) {
    this.setState({
      called: true
    });
  },

  handleBack: function () {
    clearInterval(this.state.intervalId);
    //this.props.mixins.back();
  },

  render: function () {
    console.log("------------------------ Props -----------------> ");
    console.dir(this.props);
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleHandRaise}>
        <View>
            <Text style={styles.TouchableOpacity}> current class </Text>
            <Text style={styles.TouchableOpacity}> {this.props.data.selectedClass.ClassTitle} </Text>
            <Text style={styles.TouchableOpacity}>Raise Hand</Text>
        </View>
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