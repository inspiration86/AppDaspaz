import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Header,
  Left,
  Right,
  Icon,
  Body,
  TabBarIOS,
  Container,
} from 'native-base';

class MessegeScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon
        type="FontAwesome"
        name="comment"
        style={{
          fontSize: 20,
          color: tintColor,
        }}
      />
    ),
  };

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Header style={styles.containerheder}>
            <Left>
              <Icon
                style={styles.menuicone}
                name="menu"
                onPress={() => this.props.navigation.openDrawer()}
              />
            </Left>
            <Body>
              <Text></Text>
            </Body>
            <Right></Right>
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
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerheder: {
    height: 70,
    backgroundColor: '#ed0d6e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuicone: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 25,
    color: '#ffff',
  },
});
export default MessegeScreen;
