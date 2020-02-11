import {combineReducers} from 'redux';
import AuthSellerReducer from './LoginSellerReducer';
import RegisterSellerReducer from './RegisterSellerReducer';
export default combineReducers({
    auth:AuthSellerReducer,
    registerSeller1:RegisterSellerReducer
})
