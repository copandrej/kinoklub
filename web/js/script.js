/*hamburger bar from libandrej + scrolling fix when menu opened*/
function anime() {
    document.getElementById("sprememba").classList.toggle("spremenia");
    document.getElementById("spremembaa").classList.toggle("spremeni");
    document.getElementById("spremembaaa").classList.toggle("spremeniaa");
    document.getElementById("mobile-meni").classList.toggle("display-none");

    document.querySelector("html").classList.toggle("fixed-position");
}

/*Discover more for events*/
let global = 5;
function discMore() {
    let count = 0;

    const arr = document.getElementsByClassName("disc-more");

    /*loop over arr*/
    for (let i = global - 5; i < arr.length; i++) {
        if (i > global) {
            global += 6;
            return;
        }
        count++;

        arr[i].classList.toggle("displayNone");
    }

    document.querySelector(".discover").classList.toggle("displayNone");
}




//adjusted from: https://coolcssanimation.com/element-fade-out-on-scroll/
//gets scroll info and adjusts opacity of logo, navbar and hamburger bar acordingly

/*event listeners for scroll and fix for menu reappearing on refresh*/
window.addEventListener('scroll', scrollHandler);
window.addEventListener('load', scrollHandler);

/*mid function*/
function scrollHandler() {
    fadeOutOnScroll(header);
}

const header = document.getElementById('fade-out');
const knof = document.getElementById('knof');
let disp = true;

function fadeOutOnScroll(element) {
    if (!element) {
        return;
    }

    let opacity = 1;
    opacity = 1 - Math.max(window.pageYOffset - 300, 0) / 300;

    if (!disp) {
        element.style.visibility = 'visible';
        knof.style.visibility = 'visible';
        disp = false;
    }

    if (opacity >= 0) {
        element.style.opacity = opacity;
        knof.style.opacity = opacity;

    } else {
        element.style.opacity = 0;
        knof.style.opacity = 0;

        element.style.visibility = 'hidden';
        knof.style.visibility = 'hidden';
        disp = false;
    }
}




// configurator (only needs to listen on one page, bloat?)
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

/*Discover more function for notes. This is to be adjusted when dynamic content from server. This is placeholder for now*/
let global1 = 4;
function discMore1() {
    let count = 0;

    const arr = document.getElementsByClassName("disc-more");

    /*loop over arr*/
    for (let i = global1 - 4; i < arr.length; i++) {
        if (i > global1) {
            global1 += 5;
            return;
        }
        count++;

        arr[i].classList.toggle("displayNone");
    }

    document.querySelector(".discover").classList.toggle("displayNone");
}
