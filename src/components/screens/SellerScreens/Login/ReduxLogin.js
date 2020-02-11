import React, {Component} from 'react';
import {Provider} from "react-redux";
import {createStore,applyMiddleware } from "redux";
import reducers from "../../../../reducers/Seller/index";
import LoginSeller from "./SellerLogin";
import ReduxThunk from 'redux-thunk';
import {Text} from "react-native";
class AppRedux extends Component {
    render() {
        return (
            <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
                {/*<Text>HHH</Text>*/}
                   <LoginSeller/>

            </Provider>
        );
    }
}

export default AppRedux;
