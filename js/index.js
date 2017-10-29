/**
 * Created by lizhengzhou on 2017/2/13.
 */
var pagenum=0;
var top_num=$(".contents").top;
$(document).ready(function(){
    var shikouHeight=document.documentElement.clientHeight;
    var shikouWidth=document.documentElement.clientWidth;
    var bili=shikouWidth/shikouHeight;
    //用来动态计算手机端的一些数据
    if(shikouWidth<540){
        $(".title").css({
            "font-size": shikouWidth/14
        });
        $(".time").css({
            "font-size": shikouWidth/23
        });
        $(".describe").css({
            "font-size": shikouWidth/30,
            "line-height":(shikouWidth/30)+5+'px'
        });
        $(".sentiment").css({
            "font-size": shikouWidth/33,
            "line-height":(shikouWidth/41+10)+'px',
            "margin-top":shikouWidth/41+'px'
        });
        // if (shikouWidth/31<12){
        //     $(".describe").css({
        //         "-webkit-transform":"scale(0.8)"
        //     });
        // }
        // if(shikouWidth/41<12){
        //     var i=(shikouWidth/41)/12;
        //     $(".sentiment").css({
        //         "-webkit-transform":"scale("+i+")"
        //     });
        // }
        $(".background_image").css({
            "width":shikouWidth/0.35
        });
        $(".page2_image").css({
            "left":"-60%"
        });
        $(".page3_background_image").css({
            "width":shikouWidth/0.41,
            "height":"100%",
            "left":"-78%"
        });
        $(".page4_background_image").css({
            "width":shikouWidth/0.39,
            "height":"100%",
            "left":"-76%",
            "top":0
        });
        $(".page5_background_image").css({
            "width":shikouWidth/0.39,
            "height":"auto",
            "left":"-75%",
            "bottom":0
        });
        $(".page6_background_image").css({
            "width":shikouWidth/0.43,
            "height":"100%",
            "left":"-65%",
            "top":"0"
        });
        $(".page7_background_image").css({
            "width":shikouWidth/0.43,
            "height":"100%",
            "right":"0",
            "bottom":"0"
        });
        $(".image8").css({
            "width":shikouWidth/0.72,
            "height":"auto",
            "left":"0",
            "bottom":"-6%"
        });
        $(".HBM_Logo").css({
            "width":shikouWidth*0.4,
            "height":"auto"
        });
        var alliance_logo_img_width=$(".alliance_logo").find('img').width();
        $(".alliance_logo").find("img").css({
            "width":alliance_logo_img_width*0.6
        });
        $(".page1_alliance_logo").find("img").css({
            "width":alliance_logo_img_width*0.6
        });
        $(".page1_alliance_logo").find("img").attr('src',"image/alliance_logo2.png");
        $(".page2_background_image").css({
            "width":shikouWidth/0.42,
            "left":"-50%",
            "height":"100%",
            "bottom":0
        });
        $(".HBM_Logo").css({
            "height": shikouHeight/12,
            "width":"auto"
        });
        var detail_msg_height=$(".detail_msg1").height();
        $(".detail_msg1").css({
            "bottom":"50%",
            "margin-bottom":-(detail_msg_height+100)/2
        });
        var page_x_detail_msg_height=$(".page_x").height();
    }else{
        //用来动态计算电脑端的一些数据
        $(".alliance_logo_size").find("img").css({
            "height": shikouHeight/50,
            "width":"auto"
        });
        $(".title").css({
            "font-size": shikouWidth/26
        });
        $(".time").css({
            "font-size": shikouWidth/44
        });
        $(".describe").css({
            "font-size": shikouWidth/59,
            "line-height":shikouWidth/56/20
        });
        $(".sentiment").css({
            "font-size": shikouWidth/79,
            "line-height":shikouWidth/74/18
            // "margin-top":shikouWidth/41+'px'
        });
        $(".background_image").css({
            "width":shikouWidth/0.86,
            "bottom":"-4%",
            "left":0
        });
        $(".page3_background_image").css({
            "height":shikouHeight/0.86,
            "width":"100%",
            "left":0,
            "top":0
        });
        $(".page4_background_image").css({
            "height":shikouHeight/0.80,
            "width":"100%",
            "left":0,
            "top":0
        });
        $(".page5_background_image").css({
            "height":"auto",
            "width":shikouWidth,
            "left":0,
            // "bottom":"-20%"
            "top":"0"
        });
        $(".page6_background_image").css({
            "height":'auto',
            "width":shikouWidth,
            "left":0,
            "bottom":0
        });
        $(".page7_background_image").css({
            "height":shikouHeight,
            "width":shikouWidth,
            "left":0,
            "bottom":0
        });
        $(".image8").css({
            "height":shikouHeight/0.34,
            "width":"100%",
            "left":0,
            "top":"-120%"
        });
        $(".page2_alliance_logo").find("img").attr('src',"image/alliance_logo.png");
        var detail_msg_height=$(".detail_msg1").height();
        $(".detail_msg1").css({
            "bottom":"50%",
            "margin-bottom":-(detail_msg_height+60)/2
        });
        $(".msg").css({
            "padding":shikouHeight*0.05
        });
        $(".NZ-Map").css({
            "width":shikouWidth*0.15
        });
        //当客户是窄屏的时候使用的样式
        if(bili<1.4){
            $(".page5_background_image").css({
                "height":"auto",
                "width":shikouWidth*1.5,
                "left":"50%",
                "margin-left":-shikouWidth*1.5/2,
                "bottom":"50%",
                "margin-bottom":-shikouWidth*1.5/1.3/2
                // "top":"-20%"
            });
            // $(".page2_background_image").css({
            //     "width":shikouWidth/0.86,
            //     "height":"auto",
            //     "left":"50%",
            //     "margin-left":-shikouWidth/0.86/2,
            //     "bottom":"50%",
            //     "margin-bottom":-shikouWidth*1.5/1.3/2,
            //
            // });
        }
    }
    //滚动特效的相关方法
    $("#dowebok").fullpage({
        // navigation:true,
        afterLoad:function(anchorlink,index){
            if(index==3){
                $(".arrow").find("img").attr('src',"image/arrow2.png")
            }
            if(index==4){
                $(".HBM_Logo").hide();
            }
            if (index==8){
                $(".arrow").hide();
                $(".HBM_Logo").attr('src','image/HBM_Logo2.png')
            }
            // if (index==6){
            //     $(".HBM_Logo").attr('src','image/HBM_Logo2.png')
            // }
            if(index==1){
                $(".arrow").show();
            }

        },
        onLeave:function(index,nextIndex,direction){
            $(".arrow").find("img").attr('src',"image/arrow.png");
            $(".HBM_Logo").attr('src','image/HBM_Logo.png');
            $(".HBM_Logo").show();
            $(".arrow").show();
            $(".heimu").fadeOut();
            $(".detail_msg").fadeOut();
        }
    });
    // $(".next").on("click",next_page);
    $(".nav_left").on("click",function(){
        stopEvent();//阻止事件冒泡
        $(".menu").slideToggle();
        $(".close").fadeToggle();
        $(".nav_icon").fadeToggle();
        $(".heimu").fadeToggle();
    });
    $(".go").on("click",function(){
        stopEvent();//阻止事件冒泡
        $(".heimu").fadeIn();
        $(".detail_msg").fadeIn();
        // $("#dowebok").css({
        //     "z-index":'4'
        // });
        // $(".arrow2").hide()
    });
    $(".circle").on("click",function(){
        stopEvent();//阻止事件冒泡
        $(".heimu").fadeIn();
        $(".detail_msg").fadeIn();
        // $("#dowebok").css({
        //     "z-index":'4'
        // });
        // $(".arrow2").hide()
    });
    $(".page2_circle").on("click",function(){
        $(".arrow").hide();
        $(".HBM_Logo").hide();
    });
    $(".msg_close").on("click",function(){
        event.stopPropagation();//阻止事件冒泡
        $(".heimu").fadeOut();
        $(".detail_msg").fadeOut();
        // $("#dowebok").css({
        //     "z-index":'2'
        // });
        $(".heimu").fadeOut();
        // $(".arrow2").show()
        // $(".arrow").show();
        // $(".HBM_Logo").show();
    });
    $("body").on("click",function(){
        $(".heimu").fadeOut();
        $(".detail_msg").fadeOut();
        $(".menu").slideUp();
        $(".nav_icon").fadeIn();
        $(".close").fadeOut();
        // $("#dowebok").css({
        //     "z-index":"2"
        // });
        // $(".arrow2").show()
        // $(".arrow").show();
    });
    $(".continue").on("click",function () {
        $.fn.fullpage.moveSectionDown();
    });
    $(".arrow").on("click",function(){
        $.fn.fullpage.moveSectionDown();
    });
    $(".go_join").on("click",function () {
        $.fn.fullpage.moveSectionDown();
    });
});
// function next_page(){
//     if (pagenum==7){
//         pagenum=0;
//     }
//     var height=$(".page1").outerHeight(true);
//     $(".contents").animate({top:-pagenum*height},1000);
//     pagenum++;
//     event.stopPropagation();
// }
function return_home(){
    $(".contents").animate({top:0},1000);
    pagenum=0;
}
function stopEvent(){ //阻止冒泡事件
    //取消事件冒泡
    var e=arguments.callee.caller.arguments[0]||event; //若省略此句，下面的e改为event，IE运行可以，但是其他浏览器就不兼容
    if (e && e.stopPropagation) {
        // this code is for Mozilla and Opera
        e.stopPropagation();
    } else if (window.event) {
        // this code is for IE
        window.event.cancelBubble = true;
    }
}