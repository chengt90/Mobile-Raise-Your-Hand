
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

    //   props.toRoute({
    //     name: "raise hand",
    //     component: HandRaiser,
    //   });
    // }



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
    console.log(event);
    switch(event.action) {
      case 'open_sidebar':
        this.siderbar();
        break;
    }
  },
  
  siderbar: function() {
    this.refs["sideBar"].openMenu();
  },


  render: function() {
    console.log("----- NAVIGATOR insie of home  -----");
    console.dir(this.props.navigator);
    return (
      <MainSideMenu menu={<SideMenuView navigator={this.props.navigator}/>} ref="sideBar">
      <View style={styles.container}>
          <View style={styles.container}>
            <Router ref="router"
              firstRoute={this.firstRoute}
              headerStyle={styles.header}
              customAction={this.handleButtonClick}
            />
          </View>
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
