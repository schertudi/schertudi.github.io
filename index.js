var mainImg = document.getElementById("gallery-image");
var mainVid = document.getElementById("gallery-video");
var prevBtn = document.getElementById("gallery-btn-left");
var nextBtn = document.getElementById("gallery-btn-right");
var isVideoSetup = false;
//mainVid.classList.add("inactive");

var index = 0;


function setMain(i) {
    thumbnails[index].classList.remove("highlighted");

    index = i;
    if (index >= thumbnails.length) {
        index = 0;
    }
    if (index < 0) {
        index = thumbnails.length - 1;
    }

    thumbnails[index].classList.add("highlighted");
    let imageName = thumbnails[index].getAttribute("src");
    let vidName = thumbnails[index].getAttribute("vid");

    if (!vidName) {
        mainImg.classList.remove("inactive");
        mainVid.classList.add("inactive");
        mainImg.setAttribute("src", imageName);
        
    } else {
        mainVid.classList.remove("inactive");
        mainImg.classList.add("inactive");

        if (!isVideoSetup) {
            mainVid.setAttribute("src", vidName);
        }
        //isVideoSetup = true;
    }
    
}

function changeIndex(rel) {

    setMain(index + rel);
}

var thumbnails = document.getElementsByClassName("gallery-thumbnail");

for (let i = 0; i < thumbnails.length; i++) {
    
    thumbnails[i].addEventListener("click", function() {
        setMain(i);
    })
}

prevBtn.addEventListener("click", function() {
    changeIndex(-1);
});

nextBtn.addEventListener("click", function() {
    changeIndex(1);
});