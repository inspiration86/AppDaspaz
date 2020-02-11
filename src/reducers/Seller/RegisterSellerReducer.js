import
{
    COUNTRY_CHANGED,
    PROVINCE_CHANGED,
    CITY_CHANGED,
    MOBILE_CHANGED,
    PASSWORD_CHANGED,
    FIRSTNAME_CHANGED,
    LASTNAME_CHANGED,
    NATIONALCODE_CHANGED,
    EMAIL_CHANGED,
    NATIONALCARDURL_CHANGED,
    CERTIFICATEURL_CHANGED,
    PROFILEURL_CHANGED,
    PHONE_CHANGED,
    ADDRESS_CHANGED,
    SELLER_LOGIN_ATTEMP,
    SELLER_LOGIN_FAIL,
    SELLER_LOGIN_SUCCESS,
    NATIONAL_DATA_CHANGED,
    CERTIFICATE_DATA_CHANGED
} from '../../action/Seller/TypeRegisterSeller';

const INITIAL_STATE = {
    country:'',
    province:'',
    city:'',
    firstName: '',
    lastName: '',
    nationalCode: '',
    mobile: '',
    phone: '',
    email:'',
    address:'',
    nationalCardURL: '',
    certificatesURL: '',
    profileURL: '',
    password: '',
    nationalData:'',
    certificateData:'',
    loading: false,
    error: '',
    success:''
}
export default (state = INITIAL_STATE, action) => {
    // console.log(action);
    switch (action.type) {
        case COUNTRY_CHANGED:
            return {...state, country: action.payload};
            break;
        case PROVINCE_CHANGED:
            return {...state, province: action.payload};
            break;
        case CITY_CHANGED:
            return {...state, city: action.payload};
            break;
        case FIRSTNAME_CHANGED:
            return {...state, firstName: action.payload};
            break;
        case LASTNAME_CHANGED:
            return {...state, lastName: action.payload};
            break;
        case NATIONALCODE_CHANGED:
            return {...state, nationalCode: action.payload};
            break;
        case MOBILE_CHANGED:
            return {...state, mobile: action.payload};
            break;
        case PHONE_CHANGED:
            return {...state, phone: action.payload};
            break;
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
            break;
        case ADDRESS_CHANGED:
            return {...state, address: action.payload};
            break;
        case NATIONALCARDURL_CHANGED:
            return {...state, nationalCardURL: action.payload};
            break;
        case CERTIFICATEURL_CHANGED:
            return {...state, certificatesURL: action.payload};
            break;
        case PROFILEURL_CHANGED:
            return {...state, profileURL: action.payload};
            break;
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
            break;
        case NATIONAL_DATA_CHANGED:
            return {...state, nationalData: action.payload};
            break;
        case CERTIFICATE_DATA_CHANGED:
            return {...state, certificateData: action.payload};
            break;
        case SELLER_LOGIN_ATTEMP:
            return {...state, loading: true};
            break;
        case SELLER_LOGIN_SUCCESS:
            return {...state, success:true};
            break;
        case SELLER_LOGIN_FAIL:
            return {...state, loading: false, password: '', error: 'نام کاربری اشتباه ست'};
            break;
        default:
            return state;

    }
}
