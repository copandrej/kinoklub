function anime() {
	document.getElementById("sprememba").classList.toggle("spremenia");
	document.getElementById("spremembaa").classList.toggle("spremeni");
	document.getElementById("spremembaaa").classList.toggle("spremeniaa");
	document.getElementById("mobile-meni").classList.toggle("display-none");
	document.querySelector("html").classList.toggle("fixed-position");


}

function discMore() {
	const arr = document.getElementsByClassName("disc-more");
	/*loop over arr*/
	for (let i = 0; i < arr.length; i++) {
		arr[i].classList.toggle("display-none");
	}

	document.querySelector(".discover").classList.toggle("display-none");
}