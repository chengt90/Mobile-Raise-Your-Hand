
'use strict';

var React = require('react-native');
var {
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  AsyncStorage
} = React;



var Router = require('react-native-router');
var DeviceWidth = require('Dimensions').get('window').width;
var DeviceHeight = require('Dimensions').get('window').height;
var MainSideMenu = require('react-native-side-menu');
var SideMenuView = require('../Components/SideMenu.js');


module.exports = React.createClass({

  componentDidMount: function() {
    global.sideMenu = this.refs["sideBar"];
  },


  render: function() {
    return (
      <MainSideMenu menu={<SideMenuView toRoute = {this.props.toRoute}/>} ref="sideBar">
        <View style={styles.container}>

        <Text> home view </Text>  

        </View>
      </MainSideMenu>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    height: 67,
    backgroundColor: '#83CF1C'
  }
});
