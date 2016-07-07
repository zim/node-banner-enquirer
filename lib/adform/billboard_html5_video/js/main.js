var stage;
var video;
var openBtn;
var closeBtn;
var defaultTimeline;
var isOpen;
var isInIframe;
var stageWidth;
var stageHeight;


function init(){
    stage=document.getElementById("stage");
    openBtn=document.getElementById("openBtn");
    closeBtn=document.getElementById("closeBtn");
	player = document.getElementById("player"); 
	poster = document.getElementById("poster");
	prefix = window.location.href.split(":")[0];
	isInIframe = (window.location != window.parent.location);
    isOpen=true;
	minWidth=100;
    minHeight=30;
    maxWidth=970;
    maxHeight=250;
	
	
	closeBtn.style.left=(maxWidth-minWidth)+"px";
	stage.style.position="absolute";
	stage.style.width=maxWidth+"px";
	stage.style.height=maxHeight+"px";
	stage.style.margin="0";
	stage.style.backgroundColor="#000";
	stage.style.overflow="hidden";
	stage.style.opacity="1";
	
	videoTrackingModule = new EBG.VideoModule(player);
	
	player.addEventListener("pause", function () {
		poster.style.left="0px";
	}, false);
	
	player.addEventListener("playing", function () {
		poster.style.left="-9999px";
	}, false);
	
	player.addEventListener("ended", function () {
	}, false);
	
	poster.onclick=function(){
		player.play();
	}
	
	
	openBtn.onclick=function(){
		openBanner();	
	}
	
	closeBtn.onclick=function(){
		closeBanner();	
	}
	
    openBanner();
}


function check(){
    if(isOpen){
        closeBanner();
    }else{
        openBanner();
    }
}



function openBanner(){
    isOpen=true;
    openBtn.style.display="none";
    closeBtn.style.display="";
	
	player.currentTime=0;
	player.play();
	
	window.top.postMessage(JSON.stringify({action: "expand"}), "*");
	

	if(prefix=="file"){
		stage.style.width=maxWidth+"px";
		stage.style.height=maxHeight+"px";
	}
	
	EB.userActionCounter("expand");
}



function closeBanner(){
    isOpen=false;
    openBtn.style.display="";
    closeBtn.style.display="none";
	
	player.pause();
	
	window.top.postMessage(JSON.stringify({action: "collapse"}), "*");
	

	 if(prefix=="file"){
		stage.style.width=minWidth+"px";
		stage.style.height=minHeight+"px";
	 }
	 
	 EB.userActionCounter("collapse");
}
