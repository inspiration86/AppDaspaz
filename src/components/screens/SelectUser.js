import React, {Component} from 'react';
import { Container, Content, Button, Text} from 'native-base';
export default class SelectUser extends Component {

    render() {
        return(
            <Container style={styles.Container}>
                <Content>
                    <Button style={styles.buttonstyle}   rounded ><Text> ویژه همکاران </Text></Button>
                    <Button style={styles.buttonstyle}   rounded ><Text> ویژه مشتریان </Text></Button>
                </Content>
            </Container>
        )
    }}
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