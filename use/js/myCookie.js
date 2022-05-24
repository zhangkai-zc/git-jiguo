
// 封装cookie

// 设置cookie（键，值，有效时间）
function setCookie(key, val, time) {
    var date = new Date();
    date.setDate(date.getDate() + time);
    document.cookie = key + '=' + val + ';expires=' + date;
}

// 获取cookie
function getCookie(key) {
    var arr = document.cookie.split('; ');
    for (var item of arr) {
        var newArr = item.split('=');
        if (newArr[0] == key) {
            return newArr[1];
        }
    }
}

//删除cookie
function removeCookie(key) {
    this.setCookie(key, '', -1);
}

//  清空所有的cookie
function clearCookie() {
    var cookies = document.cookie;
    var cookieArry = cookies.split('; ');
    for (var item of cookieArry) {
        var newArry = item.split('=');
        this.setCookie(newArry[0], '', -1)
    }

}