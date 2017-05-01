/* *
 * 2015-12-16
 * */
 //var strList="{'month':1,'imageurl':[{'bigurl':'Jan-01.jpg','smallurl':'thumb-01.jpg'},{'bigurl':'Jan-02.jpg','smallurl':'thumb-01.jpg'},{'bigurl':'Jan-03.jpg','smallurl':'thumb-01.jpg'}]}";
//var arr= new Array();
(function ($) {
    $.fn.fadeImages = function (options) {
        var opt = $.extend({
            time: 3000,    //动画间隔时间
            fade: 1500,    //淡入淡出的动画时间
            dots: true     //是否启用图片按钮
        }, options);
        var t = parseInt(opt.time), f = parseInt(opt.fade), d = opt.dots, i = 0, j = 0, k, l, m, set;
        m = $(this).find("ul li");
        l = m.length;
        if (d) {
            /*$(this).append("<ol id='dots'></ol>");
            for (j = 0; j < l; j++) {
                $(this).find("ol").append("<li>" + (j + 1) + "</li>");
            };*/
           /* $(this).find("ol li").eq(0).addClass("active");*/
            var date = new Date();
            var currenMon = date.getMonth() + 1;
            if(currenMon == 1){
                $(".slider-dots .january").parent().addClass('active');
            }else if(currenMon == 2){
                $(".slider-dots .February").parent().addClass('active');
            }else if(currenMon == 3){
                $(".slider-dots .March").parent().addClass('active');
            }else if(currenMon == 4){
                $(".slider-dots .April").parent().addClass('active');
            }else if(currenMon == 5){
                $(".slider-dots .May").parent().addClass('active');
            }else if(currenMon == 6){
                $(".slider-dots .June").parent().addClass('active');
            }else if(currenMon == 7){
                $(".slider-dots .July").parent().addClass('active');
            }else if(currenMon == 8){
                $(".slider-dots .August").parent().addClass('active');
            }else if(currenMon == 9){
                $(".slider-dots .September").parent().addClass('active');
            }else if(currenMon == 10){
                $(".slider-dots .October").parent().addClass('active');
            }else if(currenMon == 11){
                $(".slider-dots .November").parent().addClass('active');
            }else if(currenMon == 12){
                $(".slider-dots .December").parent().addClass('active');
            } else{
                $(this).removeClass('active');
            }
            i =currenMon;
			showimg(i);
            /*获取otherphoto月份标题*/
			$(".currentMonth").text($(".slider-dots li").eq(i-1).text());
        }
        //初始化
        m.hide().eq(i-1).css("z-index", 2).fadeIn(f);

        //图片切换函数
        function show(i) {
            m.eq(i).css("z-index", 2).fadeIn(f).siblings().css("z-index", 1).fadeOut(f); 
        }

        //逗点切换函数
        function dots(i) {	
			if($(".image-set").outerHeight()>65){
				$('.more').click();
			}		
			var n=i+1;	
            $('.download-box').removeClass('animated zoomInRight'); 	
            $('.download-box').offset().left=$(window).width();
			showimg(n);
            $("ol#dots li").eq(i).addClass("active").siblings().removeClass();
            //showimg();
            /*获取月份标题*/
            $(".currentMonth").text($(".slider-dots li.active:first").text());
        }
		
	function showimg(i){
        //显示相册
		if($("#m"+i).length>0)
		{
			var $boxattr=$("#m"+i);				
				$('.download-box .box-top a:first').attr('href',$boxattr.attr('href_desktop'));
				$('.download-box .box-top a:last').attr('href',$boxattr.attr('href_mobile'));	
				$('.download-box .box-top p.QRCode').css('background-image','url("'+$boxattr.attr('qr_code')+'")');
		}
		var strAList='';
		if($("#m"+i+" a").length>0)
		{
			if($("#m"+i+" a").length>3)
				$(".more").css('display','block');
			else
				$(".more").css('display','none');
			$("#m"+i+" a").each(function(){			
					$(this).attr('data-lightbox','example-set');
                      strAList+=$(this).prop("outerHTML");
                      $(this).attr('data-lightbox',false);
            });
			$(".image-set").html(strAList);
			
			$(".download-box").css('display','block');
            $('.download-box').addClass('animated zoomInRight'); 
		}
		else
			$(".download-box").css('display','none');
		
    }
        //图片自动播放函数
        /*function play() {
            if (i++ < l - 1) {
                set = setTimeout(function () {
                    show(i);
                    dots(i);
                    play();
                }, t + f)
            }
            else {
                i = -1;
                play();
            }
        }

        play();*/
        //鼠标经过停止与播放
       /* m.hover(function () {
            clearTimeout(set);
            k = i;
        }, function () {
            i = k - 1;
            play();
        })*/
        //点击下方逗点控制动画
        if (d) {
            $(this).on("click", "ol#dots li", function () {
				
			$('.lb-close').click();
                i = $(this).index();
                dots(i);
                show(i);
            })
        }
        return this;
    }
}(jQuery));