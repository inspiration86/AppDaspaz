import React, { Component } from 'react';
import {PacmanIndicator} from 'react-native-indicators';
import { StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Icon, Button } from 'native-base';
export default class MessageStartCooking extends Component {
    render() {
        return (
            <Container>
                <Content  style={{ backgroundColor: "#FDF5E6" }}>
                    <CardItem  style={{ backgroundColor: "#FDF5E6" }}>
                        < Card style={{ marginTop: 99 }}>
                            <PacmanIndicator color="#fa1d7a" style={{ fontsize: 6 }} />
                            <Body>
                                <Text style={styles.ton}>
                                    *مبلغ مورد نظر پس از تایید قبول سفارش توسط خریدار واریز شد.
                                    {'\n'}{'\n'}
                                    *فرایند تهیه وپخت وپز را آغاز کنید.
                                    {'\n'}{'\n'}
                                    *تادرموعد مقرر سفارش را تحویل دهید.
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
        marginTop: 50,
        color: 'gray',
        margin: 6,
        fontFamily: 'Cochin'
    }
});



