
///SCROLL STYLE

var prevScroll = document.documentElement.scrollTop;

window.onscroll = function() {showMenu()};

function showMenu() {
    if (screen.width > 900 ) {
        var actualScroll = document.documentElement.scrollTop;
        var navigation = document.querySelector("div.navigation");
    
        if(prevScroll > actualScroll) {
            document.getElementsByClassName("navigation")[0].style.top = "0";
        }
        else {
            document.getElementsByClassName("navigation")[0].style.top = "-15rem";
            navigation.classList.toggle("navigation__scroll", prevScroll<actualScroll)
        }
        if(actualScroll<850) {
            navigation.classList.remove("navigation__scroll")
        }
    
        prevScroll = actualScroll;
    }

}




///FUNCTIONS LIGTBOX

var forImgGallery = [];
var numImg = 0;


function choosedImg() {

    var imgGallery = document.getElementsByClassName("gallery__img");

    for (var i=0; i<imgGallery.length; i++) {
        forImgGallery.push(imgGallery[i].src);
    }

    for (var i=0; i<imgGallery.length; i++) {
        imgGallery[i].addEventListener('click', openLightbox);
    }

    function openLightbox() {
        var selectedImg = event.currentTarget.src;
        console.log(selectedImg);

        document.getElementsByClassName("lightbox__shape")[0].innerHTML = "<img class='lightbox__shape__img' src=" + forImgGallery[numImg]+">";
        document.getElementsByClassName("lightbox")[0].style.display = "block";
        document.documentElement.style.overflow = "hidden";

        closeLightbox();
    }

    function closeLightbox() {
        window.addEventListener("click", function(event) {
            if (!event.target.matches(".lightbox__shape__img") && !event.target.matches(".gallery__img") && !event.target.matches(".lightbox__icon")) {
                document.getElementsByClassName("lightbox")[0].style.display = "none";
                document.documentElement.style.overflow = "auto";
            }
        });
    }
}

function nextImgGallery() {
    numImg++;
    if (numImg == forImgGallery.length) {
        numImg = 0;
    }
    document.getElementsByClassName("lightbox__shape")[0].innerHTML = "<img class='lightbox__shape__img' src=" + forImgGallery[numImg]+">";
}

function previousImgGallery() {
    numImg--;
    if (numImg < 0) {
        numImg = forImgGallery.length-1;
    }
    document.getElementsByClassName("lightbox__shape")[0].innerHTML = "<img class='lightbox__shape__img' src=" + forImgGallery[numImg]+">";
    console.log(numImg);
}


///SELECT TARIFAS

function selectedTab(evt, selectedContainer) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");

    for(i=0; i<tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("flex__heading-tertionary");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("flex__heading-tertionary-active", "");
    }

    document.getElementById(selectedContainer).style.display = "block";

    evt.currentTarget.className += " flex__heading-tertionary-active";
}


///OPEN ALERTBOX CONFIRM FORM

function boxConfirm() {
    window.alert("Formulario Enviado")
}