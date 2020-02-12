import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList, ScrollView, TextInput
} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph, Dialog, Portal, Provider, RadioButton} from 'react-native-paper';
import Divider from "react-native-material-ui/src/Divider";
import {Container, Header, Textarea, ListItem, Radio, Right, Left} from 'native-base';
import {Switcher, RadioGroup} from 'nachos-ui'

class OrderCustomer extends Component {

    constructor(props) {
        super(props);
        // const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            visible: false,
            checked: 'first',
            data: [

                // dataSource: ds.cloneWithRows([
                {
                    Product_name: 'شیرینی',
                    sub_Product: "خشک",
                    count: '3 کیلو',
                    address: "لرستان-شهرستان الشتر-خیابان مطهری",
                    image: require('../../../../assets/images/7.jpg'),
                    date_order: '18 اسفند',

                }
                ,
                {
                    Product_name: 'حلوا',
                    sub_Product: "خشک",
                    count: '5 کیلو',
                    address: "لرستان-شهرستان الشتر-خیابان مطهری",
                    image: require('../../../../assets/images/3.jpg'),
                    date_order: '18 اسفند',

                }
                ,
                {
                    Product_name: 'دسر',
                    sub_Product: "خشک",
                    count: '3 بسته',
                    address: "لرستان-شهرستان الشتر-خیابان مطهری",
                    image: require('../../../../assets/images/1.jpg'),
                    date_order: '10 دی',
                    date_remind: 'زمان باقیمانده:4 روز'
                }
                ,
                {
                    Product_name: 'شیرینی',
                    sub_Product: "خشک",
                    count: '3 کیلو',
                    address: "لرستان-شهرستان الشتر-خیابان مطهری",
                    image: require('../../../../assets/images/9.jpg'),
                    date_order: '2 اسفند',

                }
                ,
                {
                    Product_name: 'نان',
                    sub_Product: "بربری",
                    count: '3 کیلو',
                    address: "لرستان-شهرستان الشتر-خیابان مطهری",
                    image: require('../../../../assets/images/7.jpg'),
                    date_order: ' اسفند',

                }
                ,
                {
                    Product_name: 'شکلات',
                    sub_Product: "کاکاویی",
                    count: '3 کیلو',
                    address: "لرستان-شهرستان الشتر-خیابان مطهری",
                    image: require('../../../../assets/images/6.jpg'),
                    date_order: '3 اسفند',

                }
                ,
                {
                    Product_name: 'شیرینی',
                    sub_Product: "خشک",
                    count: '3 کیلو',
                    address: "لرستان-شهرستان الشتر-خیابان مطهری",
                    image: require('../../../../assets/images/5.jpg'),
                    date_order: '18 بهمن',

                }
                ,
                {
                    Product_name: 'شیرینی',
                    sub_Product: "خشک",
                    count: '3 کیلو',
                    address: "لرستان-شهرستان الشتر-خیابان مطهری",
                    image: require('../../../../assets/images/3.jpg'),
                    date_order: '18 اسفند',

                }
                ,
                {
                    Product_name: 'شیرینی',
                    sub_Product: "خشک",
                    count: '3 کیلو',
                    address: "لرستان-شهرستان الشتر-خیابان مطهری",
                    image: require('../../../../assets/images/8.jpg'),
                    date_order: ' اسفند',

                },
                {
                    Product_name: 'شیرینی',
                    sub_Product: "خشک",
                    address: "لرستان-شهرستان الشتر-خیابان مطهری",
                    image: require('../../../../assets/images/7.jpg'),
                    date_order: ' اسفند',

                },


            ]
            // ]),
        };
    }

    _showDialog = () => this.setState({visible: true});

    _hideDialog = () => this.setState({visible: false});

    render() {
        const {checked} = this.state;
        return (
            <View style={styles.container}>
                <FlatList style={styles.notificationList} enableEmptySections={true}
                          data={this.state.data}
                          keyExtractor={(item) => {
                              return item.id;
                          }}
                          renderItem={({item}) => {
                              return (
                                  <View>
                                      <Card style={{marginBottom: 10}}>
                                          <Card.Title title={item.Product_name} titleStyle={{
                                              fontSize: 14,
                                              textAlign: 'center',
                                              fontFamily: 'IRANSansMobile(FaNum)',
                                          }} subtitle={<Text
                                              style={{color: 'green', fontSize: 14,}}>{item.sub_Product}</Text>}
                                                      subtitleStyle={{
                                                          fontFamily: 'IRANSansMobile(FaNum)',
                                                          textAlign: 'center',
                                                      }}
                                                      left={(props) => <Text
                                                          style={{
                                                              color: 'green',
                                                              fontSize: 14,
                                                              fontFamily: 'IRANSansMobile(FaNum)',
                                                          }}>{item.count}</Text>}
                                                      right={(props) => <Avatar.Image source={(item.image)}
                                                                                      size={60}
                                                                                      style={{marginHorizontal: 10,}}/>}/>
                                          <Divider/>
                                          <Card.Content>
                                              <Title style={{
                                                  textAlign: 'center',
                                                  fontFamily: 'IRANSansMobile(FaNum)',
                                                  fontSize: 13
                                              }}>

                                                  <Text>زمان تحویل سفارش:</Text>
                                                  {item.date_order}
                                              </Title>
                                              <Paragraph style={{
                                                  textAlign: 'center',
                                                  fontFamily: 'IRANSansMobile(FaNum)'
                                              }}>آدرس:{item.address}</Paragraph>
                                          </Card.Content>
                                          <Divider/>
                                          <Card.Actions style={{justifyContent: 'center', marginHorizontal: 5}}>
                                              <Button style={{backgroundColor: '#ff4444', marginRight: 3}}
                                                      onPress={this._showDialog}>
                                                  <Text style={{
                                                      fontFamily: 'IRANSansMobile(FaNum)',
                                                      color: '#fff',
                                                      fontSize: 13
                                                  }}> سفارش مشتری را نمی پذیرم</Text>
                                              </Button>
                                              <Button style={{backgroundColor: 'green',}}>
                                                  <Text style={{
                                                      fontFamily: 'IRANSansMobile(FaNum)',
                                                      color: '#fff',
                                                      fontSize: 13
                                                  }}> سفارش مشتری را می پذیرم</Text>
                                              </Button>

                                          </Card.Actions>
                                      </Card>
                                  </View>
                              )
                          }}/>
                <Provider>
                    <Portal>
                        <Dialog
                            visible={this.state.visible}
                            onDismiss={this._hideDialog}>
                            <Dialog.Title
                                style={{fontSize: 15, textAlign: 'center', fontFamily: 'IRANSansMobile(FaNum)'}}>دلیل
                                نپذیرفتن سفارش مشتری را وارد کنید:</Dialog.Title>
                            <Dialog.Content>
                                <ListItem>
                                    <Left
                                        style={{fontSize: 13, textAlign: 'right', fontFamily: 'IRANSansMobile(FaNum)'}}>
                                        <Text style={{
                                            fontSize: 13,
                                            textAlign: 'right',
                                            fontFamily: 'IRANSansMobile(FaNum)'
                                        }}> تحویل محصول در تاریخ و ساعت مورد نظر مشتری امکان پذیر نبود.</Text>
                                    </Left>
                                    <Right>
                                        <Radio selected={false}/>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left>
                                        <Text style={{
                                            fontSize: 13,
                                            textAlign: 'right',
                                            fontFamily: 'IRANSansMobile(FaNum)'
                                        }}> تحویل محصول با حجم مورد نظر مشتری امکان پذیر نبود.</Text>
                                    </Left>
                                    <Right>
                                        <Radio selected={true}/>
                                    </Right>
                                </ListItem>


                                <View style={{flexDirection:'row-reverse'}}>
                                    <View style={{flex:1}}>
                                    <RadioButton style={{justifyContent:'center',alignSelf:'flex-start'}}/>
                                    </View>
                                    <View style={{flex:1,justifyContent:'center',alignSelf:'flex-start'}}>
                                   <Text  style={{fontSize: 13, textAlign: 'right', fontFamily: 'IRANSansMobile(FaNum)'}}>دلایل دیگر:</Text>
                                    </View>
                                </View>
                                <Textarea
                                    style={{fontSize: 13, textAlign: 'right', fontFamily: 'IRANSansMobile(FaNum)'}}
                                    rowSpan={5} bordered placeholder="توضیحات ..."/>


                            </Dialog.Content>
                            <Dialog.Actions
                                style={{fontSize: 12, alignSelf: 'flex-start', fontFamily: 'IRANSansMobile(FaNum)'}}>
                                <Button onPress={this._hideDialog}>
                                    <Text style={{fontSize: 12, fontFamily: 'IRANSansMobile(FaNum)'}}> تائید</Text>
                                </Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </Provider>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC'
    },
    notificationList: {
        padding: 10,
    },
    notificationBox: {
        padding: 25,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 45,
        height: 45,
    },
    description: {
        fontFamily: 'IRANSansMobile(FaNum)',

        fontSize: 15,
        color: "#777777",
        marginLeft: 10,
    },
});
export default OrderCustomer;
