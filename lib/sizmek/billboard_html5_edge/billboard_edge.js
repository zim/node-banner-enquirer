/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'contentContainer',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'closeBtn',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'openBtn',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            cursor:['pointer']
         }],
         symbolInstances: [
         {
            id:'closeBtn',
            symbolName:'closeBtn'
         },
         {
            id:'openBtn',
            symbolName:'openBtn'
         },
         {
            id:'contentContainer',
            symbolName:'contentContainer'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '970px'],
            ["style", "height", '250px'],
            ["style", "overflow", 'hidden']
         ],
         "${_openBtn}": [
            ["style", "cursor", 'pointer']
         ],
         "${_closeBtn}": [
            ["style", "cursor", 'pointer'],
            ["style", "left", '870px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid4", tween: [ "style", "${_closeBtn}", "left", '870px', { fromValue: '870px'}], position: 0, duration: 0 }         ]
      }
   }
},
"container": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','136px','107px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['101px','19px','153px','132px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(217,31,31,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(217,31,31,1.00)'],
            ["style", "left", '101px'],
            ["style", "top", '19px']
         ],
         "${symbolSelector}": [
            ["style", "height", '107px'],
            ["style", "width", '136px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"closeBtn": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [1,'rgba(57,57,57,1.00)','none'],
      rect: ['0px','0px','100px','31px','auto','auto'],
      fill: ['rgba(196,0,124,1.00)']
   },
   {
      rect: ['30px','3px','auto','auto','auto','auto'],
      id: 'Text',
      text: 'close',
      font: ['Verdana, Geneva, sans-serif',18,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(196,0,124,1.00)'],
            ["style", "left", '0px'],
            ["style", "border-style", 'none'],
            ["style", "height", '31px'],
            ["color", "border-color", 'rgba(57,57,57,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "width", '100px']
         ],
         "${_Text}": [
            ["style", "top", '3px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '30px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '31px'],
            ["style", "width", '100px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"openBtn": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(57,57,57,1.00)','none'],
      rect: ['0px','0px','100px','31px','auto','auto'],
      fill: ['rgba(196,0,124,1.00)']
   },
   {
      rect: ['29px','2px','auto','auto','auto','auto'],
      id: 'Text',
      text: 'open',
      font: ['Verdana, Geneva, sans-serif',18,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(196,0,124,1.00)'],
            ["style", "top", '0px'],
            ["style", "height", '31px'],
            ["color", "border-color", 'rgba(57,57,57,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_Text}": [
            ["style", "top", '2px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '29px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '31px'],
            ["style", "width", '100px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"contentContainer": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['429px','264px','111px','111px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'Ellipse',
      stroke: [0,'rgb(57, 57, 57)','none'],
      cursor: ['no-drop'],
      fill: ['rgba(151,0,118,1.00)']
   },
   {
      rect: ['429px','264px','111px','111px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'EllipseCopy',
      stroke: [0,'rgb(57, 57, 57)','none'],
      cursor: ['pointer'],
      fill: ['rgba(151,0,118,1.00)']
   },
   {
      rect: ['429px','264px','111px','111px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'EllipseCopy2',
      stroke: [0,'rgb(57, 57, 57)','none'],
      cursor: ['no-drop'],
      fill: ['rgba(151,0,118,1.00)']
   },
   {
      rect: ['13px','218px','230px','24px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',19,'rgba(180,180,180,1.00)','normal','none',''],
      id: 'Mediamind_benelux',
      text: 'Mediamind Benelux',
      cursor: ['pointer'],
      type: 'text'
   },
   {
      rect: ['178px','228px','auto','auto','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',12,'rgba(109,108,108,1.00)','normal','none','normal'],
      id: 'billboard_template',
      text: 'Adobe Edge billboard template',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_billboard_template}": [
            ["style", "top", '228px'],
            ["color", "color", 'rgba(152,152,152,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '178px'],
            ["style", "font-size", '12px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(196,0,124,1.00)'],
            ["style", "top", '264px'],
            ["style", "cursor", 'no-drop'],
            ["style", "left", '318px']
         ],
         "${symbolSelector}": [
            ["style", "height", '250px'],
            ["style", "width", '970px']
         ],
         "${_EllipseCopy}": [
            ["style", "top", '264px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '429px'],
            ["style", "cursor", 'pointer']
         ],
         "${_EllipseCopy2}": [
            ["color", "background-color", 'rgba(0,196,65,1.00)'],
            ["style", "top", '264px'],
            ["style", "cursor", 'no-drop'],
            ["style", "left", '540px']
         ],
         "${_Mediamind_benelux}": [
            ["style", "top", '258px'],
            ["style", "cursor", 'pointer'],
            ["color", "color", 'rgba(205,205,205,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '13px'],
            ["style", "font-size", '16px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2065,
         autoPlay: true,
         timeline: [
            { id: "eid5", tween: [ "style", "${_Ellipse}", "top", '69px', { fromValue: '264px'}], position: 500, duration: 1565, easing: "easeOutBack" },
            { id: "eid11", tween: [ "style", "${_EllipseCopy2}", "top", '62px', { fromValue: '264px'}], position: 500, duration: 1565, easing: "easeOutBack" },
            { id: "eid7", tween: [ "style", "${_EllipseCopy}", "top", '69px', { fromValue: '264px'}], position: 500, duration: 1565, easing: "easeOutElastic" },
            { id: "eid17", tween: [ "style", "${_EllipseCopy2}", "left", '699px', { fromValue: '540px'}], position: 500, duration: 1565, easing: "easeOutBack" },
            { id: "eid19", tween: [ "style", "${_Ellipse}", "left", '149px', { fromValue: '318px'}], position: 500, duration: 1565, easing: "easeOutBack" },
            { id: "eid31", tween: [ "color", "${_Mediamind_benelux}", "color", 'rgba(205,205,205,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(205,205,205,1.00)'}], position: 2065, duration: 0, easing: "easeInOutQuad" },
            { id: "eid26", tween: [ "style", "${_Mediamind_benelux}", "top", '224px', { fromValue: '258px'}], position: 500, duration: 1565, easing: "easeOutQuad" },
            { id: "eid30", tween: [ "style", "${_billboard_template}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 1565, easing: "easeInOutQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-237512347");
