import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList, ScrollView
} from 'react-native';
import {Avatar, Button, Card, IconButton, List, Paragraph, Title} from 'react-native-paper';
import Footer from '../../../components/layouts/Footer';
import {Divider} from "react-native-elements";

class IncomeSeller extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id:1,
                    Product_name:'شکلات کاکاوئی',
                    price: "13400",

                }
                ,
                {
                    id:2,
                    Product_name:' لواشک آلبالو',
                    price: "34900",
                }
                ,
                {
                    id:3,
                    Product_name:'کیک تولد',
                    price: "98200",
                }
                ,
                {
                    id:4,
                    Product_name:' دسر آلبالو برنجی',
                    price: "5600",
                }
                ,
                {
                    id:5,
                    Product_name:'خرما ',
                    price: "24000",
                }
                ,
                {
                    id:6,
                    Product_name:'نان بربری',
                    price: "24000",
                }
                ,
                {
                    id:7,
                    Product_name:' حلوا الشتری',
                    price: "14000",
                }
                ,
                {
                    id:8,
                    Product_name:' شیرینی خشک',
                    price: "54000",
                }
                ,
            ]
            // ]),
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <List.Item
                    title="نام محصول"
                    titleStyle={{fontSize:15,textAlign:'center', fontFamily:'IRANSansMobile(FaNum)',color:'#777',}}
                    left={props => <Text style={{fontSize:15,textAlign:'center', fontFamily: 'IRANSansMobile(FaNum)',marginHorizontal:20,color:'#777',marginTop:7}}> قیمت</Text>}
                    right={props => <Text style={{fontSize:15,textAlign:'right', fontFamily: 'IRANSansMobile(FaNum)',marginHorizontal:20,color:'#777',marginTop:7}}>ردیف</Text>}
                />
                <FlatList style={styles.notificationList} enableEmptySections={true}
                          data={this.state.data}
                          keyExtractor={(item) => {
                              return item.id;
                          }}
                          renderItem={({item}) => {
                              return (
                                  <View style={{backgroundColor:'#fff'}}>
                                      <List.Item
                                          title={item.Product_name}
                                          titleStyle={{fontSize:15,textAlign:'center', fontFamily:'IRANSansMobile(FaNum)',marginHorizontal:30,color:'#777'}}
                                          left={props => <Text style={{fontSize:15,textAlign:'right', fontFamily: 'IRANSansMobile(FaNum)',color:'#777'}}>  {item.price}تومان </Text>}
                                          right={props => <Text style={{fontSize:15,textAlign:'right', fontFamily: 'IRANSansMobile(FaNum)',marginHorizontal:20,color:'#777'}}>{item.id}</Text>}
                                      />
                                      <Divider style={{backgroundColor:'#33b5e5'}}/>
                                  </View>
                              )}}/>

                <Divider/>
                <View style={{backgroundColor:'#ff4500'}}>
                    <List.Item
                        title="جمع کل: "
                        titleStyle={{fontSize:15,textAlign:'right', fontFamily:'IRANSansMobile(FaNum)',marginHorizontal:30,color:'#fff'}}
                        left={props => <Text style={{fontSize:15,textAlign:'right', fontFamily: 'IRANSansMobile(FaNum)',color:'#fff'}}> 50000  تومان</Text>}
                        right={props => <Text style={{fontSize:15,textAlign:'right', fontFamily: 'IRANSansMobile(FaNum)',marginHorizontal:2}}></Text>}

                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#DCDCDC'
    },

    description:{
        fontFamily: 'IRANSansMobile(FaNum)',

        fontSize:15,
        color: "#777777",
        marginLeft:10,
    },
});
export default IncomeSeller;
