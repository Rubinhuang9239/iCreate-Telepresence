// identity.js
//I am mobile

var identity = {
	device : "web",
	role : "control2",
	target : "frontCam",
	video : true,
	audio : false
}


window.addEventListener("load",function(){
	animate.init();
	setTimeout(
		function(){
			identity.replacePeerId();
		},1000);
});

identity.replacePeerId = function(){

	var callerIdEntry = document.querySelector('#caller-id');
	callerIdEntry.value = identity.role;

	var recipientIdEntry = document.querySelector('#recipient-id');
	recipientIdEntry.value = identity.target;

	webConsole.logMessage("Peer","-----------------------");
	webConsole.logMessage("Peer","My ID: " + identity.role);
	webConsole.logMessage("Peer","Roomba ID: " + identity.target);
	webConsole.logMessage("Peer","Peer ID auto input:");
	webConsole.logMessage("Peer","-----------------------");


	setTimeout(function(){
		document.getElementById('connect').click();
		setTimeout(function(){
			document.getElementById('dial').click();
	//animate.changeDropDownStatus();
	drag.init();
	mediaPlayer.initUI();
},400);
	},800);


}