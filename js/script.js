var square = document.querySelectorAll(".square a");

var closeBtn = document.getElementById("close");

var modal = document.getElementById("modal");

closeBtn.addEventListener("click", function(e){
    e.preventDefault;
    modal.classList.remove("open");
})

for (i=0; i<square.length; i++) {
    square[i].addEventListener("click", function(e){
        e.preventDefault;
        modal.classList.add("open");
    })
}