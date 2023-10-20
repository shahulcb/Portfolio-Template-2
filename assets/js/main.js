let navbarBtn = document.getElementById("navbar-btn")

navbarBtn.addEventListener('click', () => {
    document.getElementById("side-navbar").style.display = 'flex';
    document.body.classList.add("remove-scroll")
    addWrapDiv();
})


function createWrapDiv() {
    var wrapDiv = document.createElement("div");
    wrapDiv.classList.add("side-navbar-wrap");
    wrapDiv.setAttribute("id", "sidenav-wrap")
    return wrapDiv;
}

function addWrapDiv() {
    var existingDiv = document.getElementById("side-navbar");
    if (existingDiv) {
        var wrapDiv = createWrapDiv();
        wrapDiv.appendChild(existingDiv.cloneNode(true));
        existingDiv.parentNode.replaceChild(wrapDiv, existingDiv);
    }
}

document.addEventListener("click", function (event) {
    var clickedElement = event.target;
    var wrapDiv = document.querySelector(".side-navbar-wrap");
    if (clickedElement === wrapDiv) {
        if (wrapDiv) {
            while (wrapDiv.firstChild) {
                wrapDiv.parentNode.insertBefore(wrapDiv.firstChild, wrapDiv);
            }
            wrapDiv.parentNode.removeChild(wrapDiv);
        }
        document.body.classList.remove("remove-scroll")
        document.getElementById("side-navbar").style.display = "none"
    }
});



window.addEventListener('resize', () => {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var wrapDiv = document.querySelector(".side-navbar-wrap");
    if (screenWidth > 809) {
        if (wrapDiv) {
            while (wrapDiv.firstChild) {
                wrapDiv.parentNode.insertBefore(wrapDiv.firstChild, wrapDiv);
            }
            wrapDiv.parentNode.removeChild(wrapDiv);
        }
        document.body.classList.remove("remove-scroll")
        document.getElementById("side-navbar").style.display = "flex"
    } else {
        document.getElementById("side-navbar").style.display = "none"
        // document.body.classList.remove("remove-scroll")
    }

})