'use strict';

var React = require('react-native');
var UserBadge = require('./UserBadgeSide.js');

var {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} = React;
var styles = StyleSheet.create({
    container: {
    	flex : 1,
    	padding : 0,
        flexDirection: 'row',
        borderBottomColor : '#ffffff',
        borderBottomWidth : .5,
        backgroundColor: '#6EC749',
    },
    ClassList : {
    	flex : 1,
    	flexDirection : 'row',
    },
    ClassTitle : {
    	fontSize : 16,
    	color : 'white',
      textAlign: 'left',
      marginTop: 10,
      marginRight: 10,
      fontFamily: 'HelveticaNeue-Light',
      alignSelf: 'flex-end',
      paddingBottom: 3
    },
    badge: {
      paddingLeft: 20,
      paddingTop: 3
    }
});

module.exports = React.createClass({
	render() {
		var item = this.props.item;
    var teacher = {
      picture: {
        data: {
          url: item.teacherPic
        }
      }
    };
    teacher = JSON.stringify(teacher);
		return (
      <TouchableOpacity onPress={() => this.props.onSelect(item)}>
      	<View style={styles.container}>
      		<View style={styles.ClassList}>
            <View style={styles.badge}>
                <UserBadge 
                  currentUser={teacher} 
                  avatarWidth={50}
                  avatarHeight={50}
                  noText={true}
                />
            </View>
      			<Text style={styles.ClassTitle} numberOfLines={2}>{item.name}</Text>
      		</View>					
      	</View>
      </TouchableOpacity>
		);
	}
})