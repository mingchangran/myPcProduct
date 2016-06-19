
~(function () {
    //Ajax 请求数据
   /* var jsonDate = null;
    ~function () {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'jsonDate.txt', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
                jsonDate = utils.jsonParse(xhr.responseText);
                console.log(jsonDate)
            }
        };
        xhr.send(null);
    }();

    //数据绑定*/

    ~function () {
        var  banner=document.getElementById("banner_img");
       var inner_img = document.getElementById("inner_img");
        var left_btn=document.getElementById("left_btn");
        var right_btn=document.getElementById("right_btn");
        /*var str = "";
        for (var i = 0; i < jsonDate.length; i++) {
            str += "<a href=''><img src='' trueSrc='" + jsonDate[i].img + "'></a>";
        }
        inner_img.innerHTML = str;*/

   /*     //延迟加载

        var innerImgList = inner_img.getElementsByTagName("img");
        console.log(innerImgList);
        (function lazyImg() {
            for (var i = 0, len = innerImgList.length; i < len; i++) {
                (function (i) {
                    var curInnerImg = innerImgList[i];
                    if (curInnerImg.isLoad)return;
                    var tempImg = new Image;
                    tempImg.src = curInnerImg.getAttribute("trueSrc");
                    tempImg.onload = function () {
                        curInnerImg.src = this.src;
                        tempImg = null;
                        curInnerImg.isLoad = true;
                    }
                })(i)
            }
        })();*/


        var step = 0;
        var imgBoxList = banner_img.getElementsByTagName("a");
        imgBoxList[0].style.opacity = 1;
        function imgMove() {
            if (step == 6) {
                step = 0;
            }

            move();
            step++;
        }

        autoTimer=setInterval(imgMove, 5000);
        function move() {
            utils.css(imgBoxList[step], {zIndex: 1, opacity: 1});
            if (step == 5) {
                utils.css(imgBoxList[0], {opacity: 0, zIndex: 1, left: 178});
                animate(imgBoxList[0], {opacity: 1, left: 0}, 1000, 3, function () {
                    this.style.zIndex = 1;
                    var sibilings = utils.siblings(this);
                    for (var i = 0; i < sibilings.length; i++){
                        utils.css(sibilings[i], {zIndex: 0})
                    }
                })
            } else {
                utils.css(imgBoxList[step + 1], {opacity: 0, zIndex: 1, left: 178});
                animate(imgBoxList[step + 1], {opacity: 1, left: 0}, 1000, 3, function () {
                    this.style.zIndex = 1;
                    var sibilings = utils.siblings(this);
                    for (var i = 0; i < sibilings.length; i++) {
                        utils.css(sibilings[i], {zIndex: 0})
                    }
                })
            }
            animate(imgBoxList[step], {opacity: 0, left: -178}, 800);
            changeTip();
        }
        function imgMove1() {
            if (step == 0) {
                step = 5;
            }

            move1();
            step--;
        }
        function move1() {
            console.log(imgBoxList)
            utils.css(imgBoxList[step], {zIndex: 1, opacity: 1});
            if (step == 0) {
                utils.css(imgBoxList[0], {opacity: 0, zIndex: 1, left: -178});
                animate(imgBoxList[0], {opacity: 1, left: 0}, 1000, 3, function () {
                    this.style.zIndex = 1;
                    var sibilings = utils.siblings(this);
                    for (var i = 0; i < sibilings.length; i++){
                        utils.css(sibilings[i], {zIndex: 0})
                    }
                })
            } else {
                utils.css(imgBoxList[step - 1], {opacity: 0, zIndex: 1, left: -178});
                animate(imgBoxList[step - 1], {opacity: 1, left: 0}, 1000, 3, function () {
                    this.style.zIndex = 1;
                    // console.log(this)
                    var sibilings = utils.siblings(this);
                    // console.log(sibilings)
                    for (var i = 0; i < sibilings.length; i++) {
                        utils.css(sibilings[i], {zIndex: 0})
                    }
                })
            }
            animate(imgBoxList[step], {opacity: 0, left: -178}, 800);
            changeTip();
        }

        var banner_img_list = document.getElementById("banner_img_list");
        var oLis = banner_img_list.getElementsByTagName("a");
        console.log(oLis);

        // var oTips=document.getElementsByClassName("img");
        function changeTip(){
            step++;

            var tempStep = step > oLis.length-1 ? 0 : step;

            console.log(tempStep);
            for(var i=0; i<oLis.length; i++){
                console.log(i);

                var cur = oLis[i];
                console.log(cur);
                i === tempStep ? cur.className += 'bg' : cur.className = 'dot';
            }
            step--;
        }

        banner.onmouseover = function (){
            window.clearInterval(autoTimer);
            left_btn.style.display = 'block';
            right_btn.style.display = 'block';
        };
        banner.onmouseout = function (){
            autoTimer=window.setInterval(imgMove,5000);
            left_btn.style.display = 'none';
            right_btn.style.display = 'none';
        };
        ~function (){
            for(var i=0; i<oLis.length; i++){
                var cur = oLis[i];
                cur.index = i;
                cur.onclick = function (){
                    step = this.index;
                    changeTip();
                    animate(imgBoxList[step], {opacity: 1, left: 0}, 800);
                }
            }
        }();
        right_btn.onclick = imgMove;
        left_btn.onclick =imgMove1;




        /* for (var j = 0; j < tipLis.length; j++) {
         (function (j) {
         tipLis[j].onclick = function (e) {
         clearInterval(timer);
         e.preventDefault();
         utils.css(imgBoxList[step], {zIndex: 1, opacity: 1});
         utils.css(imgBoxList[j], {opacity: 0, zIndex: 2, left: 178});
         animate(imgBoxList[j], {opacity: 1, left: 0}, 1000, 3, function () {
         this.style.zIndex = 1;
         var sibilings = utils.siblings(this);
         for (var i = 0; i < sibilings.length; i++) {
         utils.css(sibilings[i], {zIndex: 0})
         }
         })

         animate(imgBoxList[step], {opacity: 0, left: -178}, 800);
         }
         })(j)
         }*/
    }();



    function daojishi(){
        var timerDate=document.getElementById("timerDate");
        var timerH=utils.getElementsByClass("timer_h",timerDate)[0];
        var timerM=utils.getElementsByClass("timer_m",timerDate)[0];
        var timerS=utils.getElementsByClass("timer_s",timerDate)[0];
        var targetTime = new Date('2016/06/20 23:30:00');
        var curTime = new Date();
        var targetTime1970 = targetTime.getTime();
        var curTime1970 = curTime.getTime();

        var durationTime = targetTime1970 - curTime1970;
        var hours = Math.floor(durationTime / (1000 * 3600));

        var min = Math.floor((durationTime - hours * 3600 * 1000) / (1000 * 60));

        var second = Math.floor((durationTime - hours * 3600 * 1000 - min * 60 * 1000) / 1000);

        var str1 = addZero(hours) ;
        var str2=addZero(min);
        var str3=addZero(second);
        timerH.innerHTML=str1;
        timerM.innerHTML=str2;
        timerS.innerHTML=str3;
    }
    function addZero(num) {
        return num >= 10 ? num : '0' + num;
    }
    setInterval(function (){
        daojishi();
    },1000);

    /*回到顶部*/
    var alink=document.getElementById("link");
    alink.onclick=function () {
        var distance=utils.win("scrollTop");
        var duration=500;
        var interval=10;
        var step=distance/duration*interval;
        var timer=setInterval(function () {
            if(utils.win("scrollTop")<=0){
                window.clearInterval(timer);
                window.onscroll=showBtn;
                return;
            }
            var sTop=utils.win("scrollTop");
            sTop-=step;
            utils.win("scrollTop",sTop)
        },interval);
        window.onscroll=null;
        this.style.display="none"
    };
    window.onscroll=showBtn;
    function showBtn() {
        var winTop=utils.win("scrollTop");
        var curTop=utils.win("clientHeight");
        if (winTop-curTop>0){
            alink.style.display="block"
        }
    }
})();