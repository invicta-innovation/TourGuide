import React, {Component, Children} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  Alert,
} from 'react-native';

export default class History extends Component {
  render() {
    return (
      <>
      <View style={styles.container}>
        <Text>{this.props.navigation.getParam('about','default value')}</Text>
     
      
        {this.props.navigation.getParam('history','error')}
      </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E88A2',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});