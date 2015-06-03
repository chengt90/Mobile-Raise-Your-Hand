'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Animation
} = React;


var Router = require('react-native-router');

var ReactIcon = require("react-native-icons");



var ClassListView = require('../views/ClassList.js');
var AddClassView = require('../views/AddClass.js');

var DeviceWidth = require('Dimensions').get('window').width;
var DeviceHeight = require('Dimensions').get('window').height;

var reactTimerMixin = require('react-timer-mixin');

var AnimationExperimental = require('AnimationExperimental');


var UserBadge = require('./UserBadgeSide.js');


module.exports = React.createClass({
  mixins: [reactTimerMixin],
  componentWillMount: function() {
  },

  componentWillReceiveProps:function(){
  },

  render: function() {
    return (
      <View>

         <View style={styles.menuBadge}>
            <UserBadge currentUser = {this.props.currentUser} />
        </View>



        <View style={styles.menuCol} ref="menuContent">

        <ScrollView style={{paddingTop:15}}>

          
            <TouchableOpacity underlayColor="#ffffff" onPress={()=>{ 
                global.router({
                    name: 'My Classes',
                    component: ClassListView,
                    data: {
                      currentUser: this.props.currentUser
                    }
                });
                this.setTimeout(()=>{
                  global.mainSideMenu.closeMenu();
                }, 20);
            }}>
                <View style={styles.SideMenuItem}>
                  <Text style={styles.ItemText}>MY CLASSES </Text>
                </View>
            </TouchableOpacity>

         <TouchableOpacity underlayColor="#FFD200" onPress={()=>{ 
            global.router({
                name: 'Add Classes',
                component: AddClassView,
            });
            
            this.setTimeout(()=>{
                global.mainSideMenu.closeMenu();
            }, 20);

            }}>
            <View style={styles.SideMenuItem}>
              <Text style={styles.ItemText}>ADD CLASSES  </Text>
            </View>
          </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
});


var styles = StyleSheet.create({


  menuBadge: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: DeviceWidth,
    paddingTop: 80,
    paddingLeft: 20,
    height: 264,
    backgroundColor: '#363636',
    marginLeft: -50
  },
  menuCol: {
    top : 220,
    height: DeviceHeight + 110,
    width: DeviceWidth* 2,
    backgroundColor: '#363636',
    borderTopColor: 'white',
    borderTopWidth: .5

  },

  SideMenuItem: {
    top: DeviceWidth/5,
    left: 0,
    marginLeft: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 50,
    width: DeviceWidth,

  },
  MenuIcons: {
    position: 'absolute',
    left: 30,
    width: 40,
    height: 40,
  },


 ItemText: {
  left: 0,
   marginLeft: 0,
   justifyContent: 'center',
   color: 'white',
   fontWeight: '800'

 }

});
