



// 邮箱/手机/用户名

var input = document.getElementsByClassName('input');
var btn=document.getElementsByClassName('btn')[0];
var check = document.getElementsByClassName('check')[0];

if (localStorage.getItem('check')) {
    document.getElementsByClassName('input')[0].value = localStorage.getItem('username');
    document.getElementsByClassName('input')[1].value = localStorage.getItem('password');
    document.getElementsByClassName('check')[0].checked = localStorage.getItem('check');
}

btn.onclick = function () {
    var ipt1=document.getElementsByClassName('input')[0].value;
    var ipt2=document.getElementsByClassName('input')[1].value;
    var check=document.getElementsByClassName('check')[0].checked;
    if(check){
        localStorage.setItem('username',ipt1);
        localStorage.setItem('password',ipt2);
        localStorage.setItem('check',true);

    }else{
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('check');
    }
if(input[0].value= localStorage.getItem('username')&&(input[1].value=localStorage.getItem('password'))){
    // window.location.href='http://127.0.0.1:5500/我的Index.html';
    document.getElementsByClassName('input')[0].value = localStorage.getItem('username');
    document.getElementsByClassName('input')[1].value = localStorage.getItem('password');
    localStorage.setItem('check',true);
    alert('登陆成功');
}
}



