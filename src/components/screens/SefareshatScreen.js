import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Left, Right, Icon} from 'native-base';

export default class SefareshtScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon
        type="FontAwesome"
        name="edit"
        style={{fontSize: 20, color: tintColor}}
      />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>پیام</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
