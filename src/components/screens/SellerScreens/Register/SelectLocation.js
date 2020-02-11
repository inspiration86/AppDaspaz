import React, {Component} from "react"
import {View, Text, StyleSheet, Image, TextInput, Alert} from "react-native"
import Select2 from "react-native-select-two";
import {
    cityChanged,
    provinceChanged,
    firstNameChanged,
    lastNameChanged,
    nationalCodeChanged,
    phoneChanged,
    certificateURLChanged,
    profileURLChanged,
    addressChanged,
    emailChanged,
    nationalCardURLChanged,
    mobileChanged,
    passwordChanged,
    registerSeller,

} from "../../../../action/Seller/RegisterSellerAction";
import AwesomeAlert from 'react-native-awesome-alerts';
import {connect} from "react-redux";
import {Button} from "native-base";
import ValidationComponent from 'react-native-form-validator';
import Divider from "react-native-material-ui/src/Divider";
const mockData = [
    {id: 1, name: "تهران",}, // set default checked for render option item
    {id: 2, name: "قم", checked: false},
    {id: 3, name: "اراک", checked: false},
    {id: 4, name: "شیراز", checked: false},
    {id: 5, name: "اصفهان", checked: false},
    {id: 6, name: "همدان", checked: false},
    {id: 7, name: "مشهد", checked: false},

]
const ListCity = [
    {id: 1, name: "تهران",}, // set default checked for render option item
    {id: 2, name: "قم", checked: false},
    {id: 3, name: "اراک", checked: false},
    {id: 4, name: "شیراز", checked: false},
    {id: 5, name: "اصفهان", checked: false},
    {id: 6, name: "همدان", checked: false},
    {id: 7, name: "مشهد", checked: false},

]

class SelectLocation extends Component {
    constructor(props){
        super(props);
        this.state={
            showAlert: false,
            city:'شهر را وارد نمائید',
            province:'استان خود را وارد نمائید'
        }


    }


    onStateChange(name) {
        for (const item of mockData) {
            if (item.id === name) {
                this.props.provinceChanged(item.name)
                this.setState({province:''})
            }
            // else {
            //     this.setState({province: this.state.province})
            // }
        }
    }

    onCityChange(name) {
        for (const item of ListCity) {
            if (item.id === name) {
                this.props.cityChanged(item.name);

            }
        }
    }
    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };
    _onValidation() {
        // alert(this.props.city)
       if(this.props.city ==='')
       {
           this.showAlert();
       }
       else
       if(this.props.province ==='')
       {
           this.showAlert();
       }
       else
       {
           // this.setState({city:''});
           // alert(this.state.city)
           this.props.navigation.push('StepAtributeUser')
       }
    }
    render() {
        const {showAlert} = this.state;
        return (
            <View style={{flex: 1, justifyContent: 'center', flexDirection: 'column',}}>
                <View style={{flex: 1,marginTop: 30, justifyContent: 'center', flexDirection: 'row'}}>
                    <Image style={styles.logoIcon} source={require('../../../../../assets/images/logo12.png')}/>
                </View>
                <View style={{flex: 1, marginTop: 2, justifyContent: 'center', flexDirection: 'row'}}>
                    <Text style={{fontSize: 20, fontFamily: 'IRANSansMobile(FaNum)'}}>فرم عضویت فروشنده در اپلیکیشن دس پز</Text>
                </View>

                <View style={{flex: 3, marginHorizontal:8}}>
                    {/*<Text style={{fontFamily: 'IRANSansMobile(FaNum)'}}>استان محل خود را انتخاب کنید</Text>*/}

                    <Select2

                        isSelectSingle
                        style={{
                            borderRadius: 10, paddingVertical: 10, marginVertical: 10, borderColor: '#33b5e5',
                            borderWidth: 1,
                        }}
                        colorTheme="red"
                        popupTitle="انتخاب استان"
                        title="استان مورد نظر خود را وارد نمائید"
                        searchPlaceHolderText="جستجو"
                        cancelButtonText="انصراف"
                        selectButtonText="انتخاب"
                        defaultFontName="IRANSansMobile(FaNum)"
                        data={mockData}
                        value={this.props.province}
                        onSelect={
                            // alert('ddd')
                            data => {
                            this.setState({data})
                                // this.onCityChange(data)
                                this.onStateChange(data[0])
                        }
                        }
                        onRemoveItem={data => {
                            this.setState({data})
                        }}

                    />
                    <Select2

                        isSelectSingle
                        style={{
                            borderRadius: 10, paddingVertical: 10, marginVertical: 10, borderColor: '#33b5e5',
                            borderWidth: 1,
                        }}
                        colorTheme="red"
                        popupTitle="انتخاب شهر"
                        title="شهر مورد نظر خود را وارد نمائید"
                        searchPlaceHolderText="جستجو"
                        cancelButtonText="انصراف"
                        selectButtonText="انتخاب"
                        buttonTextStyle="IRANSansMobile(FaNum)"
                        buttonStyle="IRANSansMobile(FaNum)"
                        defaultFontName="IRANSansMobile(FaNum)"
                        data={ListCity}
                        onSelect={
                            // alert('ddd')
                            data => {
                                this.setState({data})
                                // this.onCityChange(data)
                                this.onCityChange(data[0])
                            }
                        }


                        onRemoveItem={data => {
                            this.setState({data})
                        }
                        }
                    />
                </View>

                <View style={{height: 45, flexDirection: 'row-reverse',}}>

                    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fa1d7a'}}>
                        <Button block style={{backgroundColor: '#fa1d7a'}} onPress={() => this.props.navigation.push('SellerLogin')} >
                                <Text style={{color: '#fff', fontFamily: 'IRANSansMobile'}}>ورود</Text>
                        </Button>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Button block style={{backgroundColor: '#00bfa5'}}  onPress={() => this._onValidation()}>
                            <Text style={{color: '#fff', fontFamily: 'IRANSansMobile'}}>مرحله بعدی</Text>
                        </Button>

                    </View>
                </View>
                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title="اطلاعات زیر را به طور کامل وارد نمائید"
                    message={ <Text>{this.state.city}{this.state.province}</Text> }
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    titleStyle={{fontSize:14,fontFamily:'IRANSansMobile(FaNum)'}}
                    messageStyle={{fontSize:15,fontFamily:'IRANSansMobile(FaNum)'}}
                    confirmText="بله"
                    confirmButtonColor="#DD6B55"
                    confirmButtonStyle={{}}
                    confirmButtonTextStyle={{fontSize:17,fontFamily:'IRANSansMobile(FaNum)'}}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        logoIcon: {
            width: 120,
            height: 120,
            marginBottom: 10,
            marginTop: 10
        },
    });
const mapStateToProps = state => {
    return {
        province: state.registerSeller1.province,
        city: state.registerSeller1.city,
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
export default connect(mapStateToProps, {
    cityChanged,
    provinceChanged,
    firstNameChanged,
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
    registerSeller

})(SelectLocation);
