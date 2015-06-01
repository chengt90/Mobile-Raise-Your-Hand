var React = require('react-native');

var {
  Text,
  View,
  Image,
  StyleSheet
} = React;



var UserBadgeSide = React.createClass({
  render: function(){
      console.log('######################################=====================');
      var userObj = JSON.parse(this.props.currentUser);

    return (
      <View style={styles.container}>
        <Image style={styles.userAvatar} source={{uri: userObj.picture.data.url}}/>
        <Text style={styles.name}> {userObj.name} </Text>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    left: 0,
    marginLeft: -20,
    paddingBottom: 10,
  },
  name: {
    alignSelf: 'center',
    fontSize: 21,
    fontWeight: "200",

    fontFamily: 'HelveticaNeue',
    marginTop: 10,
    marginBottom: 5,
    color: 'white',

  },
  userAvatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderColor: 'white',
    marginTop: 10,
    alignSelf: 'center'
  }
});


module.exports = UserBadgeSide;