import React, { Component } from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
export default class Splash extends Component {
    static navigationOptions = {
        header:null
    };
    constructor(){
        super();
        this.state={
            isVisible : true,
        }
    }
    componentDidMount(){

        setTimeout(() =>{
            this.props.navigation.navigate('SelectUser');
        },4000)
    }
    render()
    {
        let Splash_Screen = (
            <View style={styles.SplashScreen_RootView}>
                <View style={styles.SplashScreen_ChildView}>
                    <Image source={require('../../../assets/images/splash.png')}
                           style={{width:'110%', height: '100%', resizeMode: 'contain'}} />
                </View>
            </View> )
        return(
            <View style = { styles.MainContainer }>
                <Text style={{textAlign: 'center'}}> Splash Screen Example</Text>
                {
                    (this.state.isVisible === true) ? Splash_Screen : null
                }
            </View>
        );
    }
}
const styles = StyleSheet.create(
    {
        MainContainer:
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
            },
        SplashScreen_RootView:
            {
                justifyContent: 'center',
                flex:1,
                margin: 10,
                position: 'absolute',
                width: '100%',
                height: '100%',
            },
        SplashScreen_ChildView:
            {
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#00BCD4',
                flex:1,
            },
    });