$(window).ready(function(){
var activatedM = 3;
var monthlyVids = {
$january_video : "ErpNksYcNCY",
$february_video : "ErpNksYcNCY",
$march_video : "ErpNksYcNCY",
$april_video : null,
$may_video : null,
$june_video : null,
$july_video : null,
$august_video : null,
$september_video : null,
$october_video : null,
$november_video : null,
$december_video : null
};
var $monthNames = [ 
$EN = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
$IN = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
$CN = [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
$TH = [ "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม" ],
$VN = [ "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12" ],
$JP = [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ],
$ID = [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember" ],
$KH = [ "មករា", "កុម្ភះ", "មិនា", "មេសា", "ឧសភា", "មិថុនា", "កក្តដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆកា", "ធ្នូ" ]
];
$monthVar = [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december" ];
var langStr;
$("#lang_en").click(function(){$current_language = 0; changeLang(this);});
$("#lang_in").click(function(){$current_language = 1; changeLang(this); });
$("#lang_cn").click(function(){$current_language = 2; changeLang(this);});
$("#lang_th").click(function(){$current_language = 3; changeLang(this); });
$("#lang_vn").click(function(){$current_language = 4; changeLang(this); });
$("#lang_jp").click(function(){$current_language = 5; changeLang(this); });
$("#lang_id").click(function(){$current_language = 6; changeLang(this); });
$("#lang_kh").click(function(){$current_language = 7; changeLang(this);});


var nav_active = false;
var d = new Date(),
id = d.getMonth(),
total = $monthVar.length,
winW = $(window).width();

setMonths();
orientationCheck();
initial(id);


function setMonths(){
	for(i=0; i < total; i++){
	var m = $monthVar[i];
		/*$('<div id="'+m+'" class="img_container display_none"><img src="img/2015/'+m+'/mobile/'+m+'2015_1080x1920.jpg"></div>').appendTo(".img_wrapper");*/
		$('<div id="'+m+'" class="img_container display_none"><img src="images/mobile/gallery/'+m+'2016_1080x1920.jpg"></div>').appendTo(".img_wrapper");
	}
}
function initial(x){

 langStr="en";
	var m = $monthNames[$current_language][x];
//console.log(m);
		$("img_container").attr("class","display_none");
		$("#"+$monthVar[x]).removeClass("display_none").addClass("current");
		$("#"+$monthVar[x-1]).removeClass("display_none");
		$("#"+$monthVar[x+1]).addClass("move_right");
		$(".month_h").html(m);
		 
	$(".social_btn").removeClass("inline_block").addClass("display_none");
	$(".social_"+langStr).removeClass("display_none").addClass("inline_block");
	//console.log(".social_"+langStr)
	$("#promoImg a").addClass("display_none");
	$(".promo_"+langStr).removeClass("display_none");
	
	processGallery(id);
	id = x;
}

function processGallery(z){
//console.log(z, activatedM);
	if(z > activatedM){
		$("#download_btn, #gallery_btn").addClass("display_none");
	} else {
		$("#download_btn, #gallery_btn").removeClass("display_none");
		//$("#download_btn").attr("href",'img/2015/'+$monthVar[z]+'/mobile/'+$monthVar[z]+'2015_1080x1920.jpg');
		$("#download_btn").attr("href",'images/mobile/gallery/'+$monthVar[z]+'2016_1080x1920.jpg');
	}
console.log(z, id, $current_language);
}


$("#gallery_btn").click(function(){
		openGallery(id);
});


$("#tn_01").click(function(){ open_lb_img(this, id, 1); });
$("#tn_02").click(function(){ open_lb_img(this, id, 2);  });
$("#tn_03").click(function(){ open_lb_img(this, id, 3); });
$("#tn_04").click(function(){ open_lb_img(this, id, 4); });
$("#tn_05").click(function(){ open_lb_img(this, id, 5); });
$("#tn_vid").click(function(){
	$(".lb_img_container").addClass("display_none");
	$(".lb_video_container").removeClass("display_none");
	//alert(a);
	 $(".lb_tn_btn").removeClass("btn_active"); $(this).addClass("btn_active");
	$("iframe").remove();
	$('<iframe width="'+vidW+'" height="'+vidH+'" frameborder="0"></iframe>').attr("src", "http://www.youtube.com/embed/"+ $videoid +"?autoplay=1").appendTo(".lb_video_container");
});

var vidW, vidH;
function openGallery(a){
var tnNum = 1;
var $videoid = monthlyVids["$"+$monthVar[a]+"_video"];
	$(".lightbox").removeClass("display_none");
	/*$(".lb_img_container img").attr("src",'img/2015/'+$monthVar[a]+'/others/other_photo_0'+tnNum+'.jpg');

		
		console.log("openG"+a);*/
}


function open_lb_img(tnDiv, a, tnNum){
$(".lb_img_container").removeClass("display_none");
$(".lb_video_container").addClass("display_none");
/*$(".lb_img_container img").attr("src",'img/2015/'+$monthVar[a]+'/others/other_photo_0'+tnNum+'.jpg'); $(".lb_tn_btn").removeClass("btn_active"); $(tnDiv).addClass("btn_active"); $("iframe").remove(); 
*/
}


$(".close_btn").click(function(){
$("iframe").remove();
$(".lightbox").addClass("display_none");
});
	

(function($,sr){
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;
      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };
          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);
          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
})(jQuery,'smartresize');
// usage:
$(window).smartresize(function(){
	orientationCheck();
});

function orientationCheck(){
	if(window.innerHeight < window.innerWidth){ 
	vidH = $(window).height()*0.6;
	vidW = vidH*1.7778;
		//alert("this is landscape"); 
			$('.lb_img_container img').css({"width":"auto","height":"100%"})
			$(".gallery_wrapper").css({"height":"70%", "max-height":"100%"});
			$("iframe").width(vidW).height(vidH);
	}
	if(window.innerHeight > window.innerWidth){
		//alert("this is portrait"); 
	vidW = $(window).width();
	vidH = vidW*0.5625;
			$('.lb_img_container img').css({"width":"100%","height":"auto"})
			$(".gallery_wrapper").css({"height":"auto", "max-height":"80%"});
						$("iframe").width(vidW).height(vidH);
	}
}


$(".menu_btn").click(function(){
closeMenu();
});

function closeMenu(){
	if(nav_active == false){
	$(".moving").removeClass("nav_close").addClass("nav_active");
	nav_active=true;
	} else {
	$(".moving").removeClass("nav_active").addClass("nav_close");
	nav_active=false;
	}
}

function changeLang(o){
$(".language_list li").attr("class","lang");
$(o).removeClass("lang").addClass("active_lang");
$(".month_h").html($monthNames[$current_language][id]);

if($current_language == 0){ langStr = "en" }
else if($current_language == 1){ langStr = "in" }
else if($current_language == 2){ langStr = "cn" }
else if($current_language == 3){ langStr = "th" }
else if($current_language == 4){ langStr = "vn" }
else if($current_language == 5){ langStr = "jp" }
else if($current_language == 6){ langStr = "id" }
else if($current_language == 7){ langStr = "kh" }
else{ langStr = "en" }

	$(".social_btn").removeClass("inline_block").addClass("display_none");
	$(".social_"+langStr).removeClass("display_none").addClass("inline_block");
	$("#promoImg a").addClass("display_none");
	$(".promo_"+langStr).removeClass("display_none");

}


$("body").on("swipeleft",function(e){
e.preventDefault();
if(id!=total-1){
$(".month_h").html($monthNames[$current_language][id+1]);
$("#"+$monthVar[id+1]).removeClass("display_none").addClass("current").delay(100).queue(function(){
	$(this).removeClass("move_right").finish();
})
		$("#"+$monthVar[id]).removeClass("current");
		$("#"+$monthVar[id+2]).addClass("move_right");
		id = id +1;
} else {
//alert("Future calendars are not yet available.")
}
	
	processGallery(id);
				console.log(this, "#"+$monthVar[id+1],$monthNames[$current_language][id+1], "#"+$monthVar[id]);				
});


$(".img_container").on("swiperight",function(e){
e.preventDefault();
		if(id!=0){
			$(".month_h").html($monthNames[$current_language][id-1]);
			$("#"+$monthVar[id-1]).removeClass("display_none");
			$(this).addClass("move_right").delay(200).queue(function(){
				$(this).addClass("display_none").finish();
			});
			id = id -1;
		processGallery(id);
		}

});


});