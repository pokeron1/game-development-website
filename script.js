function SwitchPage(page){
	//var overlay = document.body.get();
	//overlay.className += "nav-clicked";
	console.log("Started switching")
	document.body.className += "navClicked";
	setTimeout(function(){
		location.href = page;
	}, 1000);
}
