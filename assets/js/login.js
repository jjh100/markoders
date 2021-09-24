var logId = $('#login-Id');
var logPw = $('#login-Pw');

var user = ['admin', '조재형', 'superadmin', 'user1', 'user2'];


function login(userID) {

    if (logId.val() == userID) {
        // console.log('아이디 확인')
        if (logPw.val() == 1234) {
            console.log('확인')
            $('.main-login').css('display', 'none')
            $('.nav_userID').text(logId.val())

        } else {
            alert('아이디 또는 비밀번호가 일치 하지 않아요')
        }

    } else {
        alert('아이디 또는 비밀번호가 일치 하지 않아요')
    }
}


$('#btn_log').click(function(){
    for(i in user){
        if(logId.val() == user[i]){
            login(user[i])
        }else{
        
        }
    }
})




