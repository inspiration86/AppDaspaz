import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList, ScrollView
} from 'react-native';
import {Avatar, Button, Card, IconButton, Paragraph, Title} from 'react-native-paper';
import Footer from '../../../components/layouts/Footer';
import {Divider} from "react-native-elements";

class OrderCustomer extends Component {

    constructor(props) {
        super(props);
        // const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            data: [
                // dataSource: ds.cloneWithRows([
                {
                    id:1,
                    customer_name:' رسول صیدی',
                    sub_Product: "کیک.خشک",
                    image:require('../../../../assets/images/HeaderSellerAwater.jpg'),
                    date_order:'زمان دریافت سفارش:18 اسفند',
                    date_remind:'4 روز'
                }
                ,
                {
                    id:2,
                    customer_name:'الهام گودرزی',
                    sub_Product: "شیرینی.خشک",
                    image:require('../../../../assets/images/user.jpg'),
                    date_order:'18 اسفند',
                    date_remind:'4 روز'
                }
                ,
                {
                    id:3,
                    customer_name:' ثریا احمدی',
                    sub_Product: "محصولات محلی.روغن حیوانی",
                    image:require('../../../../assets/images/user.jpg'),
                    date_order:'18 اسفند',
                    date_remind:'4 روز'
                }
                ,
                {
                    id:4,
                    customer_name:' اکبر محمدی',
                    sub_Product: "شیرینی.خشک",
                    image:require('../../../../assets/images/HeaderSellerAwater.jpg'),
                    date_order:'18 اسفند',
                    date_remind:'8 روز'
                }
                ,
                {
                    id:5,
                    customer_name:'زهرا نظری',
                    sub_Product: "شیرینی.خشک",
                    image:require('../../../../assets/images/HeaderSellerAwater.jpg'),
                    date_order:'18 اسفند',
                    date_remind:'12 روز'
                }
                ,
                {
                    id:6,
                    customer_name:' محمد محمدی',
                    sub_Product: "حلوا.مجلسی",
                    image:require('../../../../assets/images/HeaderSellerAwater.jpg'),
                    date_order:'18 اسفند',
                    date_remind:'1 روز'
                }
                ,
                {
                    id:7,
                    customer_name:' رسول صیدی',
                    sub_Product: "شکلات. کاکاوئی",
                    image:require('../../../../assets/images/user.jpg'),
                    date_order:'18 اسفند',
                    date_remind:'8 روز'
                }
                ,
                {
                    id:8,
                    customer_name:'نام مشتری: رسول صیدی',
                    sub_Product: "شیرینی.خشک",
                    image:require('../../../../assets/images/HeaderSellerAwater.jpg'),
                    date_order:'زمان دریافت سفارش:18 اسفند',
                    date_remind:'4 روز'
                }
                ,
            ]
            // ]),
        };
    }

    render() {
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
                                      <Card style={{marginBottom: 10,borderColor:'#33b5e5',borderWidth:1}}>
                                          <Card.Title title={<Text>نام مشتری: {item.customer_name}</Text>} titleStyle={{
                                              fontSize: 14,
                                              textAlign: 'center',
                                              fontFamily: 'IRANSansMobile(FaNum)',
                                          }} subtitle={<Text
                                              style={{color: 'green', fontSize: 14,}}>نام سفارش: {item.sub_Product}</Text>}
                                                      subtitleStyle={{
                                                          fontFamily: 'IRANSansMobile(FaNum)',
                                                          textAlign: 'center',
                                                      }}
                                                      right={(props) => <Text
                                                          style={{
                                                              color: '#777',
                                                              fontSize: 18,
                                                              fontFamily: 'IRANSansMobile(FaNum)',marginHorizontal: 10,
                                                          }}>{item.id}</Text>}
                                                      left={(props) => <Avatar.Image source={(item.image)}
                                                                                      size={60}
                                                                                      style={{marginHorizontal: 10,}}/>}/>
                                          <Divider/>
                                          {/*<Card.Content>*/}
                                          {/*    <Title style={{*/}
                                          {/*        textAlign: 'center',*/}
                                          {/*        fontFamily: 'IRANSansMobile(FaNum)',*/}
                                          {/*        fontSize: 13*/}
                                          {/*    }}>*/}

                                          {/*        <Text>زمان تحویل سفارش:</Text>*/}
                                          {/*        {item.date_order}*/}
                                          {/*    </Title>*/}
                                          {/*    <Paragraph style={{*/}
                                          {/*        textAlign: 'center',*/}
                                          {/*        fontFamily: 'IRANSansMobile(FaNum)'*/}
                                          {/*    }}>آدرس:{item.address}</Paragraph>*/}
                                          {/*</Card.Content>*/}
                                          <Divider/>
                                          <Card.Actions style={{justifyContent: 'center', marginHorizontal: 5}}>
                                              <Button style={{backgroundColor: '#ff4444', marginRight: 3}}
                                                      onPress={this._showDialog}>
                                                  <Text style={{
                                                      fontFamily: 'IRANSansMobile(FaNum)',
                                                      color: '#fff',
                                                      fontSize: 13
                                                  }}> {item.date_remind} مانده تا موعد تحویل</Text>
                                              </Button>
                                              <Button style={{backgroundColor: 'green',}}>
                                                  <Text style={{
                                                      fontFamily: 'IRANSansMobile(FaNum)',
                                                      color: '#fff',
                                                      fontSize: 13
                                                  }}> اتمام سفارش و آماده تحویل</Text>
                                              </Button>

                                          </Card.Actions>
                                      </Card>
                                  </View>
                              )}}/>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#DCDCDC'
    },
    notificationList:{
        padding:10,
    },
    notificationBox: {
        padding:25,
        marginTop:5,
        marginBottom:5,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        width:45,
        height:45,
    },
    description:{
        fontFamily: 'IRANSansMobile(FaNum)',

        fontSize:15,
        color: "#777777",
        marginLeft:10,
    },
});
export default OrderCustomer;
