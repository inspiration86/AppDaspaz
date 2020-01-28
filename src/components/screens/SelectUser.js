import React, { Component } from 'react';
import { StyleSheet,  Animated, Easing ,View} from 'react-native';
import { Container, Content, Button,Text} from 'native-base';
import { SliderBox } from 'react-native-image-slider-box';
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0);
        this.animatedValue3 = new Animated.Value(0);
        this.state = {
            images: [
                require('../../../assets/images/logo2.png'),
                require('../../../assets/images/logo2.png'),
                require('../../../assets/images/logo2.png'),
            ]};
    }
    componentDidMount() {
        this.animate();
    }
    animate() {
        this.animatedValue1.setValue(0);
        this.animatedValue2.setValue(0);
        this.animatedValue3.setValue(0);
        const createAnimation = (value, duration, easing, delay = 0) => {
            return Animated.timing(value, {
                toValue: 1,
                duration,
                easing,
                delay
            });
        };
        Animated.parallel([
            createAnimation(this.animatedValue1, 1000, Easing.ease),
            createAnimation(this.animatedValue2, 2000, Easing.ease),
            createAnimation(this.animatedValue3, 1000, Easing.ease, 2000)
        ]).start();
    }

    render() {
        const scaleText = this.animatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 1]
        });
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={styles.sliderContainer}>
                    <SliderBox autoplay circleLoop
                        images={this.state.images} style={styles.slider}
                        position={this.state.position}
                        onPositionChanged={position => this.setState({ position })}
                        dotColor="#FFEE58"
                        resizeMethod={'resize'}
                        resizeMode={'cover'}
                        inactiveDotColor="#fff"
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 10,
                            marginHorizontal: 2,
                            padding: 0,
                            margin: 0,
                        }}/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Animated.View style={{ transform: [{ scale: scaleText }] }}>
                            <Button style={styles.buttonstyle}  rounded onPress={() => this.props.navigation.push('SellerLogin')} ><Text style={{color:'#fff', fontFamily: 'IRANSansMobile',}}>ویژه همکاران</Text></Button>
                        </Animated.View>
                        <Animated.View style={{ transform: [{ scale: scaleText }] }}>
                            <Button style={styles.buttonstyle}   rounded ><Text >ویژه مشتربان</Text></Button>
                        </Animated.View>
                    </View>

                </Content>
            </Container>

        );
    }
}
const styles = StyleSheet.create({
    sliderContainer: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        marginRight:7,
        marginLeft:7,
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    slider: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        backgroundColor: 'white',
        marginTop: 80,
        borderRadius: 20,
        marginRight: 50,
        marginLeft: 100,
        width: 210,
        height:200,
    },
    buttonContainer:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        marginTop:80,

    },
    buttonstyle: {
        marginTop:30,
        marginBottom:20,
        justifyContent: 'center',
        alignItems:'center',
        textAlign:'center',
        width:300,
        height:50,

        shadowColor: '#00000021',
        backgroundColor:'#de481e',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    textStyle:{
        flex:1,
        fontFamily: 'IRANSansMobile',
        fontSize:18,
        color:'red'
    }
});