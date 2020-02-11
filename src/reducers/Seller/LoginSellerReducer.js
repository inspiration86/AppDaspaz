import {MOBILE_CHANGED, PASSWORD_CHANGED, SELLER_LOGIN_ATTEMP, SELLER_LOGIN_FAIL, SELLER_LOGIN_SUCCESS} from '../../action/Seller/TypeLoginSeller';
const INITIAL_STATE={
    mobile:'',
    password:'',
    loading:false,
    error:'',
    success:''
}
export default(state=INITIAL_STATE,action) =>{
    console.log(action);
    switch (action.type) {
        case MOBILE_CHANGED:
            return{...state,mobile:action.payload };
            break;
        case PASSWORD_CHANGED:
            return{...state,password:action.payload };
            break;
        case SELLER_LOGIN_ATTEMP:
            return{...state,loading:true};
            break;
        case SELLER_LOGIN_SUCCESS:
            return{...state,success: true};
            break;
        case SELLER_LOGIN_FAIL:
            return{...state,loading:false,password: '',error:'نام کاربری یا گذرواژه اشتباه ست'};
            break;
        default:
            return state;

    }
}
