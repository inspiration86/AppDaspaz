import React, {Component} from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";
import { CheckBox } from 'react-native-elements'

class StepFinalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile   : '',
            password: '',
            checked:false
        }
    }

    onClickListener = (viewId) => {
        Alert.alert("ایجاد حساب کاربری", " بی تربیت "+viewId);
    }
    render() {
        const { checked } = this.state;
        return (
            <View style={styles.container}>

                <View style={styles.inputContainer}>
                    {/*<FontAwesomeIcon icon={ faUserAlt } style={ styles.icon }/>*/}
                    <Image style={styles.inputIcon} source={{uri:'https://banner2.cleanpng.com/20180920/efk/kisspng-user-logo-information-service-design-5ba34f88a0c3a6.5907352915374293846585.jpg'}}/>

                    {/*<Image style={styles.inputIcon} source={{uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400'}}/>*/}
                    <TextInput style={styles.inputs}
                               placeholder="نام کاربری "
                               keyboardType = 'numeric'
                               underlineColorAndroid='transparent'
                               onChangeText={(mobile) => this.setState({mobile})}/>
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/password.png'}}/>
                    {/*<FontAwesomeIcon icon={ faKey } style={ styles.icon }/>*/}
                    <TextInput style={styles.inputs}
                               placeholder=" گذر واژه"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>

                <CheckBox
                    center
                    title='با عضویت در آپ دس پز شرایط عضویت را می پذیرم.'
                    iconRight
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={this.state.checked}
                />

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
                    <Text style={styles.loginText}>تائید نهایی</Text>
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
        marginTop:100,
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


export default StepFinalUser;