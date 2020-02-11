import {MOBILE_CHANGED, PASSWORD_CHANGED, SELLER_LOGIN_ATTEMP, SELLER_LOGIN_FAIL, SELLER_LOGIN_SUCCESS} from './TypeLoginSeller';

export const mobileChanged = (text) => {
    return {
        type: MOBILE_CHANGED,
        payload: text
    }
}
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}
export const loginUser = (mobile, password) => {
    return (dispatch) => {
        dispatch({type: SELLER_LOGIN_ATTEMP})
        fetch('http://192.168.1.3:3000/api/v1/seller/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mobile: mobile,
                password: password,
            }),
        }).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson)
            if (responseJson.success === true) {
                loginSellerSuccess(dispatch);
            } else {
                loginSellerFail(dispatch);
            }
        }).catch((error) => {
            console.error('yyy');
        });
    }

}
const loginSellerSuccess = (dispatch) => {
    dispatch({type: SELLER_LOGIN_SUCCESS})
}
const loginSellerFail = (dispatch) => {
    dispatch({type: SELLER_LOGIN_FAIL})
}
