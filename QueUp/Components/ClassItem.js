'use strict';

var React = require('react-native');

var {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} = React;
var styles = StyleSheet.create({
    container: {
    	flex : 1,
    	padding : 10,
        flexDirection: 'row',
        borderBottomColor : '#eeeeee',
        borderBottomWidth : 1,
        backgroundColor: '#ffffff',
    },
    ClassList : {
    	flex : 1,
    	flexDirection : 'column'
    },
    ClassTitle : {
    	fontSize : 16,
    	height : 40,
    	fontWeight : '700',
    	color : '#000000',
        textAlign: 'left',
        marginTop: 10,
        marginRight: 10,
    }
});

module.exports = React.createClass({
	render() {
		var item = this.props.item;
        console.log("------------------------------------------------");
        console.dir(item);
        //onPress={() => ListView.addScore(item._id)}

		return (
            
			<TouchableOpacity onPress={() => this.props.onSelect(item)}>
				<View style={styles.container}>			

					<View style={styles.ClassList}>
						<Text style={styles.ClassTitle} numberOfLines={2}>{item.ClassTitle}</Text>
					</View>					
				</View>
			</TouchableOpacity>
		);
	}
})