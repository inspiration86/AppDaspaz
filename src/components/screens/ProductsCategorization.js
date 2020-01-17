import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Alert,
    ScrollView, TouchableHighlight
} from 'react-native';
import { Switch } from 'react-native-paper';
class ProductsCategorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSwitchOn: false,
            isSwitchOn1: true,
            isSwitchOn2: false,
            isSwitchOn3: true,
            modalVisible:false,
            userSelected:[],
            data: [
                {id:1,  name: "شیرینی",   image:"https://img.icons8.com/clouds/100/000000/groups.png",            isSwitchOn: false},
                {id:2,  name: "حلوا",    image:"https://img.icons8.com/color/100/000000/real-estate.png",      isSwitchOn: true},
                {id:3,  name: "دسر",       image:"https://img.icons8.com/color/100/000000/find-matching-job.png", isSwitchOn: false} ,
                {id:4,  name: "شکلات",   image:"https://img.icons8.com/clouds/100/000000/employee-card.png",   isSwitchOn: true} ,
                {id:5,  name: " کیک",   image:"https://img.icons8.com/color/100/000000/land-sales.png",        isSwitchOn: false} ,
                {id:6,  name: "محصولات محلی",   image:"https://img.icons8.com/clouds/100/000000/employee-card.png",    isSwitchOn: false} ,
                {id:7,  name: " نان",   image:"https://img.icons8.com/color/100/000000/land-sales.png",        isSwitchOn: true} ,

            ]
        };
    }

    clickEventListener = (item) => {
        Alert.alert('Message', 'Item clicked. '+item.name);
    }

    render() {
        const { isSwitchOn } = this.state;
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        فروشنده محترم، در کدام یک از دسته های زیر توانایی تامین و تهیه محصول را دارید. هر کدام از دسته های زیر جزء توانایی های شماست آنرا انتخاب کنید.
                    </Text>
                </View>
                <FlatList
                    style={styles.contentList}
                    columnWrapperStyle={styles.listContainer}
                    data={this.state.data}
                    keyExtractor= {(item) => {
                        return item.id;
                    }}
                    renderItem={({item}) => {
                        return (
                            <View style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                                <View style={styles.cardContent}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    {/*<Text style={styles.count}>{item.count}</Text>*/}
                                    {/*<TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>*/}
                                    {/*    <Text style={styles.followButtonText}>انتخاب</Text>*/}
                                    {/*</TouchableOpacity>*/}
                                    <Switch style={styles.followButton}
                                            value={item.isSwitchOn}
                                            onValueChange={() =>
                                            { this.setState({ isSwitchOn: !isSwitchOn }); }
                                            }
                                    />
                                </View>

                                <Image style={styles.image} source={{uri: item.image}}/>


                            </View>
                        )}}/>
                <View style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
                    <Text style={styles.loginText}>ثبت اطلاعات</Text>
                </View>
            </View>
        );
    }
};
export {ProductsCategorization};
const styles = StyleSheet.create({
    loginText: {
        fontFamily:'IRANSansWeb(FaNum)',
        fontSize:20,
        color: 'white',
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        marginTop:20,
        marginLeft:50,
        width:300,
        borderRadius:30,
        fontFamily:'IRANSansWeb(FaNum)'
    },
    loginButton: {
        backgroundColor: "#09c6b1",
    },
    title:{
        marginRight:20,
        marginLeft:20,
        fontFamily:'IRANSansWeb(FaNum)',
        justifyContent:'center',
        alignItems:'center',
        fontSize:20,
    },
    container:{
        flex:1,
        marginTop:20,
        backgroundColor:"#ffffff"
    },
    contentList:{
        flex:1,
    },
    cardContent: {
        // paddingLeft:60,
        marginTop:10,
        marginLeft:22,
        // flexDirection:'row',
        // flex:3,
        //textAlign:'left',
        //alignContent: 'right',
        justifyContent: 'center'
    },
    image:{
        width:90,
        height:90,
        borderRadius:30,
        borderWidth:2,
        marginLeft:150,
        borderColor:"#ebf0f7"
    },

    card:{
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginLeft: 20,
        marginRight: 20,
        marginTop:15,
        backgroundColor:"white",
        padding: 3,
        flexDirection:'row',
        borderRadius:30,
    },

    name:{
        fontSize:18,
        flex:1,
        // paddingLeft: 50,
        fontFamily:'IRANSansWeb(FaNum)',
        textAlign:'right',
        color:"#fa1d7a",

    },

    followButton: {
        marginTop:10,
        height:35,
        width:100,
        padding:10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
        // backgroundColor:'#fa1d7a',
        borderWidth:1,
        borderColor:"#dcdcdc",
    },
    followButtonText:{
        color: "#ffffff",
        fontFamily:'IRANSansWeb(FaNum)',
        fontSize:12,
    },
});