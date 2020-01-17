import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Left, Right, Icon} from 'native-base';

export default class SefareshatAmadehScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon
        type="FontAwesome"
        name="pizza-slice"
        style={{fontSize: 20, color: tintColor}}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Right>
            <Icon type="FontAwesome" name="bread-slice" />
          </Right>
        </Header>
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
