(function(){var a,b,c;a=jQuery;c=function(){function a(){this.fileLoadingImage="res/images/loading.gif";this.fileCloseImage="res/images/close.png";this.resizeDuration=700;this.fadeDuration=500;this.labelImage="Image";this.labelOf="of"}return a}();b=function(){function b(a){this.options=a;this.album=[];this.currentImageIndex=void 0;this.init()}b.prototype.init=function(){this.enable();return this.build()};b.prototype.enable=function(){var b=this;return a("body").on("click","a[rel^=lightbox], area[rel^=lightbox]",function(c){b.start(a(c.currentTarget));return false})};b.prototype.build=function(){var b,c=this;a("<div>",{id:"lightboxOverlay"}).after(a("<div/>",{id:"lightbox"}).append(a("<div/>",{"class":"lb-outerContainer"}).append(a("<div/>",{"class":"lb-container"}).append(a("<img/>",{"class":"lb-image"}),a("<div/>",{"class":"lb-nav"}).append(a("<a/>",{"class":"lb-prev"}),a("<a/>",{"class":"lb-next"})),a("<div/>",{"class":"lb-loader"}).append(a("<a/>",{"class":"lb-cancel"}).append(a("<img/>",{src:this.options.fileLoadingImage}))))),a("<div/>",{"class":"lb-dataContainer"}).append(a("<div/>",{"class":"lb-data"}).append(a("<div/>",{"class":"lb-details"}).append(a("<span/>",{"class":"lb-caption"}),a("<span/>",{"class":"lb-number"})),a("<div/>",{"class":"lb-closeContainer"}).append(a("<a/>",{"class":"lb-close"}).append(a("<img/>",{src:this.options.fileCloseImage}))))))).appendTo(a("body"));a("#lightboxOverlay").hide().on("click",function(a){c.end();return false});b=a("#lightbox");b.hide().on("click",function(b){if(a(b.target).attr("id")==="lightbox")c.end();return false});b.find(".lb-outerContainer").on("click",function(b){if(a(b.target).attr("id")==="lightbox")c.end();return false});b.find(".lb-prev").on("click",function(a){c.changeImage(c.currentImageIndex-1);return false});b.find(".lb-next").on("click",function(a){c.changeImage(c.currentImageIndex+1);return false});b.find(".lb-loader, .lb-close").on("click",function(a){c.end();return false})};b.prototype.start=function(b){var c,d,e,f,g,h,i,j,k;a(window).on("resize",this.sizeOverlay);a("select, object, embed").css({visibility:"hidden"});a("#lightboxOverlay").width(a(document).width()).height(a(document).height()).fadeIn(this.options.fadeDuration);this.album=[];g=0;if(b.attr("rel")==="lightbox"){this.album.push({link:b.attr("href"),title:b.attr("title")})}else{k=a(b.prop("tagName")+'[rel="'+b.attr("rel")+'"]');for(f=0,j=k.length;f<j;f++){e=k[f];this.album.push({link:a(e).attr("href"),title:a(e).attr("title")});if(a(e).attr("href")===b.attr("href"))g=f}}d=a(window);i=d.scrollTop()+d.height()/10;h=d.scrollLeft();c=a("#lightbox");c.css({top:i+"px",left:h+"px"}).fadeIn(this.options.fadeDuration);this.changeImage(g)};b.prototype.changeImage=function(b){var c,d,e,f=this;this.disableKeyboardNav();d=a("#lightbox");c=d.find(".lb-image");this.sizeOverlay();a("#lightboxOverlay").fadeIn(this.options.fadeDuration);a(".loader").fadeIn("slow");d.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide();d.find(".lb-outerContainer").addClass("animating");e=new Image;e.onload=function(){c.attr("src",f.album[b].link);c.width=e.width;c.height=e.height;return f.sizeContainer(e.width,e.height)};e.src=this.album[b].link;this.currentImageIndex=b};b.prototype.sizeOverlay=function(){return a("#lightboxOverlay").width(a(document).width()).height(a(document).height())};b.prototype.sizeContainer=function(b,c){var d,e,f,g,h,i,j,k,l,m,n,o=this;e=a("#lightbox");f=e.find(".lb-outerContainer");n=f.outerWidth();m=f.outerHeight();d=e.find(".lb-container");j=parseInt(d.css("padding-top"),10);i=parseInt(d.css("padding-right"),10);g=parseInt(d.css("padding-bottom"),10);h=parseInt(d.css("padding-left"),10);l=b+h+i;k=c+j+g;if(l!==n&&k!==m){f.animate({width:l,height:k},this.options.resizeDuration,"swing")}else if(l!==n){f.animate({width:l},this.options.resizeDuration,"swing")}else if(k!==m){f.animate({height:k},this.options.resizeDuration,"swing")}setTimeout(function(){e.find(".lb-dataContainer").width(l);e.find(".lb-prevLink").height(k);e.find(".lb-nextLink").height(k);o.showImage()},this.options.resizeDuration)};b.prototype.showImage=function(){var b;b=a("#lightbox");b.find(".lb-loader").hide();b.find(".lb-image").fadeIn("slow");this.updateNav();this.updateDetails();this.preloadNeighboringImages();this.enableKeyboardNav()};b.prototype.updateNav=function(){var b;b=a("#lightbox");b.find(".lb-nav").show();if(this.currentImageIndex>0)b.find(".lb-prev").show();if(this.currentImageIndex<this.album.length-1){b.find(".lb-next").show()}};b.prototype.updateDetails=function(){var b,c=this;b=a("#lightbox");if(typeof this.album[this.currentImageIndex].title!=="undefined"&&this.album[this.currentImageIndex].title!==""){b.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast")}if(this.album.length>1){b.find(".lb-number").html(this.options.labelImage+" "+(this.currentImageIndex+1)+" "+this.options.labelOf+"  "+this.album.length).fadeIn("fast")}else{b.find(".lb-number").hide()}b.find(".lb-outerContainer").removeClass("animating");b.find(".lb-dataContainer").fadeIn(this.resizeDuration,function(){return c.sizeOverlay()})};b.prototype.preloadNeighboringImages=function(){var a,b;if(this.album.length>this.currentImageIndex+1){a=new Image;a.src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){b=new Image;b.src=this.album[this.currentImageIndex-1].link}};b.prototype.enableKeyboardNav=function(){a(document).on("keyup.keyboard",a.proxy(this.keyboardAction,this))};b.prototype.disableKeyboardNav=function(){a(document).off(".keyboard")};b.prototype.keyboardAction=function(a){var b,c,d,e,f;b=27;c=37;d=39;f=a.keyCode;e=String.fromCharCode(f).toLowerCase();if(f===b||e.match(/x|o|c/)){this.end()}else if(e==="p"||f===c){if(this.currentImageIndex!==0){this.changeImage(this.currentImageIndex-1)}}else if(e==="n"||f===d){if(this.currentImageIndex!==this.album.length-1){this.changeImage(this.currentImageIndex+1)}}};b.prototype.end=function(){this.disableKeyboardNav();a(window).off("resize",this.sizeOverlay);a("#lightbox").fadeOut(this.options.fadeDuration);a("#lightboxOverlay").fadeOut(this.options.fadeDuration);return a("select, object, embed").css({visibility:"visible"})};return b}();a(function(){var a,d;d=new c;return a=new b(d)})}).call(this)

$(document).ready(function () {
	
	var page = $('#page');
	var startPage = $('#startPage');
	var lastUploddist = true;
	var rotating = false;
	
	$('#contactBox .submitBtn').live('click', function() { 
		
		var sName = $('#contactBox input[name="name"]').val();
		var sEmail = $('#contactBox input[name="email"]').val();
		var sText = $('#contactBox textarea').val();
		var regEmail = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
		var errorSwitcher = 0;
		
		$('#errorBox').slideUp(300).delay(300).empty();
		
		if(!sName) {
				$('#contactBox input[name="name"]').addClass('error');
				errorSwitcher = 1;
				$('#errorBox').append("Please check field Name<br />");
		}else{
				$('#contactBox input[name="name"]').removeClass('error');
		};			
		if(!regEmail.test(sEmail)) {
				$('#contactBox input[name="email"]').addClass('error');
				errorSwitcher = 1;
				$('#errorBox').append("Please check field eMail<br />");				
		}else{
				$('#contactBox input[name="email"]').removeClass('error');
		};
		if(!sText) {
				$('#contactBox textarea').addClass('error');
				errorSwitcher = 1;
				$('#errorBox').append("Please check field Text<br />");				
		}else{
				$('#contactBox textarea').removeClass('error');
		};
		
		if(!errorSwitcher) {
		
			manageLoader('on', $('#contentMenu'));
			
			$.post("sendnesg", { name: sName, email: sEmail, text: sText }, function(data){

				if (data.charAt(0) == 'P') {
				 
					$('#errorBox').append(data).slideDown(300);	

				} else {
				
					modalWindows(data);
				}
				
				manageLoader('off');
			});
		} else {
		
			$('#errorBox').slideDown(300);	
			manageLoader('off');
		}
	});
	$('.filterClick').live('click', function() { 
		if (!$(this).hasClass('activated')){
			var relation = $(this).attr('rel');
			
			$('#portfolioBox article').slideUp(400);
			$('.filterClick').removeClass('activated')

			if(relation == 'all'){
				$('#portfolioBox article').slideDown(600);
			} else {
				$('#portfolioBox article[rel="' + relation + '"]').slideDown(600);
			}
			$(this).addClass('activated');
		}
	
	});	
	$('#contentMenu li').click(function() {
		if (!document.getElementById('loading')) {
			var id = $(this).attr('id');
			if (id == 'back') {
			
				stopUpload('2');
		
				
			} else {
				if (!$(this).hasClass('activeted')) {
					
					manageLoader('on', $(this).parent().parent());
					startUpload(id,'3');
				}
			}
		}
	});	
	$('#startPageMenu li').click(function() {
		var clickedAnchor = $('span', this);
		var source = clickedAnchor.html();
		
		startSerf(source, clickedAnchor);
		
	});
	function startSerf(source, clickedAnchor){
		
		if (!document.getElementById('loading')) {
			manageLoader('on', clickedAnchor);
			startUpload(source,'1');
		}	
	};
	function manageLoader(switcher, target){
		switch(switcher) {
				
				case 'on':
					if (!document.getElementById('loading')) {
						$('<aside id="loading" class="loading" style="display:none"></aside>').insertAfter(target); 	
						$('#loading').slideDown(300);
					}
					break;
				case 'off': 
					$('#loading').slideUp(100).delay(150).remove();break;
			};
	};
	function startUpload(source,key){
		var dist = (lastUploddist) ? '#content0' : '#content1';
		
		function checkMe() { 
			
			if (document.getElementById('endOfPage')) {
				clearInterval(timer);
				setTimeout(function() { stopUpload(key, dist, source) }, 700)
			}
		};	
		
		
		$(dist).hide().empty();
		$(dist).load('/' + source + '.html');
		var timer = setInterval(checkMe, 500);
		
	};
	
	function stopUpload(switcher, dist, source){		
		
		opositDist = (dist == '#content0') ? '#content1' : '#content0';
		
		switch(switcher) { 
			case '1': 
				$(dist).show();
				$('#' + source).addClass('activeted');		
				page.slideDown(900, function(){$('footer').css('top', '100%');});
				startPage.slideUp(500);
			break;
			case '2': 
				startPage.slideDown(900, function(){$('footer').css('top', '100%');});
				page.slideUp(500);
				lastUploddist = true;
				$(dist).fadeOut(600).empty();
				$(opositDist).fadeOut('fast').empty();
				$('#contentMenu li').removeClass();
			break;
			case '3': 
			
				$(opositDist).slideUp(200);
				$(dist).slideDown(function(){$('footer').css('top', '100%');});
				$('#contentMenu li').removeClass();
				$('#' + source).addClass('activeted');
			break;		
		};			
		lastUploddist = (lastUploddist) ? false : true;
		manageLoader('off');

	};
	//modalWindows	
	function modalWindows(data){
	
		$('body').append('<div id="fade"></div>').append('<div id="popupBlock"><span id="close"></span>' + data + '</div>'); 
		$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();

		var popMargLeft = ($(document).width() - $('#popupBlock').outerWidth(true)) / 2;

		$('#popupBlock').css({
			'top' : '30%',
			'left' : popMargLeft
		});

		
		$('#popupBlock').fadeIn();
	};
	
	$('#close, #fade').live('click', function() { 
		$('#fade , #popup_block').fadeOut(function() {
			$('#fade, #popupBlock').remove(); 
		});
		return false;
	});
	
	//slider
	
	intSliderTimer = window.setInterval(rotate, 3000);
	
	$('#slaiderBox li').mouseout(function(){
		intSliderTimer = window.setInterval(rotate, 3000);
	});
	
	$('#slaiderBox li').mouseover(function(){
		if (intSliderTimer) {
			window.clearInterval(intSliderTimer);
		}
	});
	
	$('#slaiderBox .description').click(function(){
		startSerf('portfolio' , $('#startPageMenu ul .title')[0]);
	});
	
	$('#slaiderBox .prev').click(function(){
		rotate(true);
	});

	$('#slaiderBox .next').click(function(){
		rotate();
	});
	
	function rotate(distination){
		var $colection = $('#slaiderBox ul');
		var speed = 400;
		
		if (!rotating){
			
			var rotating = true;
			
			if (intSliderTimer) {
				window.clearInterval(intSliderTimer);
			}
			
			if(!distination){
				/*
				$colection.fadeOut(speed, function() {
					$(this).children(':first').appendTo($colection); 
				}).fadeIn(speed);
				*/
				$colection.children(':first').animate({width: "hide"}, speed, 'linear', function() {
					$colection.children(':first').appendTo($colection).show(); 
				});

			} else {
				/*	
				$colection.fadeOut(speed, function() {
					$(this).children(':last').prependTo($colection); 
				}).fadeIn(speed);		
				*/	
				$colection.children(':last').hide().prependTo($colection).animate({width: "show"}, speed, 'linear');	//'linear' 'swing'

			}
		
			intSliderTimer = window.setInterval(rotate, 3000);
			window.rotating = false;
		}
	}
	
});