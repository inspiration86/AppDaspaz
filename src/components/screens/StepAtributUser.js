import React, {Component} from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";

class StepAtributUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile   : '',
            password: '',
        }
    }

    onClickListener = (viewId) => {
        Alert.alert("ایجاد حساب کاربری", " بی تربیت "+viewId);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="نام"
                               keyboardType = 'text'
                               underlineColorAndroid='transparent'
                               onChangeText={(mobile) => this.setState({mobile})}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="نام خانوادگی"
                               keyboardType = 'text'
                               underlineColorAndroid='transparent'
                               onChangeText={(mobile) => this.setState({mobile})}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="شماره ملی"
                               keyboardType = 'numeric'
                               underlineColorAndroid='transparent'
                               onChangeText={(mobile) => this.setState({mobile})}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="شماره تماس(همراه)"
                               keyboardType = 'numeric'
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder=" آدرس"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder=" شماره تماس (ثابت)"
                               keyboardType = 'numeric'
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder=" ایمیل(اختیاری)"
                               keyboardType = 'email'
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('register')}>
                    <Text style={styles.register}> مرحله بعدی  </Text>
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
        marginTop:50,
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
        marginBottom:5,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
        fontSize:15,
        marginRight:16,
        textAlign:'right',
        fontFamily:'IRANSansWeb(FaNum)',
    },

    buttonContainer: {
        height:45,
        marginTop:40,
        marginRight:150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:150,
        direction:'rtl',
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
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        color:'#ffffff',
        elevation: 19,
        fontFamily:'IRANSansWeb(FaNum)'

    }
});


export default StepAtributUser;