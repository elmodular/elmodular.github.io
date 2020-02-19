/* = GENERAL: define vars
-----------------------------------------------------------------------------*/
var gen_overlayPlayBtn		= document.querySelector(".gen_overlayPlayBtn");
var mainClickTag					= document.getElementsByClassName("mainClickTag");

var vid_clickForSoundBtn	= document.querySelector("#vid_clickForSoundBtn");
var vid_overlayPlayBtn		= document.querySelector("#vid_overlayPlayBtn");
var vid_vid								= document.querySelector("#vid_vid");
var vid_vid2							= document.querySelector("#vid_vid2");
var vid_vid3							= document.querySelector("#vid_vid3");
var vid_vid4							= document.querySelector("#vid_vid4");
var vid_vid5							= document.querySelector("#vid_vid5");
var vid_vidLoader					= document.querySelector("#vid_vidLoader");
var vid_resolve						= document.querySelector("#vid_resolve");
var vid_wetvLogo					= document.querySelector("#vid_wetvLogo");

//var end_date							= document.querySelector("#end_date");
var end_replayBtn 				= document.querySelector("#end_replayBtn");
var end_bg								= document.querySelector("#end_bg");


/* = DC enabler
-----------------------------------------------------------------------------*/
// If true, start function. If false, listen for INIT.
window.onload = function() {
	if (Enabler.isInitialized()) {
		enablerInitHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
};

function enablerInitHandler() {
	/* Start ad, initialize animation,load in your image assets, call Enabler methods,
	and/or include other Studio modules. Also, you can start the Polite Load */
	//init();

	// check if the page is loaded
	if (Enabler.isPageLoaded()) {
		loadPoliteAssets();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, loadPoliteAssets);
	}
}

Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START,
						 function() {
	Enabler.finishExpand();
});
Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START,
						 function() {
	Enabler.finishCollapse();
});
Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH,
						 function() {
});

function loadPoliteAssets(){
	initCanvas();
	//document.querySelector("#end_bg").src="end_bg.jpg";
}


/* = GENERAL: Date check
-----------------------------------------------------------------------------*/
// post preview page will have a "?date=2" parameter in the URL and force the banner to display the date2
function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

var urlDate = getURLParameter('date');
console.log("urlDate: "+urlDate);


// postDate (for test envirement only)
var postDate = false;
var currDay;

// calculate which date assets to display
function targetSet(){

	// current date
	var currentDate = new Date();
	console.log("currentDate: "+currentDate);

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
	console.log("targetDate4: "+targetDate4);

	// target date 5 - ALL NEW FRIDAY
	var targetMonth5 = 1;
	var targetDay5 = 4;
	var targetDate5= new Date(2020,targetMonth5 - 1,targetDay5,0,0,0,0);
	console.log("targetDate5: "+targetDate5);

	if (currentDate >= targetDate5 || urlDate === "5"){
		console.log("targetSet: targetDate5");
		// adjust date
		vid_vid = document.querySelector("#vid_vid5");
		//vid_vid.setAttribute('src', "https://gcdn.2mdn.net/videoplayback/id/57a9cc69744ad1a3/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fmp4/acao/yes/ip/0.0.0.0/ipbits/0/expire/3720963159/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/B085C4F1660E890BD02A3285F1B529CB21551134.1FE9E243BC19D77E94C38D0BC4E6A018B7955C05/key/ck2/file/file.mp4");
		//vid_vid	= vid_vid4;
		//end_date.src = "end_date5.png";
	}

	else if (currentDate >= targetDate4 || urlDate === "4"){
		console.log("targetSet: targetDate4");
		// adjust date
		vid_vid = document.querySelector("#vid_vid4");
		//vid_vid.setAttribute('src', "https://gcdn.2mdn.net/videoplayback/id/834f808f3ffdfb24/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fmp4/acao/yes/ip/0.0.0.0/ipbits/0/expire/3720963159/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/1EDB679ADEC0360B78B678B4E7BD637F5E8C8943.493809DFC4FDB7388391C90D30FCA723237BF724/key/ck2/file/file.mp4");
		//vid_vid	= vid_vid4;
		//end_date.src = "end_date4.png";
	}
	else if (currentDate >= targetDate3 || urlDate === "3"){
		console.log("targetSet: targetDate3");
		// adjust date
		vid_vid = document.querySelector("#vid_vid3");
		//vid_vid.setAttribute('src', "https://gcdn.2mdn.net/videoplayback/id/8753b83fb5dcd1f9/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fmp4/acao/yes/ip/0.0.0.0/ipbits/0/expire/3720963159/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/884C040D9821377C65ED846C4AF4697608288F59.782600FB6DCC4461E8128EA829278A388C789D4A/key/ck2/file/file.mp4");
		//vid_vid	= vid_vid3;
		//end_date.src = "end_date3.png";
	}
	else if (currentDate >= targetDate2 || urlDate === "2"){
		console.log("targetSet: targetDate2");
		// adjust date
		vid_vid = document.querySelector("#vid_vid2");
		//vid_vid.setAttribute('src', "https://gcdn.2mdn.net/videoplayback/id/f38b2b26503d8e01/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fmp4/acao/yes/ip/0.0.0.0/ipbits/0/expire/3720963159/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/45D15ED3CF4172CAAFE3D2D19359FA3B5D197294.2E6094CC71D5A429D23563931066166FA6BBDA93/key/ck2/file/file.mp4");
		//vid_vid	= vid_vid2;
		//end_date.src = "end_date2.png";
	}

}

