







//获取数据
var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
ajax_.open('get', 'http://127.0.0.1:3000/useing/public');
ajax_.send();
ajax_.onreadystatechange = function () {
    if (ajax_.readyState == 4) {
        if (ajax_.status == 200) {
            var dataList = JSON.parse(ajax_.responseText);
            show(dataList);
        }
    }
}

//渲染数据
var use_article = document.getElementById('use_article');
var index = 0;
var kg = true;

function show(dataList_) {

    if (kg) {
        index++;
        // if (index >= dataList_.length) {
        //     var p_=document.createElement('p');
        //     var a_=document.createElement('a');
        //     a_.setAttribute('href','#');
        //     a_.innerHTML='向下拉加载更多';
        //     p_.className='artic_p';
        //     p_.appendChild(a_);
        //     var use_article=document.getElementById('use_article');
        //     use_article.appendChild(p_)
        //     return kg = false;
        // }
        var str = '';
        // function show_2() {
            function show_() {
                for (var i = 2; i < dataList_.length - 7; i++) {
                    str += `
                                <li>
                                    <a href="#">
                                        <img src="${dataList_[i].img}" alt="">
                                            <span class="art_sp">${dataList_[i].info_ty}</span>
                                            <h4>${dataList_[i].text}</h4>
                                            <div class="art_div">
                                                <div>${dataList_[i].totalnum}</div>
                                                <div>${dataList_[i].num}台</div>
                                            </div>
                                            <p class="art_p1"><span>${dataList_[i].apply}</span>申请</p>
                                            <p class="art_p2">${dataList_[i].endTime}</p>
                                    </a>
                                </li>
                                `
                }
            }
            for (var i = 0; i < dataList_.length - 1; i++) {
                str += `
                            <li>
                                <a href="#">
                                    <img src="${dataList_[i].img}" alt="">
                                        <span class="art_sp">${dataList_[i].info_ty}</span>
                                        <h4>${dataList_[i].text}</h4>
                                        <div class="art_div">
                                            <div>${dataList_[i].totalnum}</div>
                                            <div>${dataList_[i].num}台</div>
                                        </div>
                                        <p class="art_p1"><span>${dataList_[i].apply}</span>申请</p>
                                        <p class="art_p2">${dataList_[i].endTime}</p>
                                </a>
                            </li>
                            `
            }
            show_();
        // }

        // show_2();
        var ul_ = document.createElement('ul');
        ul_.innerHTML = str;
        var use_article = document.getElementById('use_article');
        use_article.appendChild(ul_);

        var p_ = document.createElement('p');
        var a_ = document.createElement('a');
        a_.setAttribute('href', '#');
        a_.innerHTML = '向下拉加载更多';
        p_.className = 'artic_p';
        p_.appendChild(a_);
        var use_article = document.getElementById('use_article');
        use_article.appendChild(p_);

                     


        // 图片闪烁
        var use_art_li = use_article.firstElementChild.children;
        var timer = null;
        var num1 = 0.5;
        var num2 = 1;
        for (var j = 0; j < use_art_li.length; j++) {
            //页面跳转
            use_art_li[j].onclick = function () {
                window.location.href = 'http://127.0.0.1:5500/use/detail.html';
            }

            // 获取的图片闪烁
            use_art_li[j].onmouseover = function () {
                clearInterval(timer);
                var pic_ = this.firstElementChild.children[0];
                timer = setInterval(function () {
                    if (pic_.style.opacity > num1) {
                        pic_.style.opacity = num1;
                        pic_.style.transition = 'opacity 1s ease';
                    } else if (pic_.style.opacity < num2) {
                        pic_.style.opacity = num2;
                        pic_.style.transition = 'opacity 1s ease';
                    }
                }, 400)
            }
            use_art_li[j].onmouseout = function () {
                clearInterval(timer);
                var pic_ = this.firstElementChild.children[0];
                pic_.style.opacity = num2;
            }
        }
    }
}




// for (var i of dataList_) {
        //     str += `
        //     <li>
        //         <a href="#">
        //             <img src="${i.img}" alt="">
        //                 <span class="art_sp">${i.info_ty}</span>
        //                 <h4>${i.text}</h4>
        //                 <div class="art_div">
        //                     <div>${i.totalnum}</div>
        //                     <div>${i.num}台</div>
        //                 </div>
        //                 <p class="art_p1"><span>${i.apply}</span>申请</p>
        //                 <p class="art_p2">${i.endTime}</p>
        //         </a>
        //     </li>
        //     `
        // }