import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList, ScrollView
} from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';
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
                    Product_name:'شیرینی',
                    sub_Product: "خشک",
                    image:require('../../../../assets/images/7.jpg'),
                    date_order:'زمان دریافت سفارش:18 اسفند',
                    date_remind:'زمان باقیمانده:4 روز'
                }
                ,
                {
                    Product_name:'حلوا',
                    sub_Product: "خشک",
                    image:require('../../../../assets/images/3.jpg'),
                    date_order:'زمان دریافت سفارش:18 اسفند',
                    date_remind:'زمان باقیمانده:4 روز'
                }
                ,
                {
                    Product_name:'دسر',
                    sub_Product: "خشک",
                    image:require('../../../../assets/images/1.jpg'),
                    date_order:'زمان دریافت سفارش:18 اسفند',
                    date_remind:'زمان باقیمانده:4 روز'
                }
                ,
                {
                    Product_name:'شیرینی',
                    sub_Product: "خشک",
                    image:require('../../../../assets/images/9.jpg'),
                    date_order:'زمان دریافت سفارش:18 اسفند',
                    date_remind:'زمان باقیمانده:4 روز'
                }
                ,
                {
                    Product_name:'نان',
                    sub_Product: "بربری",
                    image:require('../../../../assets/images/7.jpg'),
                    date_order:'زمان دریافت سفارش:18 اسفند',
                    date_remind:'زمان باقیمانده:4 روز'
                }
                ,
                {
                    Product_name:'شکلات',
                    sub_Product: "کاکاویی",
                    image:require('../../../../assets/images/6.jpg'),
                    date_order:'زمان دریافت سفارش:18 اسفند',
                    date_remind:'زمان باقیمانده:4 روز'
                }
                ,
                {
                    Product_name:'شیرینی',
                    sub_Product: "خشک",
                    image:require('../../../../assets/images/5.jpg'),
                    date_order:'زمان دریافت سفارش:18 اسفند',
                    date_remind:'زمان باقیمانده:4 روز'
                }
                ,
                {
                    Product_name:'شیرینی',
                    sub_Product: "خشک",
                    image:require('../../../../assets/images/3.jpg'),
                    date_order:'زمان دریافت سفارش:18 اسفند',
                    date_remind:'زمان باقیمانده:4 روز'
                }
                ,
                {
                    Product_name:'شیرینی',
                    sub_Product: "خشک",
                    image:require('../../../../assets/images/8.jpg'),
                    date_order:'زمان دریافت سفارش:18 اسفند',
                    date_remind:'زمان باقیمانده:4 روز'
                },
                {
                    Product_name:'شیرینی',
                    sub_Product: "خشک",
                    image:require('../../../../assets/images/7.jpg'),
                    date_order:'زمان دریافت سفارش:18 اسفند',
                    date_remind:'زمان باقیمانده:4 روز'
               },
                {
                    Product_name:'شیرینی',
                    sub_Product: "خشک",
                    image:require('../../../../assets/images/5.jpg'),
                    date_order:'زمان دریافت سفارش:18 اسفند',
                    date_remind:'زمان باقیمانده:4 روز'
                },
                {
                    Product_name:'شیرینی',
                    sub_Product: "خشک",
                    image:require('../../../../assets/images/4.jpg'),
                    date_order:'زمان دریافت سفارش:18 اسفند',
                    date_remind:'زمان باقیمانده:4 روز'
                }
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
                                      <Card style={{marginBottom: 10,height: 90}}>
                                          <Card.Title
                                              title={item.date_remind}
                                              titleStyle={{marginRight:20, textAlign:'right',  fontFamily: 'IRANSansMobile(FaNum)',fontSize: 15,color:'red'}}
                                              subtitle= {item.date_order}
                                              subtitleStyle={{marginRight:20, textAlign:'right',  fontFamily: 'IRANSansMobile(FaNum)',fontSize: 15,color:'green'}}

                                              left={(props) => <Image style={{height:90,width:90,marginTop:20,marginLeft:-19}} source={item.image} />}
                                              right={(props) => <Text style={{fontFamily: 'IRANSansMobile(FaNum)',fontSize: 12,marginHorizontal:10}}>{item.Product_name}</Text>}
                                          />
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
