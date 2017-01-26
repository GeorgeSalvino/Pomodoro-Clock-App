function playSound(url) {
    var a = new Audio(url);
    a.play();
}

var success = "http://www.soundjig.com/pages/soundfx/beeps.php?mp3=beep21.mp3"

function breakTime(){
	var breakTimer =  $(".break-timer").text()
	var sectionTimer = $(".section-timer").text()
	$(".break-or-not").text("BREAK TIME!")
	$(".current-timer").text(breakTimer)
	var time = breakTimer;
	function timeoutBreak() {
	    setTimeout(function () {
	        if($(".current-timer").text()!=0){
	        	time--;
	        	$(".current-timer").text(time)
	        	timeoutBreak();
	        }
	    }, 1000);
	    if($(".current-timer").text()==0){
	    	playSound(success);
	    	clearTimeout();
	    }
	}
	timeoutBreak();
	$(".break-or-not").text("Current-section")
}

$("#start").on("click",function(){
	$(".current-timer").text($(".section-timer").text())
	var time = $(".current-timer").text();
	function timeout() {
		if($(".current-timer").text()==0){
	    	playSound(success);
	    	clearTimeout();
	    	breakTime();
	    	return;
	    }
	    setTimeout(function () {
	        if($(".current-timer").text()!=0){
	        	time--;
	        	$(".current-timer").text(time)
	        	timeout();
	        }
	    }, 1000);
	}
	timeout();
	$(".current-timer").text($(".section-timer").text())
	return
});


$("#plus-break").on("click",function(){
	var plusOne = eval($(".break-timer").text())
	$(".break-timer").text(plusOne + 1)
})

$("#minus-break").on("click",function(){
	var minusOne = eval($(".break-timer").text())
	$(".break-timer").text(minusOne - 1)
})

$("#plus-section").on("click",function(){
	var plusOne = eval($(".section-timer").text())
	$(".section-timer").text(plusOne + 1)
	$(".current-timer").text($(".section-timer").text())
})

$("#minus-section").on("click",function(){
	var minusOne = eval($(".section-timer").text())
	$(".section-timer").text(minusOne - 1)
	$(".current-timer").text($(".section-timer").text())
})

$("#reset").on("click",function(){
	$(".section-timer").text(25);
	$(".break-timer").text(5)
	$(".current-timer").text(25);
	throw new Error('This is not an error. This is just to abort javascript');
})