targetSet();


/* = Mobile device
-----------------------------------------------------------------------------*/
var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iPhone: function() {
		return navigator.userAgent.match(/iPhone|iPod/i);
	},
	iPad: function() {
		return navigator.userAgent.match(/iPad/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iPhone() || isMobile.iPad() || isMobile.Opera() || isMobile.Windows());
	}
};

// any mobile
if ( isMobile.any() ) {
	/* iOS video play button already removed via css */

	/* elements in */
	TweenMax.set([".gen_overlayPlayBtn", "#vid_mobileStatic"], {
		display: "inline"});

	/* move elements to the top */
	TweenMax.set(["#vid_overlayPlayBtn", "#vid_vidCont", "vid_vidLoader", "#vid_mobileStatic"], {
		zIndex: 100});
}


/* = END timeline
-----------------------------------------------------------------------------*/
function initCanvas() {
	canvas = document.getElementById("canvas");
	images = images||{};
	ss = ss||{};
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
function handleComplete(evt) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.LAL_S2_300x250();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}

	fnStartAnimation();
}


var end_tl = new TimelineMax({paused:true});

end_tl
	// console log
	.add( function(){ console.log("end_tl start"); } )

	// video in
	.set(vid_vid, {display:"block"}, 0)
	// load video
	//.add( function(){ vid_vidLoad(); }, 0)
	// start video
	.add( function(){ vid_vidStart(); }, 0)

	.from(vid_vid, .75, {alpha:0, ease:Power2.easeOut}, .15)

	// console log
	.add( function(){ console.log("end_tl end (total: "+end_tl.totalDuration()+"s)"); } )
;


/* = General Buttons
-----------------------------------------------------------------------------*/
// ----- mainClickTag buttons -----
/*
for (var iMainTag=0; iMainTag<mainClickTag.length; iMainTag++){
	mainClickTag[iMainTag].addEventListener('click', mainClickTagHandler, false);
	mainClickTag[iMainTag].addEventListener('mouseover', mainClickTagHandler, false);
	mainClickTag[iMainTag].addEventListener('mouseout', mainClickTagHandler, false);
}

// mouse events
function mainClickTagHandler(evt){
	switch (evt.type){
		case 'mouseover' :
			switch (evt.target.id){
				case "end_mainClickTag" :
					break;
			}
			break;

		case 'mouseout' :
			switch (evt.target.id){
				case "end_mainClickTag" :
					break;
			}
			break;

		case 'click':
			console.log("\n"+evt.target.id+" click");
			switch (evt.target.id){
				case "end_mainClickTag" :
					// skip to endpanel (play end timeline)
					skipToEnd(false);
					break;
			}

			// DC event
			Enabler.exit('LILU_S2: Background Exit Click');
	}
}
*/

