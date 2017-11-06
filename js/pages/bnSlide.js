(function($) {
	$.fn.bnSlide = function(options) {
		var defaults = {
			colorData: 0, //原始滑道的有效值
			maxWidth: 12, //整个滑道有效值
			// Width: 500, //整个容器的宽度
			//height: 20//整个容器的高度
		};
		options = $.extend(defaults, options);
		if(options.colorData < 0)
			options.colorData = 0;
		else if(options.colorData > options.maxWidth)
			options.colorData = options.maxWidth;

		var obj = this;
		var objSlideColor = null; //有效轨道的对象
		var objBlock = null; //滑块对象
		var objPathway = null; //滑道对象

		function print(nowX) { //有效滑道长度colorwidth
			var nowData = options.maxWidth * nowX / maxPathway;
			nowData = Math.round(nowData);
			options.objPrint.val(nowData);
		}

		function blockAddress(nowX) {
			objBlock.css({
				"left": nowX + "px"
			});
			objSlideColor.width(nowX);
		}
		/**
		加载插件
		**/
		(function() {
			var html = "";
			html += "<div class='bnSlidePathway'>";
			html += "<div class='bnSlideColor'></div>";
			html += "</div>";
			html += "<div class='bnSlideBlock'></div>";
			
			obj.addClass("bnSlide").html(html);
			objSlideColor = $(".bnSlideColor", obj); //有效轨道的长度
			objBlock = $(".bnSlideBlock", obj); //滑块对象 
			objPathway = $(".bnSlidePathway", obj);
		})();

		var objOffset = obj.offset();
		var objLeft = objOffset.left; //滑道的left                     
		var objWidth = obj.width(); //滑道长度               
		var objBlockWidth = objBlock.width(); //滑块宽度
		var maxPathway = objWidth - objBlockWidth; //有效长度
		var colorWidth = options.colorData * maxPathway / options.maxWidth; //红色轨道的实际长度
		objSlideColor.width(colorWidth);
		objBlock.css({
			"left": colorWidth
		});
		options.objPrint.val(options.colorData);

		$(document).on("mouseup", function() {
			$(document).off("mousemove");
		});

		options.objPrint.on("blur", function() {
			var nowData = $(this).val();
			if(isNaN(nowData)) {
				$(this).css("background-color", "red");
				return;
			}
			if(nowData > options.maxWidth || nowData < 0) {
				$(this).css("background-color", "red");
				return;
			}
			$(this).css("background-color", "white");
			var nowX = nowData * maxPathway / options.maxWidth;
			blockAddress(nowX);
		});

		objPathway.on("click", function(event) {
			var pointX = event.clientX;
			var maxLeft = maxPathway + objLeft;
			var nowX = 0;
			if(pointX >= maxLeft) nowX = maxPathway;
			else nowX = pointX - objLeft;

			blockAddress(nowX);
			print(nowX);
		});

		objBlock.on("mousedown", function(event) {
			var pointX = event.clientX; //鼠标坐标x,距浏览器
			var blockX = $(this).offset().left; //滑块的left
			var pointInBlockW = pointX - blockX; //鼠标在滑块的横向位置  
			$(document).on("mousemove", function(event) {
				
				pointX = event.clientX; //鼠标坐标
				blockX = objBlock.offset().left; //滑块左坐标
				var nowX = pointX - pointInBlockW - objLeft; //滑块的新坐标x,相对坐标;鼠标绝对坐标-鼠标在滑块中的位置-最外层left
				if(pointX >= (objWidth + objLeft)) { //如果鼠标超出滑道的最右边,取最大值
					blockAddress(maxPathway);
					print(maxPathway);
				} else if(pointX <= objLeft) //如果鼠标超出滑道最左边,取最小值
				{
					blockAddress(0);
					print(0);
				} else if(nowX >= maxPathway) { //如果滑块的当前距离大于等于有效滑道距离,不运动
					$(".bnSlideColor").html("验证通过").css("color","#fff")
					$(".bnSlideBlock").html("ok")
					return;
				} else if(nowX <= 0) { //如果滑块的当前距离小于0,不运动
					return;
				} else {
					blockAddress(nowX);
					print(nowX);
					$(".bnSlideColor").html("请按住滑块拖到最右边").css("color","#777")
					$(".bnSlideBlock").html(">>")
				}
				
				
			});

		})
	}
})(jQuery);