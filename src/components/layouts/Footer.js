import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import {StyleSheet, View} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {DrawerActions} from "react-navigation-drawer";
import RulesSeller from "../screens/SellerScreens/RulesSeller";


export default class FooterTabsIconTextExample extends Component {
    constructor(props){
        super(props);

    }

    render() {
        // const navigation = useNavigation();
        return (
            <View>
                <Footer>
                    <FooterTab >
                        <Button vertical >
                            <Icon name="apps" />
                            <Text style={{fontFamily:'IRANSansMobile(FaNum)'}}>محصولات ما</Text>
                        </Button>
                        <Button vertical
                                // onPress={() => navigation.push('DashboardSeller')}

                        >
                            <Icon name="camera" />
                            <Text>سفارش جدید</Text>
                        </Button>
                        <Button vertical active>
                            <Icon active name="plus" />
                            <Text>محصول جدید</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>سفارش قبلی</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>فیلتر</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