function clickthru(){
	if(vidPlaying){
		skipToEnd(false);
	}
	Enabler.exit('LILU_S2: Background Exit Click');

}


// skip video and show endpanel (play timeline)
function skipToEnd(playEndTl){
	vidPlaying = false;
	vid_vid.pause();

	if(vid_firstPlay){
		resolveVideo();
		Enabler.stopTimer('LILU_S2: Preview Video Timer');
		vid_vid.removeEventListener('timeupdate', vid_contPlayFunc, false);
	}

}


// ----- END replay button -----
end_replayBtn.addEventListener('click', replayBtnHandler, false);
end_replayBtn.addEventListener('mouseover', replayBtnHandler, false);
end_replayBtn.addEventListener('mouseout', replayBtnHandler, false);

// replay button handler
function replayBtnHandler(evt) {
	switch (evt.type){
		case "mouseover" :
			TweenMax.to(end_replayBtn, .6, {alpha:1});
			break;

		case "mouseout" :
			TweenMax.to(end_replayBtn, .6, {alpha:.69});
			break;

		case "click" :
			// DC events
			if(vid_replay){
				Enabler.counter('LILU_S2: User Video Replayed', true);
			}

			end_replayBtn.style.display ='none';

			TweenMax.to(vid_resolve, .6, {alpha:0, ease:Power1.easeOut });
			TweenMax.set(vid_resolve, {delay: .6, display:"none"});

			// load video
			vid_vidLoad();

			// start video
			vid_vidStart();

			break;
	}
}



/* = VIDEO player
-----------------------------------------------------------------------------*/
// continue to endpanel before video is over (not for mobile)
if (!isMobile.any()) {
	var vid_contPlay = false;
}
var vid_contPlayTime = 15;

// use "click for Sound" button (otherwise it only has the standard video nav)
var vid_clickForSound = true;

// first time it plays
var vid_firstPlay = true;

var vid_replay = false;

var vidPlaying = false;

// addEventListener
vid_clickForSoundBtn.addEventListener('click', vid_unmuteHandler, false);
vid_vid.addEventListener('ended', vid_vidEndHandler, false);


// DC video module
Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
	studio.video.Reporter.attach('Video 1', vid_vid);
});


// load video
function vid_vidLoad() {
	//TweenMax.set(vid_vid, {display:"block"});
	vid_vid.load();
}


// start video
function vid_vidStart(){
	console.log(vid_firstPlay);
	TweenMax.set(vid_vid, {display:"block"});

	if (!vid_firstPlay) {
		TweenMax.set(vid_overlayPlayBtn, {display: "none"});
		TweenMax.set(vid_clickForSoundBtn, {display: "none"});
	}

	// play video
	//vid_vid.currentTime = 28; // For Testing
	vid_vid.play();
	vidPlaying = true;


	// DC events
	if (vid_firstPlay) {
		vid_vid.controls = false;
		vid_vid.muted = true;

		Enabler.counter('LILU_S2: Preview Video Started', false);
		Enabler.startTimer('LILU_S2: Preview Video Timer');
	}else{
		vid_vid.controls = true;
		// Hide Fullscreen
		vid_vid.controlsList = "nofullscreen nodownload";
		vid_vid.muted = false;

		vid_vid.addEventListener('pause', vid_vidPlayPauseHandler, false);
		vid_vid.addEventListener('play', vid_vidPlayPauseHandler, false);

		Enabler.counter('LILU_S2: User Video Started', false);
		Enabler.startTimer('LILU_S2: User Video Timer');
	}

	// start preloader
	vid_preLoader();

	// add event listener for continue to endpanel function
	if (vid_contPlay) {
		vid_vid.addEventListener('timeupdate', vid_contPlayFunc, false);
	}
}

