var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        // this.classList.toggle("rotate");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// var arr = document.getElementsByClassName("arr");
// var j;

// for (j = 0; j < acc.length; j++) {
//     acc[j].addEventListener("click", function () {
//         // this.classList.toggle("active");
//         arr.classList.toggle("rotate");
//     });
// }


// var accordions = document.querySelectorAll(".accordion");
// var arr = document.querySelectorAll(".arr");

// function toggleRot() {
//     // arr.classList.toggle("rotate")
//     arr.forEach(ar => ar.classList.toggle("rotate"));
//     console.log(this);
// }

// accordions.forEach(accordion => accordion.addEventListener('click', toggleRot));