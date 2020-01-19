import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import {Header} from '../index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faKey, faUserAlt} from "@fortawesome/free-solid-svg-icons";

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile   : '',
            password: '',
        }
    }

    onClickListener = (viewId) => {
        Alert.alert("عضويت", " بي تربيت "+viewId);
    }
    render() {
        return (

            <View style={styles.container}>
                <Header/>
                <Image style={styles.logoIcon} source={require('../../../assets/images/logo1.png')}/>
                <View style={styles.inputContainer}>
                    {/*<FontAwesomeIcon icon={ faUserAlt } style={ styles.icon }/>*/}
                    <Image style={styles.inputIcon} source={{uri:'https://banner2.cleanpng.com/20180920/efk/kisspng-user-logo-information-service-design-5ba34f88a0c3a6.5907352915374293846585.jpg'}}/>

                    {/*<Image style={styles.inputIcon} source={{uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400'}}/>*/}
                    <TextInput style={styles.inputs}
                               placeholder="شماره موبايل"
                               keyboardType = 'numeric'
                               underlineColorAndroid='transparent'
                               onChangeText={(mobile) => this.setState({mobile})}/>
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/password.png'}}/>
                    {/*<FontAwesomeIcon icon={ faKey } style={ styles.icon }/>*/}
                    <TextInput style={styles.inputs}
                               placeholder="رمز عبور"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
                    <Text style={styles.loginText}>ورود</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
                    <Text style={styles.forgetPassword}>رمز عبور را فراموش کرده ايد؟</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
                    <Text style={styles.register}> عضويت</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    icon:{
        color: '#777777',
        marginLeft:10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    inputContainer: {
        borderBottomColor: '#777777',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        // width:100%,
        // height:45,
        marginLeft:10,
        marginRight:10,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
        fontSize:15,
        textAlign:'center',
        fontFamily:'IRANSansWeb(FaNum)',
    },

    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:350,
        borderRadius:30,
        fontFamily:'IRANSansWeb(FaNum)'
    },
    loginButton: {

        backgroundColor: "#fa1d7a",

    },
    inputIcon:{
        width:30,
        height:30,
        marginRight:15,
        justifyContent: 'center',
        marginLeft:10
    },
    logoIcon:{
        width:140,
        height:140,
        justifyContent: 'center',
    },
    loginText: {
        fontFamily:'IRANSansWeb(FaNum)',
        fontSize:20,
        color: 'white',
    },
    forgetPassword:{
        fontFamily:'IRANSansWeb(FaNum)'
    },
    register:{
        fontFamily:'IRANSansWeb(FaNum)'

    }
});
export default login;