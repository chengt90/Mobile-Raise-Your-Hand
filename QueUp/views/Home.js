
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
var ClassListView = require('./ClassList.js');

var SideMenuIconComponent = require('../Components/SideMenuButton.js');

var DeviceWidth = require('Dimensions').get('window').width;
var DeviceHeight = require('Dimensions').get('window').height;

var MainSideMenu = require('react-native-side-menu');

var SideMenuView = require('../Components/SideMenu.js');


module.exports = React.createClass({

  firstRoute: {
    name: 'LIST CLASSES ',
    data: {},
    component: ClassListView,
    leftCorner: SideMenuIconComponent,
  },

  componentDidMount: function() {
  },

  handleButtonClick: function(event) {
    console.log("--------- Handled action -------------");
    console.log(this.refs["router"].toRoute);
    switch(event.action) {
      case 'open_sidebar':
        this.siderbar();
        break;
      case 'goToAddClass':
        console.log("---------- ADD CLASS CLICKED ----------------");
        break;
    }
  },
  
  siderbar: function() {
    this.refs["sideBar"].openMenu();
  },


  render: function() {
    console.log("----- NAVIGATOR insie of home  ----- >>> to Route ");
    console.dir(this.props.toRoute);

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
