(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"LAL_S2_300x250_atlas_", frames: [[499,504,110,20],[499,526,94,11],[302,504,195,147],[0,252,300,250],[0,756,300,250],[0,504,300,250],[302,252,300,250],[302,0,300,250],[0,0,300,250]]}
];


// symbols:



(lib.cta_bg = function() {
	this.spriteSheet = ss["LAL_S2_300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cta_txt = function() {
	this.spriteSheet = ss["LAL_S2_300x250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.end_title = function() {
	this.spriteSheet = ss["LAL_S2_300x250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.topFrame = function() {
	this.spriteSheet = ss["LAL_S2_300x250_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.vid_date1 = function() {
	this.spriteSheet = ss["LAL_S2_300x250_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.vid_date2 = function() {
	this.spriteSheet = ss["LAL_S2_300x250_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.vid_date3 = function() {
	this.spriteSheet = ss["LAL_S2_300x250_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.vid_date4 = function() {
	this.spriteSheet = ss["LAL_S2_300x250_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.vid_date5 = function() {
	this.spriteSheet = ss["LAL_S2_300x250_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tunein_vid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.instance = new lib.vid_date1();
	this.instance.parent = this;

	this.instance_1 = new lib.vid_date2();
	this.instance_1.parent = this;

	this.instance_2 = new lib.vid_date3();
	this.instance_2.parent = this;

	this.instance_3 = new lib.vid_date4();
	this.instance_3.parent = this;

	this.instance_4 = new lib.vid_date5();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.topFrame_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.topFrame();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.topFrame_1, new cjs.Rectangle(0,0,300,250), null);


(lib.hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.end_titlesub = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.end_title();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.end_titlesub, new cjs.Rectangle(0,0,195,147), null);


(lib.cta_txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cta_txt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_txt_1, new cjs.Rectangle(0,0,94,11), null);


(lib.end_titlelockup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvZDkIgCm5IC/gCIAEBrQAEB2AAA4QAFABADAAIAJAAQAWgBAGA8QACAfgCAeIFmAAIADmAIAdgeIU7AAIACHHg");
	mask.setTransform(98.1,130.3);

	// Layer 1
	this.instance = new lib.end_titlesub();
	this.instance.parent = this;
	this.instance.setTransform(97.5,73.5,1,1,0,0,0,97.5,73.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.end_titlelockup, new cjs.Rectangle(0,107.6,195,39.5), null);


(lib.end_titlelife = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZDVQgVgDgWgBQgugCgJAHQgUANgSgBIgfgGQgOgCgfgXQg2AEhnAFQhoAFg2AEQgUABgIgGQgHgEgGgUQgQg0gFgaQgKgtAAgkQAAgiANhHIARhbQADgPAEgFQAJgMAcgBIPRgUIBagDQA3ABAZAXQAPAPADAkQACAVAAAnQADAWgCAgIgCA0QAAArAGA1QADAbAAANQgBAWgJAPQgKATgpAMIgmAKg");
	mask.setTransform(83.9,55);

	// Layer 1
	this.instance = new lib.end_titlesub();
	this.instance.parent = this;
	this.instance.setTransform(97.5,73.5,1,1,0,0,0,97.5,73.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.end_titlelife, new cjs.Rectangle(21.4,32.2,125,45.6), null);


(lib.end_titlefrom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsXhqIYmhMIAKEhI4wBMg");
	mask.setTransform(89.8,15.3);

	// Layer 1
	this.instance = new lib.end_titlesub();
	this.instance.parent = this;
	this.instance.setTransform(97.5,73.5,1,1,0,0,0,97.5,73.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.end_titlefrom, new cjs.Rectangle(10.5,0,158.5,33.6), null);


(lib.end_titlecuffs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZFrQg1gBgWgFQgqgJgZgZQgLgMgMgUIgVgiQgUgRgGgLQgFgOgFgKQgHgRgCgXQgCgPABgbQACgvACgYQADgnAJgdQAThEA3hDQAngwBIg/QAngjAZgRQAmgaAjgJQAOgDAUgDIAhgFQAYgEAKADIAUAGQALADAIAFQAJAGAKAMQAKAMAFAKQAJAWgUAFIgXABIgcgDQgdgCgKAGQgHAEgDAOQgEAPgFAFQgOAPgiAcIgYATQgLALgCAOQgDAfAHAfQAIAfASAaQAIALAPASQASASAGAJQAmAzgCBKQgCAxgGAVQgOAygOAZQgXAoghARQgUAJgbADQgOACgWAAIgNAAg");
	mask.setTransform(43.5,112);

	// Layer 1
	this.instance = new lib.end_titlesub();
	this.instance.parent = this;
	this.instance.setTransform(97.5,73.5,1,1,0,0,0,97.5,73.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.end_titlecuffs, new cjs.Rectangle(17.7,75.7,51.6,71.3), null);


(lib.end_titleafter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnLBlIBmjQIMxgDIgFDdg");
	mask.setTransform(95.3,94.4);

	// Layer 1
	this.instance = new lib.end_titlesub();
	this.instance.parent = this;
	this.instance.setTransform(97.5,73.5,1,1,0,0,0,97.5,73.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.end_titleafter, new cjs.Rectangle(49.3,83.3,92,22.2), null);


(lib.end_title_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// end_title.from
	this.instance = new lib.end_titlefrom();
	this.instance.parent = this;
	this.instance.setTransform(89.9,16.9,2.2,2.2,0,0,0,89.8,16.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:2.11,scaleY:2.11,alpha:0.074},0).wait(1).to({scaleX:1.87,scaleY:1.87,alpha:0.259},0).wait(1).to({scaleX:1.57,scaleY:1.57,alpha:0.5},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.741},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:16.8,alpha:0.926},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:89.8,alpha:1},0).to({scaleX:1,scaleY:1},3).wait(27));

	// end_title.life
	this.instance_1 = new lib.end_titlelife();
	this.instance_1.parent = this;
	this.instance_1.setTransform(114.9,52.5,2.093,2.093,-11,0,0,97.5,73.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(1).to({regX:83.9,regY:55,scaleX:2.01,scaleY:2.01,rotation:-10.2,x:80.1,y:22.3,alpha:0.076},0).wait(1).to({scaleX:1.8,scaleY:1.8,rotation:-8,x:81.3,y:28.6,alpha:0.268},0).wait(1).to({scaleX:1.53,scaleY:1.53,rotation:-5.3,x:82.6,y:37.2,alpha:0.517},0).wait(1).to({scaleX:1.26,scaleY:1.26,rotation:-2.7,x:83.5,y:45.9,alpha:0.758},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:-0.7,x:83.9,y:52.5,alpha:0.934},0).wait(1).to({regX:97.5,regY:73.5,scaleX:1,scaleY:1,rotation:0,x:97.5,y:73.5,alpha:1},0).wait(23));

	// end_title.cuffs
	this.instance_2 = new lib.end_titlecuffs();
	this.instance_2.parent = this;
	this.instance_2.setTransform(49,71.9,2.093,2.093,11,0,0,64.8,76.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).wait(1).to({regX:43.5,regY:111.4,scaleX:2.01,scaleY:2.01,rotation:9.3,x:-3.4,y:134.6,alpha:0.076},0).wait(1).to({scaleX:1.8,scaleY:1.8,rotation:5.1,x:9.5,y:132.4,alpha:0.268},0).wait(1).to({scaleX:1.53,scaleY:1.53,rotation:-0.4,x:25,y:127.9,alpha:0.517},0).wait(1).to({scaleX:1.26,scaleY:1.26,rotation:-5.7,x:38.6,y:122,alpha:0.758},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:-9.5,x:47.6,y:116.9,alpha:0.934},0).wait(1).to({regX:64.8,regY:76.5,scaleX:1,scaleY:1,rotation:-11,x:64.8,y:76.5,alpha:1},0).wait(1).to({regX:43.5,regY:111.4,rotation:-9.9,x:49.9,y:114.5},0).wait(1).to({rotation:-7.1,x:48,y:113.7},0).wait(1).to({rotation:-3.3,x:45.6,y:112.5},0).wait(1).to({rotation:0.9,x:43,y:111.1},0).wait(1).to({rotation:4.5,x:40.8,y:109.6},0).wait(1).to({rotation:7.1,x:39.4,y:108.5},0).wait(1).to({regX:64.8,regY:76.6,rotation:8,x:64.9,y:76.5},0).wait(1).to({regX:43.5,regY:111.4,rotation:7.6,x:39.1,y:108.2},0).wait(1).to({rotation:6.4,x:39.8,y:108.8},0).wait(1).to({rotation:4.8,x:40.7,y:109.5},0).wait(1).to({rotation:2.8,x:41.8,y:110.3},0).wait(1).to({rotation:0.8,x:43.1,y:111.1},0).wait(1).to({rotation:-1.1,x:44.2,y:111.6},0).wait(1).to({rotation:-2.6,x:45.2,y:112.2},0).wait(1).to({rotation:-3.6,x:45.8,y:112.6},0).wait(1).to({regX:64.8,regY:76.5,rotation:-4,x:64.9,y:76.5},0).wait(1).to({regX:43.5,regY:111.4,rotation:-3.7,x:45.9,y:112.6},0).wait(1).to({rotation:-2.9,x:45.4,y:112.4},0).wait(1).to({rotation:-1.9,x:44.7,y:112.1},0).wait(1).to({rotation:-1,x:44.2,y:111.7},0).wait(1).to({rotation:-0.3,x:43.7,y:111.4},0).wait(1).to({regX:64.8,regY:76.5,rotation:0,x:64.9,y:76.5},0).wait(1));

	// end_title.after
	this.instance_3 = new lib.end_titleafter();
	this.instance_3.parent = this;
	this.instance_3.setTransform(160.6,95.5,1,1,0,0,0,95.6,95.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({x:95.6,alpha:1},9,cjs.Ease.get(1)).wait(15));

	// end_title.lockup
	this.instance_4 = new lib.end_titlelockup();
	this.instance_4.parent = this;
	this.instance_4.setTransform(64.8,76.5,1,1,0,0,0,64.8,76.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).wait(1).to({regX:97.5,regY:127.3,rotation:0.5,x:97.1,y:127.6},0).wait(1).to({rotation:1.6,x:96,y:128.3},0).wait(1).to({rotation:3.3,x:94.6,y:129.1},0).wait(1).to({rotation:5,x:93,y:130},0).wait(1).to({rotation:6.5,x:91.5,y:130.7},0).wait(1).to({rotation:7.6,x:90.5,y:131.2},0).wait(1).to({regX:64.8,regY:76.5,rotation:8,x:64.8,y:76.5},0).wait(1).to({regX:97.5,regY:127.3,rotation:7.6,x:90.5,y:131.2,alpha:0.035},0).wait(1).to({rotation:6.4,x:91.6,y:130.7,alpha:0.13},0).wait(1).to({rotation:4.8,x:93.2,y:129.9,alpha:0.268},0).wait(1).to({rotation:2.8,x:95,y:128.9,alpha:0.432},0).wait(1).to({rotation:0.8,x:96.8,y:127.8,alpha:0.601},0).wait(1).to({rotation:-1.1,x:98.5,y:126.7,alpha:0.758},0).wait(1).to({rotation:-2.6,x:99.8,y:125.7,alpha:0.885},0).wait(1).to({rotation:-3.6,x:100.7,y:125.1,alpha:0.97},0).wait(1).to({regX:64.8,regY:76.5,rotation:-4,x:64.8,y:76.5,alpha:1},0).wait(1).to({regX:97.5,regY:127.3,rotation:-3.7,x:100.7,y:125.1},0).wait(1).to({rotation:-2.9,x:100.1,y:125.6},0).wait(1).to({rotation:-1.9,x:99.2,y:126.2},0).wait(1).to({rotation:-1,x:98.4,y:126.8},0).wait(1).to({rotation:-0.3,x:97.8,y:127.1},0).wait(1).to({regX:64.8,regY:76.5,rotation:0,x:64.8,y:76.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.7,-26.6,429,329.9);


(lib.ctaBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AolhjIRLAAIAADHIxLAAg");
	mask.setTransform(55,10);

	// cta_txt
	this.instance = new lib.cta_txt_1();
	this.instance.parent = this;
	this.instance.setTransform(55,-10,1,1,0,0,0,47,5.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-5.4},0).wait(1).to({y:-1},0).wait(1).to({y:2.9},0).wait(1).to({y:5.8},0).wait(1).to({y:7.7},0).wait(1).to({y:8.9},0).wait(1).to({y:9.6},0).wait(1).to({y:9.9},0).wait(1).to({y:10},0).wait(1));

	// cta_txt
	this.instance_1 = new lib.cta_txt_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55,10,1,1,0,0,0,47,5.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:14.5},0).wait(1).to({y:19},0).wait(1).to({y:22.9},0).wait(1).to({y:25.8},0).wait(1).to({y:27.7},0).wait(1).to({y:28.9},0).wait(1).to({y:29.6},0).wait(1).to({y:29.9},0).wait(1).to({y:30},0).wait(1));

	// Layer 1
	this.instance_2 = new lib.cta_bg();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,20);


// stage content:
(lib.LAL_S2_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		// Set root, so that it can be targetted from within mcs
		window.root = this;
		
		
		// CTA BUTTON FUNCTIONALITY
		stage.enableMouseOver();
		
		this.exitBtn.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.exitBtn.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		this.exitBtn.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseOverHandler(){
			this.ctaBtn.play();
		}
		
		
		function fl_MouseOutHandler(){
		}
		
		
		function fl_MouseClickHandler(){
			clickthru();
		}
		
		
		
		// -----------------------------------------------------------------------------
		// DATE CODING
		// -----------------------------------------------------------------------------
		function setTuneIn(){
		
			// DATE CODE SETTINGS
			var currentDate = new Date();
			console.log("\n"+"currentDate: "+currentDate);
		
			// target date 2 - PRMIERE FRIDAY
			var targetMonth2 = 12;
			var targetDay2 = 28;
			var targetDate2 = new Date(2019,targetMonth2 - 1,targetDay2,0,0,0,0);
			console.log("targetDate2: "+targetDate2);
		
			// target date 3 - PRMIERE TOMORROW
			var targetMonth3 = 1;
			var targetDay3 = 2;
			var targetDate3 = new Date(2020,targetMonth3 - 1,targetDay3,0,0,0,0);
			console.log("targetDate3: "+targetDate3);
		
			// target date 4 - PRMIERE TONIGHT
			var targetMonth4 = 1;
			var targetDay4 = 3;
			var targetDate4 = new Date(2020,targetMonth4 - 1,targetDay4,0,0,0,0);
		
			// target date 5 - ALL NEW FRIDAY
			var targetMonth5 = 1;
			var targetDay5 = 4;
			var targetDate5= new Date(2020,targetMonth5 - 1,targetDay5,0,0,0,0);
			
			
			// set tunein src img
			if (currentDate >= targetDate5){
				console.log("targetSet: targetDate5");
				root.tunein_vid.gotoAndStop(4);
			}
			else if (currentDate >= targetDate4){
				console.log("targetSet: targetDate4");
				root.tunein_vid.gotoAndStop(3);
			}
			else if (currentDate >= targetDate3){
				console.log("targetSet: targetDate3");
				root.tunein_vid.gotoAndStop(2);
			}
			else if (currentDate >= targetDate2){
				console.log("targetSet: targetDate2");
				root.tunein_vid.gotoAndStop(1);
			}
		
		}
		
		setTuneIn();
		
		
		// Load Video
		vid_vidLoad();
	}
	this.frame_31 = function() {
		initVideo();
		showWeTV();
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(29).call(this.frame_31).wait(18).call(this.frame_49).wait(1));

	// exitBtn
	this.exitBtn = new lib.hit();
	this.exitBtn.parent = this;
	this.exitBtn.setTransform(150.1,209.6,0.967,0.117,0,0,0,150.1,300.4);
	new cjs.ButtonHelper(this.exitBtn, 0, 1, 2, false, new lib.hit(), 3);

	this.timeline.addTween(cjs.Tween.get(this.exitBtn).wait(50));

	// ctaBtn
	this.ctaBtn = new lib.ctaBtn();
	this.ctaBtn.parent = this;
	this.ctaBtn.setTransform(94.1,266,1,1,0,0,0,55,10);

	this.timeline.addTween(cjs.Tween.get(this.ctaBtn).wait(27).to({y:236},11,cjs.Ease.get(1)).wait(12));

	// tunein_vid
	this.tunein_vid = new lib.tunein_vid();
	this.tunein_vid.parent = this;
	this.tunein_vid.setTransform(150,-125,1,1,0,0,0,150,125);
	this.tunein_vid.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.tunein_vid).wait(20).to({y:125},0).to({alpha:1},11).wait(19));

	// title_mc
	this.instance = new lib.end_title_1("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(241.3,213.3,0.45,0.45,0,0,0,97.9,74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// topFrame
	this.instance_1 = new lib.topFrame_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// video_bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bPoIAA/PMAu3AAAIAAfPg");
	this.shape.setTransform(150,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,-125,316.1,526);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"LAL_S2_300x250_atlas_.png?1576706681411", id:"LAL_S2_300x250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;