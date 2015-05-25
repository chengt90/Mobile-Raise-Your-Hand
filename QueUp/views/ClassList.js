'use strict';
var React = require('react-native');
var {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ListView
} = React;

var HandRaiserView = require('./HandRaiser.js');


var ClassItem = require('../Components/ClassItem.js');


var HeaderLogo = require('../Components/HeaderLogo.js')


 var fakeJSON = [
          {
            ClassTitle: 'Super cool class',
            Instructor: 'Professor Tim',
            CurrentlyActive: true
          },
          {
            ClassTitle: 'Another random class',
            Instructor: 'Professor Bob',
            CurrentlyActive: false
          },
          {
            ClassTitle: 'Super cool class',
            Instructor: 'Professor Tim',
            CurrentlyActive: true
          },
          {
            ClassTitle: 'Another random class',
            Instructor: 'Professor Bob',
            CurrentlyActive: false
          },
          {
            ClassTitle: 'Super cool class',
            Instructor: 'Professor Tim',
            CurrentlyActive: true
          },
          {
            ClassTitle: 'Another random class',
            Instructor: 'Professor Bob',
            CurrentlyActive: false
          }
        ];


var ClassListView = module.exports = React.createClass({

  getInitialState: function() {
    console.log("----------------- class list rendered-------")
        return {
            dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})        
        };
    },

  handleAddPress: function () {
  },

  handleClassPress: function () {
  },

  handleBack: function () {
  },

  componentDidMount: function() {
      var self = this;
      fakeJSON = fakeJSON;
      console.dir(fakeJSON);
      self.setState({ dataSource: self.state.dataSource.cloneWithRows(fakeJSON) }, function(){
              console.dir(self.state.dataSource);
      });
  },


  renderListView : function(){
    return(
      <ListView contentInset={{top: -64}}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        style={styles.listView}/>
    );
  },


  renderRow: function(item) {
    console.log('----- rendering rows----' + item );
    return (
      <ClassItem item={item} onSelect={ (item) =>  {
             this.props.toRoute({
              name: item.ClassTitle,
              component: HandRaiserView,
              data: {selectedClass: item},
              titleComponent: HeaderLogo

            });
      }} />
    );
  },


  render: function () {
    return (
      this.renderListView()
    );
  }

});

var styles = StyleSheet.create({
  listView: {
    backgroundColor: '#18CFAA'
  },

  container: {
    flex: 1,
    alignItems: "center"
  },

  TouchableOpacity: {
    top: 100,
    color: "#ff0000"
  }
});