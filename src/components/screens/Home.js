import React, {Component} from "react";
import {Button, Container, Content, Text} from "native-base";
import {StyleSheet,View} from "react-native";

class Home extends Component<Props> {
    render() {
        return (<View>
 <Container style={styles.Container}>
                <Content>
                    <Button style={styles.buttonstyle}   rounded onPress={()=>this.props.navigation.navigate('Splash')}><Text> splash </Text></Button>
                    <Button style={styles.buttonstyle}   rounded onPress={()=>this.props.navigation.negative('Login')}><Text> login </Text></Button>
                </Content>
            </Container>
        </View>
           
        );
    }
}
const styles = StyleSheet.create({
    Container:{
        alignItems:'center',
        justifyContent: 'center',
        marginTop:"55%",
    },
    buttonstyle: {
        marginTop:20,
        marginBottom:20,
        justifyContent: 'center',
        width:"100%",
        fontFamily:'Iranian Sans',
        fontSize:22,
        shadowColor: '#00000021',
        backgroundColor:'#09c6b1',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    }
});
export default Home;
