
//图标闪烁
var logo = document.querySelector('img');
var opacity_1 = 0.5;
var opacity_2 = 1;
var timer = null;
logo.onmouseover = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        if (logo.style.opacity > opacity_1) {
            logo.style.opacity = opacity_1;
            logo.style.transition = 'opacity 1s ease';
        } else if (logo.style.opacity < opacity_2) {
            logo.style.opacity = opacity_2;
            logo.style.transition = 'opacity 1s ease';
        }
    }, 400)
}


logo.onmouseout = function () {
    clearInterval(timer);
    logo.style.opacity = opacity_2;
}

var input_1 = document.getElementsByClassName('input_1')[0];
var input_2 = document.getElementsByClassName('input_2')[0];
var input_3 = document.getElementsByClassName('input_3')[0];
var input_4 = document.getElementsByClassName('input_4')[0];
var input_5 = document.getElementsByClassName('input_5')[0];
var input_6 = document.getElementsByClassName('input_6')[0];
var btn = document.getElementsByClassName('btn')[0];
var input_2_a = document.getElementsByClassName('input_2_a')[0];
console.log(input_2_a);




// 验证码
var counts = 10;
var time;
input_2_a.onclick = function () {
    var time = setInterval(function () {
        if (counts == 0) {
            input_2_a.removeAttribute("disabled");
            input_2_a.innerHTML = "获取验证码";
            counts = 10;
            clearTimeout(time);
            alert('验证码为：123456');
        } else {
            input_2_a.setAttribute("disabled", true);
            input_2_a.innerHTML = '(' + counts + ')' + 's' + '后重获';
            counts--;
        }
    }, 1000);
}

// // 注册
// var sjh = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;

// var reg = /^[\w+$]{6,12}$/;
// var tableBtn = document.getElementsByClassName('tableBtn');

// var ipt = document.getElementsByClassName('ipt');
// var pasw = document.getElementsByClassName('pasw');
// var p = document.getElementsByClassName('message');

// var yanzheng = document.getElementsByClassName('yanzheng')[0];

// ipt[0].onfocus = function () {
//     p[0].style.display = 'block';
//     p[0].innerHTML = '<i class="ati"></i>手机号';
// }
// ipt[0].onblur = function () {
//     if (ipt[0].value == '') {
//         p[0].innerHTML = '<i class="err"></i>不能为空';
//         return false;
//     } else if (!sjh.test(ipt[0].value)) {
//         p[0].innerHTML = '<i class="ati"></i>格式错误，请重新输入';
//         return false;
//     } else {
//         p[0].innerHTML = '<i class="ok"></i>正确'
//         return true
//     }
// }

// yanzheng.onfocus = function () {
//     p[1].style.display = 'block';
//     p[1].innerHTML = '<i class="ati"></i>输入6位数字';
// }
// yanzheng.onblur = function () {
//     var reg1 = '123456';
//     if (yanzheng.value == '') {
//         p[1].innerHTML = '<i class="err"></i>不能为空';
//         return false;
//     } else if (yanzheng.value !== reg1) {
//         p[1].innerHTML = '<i class="ati"></i>验证码错误';
//         return false;
//     } else {
//         p[1].innerHTML = '<i class="ok"></i>正确'
//         return true;
//     }
// }
// pasw[0].onfocus = function () {
//     p[2].style.display = 'block';
//     p[2].innerHTML = '<i class="ati"></i>请输入字母/数字/下划线，6~12个字符';
// }
// pasw[0].onblur = function () {
//     if (pasw[0].value == '') {
//         p[2].innerHTML = '<i class="err"></i>不能为空';
//         return false;
//     } else if (!reg.test(pasw[0].value)) {
//         p[2].innerHTML = '<i class="ati"></i>格式错误，请重新输入';
//         return false;
//     } else {
//         p[2].innerHTML = '<i class="ok"></i>正确'
//         return true;
//     }
// }
// pasw[1].onfocus = function () {
//     p[3].style.display = 'block';
//     p[3].innerHTML = '<i class="ati"></i>请确认密码';
// }
// pasw[1].onblur = function () {
//     if (pasw[1].value == '') {
//         p[3].innerHTML = '<i class="err"></i>不能为空';
//         return false;
//     } else if (pasw[0].value !== pasw[1].value) {
//         p[3].innerHTML = '<i class="ati"></i>输入不一致，请重新输入';
//         return false;
//     } else {
//         p[3].innerHTML = '<i class="ok"></i>正确'
//         return true;
//     }
// }
// tableBtn[0].onclick = function () {
//     if (ipt[0].onblur() && yanzheng.onblur() && pasw[0].onblur() && pasw[1].onblur()) {
//         alert('成功')
//     }

// }
