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



var ClassListView = require('../views/ClassList.js');
var AddClassView = require('../views/AddClass.js');
var HandRaiserView = require('../views/HandRaiser.js');




var DeviceWidth = require('Dimensions').get('window').width;
var DeviceHeight = require('Dimensions').get('window').height;

//----------
var ClassListView = require('../views/ClassList.js');


module.exports = React.createClass({

  render: function() {
    console.log("----- NAVIGATOR insie of side menu  -----");
    return (
      <View>
  
        <View style={styles.menuCol}>
        <ScrollView style={{paddingTop:15}}>
            <TouchableHighlight underlayColor="#ffffff" onPress={()=>{ 
              console.log('---- pressed going to my classes view ----');

              this.props.toRoute({
                  name: 'My Classes',
                  component: ClassListView,
              });



               }}>
                <View style={styles.SideMenuItem}>
                  <ReactIcon
                    name='fontawesome|plus'
                    size={20}
                    color='#eb6100'
                    style={styles.MenuIcons}
                  />
                  <Text style={styles.ItemText}> My Classes </Text>
                </View>
            </TouchableHighlight>


         <TouchableHighlight underlayColor="#ffffff" onPress={()=>{ 

             console.log('---- pressed, going to add class view ----');

              this.props.toRoute({
                  name: 'Add Classes',
                  component: AddClassView,
              });


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

         <TouchableHighlight underlayColor="#ffffff" onPress={()=>{ 

                        console.log('---- pressed ----');

               }}>
                <View style={styles.SideMenuItem}>
                  <ReactIcon
                    name='fontawesome|sign-out'
                    size={20}
                    color='#eb6100'
                    style={styles.MenuIcons}
                  />
                  <Text style={styles.ItemText}> Log out </Text>
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


 ItemText: {
   marginTop: 10,
   marginLeft: 20,
   justifyContent: 'center',

 }

});
