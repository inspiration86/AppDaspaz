import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell} from "@fortawesome/free-solid-svg-icons";
class NotificationScreen extends Component {

  constructor(props) {
    super(props);
    // const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      data: [
        // dataSource: ds.cloneWithRows([
        {
          description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید"
        }
        ,
        {
          description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید"
        }
        ,
        {
          description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید"
        }
        ,
        {
          description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید"
        }
        ,
        {
          description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید"
        }
        ,
        {
          description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید"
        }
        ,
        {
          description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید"
        }
        ,
        {
          description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید"
        }
        ,
        {
          description: "فروشنده محترم،سفارش شماره 2345 با موفقیت تحویل فروشنده گردید"
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
                          <View style={styles.notificationBox}>

                            <Text style={styles.description}>{item.description}</Text>
                            <FontAwesomeIcon icon={faBell} style={{color:'#777777',paddingRight:40}} size={30}/>
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
    fontFamily: 'IRANSansMobile',

    fontSize:15,
    color: "#777777",
    marginLeft:10,
  },
});
export default NotificationScreen;
