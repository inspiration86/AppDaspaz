import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Login extends Component {
  constructor(props) {
    super(props);
    state = {
      phone: '',
      password: '',
    };
  }

  onClickListener = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId);
  };

  render() {
    return (
        <View style={styles.container}>
          <Image
              style={styles.logo}
              source={require('../../../../assets/images/logo12.png')}
          />

          <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputs}
                placeholderTextColor="#77777"
                placeholder="شماره موبایل خود را وارد کنید"
                keyboardType="phone-pad"
                underlineColorAndroid="transparent"
                onChangeText={phone => this.setState({phone})}
            />
            <Icon
                name="mobile"
                size={25}
                color="#79b635"
                style={{marginRight: 20}}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputs}
                placeholder="رمز عبور خود را وارد کنید"
                keyboardType="visible-password"
                placeholderTextColor="#77777"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                onChangeText={password => this.setState({password})}
            />
            <Icon
                name="lock"
                size={20}
                color="#79b635"
                style={{marginRight: 20}}
            />
          </View>

          <TouchableOpacity
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => this.onClickListener('login')}>
            <Text style={styles.loginText}>ثبت نام</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.onClickListener('register')}>
            <Text style={styles.btnText}>ورود به دس پز</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:-15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  inputContainer: {
    borderColor: '#33b5e5',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    //marginTop:-10,
    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    fontFamily:'IRANSansMobile',

  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:15,
    marginBottom: 20,
    width: 300,
    borderRadius: 20,
      fontFamily:'IRANSansMobile(FaNum)',
    backgroundColor: 'transparent',
  },
  btnForgetPassword: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    marginTop: 15,
    // width: 300,
    backgroundColor: 'transparent',
  },
  loginButton: {
    backgroundColor: '#f55020',
    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
  loginText: {
    color: 'white',
    fontSize:16,
      fontFamily:'IRANSansMobile(FaNum)',
  },
  bgImage: {
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '50%',
    height: '50%',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    marginBottom: 30,
    borderRadius: 50,
  },
  btnText: {
      fontFamily:'IRANSansMobile(FaNum)',
    fontSize:16,
    marginTop:20,
    color:'#79b635'
  },
});
