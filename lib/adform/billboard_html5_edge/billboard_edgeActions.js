/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/


(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes


   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e){
            init(sym.$("Stage"), sym.$("openBtn"), sym.$("closeBtn"));
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_openBtn}", "click", function(sym, e) {
         check();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_closeBtn}", "click", function(sym, e) {
         check();
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'container'
   (function(symbolName) {   
   
   })("container");
   //Edge symbol end:'container'

   //=========================================================
   
   //Edge symbol: 'openBtn'
   (function(symbolName) {   
   
   })("closeBtn");
   //Edge symbol end:'closeBtn'

   //=========================================================
   
   //Edge symbol: 'closeBtn_1'
   (function(symbolName) {   
   
      })("openBtn");
   //Edge symbol end:'openBtn'

   //=========================================================
   
   //Edge symbol: 'contentContainer'
   (function(symbolName) {   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         defaultTimeline=sym;
      });

      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_EllipseCopy}", "click", function(sym, e) {
         EB.clickthrough();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Mediamind_benelux}", "click", function(sym, e) {
         EB.clickthrough();

      });
      //Edge binding end

   })("contentContainer");
   //Edge symbol end:'contentContainer'

})(jQuery, AdobeEdge, "EDGE-237512347");



var stage;
var openBtn;
var closeBtn;
var defaultTimeline;
var isOpen;
var isInIframe;
var stageWidth;
var stageHeight;


function init(s, o, c){
    stage=s;
    openBtn=o;
    closeBtn=c;
    isInIframe = (window.location != window.parent.location);
    isOpen=true;
    stageWidth=stage.width();
    stageHeight=stage.height();
    
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
    openBtn.css("display", "none");
    closeBtn.css("display", "");
    if(defaultTimeline)defaultTimeline.play(0);
	
	window.top.postMessage(JSON.stringify({action: "expand"}), "*");
	EB.userActionCounter("expand");
    
    if(!isInIframe){
        stage.css("width", stageWidth+"px");
        stage.css("height", stageHeight+"px");
    }
}

function closeBanner(){
    isOpen=false;
    openBtn.css("display", "");
    closeBtn.css("display", "none");
    if(defaultTimeline)defaultTimeline.stop();
	
	window.top.postMessage(JSON.stringify({action: "collapse"}), "*");
	EB.userActionCounter("collapse");

    if(!isInIframe){
        stage.css("width", "100px");
        stage.css("height", "30px");
    }
}
