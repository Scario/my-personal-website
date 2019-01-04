var square = document.querySelectorAll(".square-back");

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
        var modalContainer = modal.getElementsByClassName("modal-inner")[0];
        var titleContent = e.target.previousElementSibling.innerHTML
        var content = e.target.nextElementSibling.innerHTML;
        modalContainer.innerHTML = "<h2>"+titleContent+"</h2>" + content;
    })
}