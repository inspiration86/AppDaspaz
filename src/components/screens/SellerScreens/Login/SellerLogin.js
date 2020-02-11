import React, {Component} from 'react';
import {ActivityIndicator, Alert, Image, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";
import {connect} from "react-redux";
import {
     mobileChanged,
    passwordChanged,
    loginUser

} from "../../../../action/Seller/LoginSellerAction";
class SellerLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            password: '',
        }
    }
    onMobileChange(text) {
        this.props.mobileChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }
    onLoginUser() {
        const {mobile, password} = this.props;
        this.props.loginUser({mobile, password})
    }

    renderButton() {
        if (this.props.loading) {
            return (<ActivityIndicator/>)
        }
        return (<TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
                                    onPress={this.onLoginUser.bind(this)}>
            <Text style={styles.loginText}>ورود</Text>
        </TouchableHighlight>)
    }
    onClickListener = (viewId) => {
        Alert.alert("ایجاد حساب کاربری", " بی تربیت " + viewId);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 3, marginTop: '10%'}}>
                    <Image style={styles.logoIcon} source={require('../../../../../assets/images/logo12.png')}/>
                </View>
                <Text style={{color:'red'}}>{this.props.errors}</Text>
                <View style={{flex: 5}}>
                    <View style={styles.inputContainer}>
                        {/*<FontAwesomeIcon icon={ faUserAlt } style={ styles.icon }/>*/}
                        <Image style={styles.inputIcon}
                               source={require('../../../../../assets/images/mobile1.png')}/>

                        {/*<Image style={styles.inputIcon} source={{uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400'}}/>*/}
                        <TextInput style={styles.inputs}
                                   placeholder="شماره موبایل"
                                   keyboardType='numeric'
                                   underlineColorAndroid='transparent'
                                   value={this.props.mobile}
                                   onChangeText={this.onMobileChange.bind(this)}/>
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
                                   value={this.props.password}
                                   onChangeText={this.onPasswordChange.bind(this)}/>
                    </View>
                    <View style={{flex: 2,marginTop:'8%'}}>
                        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
                                            underlayColor='#00bfa5'   onPress={() => this.onLoginUser()}>
                            <Text style={styles.loginText}>ورود</Text>
                        </TouchableHighlight>

                    </View>

                </View>

                <View style={{height: 50, flexDirection: 'row-reverse', backgroundColor: '#de481e'}}>

                    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fa1d7a'}}>
                        <Text style={{color: '#fff', marginTop: '5%', fontFamily:'IRANSansMobile(FaNum)',}}
                              onPress={() => this.props.navigation('RegisterSellerUser')}>عضویت</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{color: '#fff', marginTop: '5%', fontFamily:'IRANSansMobile(FaNum)',}}

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
        fontFamily:'IRANSansMobile(FaNum)',
    },

    buttonContainer: {
        height: 45,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 350,
        borderRadius: 30,
        fontFamily:'IRANSansMobile(FaNum)',
    },
    loginButton: {

        backgroundColor: "#de481e",

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
        fontFamily:'IRANSansMobile(FaNum)',
        fontSize: 20,
        color: 'white',
    },
    forgetPassword: {
        fontFamily:'IRANSansMobile(FaNum)',
    },
    register: {
        fontFamily:'IRANSansMobile(FaNum)',

    }
});
const mapStateToProps = state => {
    return {
        mobile: state.auth.mobile,
        password: state.auth.password,
        loading: state.auth.loading,
        error: state.auth.error
    }
}
export default connect(mapStateToProps, {

    mobileChanged,
    passwordChanged,
    loginUser
})(SellerLogin);
