var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = "100%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

var currentSpeed = 1;

document.querySelector("#slower").addEventListener("click", function() {
	currentSpeed = currentSpeed * 0.9;
	video.playbackRate = currentSpeed;
	console.log(`playback speed = ${currentSpeed}`);
});

document.querySelector("#faster").addEventListener("click", function() {
	currentSpeed = currentSpeed * 10 / 9;
	video.playbackRate = currentSpeed;
	console.log(`playback speed = ${currentSpeed}`);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime <= 57) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
	console.log(`current location = ${video.currentTime}`);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	let currentVolume = document.querySelector("#slider").value / 100;
	video.volume = currentVolume;
	document.querySelector("#volume").innerHTML = `${currentVolume * 100}%`;
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});