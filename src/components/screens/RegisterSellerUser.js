import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from "../components/screens/StepAtributUser";
import Tab2 from "../components/screens/StepUploadFileUser";
import Tab3 from "../components/screens/StepFinalUser";
class RegisterSellerUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile   : '',
            password: '',
            disable:'false'
        }
    }

    onClickListener = (viewId) => {
        Alert.alert("ایجاد حساب کاربری", " بی تربیت "+viewId);
    }
    render() {
        return (

            <View style={styles.container}>
                <View>
                    <Image style={styles.logoIcon} source={require('../../assets/images/logo2.png')}/>

                </View>
                <View>
                    <Text style={{fontFamily:'IRANSansWeb(FaNum)',marginBottom:20,fontSize:16}}>فرم عضویت در دس پز</Text>
                </View>
                <Container>

                    <Tabs tabBarUnderlineStyle={{backgroundColor:'green'}}>
                        <Tab heading="ورود مشخصات" activeTabStyle={{backgroundColor: '#fa1d7a'}} style={{disable: 'none'}}>
                            <Tab1 />
                        </Tab>
                        <Tab heading="آپلود مدارک" activeTabStyle={{backgroundColor: '#fa1d7a'}} activeTextStyle={{color: '#ffffff', fontWeight: 'normal',fontFamily: 'IRANSansWeb(FaNum)'}} >
                            <Tab2 />
                        </Tab>
                        <Tab heading="تائید" activeTabStyle={{backgroundColor: '#fa1d7a'}} activeTextStyle={{color: '#ffffff', fontWeight: 'normal',fontFamily: 'IRANSansWeb(FaNum)'}} >
                            <Tab3 />
                        </Tab>
                    </Tabs>
                </Container>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header:{
        color:'red'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    logoIcon:{
        width:80,
        height:80,
        marginBottom:10,
        marginTop:10
    },
    taplogin:{
        backgroundColor:'red'
    },
    register:{
        fontFamily:'IRANSansWeb(FaNum)'

    }
});
export default RegisterSellerUser;