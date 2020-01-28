import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';
class NotificationScreen extends Component {

  constructor(props) {
    super(props);
    // const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      data: [
        // dataSource: ds.cloneWithRows([
        {
          FirstName:'رسول صیدی',
          description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید",
          image:'./assets/images/1.jpg',
          date:'2بهمن'
        }
        ,
        {
          FirstName:'فرهادی ',
          description: "واریز با موفقیت انجام شد",
          image:'./assets/images/1.jpg',
          date:'18 دی'

        }
        ,
        {
          FirstName:'زهرا راد ',
          description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید",
          image:'./assets/images/1.jpg',
          date:'18 آذر'

        }
        ,
        {
          FirstName:' الهام گودرزی',
          description: "فروشنده محترم،سفارش تحویل گردید",
          image:'./assets/images/1.jpg',
          date:'21 دی'

        }
        ,
        {
          FirstName:'سمیرا احمدی ',
          description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید",
          image:'./assets/images/1.jpg',
          date:'21 دی'

        }
        ,
        {
          FirstName:'محمد یاری ',
          description: "واریز با موفقیت انجام شد",
          image:'./assets/images/1.jpg',
          date:'21 بهمن'

        }
        ,
        {
          FirstName:'علی عباسی ',
          description: "فروشنده محترم،سفارش تحویل گردید",
          image:'./assets/images/1.jpg',
          date:'21 شهریور'

        }
        ,
        {
          FirstName:'خسرو امیری ',
          description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید",
          image:'./assets/images/1.jpg',
          date:'9 دی'

        }
        ,
        {
          FirstName:'باران صیدی ',
          description: "واریز با موفقیت انجام شد",
          image:'./assets/images/1.jpg',
          date:'12 دی'

        },
        {
          FirstName:'ثنا علوانی ',
          description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید",
          image:'./assets/images/1.jpg',
          date:'12 دی'

        },
        {
          FirstName:'ثریا احمدی ',
          description: "فروشنده محترم،سفارش تحویل گردید",
          image:'./assets/images/1.jpg',
          date:'12 دی'

        },
        {
          FirstName:'سمیرا احمدی ',
          description: "واریز با موفقیت انجام شد",
          image:'./assets/images/1.jpg',
          date:'12 دی'

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
                            <Card style={{borderBottomWidth:1,borderBottomColor:'#0099CC'}}>
                              <Card.Title
                                  title={item.FirstName}
                                  titleStyle={{marginRight:20, textAlign:'right',  fontFamily: 'IRANSansMobile(FaNum)',fontSize: 15}}
                                  subtitle={item.description}
                                  subtitleStyle={{marginRight:20, textAlign:'right',  fontFamily: 'IRANSansMobile(FaNum)',fontSize: 15}}

                                  right={(props) => <Avatar.Image size={60} source={require('../../../../assets/images/user.jpg')} />}
                                  left={(props) => <Text style={{fontFamily: 'IRANSansMobile(FaNum)',fontSize: 12}}>{item.date}</Text>}
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
export default NotificationScreen;
