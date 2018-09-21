import $ from 'jquery';
import Request from '../utils/request';

// 登录
const signIn = (values) => {
    var result;
    
    $.ajax({
        url: '/api/user/signIn.json',
        type: 'post',
        data: values,
        async: false,
        success: (res) => {
            result = res;
        },
        error: (err) => {
            result = err;
        }
    })
    
    return result;
}

const signInForm = ( userInfo ) => {
    userInfo.source = 'form';
    Request.form({
      url: '/api/user/signIn.json',
      data: userInfo,
    })
}

// 注册
const signUp = (values) => {
    var result;

    $.ajax({
        url: '/api/user/signUp.json',
        type: 'post',
        data: values,
        async: false,
        success: (res) => {
            result = res;
        },
        error: (err) => {
            result = err;
        }
    })

    return result;
}

export {
    signIn,
    signInForm,
    signUp
}