// preLoader
function vid_preLoader() {

	if (vid_vid.readyState === 1) {
		// 1 = HAVE_METADATA - metadata for the audio/video is ready
		console.log("vid_vid.readyState === 1");

		// loader in
		TweenMax.set(vid_vidLoader, {display: "inline"});
	}

	if (vid_vid.readyState === 4) {
		//4 = HAVE_ENOUGH_DATA - enough data available to start playing
		console.log("vid_vid.readyState === 4");

		// loader out
		TweenMax.set(vid_vidLoader, {display: "none"});

		// if "vid_clickForSound" is true
		if (vid_clickForSound && !isMobile.any()) {
			// button in/out
			TweenMax.set(vid_clickForSoundBtn, {display: "inline"});
		}

		// if iPhone
		if(isMobile.iPhone() ) {
			// overlayPlayBtn in
			TweenMax.set(vid_overlayPlayBtn, {delay:.1, display: "inline"});
		}
	} else {
		// run preLoader again
		setTimeout(vid_preLoader, 100);
	}
}


// play/pause video - stop/start View Timer
function vid_vidPlayPauseHandler(){
	console.log("*" + vid_vid.paused)

	if(!vid_firstPlay){
		if(!vid_vid.paused){
				vidPlaying = true;
				Enabler.startTimer('LILU_S2: User Video Timer');
		}else{
				vidPlaying = false;
				Enabler.stopTimer('LILU_S2: User Video Timer');
		}
	}

}


// unmute button handler
function vid_unmuteHandler(evt) {
	console.log("\n"+evt.target.id+" click");

	// DC events
	Enabler.counter('LILU_S2: Click For Sound', false);

	// PREVIEW VIDEO END
	vid_vid.removeEventListener('timeupdate', vid_contPlayFunc, false);
	Enabler.stopTimer('LILU_S2: Preview Video Timer');

	// rewind video
	vid_vid.currentTime = 0;

	// set to false
	vid_firstPlay = false;
	vid_contPlay = false;
	vid_clickForSound = false;

	// button in/out
	TweenMax.set(vid_clickForSoundBtn, {display:"none"});

	// play video
	vid_vidStart();
}


// video ended handler
function vid_vidEndHandler() {
	console.log("vid_vid end (current: "+vid_vid.currentTime+"s / total: "+vid_vid.duration+"s)");
	vidPlaying = false;

	if(vid_firstPlay){
		// DC events
		Enabler.counter('LILU_S2: Preview Video Completed', false);
		Enabler.stopTimer('LILU_S2: Preview Video Timer');
	}else{
		// DC events
		Enabler.counter('LILU_S2: User Video Completed', true);
		Enabler.stopTimer('LILU_S2: User Video Timer');
		vid_replay = true;
	}

	// exit full-screen
	if (vid_vid.exitFullscreen) {
		vid_vid.exitFullscreen();
	} else if (vid_vid.webkitExitFullscreen) {
		vid_vid.webkitExitFullscreen();
	} else if (vid_vid.mozCancelFullScreen) {
		vid_vid.mozCancelFullScreen();
	} else if (vid_vid.msExitFullscreen) {
		vid_vid.msExitFullscreen();
	}

	resolveVideo();
}

function resolveVideo(){
	TweenMax.to(vid_resolve, .6, {delay:.15, alpha:1, ease:Power1.easeOut });

	vid_contPlay = false;
	vid_clickForSound = false;
	vid_firstPlay = false;

	// Video End settings anim
	vid_clickForSoundBtn.style.display = 'none';
	end_replayBtn.style.opacity = 0;
	end_replayBtn.style.display = 'block';
	vid_resolve.style.opacity = 0;
	vid_resolve.style.display = 'block';

	TweenMax.to(end_replayBtn, .6, {delay:.3, alpha:.69, ease:Power1.easeOut });
}

// Stop Preview Video
function vid_contPlayFunc() {

	if (vid_vid.currentTime >= vid_contPlayTime) {
		console.log("vid_contPlayTime reached: " + vid_contPlayTime);
		vid_vid.removeEventListener('timeupdate', vid_contPlayFunc, false);

		// DC events
		Enabler.counter('LILU_S2: Preview Video Completed', false);

		vid_vid.pause();
		Enabler.stopTimer('LILU_S2: Preview Video Timer');

		// Resolve Preview Video
		resolveVideo();
	}

}

function showWeTV(){
	vid_wetvLogo.style.display = 'block';
}


/* = Start Banner
-----------------------------------------------------------------------------*/
function initVideo() {
	console.log("initVideo");
	end_tl.restart();
}
