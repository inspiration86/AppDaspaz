import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    ScrollView,
    Alert
} from 'react-native';
import {Container, Tab, Tabs, TabHeading, Icon,ScrollableTab} from "native-base";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEdit, faTruck, faUser} from "@fortawesome/free-solid-svg-icons";

class StepOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    description: "سفارش حلوا.",
                    date: "تاریخ:21 دی ماه. ساعت 19:20",
                    color: "#228B22",
                    completed: 1
                },
                {
                    id: 2,
                    description: "سفارش شیرینی",
                    date: "تاریخ:22 دی ماه. ساعت 18:20",
                    color: "#228B22",
                    completed: 0
                },
                {
                    id: 3,
                    description: "سفارش شیرینی",
                    date: "تاریخ:22 دی ماه. ساعت 18:20",
                    color: "#228B22",
                    completed: 0
                },
                {
                    id: 4,
                    description: "سفارش شیرینی",
                    date: "تاریخ:22 دی ماه. ساعت 18:20",
                    color: "#228B22",
                    completed: 0
                },
                {
                    id: 5,
                    description: "سفارش شیرینی",
                    date: "تاریخ:22 دی ماه. ساعت 18:20",
                    color: "#228B22",
                    completed: 0
                },
                {
                    id: 6,
                    description: "سفارش شیرینی",
                    date: "تاریخ:22 دی ماه. ساعت 18:20",
                    color: "#228B22",
                    completed: 0
                },
                {
                    id: 7,
                    description: "سفارش شیرینی",
                    date: "تاریخ:22 دی ماه. ساعت 18:20",
                    color: "#228B22",
                    completed: 0
                },
            ]
        };
    }

    clickEventListener = (item) => {
        Alert.alert("Item selected: " + item.description)
    }



    __getDescriptionStyle = (item) => {
        if (item.completed == 1) {
            return {textDecorationLine: "line-through", fontStyle: 'italic', color: "#808080"};
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.tasks}
                    columnWrapperStyle={styles.listContainer}
                    data={this.state.data}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity style={[styles.card, {borderColor: item.color}]} onPress={() => {
                                this.clickEventListener(item)
                            }}>
                                {/*<Image style={styles.image} source={{uri: this.__getCompletedIcon(item)}}/>*/}
                                <View style={styles.cardContent}>
                                    <Text
                                        style={[styles.description, this.__getDescriptionStyle(item)]}>{item.description}</Text>
                                    <Text style={styles.date}>{item.date}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}/>
            </View>
        );
    }
}

class StepTwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    description: "سفارش حلوا.",
                    date: "تاریخ:21 دی ماه. ساعت 19:20",
                    color: "#20B2AA",
                    completed: 1
                },
                {
                    id: 2,
                    description: "سفارش شیرینی",
                    date: "تاریخ:22 دی ماه. ساعت 18:20",
                    color: "#20B2AA",
                    completed: 0
                },
                {
                    id: 3,
                    description: "سفارش حلوا.",
                    date: "تاریخ:21 دی ماه. ساعت 19:20",
                    color: "#20B2AA",
                    completed: 1
                },
                {
                    id: 4,
                    description: "سفارش شیرینی",
                    date: "تاریخ:22 دی ماه. ساعت 18:20",
                    color: "#20B2AA",
                    completed: 0
                },
                {
                    id: 5,
                    description: "سفارش حلوا.",
                    date: "تاریخ:21 دی ماه. ساعت 19:20",
                    color: "#20B2AA",
                    completed: 1
                },
                {
                    id: 6,
                    description: "سفارش شیرینی",
                    date: "تاریخ:22 دی ماه. ساعت 18:20",
                    color: "#20B2AA",
                    completed: 0
                },
                {
                    id: 7,
                    description: "سفارش حلوا.",
                    date: "تاریخ:21 دی ماه. ساعت 19:20",
                    color: "#20B2AA",
                    completed: 1
                },
                {
                    id: 8,
                    description: "سفارش شیرینی",
                    date: "تاریخ:22 دی ماه. ساعت 18:20",
                    color: "#20B2AA",
                    completed: 0
                },

            ]
        };
    }

    clickEventListener = (item) => {
        Alert.alert("Item selected: " + item.description)
    }

    __getCompletedIcon = (item) => {
        if (item.completed == 1) {
            return "https://img.icons8.com/flat_round/64/000000/checkmark.png";
        } else {
            return "https://img.icons8.com/flat_round/64/000000/delete-sign.png";
        }
    }

    __getDescriptionStyle = (item) => {
        if (item.completed == 1) {
            return {textDecorationLine: "line-through", fontStyle: 'italic', color: "#808080"};
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.tasks}
                    columnWrapperStyle={styles.listContainer}
                    data={this.state.data}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity style={[styles.card,{borderColor: item.color}]} onPress={() => {
                                this.clickEventListener(item)
                            }}>
                                {/*<Image style={styles.image} source={{uri: this.__getCompletedIcon(item)}}/>*/}
                                <View style={styles.cardContent}>
                                    {/*<Text*/}
                                    {/*    style={[styles.description, this.__getDescriptionStyle(item)]}>{item.description}</Text>*/}
                                    <Text style={styles.date}>{item.date}</Text>
                                </View>
                                <Text  style={styles.description}>{item.description}</Text>
                            </TouchableOpacity>
                        )
                    }}/>
            </View>
        );
    }
}

export class HomeScreen extends Component {
    render() {
        return (
            <Container>

                <Tabs tabContainerStyle={{height:75}}
                        tabBarUnderlineStyle={{backgroundColor: '#fa1d7a'}}

                      >
                    <Tab tabStyle={{ backgroundColor: "#5078F2" }} activeTabStyle={{backgroundColor: '#fa1d7a'}}
                                heading={
                                    <TabHeading style={{backgroundColor: '#ffffff'}}>
                                        <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                            <View style={{flex:1,marginTop:10,marginBottom:-20}}>
                                                <FontAwesomeIcon size={20} icon={faTruck} style={{color:'#fa1d7a'}}/>
                                            </View>
                                            <View style={{flex:1}}>
                                                <Text style={{fontFamily: 'IRANSansMobile', color: '#fa1d7a'}}>سفارش های ارسالی</Text>

                                            </View>
                                        </View>
                                    </TabHeading>}>
                    <StepTwo/>
                </Tab>
                    <Tab tab
                         heading={
                             <TabHeading style={{backgroundColor: '#ffffff'}}>
                                 <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                     <View style={{flex:1,marginTop:10,marginBottom:-20}}>
                                         {/*<FontAwesomeIcon icon={faEdit} style={{color:'#fff'}}/>*/}
                                         <Icon
                                             type="FontAwesome"
                                             name="cutlery"

                                             style={{fontSize: 20, color:'#fa1d7a'}}
                                         />
                                     </View>
                                     <View style={{flex:1}}>
                                         <Text style={{fontFamily: 'IRANSansMobile', color: '#fa1d7a'}}>سفارش های جدید</Text>

                                     </View>
                                 </View>
                             </TabHeading>}>
                        <StepOne/>
                    </Tab>

                </Tabs>
            </Container>
        );
    }
}

export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "#eeeeee"
    },
    tasks: {
        flex: 1,
    },
    cardContent: {
         flex:1,
        flexDirection:'row-reverse',
        marginTop: 10,
    },
    image: {
        width: 25,
        height: 25,
    },

    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },

        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: "white",
        // flexBasis: '50%',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderLeftWidth: 12,
    },

    description: {
        fontSize: 15,
       justifyContent:'center',
        alignItems:'center',
        color: "#777777",
        fontFamily: 'IRANSansMobile',
    },
    date: {
        fontSize: 14,
        justifyContent:'center',
        color: "#777777",
        marginTop: 20,
        fontFamily: 'IRANSansMobile',
    },
});