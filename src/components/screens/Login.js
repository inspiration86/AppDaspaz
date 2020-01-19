import React, {Component} from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye} from "@fortawesome/free-solid-svg-icons";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            password: '',
        }
    }

    onClickListener = (viewId) => {
        Alert.alert("ایجاد حساب کاربری", " بی تربیت " + viewId);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 3, marginTop: '10%'}}>
                    <Image style={styles.logoIcon} source={require('../../../assets/images/logo2.png')}/>
                </View>

                <View style={{flex: 5}}>
                    <View style={styles.inputContainer}>
                        {/*<FontAwesomeIcon icon={ faUserAlt } style={ styles.icon }/>*/}
                        <Image style={styles.inputIcon}
                               source={require('../../../assets/images/mobile1.png')}/>

                        {/*<Image style={styles.inputIcon} source={{uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400'}}/>*/}
                        <TextInput style={styles.inputs}
                                   placeholder="شماره موبایل"
                                   keyboardType='numeric'
                                   underlineColorAndroid='transparent'
                                   onChangeText={(mobile) => this.setState({mobile})}/>
                    </View>
                    <View style={styles.inputContainer}>
                        {/*<FontAwesomeIcon icon={faEye} size={25} style={styles.inputIcon}/>*/}
                        <Image style={styles.inputIcon}
                               source={{uri: 'https://img.icons8.com/color/40/000000/password.png'}}/>
                        {/*<FontAwesomeIcon icon={ faKey } style={ styles.icon }/>*/}
                        <TextInput style={styles.inputs}
                                   placeholder="رمز عبور"
                                   secureTextEntry={true}
                                   underlineColorAndroid='transparent'
                                   onChangeText={(password) => this.setState({password})}/>
                    </View>
                    <View style={{flex: 2,marginTop:'8%'}}>
                        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
                                            underlayColor='#00bfa5'   onPress={() => this.onClickListener('login')}>
                            <Text style={styles.loginText}>ورود</Text>
                        </TouchableHighlight>

                    </View>
                </View>

                <View style={{height: 50, flexDirection: 'row-reverse', backgroundColor: '#00bfa5'}}>

                    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fa1d7a'}}>
                        <Text style={{color: '#fff', marginTop: '5%', fontFamily: 'IRANSansMobile'}}

                              onPress={() => this.props.navigation.push('RegisterSellerUser')}>عضویت</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{color: '#fff', marginTop: '5%', fontFamily: 'IRANSansMobile'}}

                        >فراموشی رمز </Text>

                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    icon: {
        color: '#777777',
        marginLeft: 10
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
        borderRadius: 30,
        borderBottomWidth: 1,
        // width:100%,
        // height:45,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'IRANSansWeb(FaNum)',
    },

    buttonContainer: {
        height: 45,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 350,
        borderRadius: 30,
        fontFamily: 'IRANSansWeb(FaNum)'
    },
    loginButton: {

        backgroundColor: "#fa1d7a",

    },
    inputIcon: {
        width: 40,
        height: 40,
        marginRight: 15,
        justifyContent: 'center',
        marginLeft: 10
    },
    logoIcon: {
        width: 140,
        height: 140,
        justifyContent: 'center',
    },
    loginText: {
        fontFamily: 'IRANSansWeb(FaNum)',
        fontSize: 20,
        color: 'white',
    },
    forgetPassword: {
        fontFamily: 'IRANSansWeb(FaNum)'
    },
    register: {
        fontFamily: 'IRANSansWeb(FaNum)'

    }
});


export default Login;