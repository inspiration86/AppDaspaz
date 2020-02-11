import {
    COUNTRY_CHANGED,
    PROVINCE_CHANGED,
    CITY_CHANGED,
    MOBILE_CHANGED,
    PASSWORD_CHANGED,
    FIRSTNAME_CHANGED,
    LASTNAME_CHANGED,
    PHONE_CHANGED,
    EMAIL_CHANGED,
    NATIONALCARDURL_CHANGED,
    NATIONALCODE_CHANGED,
    ADDRESS_CHANGED,
    PROFILEURL_CHANGED,
    CERTIFICATEURL_CHANGED,
    SELLER_LOGIN_ATTEMP,
    SELLER_LOGIN_FAIL,
    SELLER_LOGIN_SUCCESS,
    NATIONAL_DATA_CHANGED,
    CERTIFICATE_DATA_CHANGED
} from './TypeRegisterSeller';
import RNFetchBlob from "rn-fetch-blob";

export const nationalDataChanged = (text) => {
    return {
        type: NATIONAL_DATA_CHANGED,
        payload: text
    }
}
export const certificateDataChanged = (text) => {
    return {
        type: CERTIFICATE_DATA_CHANGED,
        payload: text
    }
}
export const provinceChanged = (text) => {
    return {
        type: PROVINCE_CHANGED,
        payload: text
    }
}
export const cityChanged = (text) => {
    return {
        type: CITY_CHANGED,
        payload: text
    }
}
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
export const firstNameChanged = (text) => {
    return {
        type: FIRSTNAME_CHANGED,
        payload: text
    }
}
export const lastNameChanged = (text) => {
    return {
        type: LASTNAME_CHANGED,
        payload: text
    }
}
export const phoneChanged = (text) => {
    return {
        type: PHONE_CHANGED,
        payload: text
    }
}
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}
export const addressChanged = (text) => {
    return {
        type: ADDRESS_CHANGED,
        payload: text
    }
}
export const profileURLChanged = (text) => {
    return {
        type: PROFILEURL_CHANGED,
        payload: text
    }
}
export const nationalCodeChanged = (text) => {
    return {
        type: NATIONALCODE_CHANGED,
        payload: text
    }
}
export const nationalCardURLChanged = (text) => {
    return {
        type: NATIONALCARDURL_CHANGED,
        payload: text
    }
}
export const certificateURLChanged = (text) => {
    return {
        type: CERTIFICATEURL_CHANGED,
        payload: text
    }
}
let resultdataFileNational: any = null;
let resultdataFileCertificate: any = null;
let imagePathNationalCard: any = null;
let imagePathCertificate: any = null;
export const registerSeller = ({firstName, lastName, mobile, province, city, nationalCode, certificatesURL, nationalCardURL, phone, email, password, nationalData, certificateData}) => {
    return (dispatch) => {
        dispatch({type: SELLER_LOGIN_ATTEMP});
        uploadImageToServer(nationalData, certificateData);
        // console.log(resultdataFileNational)


        fetch('http://192.168.1.3:3000/Api/v1/seller/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                country_name: 'iran',
                province_name: province,
                city_name: city,
                address: 'gg',
                firstname: firstName,
                lastname: lastName,
                nationalcode: nationalCode,
                mobile: mobile,
                phone: phone,
                email: email,
                password: password,
                nationalcardurl: imagePathNationalCard,
                certificateurl: imagePathCertificate,
                profileurl: 'ff',

            }),
        }).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson)
            if (responseJson.success) {
                RegisterSellerSuccess(dispatch);
            } else {
                RegisterSellerFail(dispatch);
            }
        }).catch((error) => {
            console.error(error);
        });


    }

}
const RegisterSellerSuccess = (dispatch) => {
    dispatch({type: SELLER_LOGIN_SUCCESS})
}
const RegisterSellerFail = (dispatch) => {
    dispatch({type: SELLER_LOGIN_FAIL})
}

function uploadImageToServer(dataFile, certificateData) {
    try {

        RNFetchBlob.fetch('POST', 'http://192.168.1.3:3000/Api/v1/admin/image', {
            Authorization: "Bearer access-token",
            otherHeader: "image",
            'Content-Type': 'multipart/form-data',

        }, [
            // element with property `filename` will be transformed into `file` in form data
            {name: 'image', filename: dataFile.fileName, data: dataFile.data},
        ]).then((response) => response.json()).then((responseJson) => {
                // resultdataFileNational = responseJson
            imagePathNationalCard = responseJson.data['path'];

            }
        ).done();

        //    upload certificatecard
        RNFetchBlob.fetch('POST', 'http://192.168.1.3:3000/Api/v1/admin/image', {
            Authorization: "Bearer access-token",
            otherHeader: "image",
            'Content-Type': 'multipart/form-data',

        }, [
            // element with property `filename` will be transformed into `file` in form data
            {name: 'image', filename: certificateData.fileName, data: certificateData.data},
        ]).then((response) => response.json()).then((responseJson) => {
                // resultdataFileCertificate = responseJson
            imagePathCertificate = responseJson.data['path'];
            }
        ).done();
    } catch (e) {
        return false
    }

}
