/**
 * Created by Administrator on 2017/8/19.
 */
    //轮播图
    var timer;
    var num = 0;
    var indexnum = 0;
    window.onload = function () {
        //鼠标进入容器  当前的计时器停止
        var divdata = document.getElementsByClassName("navbg")[0];
        divdata.onmouseenter = function () {
            clearTimeout(timer);
        };
        divdata.onmouseleave = function () {
            //再次调用计时器
            timer = setInterval(function () {
                imagescroll("left");
            }, 3000)
        };
        //获取左边的按钮
        var btn_left = document.getElementsByClassName("span_left")[0];
        btn_left.onclick = function () {
            imagescroll("right");
        }
        //获取右边的按钮
        var btn_right = document.getElementsByClassName("span_right")[0];
        btn_right.onclick = function () {
            //反着走
            imagescroll("left");
        }
        //获取所有的点
        var dian = document.getElementsByClassName("div_dian");
        dian[num].style.backgroundColor = "#fff";
        //给当前点添加点击事件
        for (var i = 0; i < dian.length; i++) {
            dian[i].index = i;
            dian[i].onclick = function () {
                for (var k = 0; k < dian.length; k++) {
                    dian[k].style.backgroundColor = "#D6D8D7";
                }
                this.style.backgroundColor = "fff";
                //处理循环条件
                var lengthcount = this.index - indexnum;
                //js里面绝对值   js内置对象产生   Math
                for (var a = 0; a < Math.abs(lengthcount); a++) {
                    if (lengthcount > 0) {
                        imagescroll("left");
                    }
                    else {
                        imagescroll("right");
                    }
                }
            }
        }
        //获取所有的img
        var imginfo = document.getElementsByClassName("img_list");
        for (var i = 0; i < imginfo.length; i++) {
            imginfo[i].style.zIndex = imginfo.length - i - 1;
            if (i != 0) {
                imginfo[i].style.opacity = 0;
            }
        }
        /* setTimeout()//延迟执行  并且执行一次  让该方法循环执行  递归（自己调用自己）
         setInterval() */ //循环执行 延迟
        timer = setInterval(function () {
            imagescroll("left");
        }, 2000);
        function imagescroll(isleftorright) {
            if (isleftorright == "left") {
                num++;
                if (num > 3) {
                    num = 0;
                }
            }
            else {
                num--;
                if (num < 0) {
                    num = 3;
                }
            }
            for (var i = 0; i < dian.length; i++) {
                dian[i].style.backgroundColor = "#D6D8D7";
            }
            //记录当前点点位置
            indexnum = num;
            dian[num].style.backgroundColor = "#fff";
            for (var i = 0; i < imginfo.length; i++) {
                var zindex = parseInt(imginfo[i].style.zIndex);
                if (isleftorright == "left") {
                    zindex += 1;
                    if (zindex > 3) {
                        zindex = 0;
                        imginfo[i].style.opacity = 0;
                    }
                    if (zindex == 3) {
                        imginfo[i].style.opacity = 1;
                    }
                }
                else {
                    zindex -= 1;
                    if (zindex < 0) {
                        zindex = 3;
                        imginfo[i].style.opacity = 1;
                    }
                    if (zindex <3) {
                        imginfo[i].style.opacity = 0;
                    }
                }
                imginfo[i].style.zIndex = zindex;
            }
        }
        var day1=document.getElementsByClassName("day1");
        var hours1=document.getElementsByClassName("hours1");
        var min1=document.getElementsByClassName("min1");
        setInterval(function (){
            var time_go=new Date("2017/9/24,00:00:00");
            var time_now=new Date();
            //计算时间差
            var minsec=(time_go.getTime()-time_now.getTime())/1000;

            var res_time=parseInt((time_go.getTime()-time_now.getTime())/1000);
            var sec=parseInt(res_time%60);
            var hour=parseInt(res_time/(60*60)%24);
            var day=parseInt(res_time/(60*24*60));
            if(minsec<10)
            {
                minsec="00"+minsec;
            }
            else if(minsec<100&&minsec>=10)
            {
                minsec="0"+minsec;
            }
            for(var i=0;i<day1.length;i++){
                day1[i].innerHTML=day;
                hours1[i].innerHTML=hour;
                min1[i].innerHTML=sec;
            }

        },1)
    }

//固定
$(document).scroll(function(){
    var top=$(this).scrollTop();
    if(top>200){
        if(top<550){
            $(".fixed").css("display","block");
            $(".four_one").css("animation","pao 2s linear");
            $(".four_two").css("animation","pao1 2s linear");
            $(".four_three").css("animation","pao 2s linear 1s");
            $(".four_four").css("animation","pao1 2s linear 1s");
        }else{
            $(".ke_1").css("animation","pao1 2s linear 1s");
            $(".ke_2").css("animation","pao 2s linear 2s");
            $(".ke_3").css("animation","pao1 2s linear 3s");
            $(".ke_4").css("animation","pao1 2s linear 4s");
        }
    }
    if(top<200){$(".fixed").css("display","none")}


});
