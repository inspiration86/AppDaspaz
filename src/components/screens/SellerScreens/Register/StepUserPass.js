import * as React from "react";
import {PixelRatio, StyleSheet, Text, TextInput, View} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Button} from "native-base";
import {connect} from "react-redux";
import {
    addressChanged,
    certificateURLChanged,
    emailChanged,
    firstNameChanged,
    lastNameChanged, mobileChanged, nationalCardURLChanged,
    nationalCodeChanged, passwordChanged,
    phoneChanged, profileURLChanged, registerSeller
} from "../../../../action/Seller/RegisterSellerAction";

class StepUserPass extends React.Component {
    onFirstNameChange(text) {
        this.props.firstNameChanged(text)
    }

    onLastnameChange(text) {
        this.props.lastNameChanged(text)
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex: 14, marginTop: hp('20%')}}>
                    {/*<View style={styles.responsiveBox}>*/}
                    <TextInput style={styles.inputs}
                               placeholder="نام کاربری "
                               keyboardType='numeric'
                               underlineColorAndroid='transparent'
                               onChangeText={(mobile) => this.setState({mobile})}/>
                    {/*</View>*/}
                    {/*<View style={styles.responsiveBox}>*/}
                    <TextInput style={styles.inputs}
                               placeholder=" گذر واژه"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>

                </View>
                <View style={{flexDirection: 'row-reverse'}}>

                    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fa1d7a'}}>
                        <Button style={styles.buttonstyleNext}
                                onPress={() => this.props.navigation.push('stepUploadFile')}><Text
                            style={{color: '#fff', fontFamily: 'IRANSansMobile'}}> مرحله قبلی </Text></Button>

                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Button style={styles.buttonstyleNext}
                                onPress={() => this.props.navigation.push('Validatesms')}><Text
                            style={{color: '#fff', fontFamily: 'IRANSansMobile'}}> ثبت نام
                        </Text></Button>

                    </View>
                </View>


            </View>
        );
    }
}
const styles = StyleSheet.create(
    {

        inputs: {
            fontFamily: 'IRANSansMobile(FaNum)',
            textAlign: 'right',
            borderRadius: 8,
            borderColor: '#33b5e5',
            borderWidth: 1,
            marginHorizontal: 15,
            marginVertical: 4
        },
        buttonstyleNext: {
            justifyContent: 'center',
            width: "100%",
            fontFamily: 'IRANSansMobile(FaNum)',
            fontSize: 22,
            shadowColor: '#00000021',
            backgroundColor: '#de481e',
            shadowOffset: {
                width: 0,
                height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
        },


    });


const mapStateToProps = state => {
    return {
        firstName: state.registerSeller1.firstName,
        lastName: state.registerSeller1.lastName,
        nationalCode: state.registerSeller1.nationalCode,
        nationalCardURL: state.registerSeller1.nationalCardURL,
        mobile: state.registerSeller1.mobile,
        phone: state.registerSeller1.phone,
        email: state.registerSeller1.email,
        address: state.registerSeller1.address,
        certificatesURL: state.registerSeller1.certificatesURL,
        profileURL: state.registerSeller1.profileURL,
        password: state.registerSeller1.password,
        loading: state.registerSeller1.loading,
        error: state.registerSeller1.error
    }
}


export default connect(mapStateToProps, {  firstNameChanged,
    lastNameChanged,
    nationalCodeChanged,
    phoneChanged,
    emailChanged,
    certificateURLChanged,
    profileURLChanged,
    addressChanged,
    nationalCardURLChanged,
    mobileChanged,
    passwordChanged,
    registerSeller})(StepUserPass);
