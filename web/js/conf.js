window.addEventListener('load', (event) => {
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const cat = urlParams.get('cat')

    const arr = document.getElementsByClassName("conf-meni-item");
    const ap = document.getElementsByClassName("conf-meni-option");



    for (let i = 0; i < arr.length; i++) {

        arr[i].classList.remove("active");
        ap[i].removeAttribute("selected");
        console.log(arr[i].getAttribute("value"));
        if ((cat == '' || cat == null) && arr[i].getAttribute("value") == 'ALL' || cat == arr[i].getAttribute("value")) {
            arr[i].classList.add("active");
            ap[i].setAttribute("selected", "selected");

        }


    }

});
//same functions as in script.js for loading purposes here repeated
function anime() {
    document.getElementById("sprememba").classList.toggle("spremenia");
    document.getElementById("spremembaa").classList.toggle("spremeni");
    document.getElementById("spremembaaa").classList.toggle("spremeniaa");
    document.getElementById("mobile-meni").classList.toggle("display-none");

    document.querySelector("html").classList.toggle("fixed-position");
}

/*Discover more function for events. This is to be adjusted when dynamic content from server. This is placeholder for now*/
let global = 4;
function discMore() {
    let count = 0;

    const arr = document.getElementsByClassName("disc-more");

    /*loop over arr*/
    for (let i = global-4; i < arr.length; i++) {
        if(i > global) {
            global += 5;
            return;
        }
        count++;

        arr[i].classList.toggle("displayNone");
    }

    document.querySelector(".discover").classList.toggle("displayNone");
}
