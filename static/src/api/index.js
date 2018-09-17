import $ from 'jquery';

// 登录
const signIn = (values) => {
    var result;
    debugger
    $.ajax({
        url: '/api/user/signIn.json',
        type: 'post',
        data: values,
        async: false,
        succsess: (res) => {
            result = res;
        },
        error: (err) => {
            result = err;
        }
    })
    
    return result;
}

// 注册
const signUp = (values) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '/api/user/signUp.json',
            data: {
                
            },
            succsess: (res) => {
                if (res.status) {
                    resolve(res)
                } else {
                    reject(res);
                }
            },
            error: (err) => {
                reject(err);
            }
        })
    })
}

export {
    signIn,
    signUp
}