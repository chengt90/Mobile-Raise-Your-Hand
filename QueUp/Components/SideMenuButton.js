'use strict';
var React = require('react-native');

var {
  View,
  StyleSheet,
  TouchableOpacity,
} = React;

var Icon = require("react-native-icons");

module.exports = React.createClass({
  render: function() {
    return (
      <TouchableOpacity onPress={()=>{ this.props.customAction({action: 'open_sidebar'}); }}>
          <Icon
            name='fontawesome|bars'
            size={15}
            color='#ffffff'
            style={styles.menuBarIcon}/>
      </TouchableOpacity>
    )
  }
});

var styles = StyleSheet.create({
  menuBarIcon: {
    width: 49,
    height: 49
  }
});
