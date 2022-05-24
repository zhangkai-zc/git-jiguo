window.onload = function show() {
    var array = []
    var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP")
    ajax_.open("get", "http://127.0.0.1:3000/guid/hot")
    ajax_.send()
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                for (var i = 0; i < JSON.parse(ajax_.responseText).length; i++) {
                    var data = JSON.parse(ajax_.responseText)[i]
                    array.push(data)
                }
                test(array)
                test(array)
                console.log(array);
            }
        }
    }
}
function test(data_) {
    var str = ""
    for (var j = 0; j < data_.length; j++) {
        //     str += `
        // <li>
        //     <p>${iteam.imgtitle}</p>
        //     <img src="${iteam.imgurl}">
        //     <p>${iteam.note}</p>
        // </li>
        // `
        str += `<li>
                    <a href="../guid/detail.html">
                        <img src="${data_[j].img}" />
                        <div class="info">
                            <p class="name">${data_[j].text}</span></p>
                            <div class="fix">
                                <div class="icon">
                                    <span class="xin">${data_[j].like}</span>
                                    <span class="look">${data_[j].words}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <img src="../css/img/listbg.jpg" alt="">
                </li>`
    }
    var ul_ = document.createElement('ul')
    var con = document.getElementById('hhh')
    ul_.innerHTML = str
    con.appendChild(ul_)

    var play_li = con.firstElementChild.children
    var num1 = 0.5
    var num2 = 1
    var timer2 = null
    for (var k = 0; k < play_li.length; k++) {
        play_li[k].onmouseover = function () {
            clearInterval(timer2)
            var imager = this.firstElementChild.children[0]
            timer2 = setInterval(function () {
                if (imager.style.opacity > num1) {
                    imager.style.opacity = num1
                    imager.style.transition = 'opacity 1s ease'
                } else if (imager.style.opacity < num2) {
                    imager.style.opacity = num2
                    imager.style.transition = 'opacity 1s ease'
                }
            }, 1000)
        }
        play_li[k].onmouseout = function () {
            clearInterval(timer2)
            var imager = this.firstElementChild.children[0]
            imager.style.opacity = num2
        }
    }
}