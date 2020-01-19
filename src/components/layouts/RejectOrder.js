import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Card,CardItem,Input,Body,Button,CheckBox} from 'native-base';
export default class RejectOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox1: false,
            checkbox2: false,
        };
    }
    toggleSwitch1() {
        this.setState({
            checkbox1: !this.state.checkbox1,
        });
    }
    toggleSwitch2() {
        this.setState({
            checkbox2: !this.state.checkbox2,
        });
    }
    render() {
        return (
            <View style={styles.MainContainer}>
                <Card style={styles.Card_Container}>
                    <CardItem>
                        <Text style={styles.text2}>
                            {' '}
                            دلیل نپذیرفتن سفارش مشتری را وارد کنید:
                        </Text>
                    </CardItem>
                    <CardItem>
                        <CheckBox
                            style={{marginRight: 20}}
                            color="#fa1d7a"
                            checked={this.state.checkbox1}
                            onPress={() => this.toggleSwitch1()}
                        />
                        <Body>
                            <Text style={StyleSheet.text}>
                                {' '}
                                تحویل محصول در تاریخ و ساعت مورد نظر مشترک امکان پذیر نبود
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <CheckBox
                            style={{marginRight: 20}}
                            color="#fa1d7a"
                            checked={this.state.checkbox2}
                            onPress={() => this.toggleSwitch2()}
                        />
                        <Body>
                            <Text style={StyleSheet.text}>
                                {' '}
                                تحویل محصول با حجم مورد نظر مشترک امکان پذیر نبود
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <View style={styles.View}>
                            <Text> دلایل دیگر:</Text>
                        </View>
                    </CardItem>
                    <CardItem>
                        <Input
                            multiline={true}
                            numberOfLines={1}
                            placeholder="توضیحات"
                            width={100}
                            style={{
                                color: '#000',
                                fontSize: 14,
                                lineHeight: 13,
                                justifyContent: 'center',
                                backgroundColor: '#e7e3e3',
                            }}
                        />
                    </CardItem>
                    <Button button style={styles.mb15}>
                        <Text style={styles.text1}>تایید</Text>
                    </Button>
                </Card>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e7e3e3',
    },
    Card_Container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        borderRadius: 5,
        borderWidth: 0.5,
    },
    text: {
        flex: 1,
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
    },
    text1: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ffff',
    },
    text2: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    View: {
        flexDirection: 'row',
        flex: 1,
        paddingLeft: '2%',
        marginTop: '1%',
    },
    input: {
        color: '#000',
        fontSize: 14,
        lineHeight: 13,
        borderBottomWidth: 0.5,
        textAlign: 'center',
        justifyContent: 'center',
    },
    mb15: {
        width: '70%',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#fa1d7a',
        borderRadius: 67,
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
