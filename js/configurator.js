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
		arr[i].classList.toggle("displayNone");
	}
	maxStevilo += 5;
	configurator('ALL');
	document.querySelector(".discover").classList.toggle("displayNone");
}

let maxStevilo = 5;
let globalStevec = 0;
function configurator(cat = 'ALL') {

    const arr = document.getElementsByClassName("conf-meni-item");
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove("active");
        if (arr[i].innerText == cat)
            arr[i].classList.add("active");
    }

    globalStevec = 0;
    let stevec = -1;
    const contentContainer = $("#configurator");
    contentContainer.html("");

    /* loop over noteCards arr*/
    for (i = 0; i < noteCards.length && globalStevec < maxStevilo; i++) {
        if (noteCards[i].category != cat && cat != 'ALL') {
            continue;
        }
        stevec++;
        globalStevec++;
        let string = "";
        if (stevec % 2 == 0) {
            string = `<div class="row">
			<div class="col-xl-8">
					<span class="category mobile-display">${noteCards[i].category}</span>

					<img class="note-img" src="${noteCards[i].image}">
				</div>
				<div class="col-xl-4 title">
					<span class="category desktop-display">${noteCards[i].category}</span>
					<h3 class="title">
					${noteCards[i].title}
					</h3>
					<a class="notes-link" href="${noteCards[i].subpage}"><img src="img/Vectorvec.svg">READ MORE</a>
				</div>
			</div>
				`;
        }
        else {
            string = `<div class="row reverse">
            <div class="col-xl-4 title">
                <span class="category desktop-display">${noteCards[i].category}</span>
                <h3 class="title">
				${noteCards[i].title}
                </h3>
                <a class="notes-link" href="${noteCards[i].subpage}"><img src="img/Vectorvec.svg">READ MORE</a>
            </div>
            <div class="col-xl-8">
					<span class="category mobile-display">${noteCards[i].category}</span>

                <img class="note-img" style="float: right" src="${noteCards[i].image}">
            </div>
        </div>`;
        }
        contentContainer.append(string);
    }

    /*TODO check if discover more is needed and if it is needed, add it*/
}


/**
 * colect from api
 */
const noteCards =
    [{
        title: "A story about a cinema bakery, right in the heart of Barcelona",
        category: "NOTES AND STORIES",
        image: "img/Rectangle 24.png",
        subpage: "normal.html"
    },
    {
        title: "A story about a cinema bakery, right in the heart of Barcelona",
        category: "NOTES AND STORIES",
        image: "img/Rectangle 39.png",
        subpage: "normal.html"
    },
    {
        title: "A story about a cinema bakery, right in the heart of Barcelona",
        category: "PODCASTS",
        image: "img/Rectangle 24.png",
        subpage: "normal.html"
    },
    {
        title: "A story about a cinema bakery, right in the heart of Barcelona",
        category: "PODCASTS",
        image: "img/Rectangle 39.png",
        subpage: "normal.html"
    },
    {
        title: "A story about a cinema bakery, right in the heart of Barcelona",
        category: "PODCASTS",
        image: "img/Rectangle 24.png",
        subpage: "normal.html"
    },
    {
        title: "A story about a cinema bakery, right in the heart of Barcelona",
        category: "ARTICLES",
        image: "img/Rectangle 39.png",
        subpage: "normal.html"
    },
    {
        title: "A story about a cinema bakery, right in the heart of Barcelona",
        category: "ARTICLES",
        image: "img/Rectangle 24.png",
        subpage: "normal.html"
    },];
/*When window loads run configurator()*/
window.addEventListener('load', (event) => {
    configurator();
});

function myFunction() {
    var x = document.getElementById("mySelect").value;
    configurator(x);
}