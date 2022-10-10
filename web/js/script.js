/*hamburger bar from libandrej + scrolling fix when menu opened*/
function anime() {
	document.getElementById("sprememba").classList.toggle("spremenia");
	document.getElementById("spremembaa").classList.toggle("spremeni");
	document.getElementById("spremembaaa").classList.toggle("spremeniaa");
	document.getElementById("mobile-meni").classList.toggle("display-none");

	document.querySelector("html").classList.toggle("fixed-position");
}

/*Discover more function for events. This is to be adjusted when dynamic content from server. This is placeholder for now*/
function discMore() {
	const arr = document.getElementsByClassName("disc-more");

	/*loop over arr*/
	for (let i = 0; i < arr.length; i++)
		arr[i].classList.toggle("displayNone");

	document.querySelector(".discover").classList.toggle("displayNone");
}
