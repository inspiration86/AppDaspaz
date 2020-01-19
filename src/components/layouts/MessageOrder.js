import React, { Component } from 'react';
import {BarIndicator} from 'react-native-indicators';
import { StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Button } from 'native-base';
export default class MessageOrder extends Component {
    render() {
        return (
            <Container>
                <Content  style={{ backgroundColor: "#FDF5E6" }} >

                    <CardItem  style={{ backgroundColor: "#FDF5E6" }}>
                        < Card style={{ marginTop: 99 }}>
                            <BarIndicator color="#fa1d7a" style={{ fontsize: 6 }} />
                            <Body>
                                <Text style={styles.ton}>
                                    _سفارش مشتری(حلوا_2کیلو_موعدتحویل99/1/1)از سوی شما تایید شد,درانتظار واریزمبلغ سفارش از سوی خریدار باشید.{'\n'}{'\n'}
                                    _پس از واریز مبلغ پیامی مبنی بر شروع پخت وپز برایتان ارسال می شود.

                                </Text>
                                <Button style={styles.fon}>

                                    <Text style={styles.hon}>تایید</Text>
                                </Button>
                            </Body>
                        </Card>
                    </CardItem>

                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    fon: {
        backgroundColor: "#fa1d7a",
        width: '110%',
        marginTop: '10%',
        marginBottom: '10%',
        borderRadius: 67, padding: 17,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    hon: {
        fontSize: 20,
        fontFamily: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginRight: '25%'
    },
    ton: {
        fontSize:15,
        marginTop: 50,
        color: 'gray',
        margin: 6,
        fontFamily: 'Cochin',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }
});
