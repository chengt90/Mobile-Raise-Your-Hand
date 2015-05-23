'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView
} = React;


var Router = require('react-native-router');

var SideMenu = require('react-native-side-menu');
var ReactIcon = require("react-native-icons");

var DeviceWidth = require('Dimensions').get('window').width;
var DeviceHeight = require('Dimensions').get('window').height;

module.exports = React.createClass({

  render: function() {
    console.log("----- NAVIGATOR insie of side menu  -----");
    console.dir(this.props.navigator);
    return (
      <View>
        <View style={styles.SideMenuHeader}>
        </View>
        <View style={styles.menuCol}>
        <ScrollView style={{paddingTop:15}}>
            <TouchableHighlight underlayColor="#ffffff" onPress={()=>{ this.props.navigator.replace({ id: 'Home' });
               }}>
                <View style={styles.SideMenuItem}>
                  <ReactIcon
                    name='fontawesome|plus'
                    size={20}
                    color='#eb6100'
                    style={styles.MenuIcons}
                  />
                  <Text style={styles.ItemText}>GO TO TEST </Text>
                </View>
            </TouchableHighlight>


         <TouchableHighlight underlayColor="#ffffff" onPress={()=>{ this.props.navigator.replace({ id: 'Home' });
               }}>
                <View style={styles.SideMenuItem}>
                  <ReactIcon
                    name='fontawesome|plus'
                    size={20}
                    color='#eb6100'
                    style={styles.MenuIcons}
                  />
                  <Text style={styles.ItemText}>GO TO TEST </Text>
                </View>
            </TouchableHighlight>

         <TouchableHighlight underlayColor="#ffffff" onPress={()=>{ this.props.navigator.replace({ id: 'Home' });
               }}>
                <View style={styles.SideMenuItem}>
                  <ReactIcon
                    name='fontawesome|sign-out'
                    size={20}
                    color='#eb6100'
                    style={styles.MenuIcons}
                  />
                  <Text style={styles.ItemText}>GO TO TEST </Text>
                </View>
            </TouchableHighlight>


          </ScrollView>

        </View>
      </View>
    );
  }
});


var styles = StyleSheet.create({

  menuCol: {
    top : 70,
    height: DeviceHeight + 110,
    width: DeviceWidth* 2,
  },

  SideMenuItem: {
    marginLeft: -10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 50,
    width: DeviceWidth/2,
  },
  MenuIcons: {
    position: 'absolute',
    left: 30,
    width: 40,
    height: 40,
  },
  SideMenuHeader: {
    position: 'absolute',
    width: DeviceWidth,
    height: 67,
    backgroundColor: '#83CF1C',
  },

 ItemText: {
   marginTop: 10,
   marginLeft: 20,
   justifyContent: 'center',

 }

});
