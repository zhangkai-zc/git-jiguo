

//图标闪烁
var logo=document.getElementById('logo');
var opacity_1=0.5;
var opacity_2=1;
var timer=null;
logo.onmouseover=function(){
    clearInterval(timer);
    timer=setInterval(function(){
        if(logo.style.opacity>opacity_1){
            logo.style.opacity=opacity_1;
            logo.style.transition='opacity 1s ease';
        }else if(logo.style.opacity<opacity_2){
            logo.style.opacity=opacity_2;
            logo.style.transition='opacity 1s ease';
        }
    },400)
}
logo.onmouseout=function(){
    clearInterval(timer);
    logo.style.opacity=opacity_2;
}

//注册
var register=document.getElementById('register');
register.onmouseenter=function(){
    this.style.backgroundColor='#FE5341';
    this.style.color='white';
    this.style.transition='all .5s ease';
}
register.onmouseleave=function(){
    this.style.backgroundColor='';
    this.style.color='#FE5341';
    this.style.transition='all .5s ease';
}

//放大镜
var zoom=document.getElementById('zoom');
zoom.onmouseenter=function(){
    this.style.transform='scale(1.2)';
    this.style.transition='all .5s ease';
}
zoom.onmouseleave=function(){
    this.style.transform='scale(1)';
    this.style.transition='all .5s ease';
}


//字体颜色
var  use_header_a=document.getElementsByClassName('use_header_a');
for(var i=0;i<use_header_a.length;i++){
    use_header_a[i].onmouseenter=function(){
        this.style.color='#FE5341';
    }
    use_header_a[i].onmouseleave=function(){
        this.style.color='';
    }
}