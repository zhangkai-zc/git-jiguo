window.onload = function show() {
    var array = []
    var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP")
    ajax_.open("get", "http://127.0.0.1:3000/play/category")
    ajax_.send()
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                for (var i = 0; i < JSON.parse(ajax_.responseText).length; i++) {
                    var data = JSON.parse(ajax_.responseText)[i]
                    array.push(data)
                }

                test(array)
                txt(array)
                h2(array)
            }
        }
    }
}
var dlist = document.getElementsByClassName('divlist1')
var ul_ = document.getElementsByClassName('ul_')
var span_ = document.getElementsByClassName('span_')
var ul_l = document.getElementsByClassName('ul_l')
function test(data_) {
    for (var j = 0; j < data_.length; j++) {
        span_[j].innerHTML = data_[j].title
    }
}
function txt(dat) {
    var str2 = ''
    for (var k = 0; k < dat.length; k++) {
        var num = ul_[k].children
        var arr = dat[k].list
        for (var a = 0; a < num.length; a++) {
            str2 = `
            ${arr[a].productName}(&nbsp;<span>${arr[a].nums}</span>&nbsp;)  
            `
            num[a].firstElementChild.lastElementChild.innerHTML = str2
        }
    }
}

function h2(hh) {
    var str = ''
    for (var b = 0; b < hh.length; b++) {
        var num2 = ul_l[b].children
        var arra = hh[b].list
        console.log(num2);
        for (var c = 0; c < num2.length; c++) {
            str = `
            ${arra[c].productName}(&nbsp;<span>${arra[c].nums}</span>&nbsp;)  
            `
            num2[c].firstElementChild.innerHTML = str
        }
    }
}






// var ul_ = document.createElement('ul')
    // var con = document.getElementById('hhh')
    // ul_.innerHTML = str
    // con.appendChild(ul_)

    // var play_li = con.firstElementChild.children
    // var num1 = 0.5
    // var num2 = 1
    // var timer2 = null
    // for (var k = 0; k < play_li.length; k++) {
    //     play_li[k].onmouseover = function () {
    //         clearInterval(timer2)
    //         var imager = this.firstElementChild.children[0]
    //         timer2 = setInterval(function () {
    //             if (imager.style.opacity > num1) {
    //                 imager.style.opacity = num1
    //                 imager.style.transition = 'opacity 1s ease'
    //             } else if (imager.style.opacity < num2) {
    //                 imager.style.opacity = num2
    //                 imager.style.transition = 'opacity 1s ease'
    //             }
    //         }, 1000)
    //     }
    //     play_li[k].onmouseout = function () {
    //         clearInterval(timer2)
    //         var imager = this.firstElementChild.children[0]
    //         imager.style.opacity = num2
    //     }
    // }
