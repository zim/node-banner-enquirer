var stage;
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
	prefix = window.location.href.split(":")[0];
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
	
	window.top.postMessage(JSON.stringify({action: "collapse"}), "*");

	if(prefix=="file"){
		stage.style.width=minWidth+"px";
		stage.style.height=minHeight+"px";
	 }
	 
	 EB.userActionCounter("collapse");
}
