import React, {Component} from 'react';
import {Provider} from "react-redux";
import {createStore,applyMiddleware } from "redux";
import reducers from "../../../../reducers/Seller/index";
import RegisterSeller from "./indexRegisterSeller";
import ReduxThunk from 'redux-thunk';
class AppRedux extends Component {
    render() {
        return (
            <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>

                   <RegisterSeller/>

            </Provider>
        );
    }
}

export default AppRedux;
