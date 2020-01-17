import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Left, Right, Icon} from 'native-base';
class SabtTavanScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon
        type="FontAwesome"
        name="bell"
        style={{fontSize: 20, color: tintColor}}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>اعلان</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SabtTavanScreen;
