var square = document.querySelectorAll(".square");
var body = document.getElementsByTagName("body")[0];

// var closeBtn = document.getElementById("close");

// closeBtn.addEventListener("click", function(e){
//     e.preventDefault;
//     modal.classList.remove("open");
// })

/*
for (i=0; i<square.length; i++) {
    square[i].addEventListener("click", function(e){
        e.preventDefault;
        modal.style.top = "0px";
        modal.style.left = "0px";
        modal.classList.add("open");

        // var modalContainer = modal.getElementsByClassName("modal-inner")[0];
        // var titleContent = e.target.previousElementSibling.innerHTML
        // var content = e.target.nextElementSibling.innerHTML;
        // modalContainer.innerHTML = "<h2>"+titleContent+"</h2>" + content;
    })
}*/

function createModals(elem) {
    var elemLenght = elem.length;
    for (i=0; i<elemLenght; i++) {
        var modal = document.createElement("div");
        modal.classList.add("modal");
        body.appendChild(modal);
        modal.style.top = elem[i].offsetTop+"px";
        modal.style.left = elem[i].offsetLeft+"px";
    }
    var modals = document.getElementsByClassName("modal");
    return modals
}

var mod = createModals(square);

function appendClickListener(elem) {

    for (i=0; i<elem.length; i++) {
        elem[i].addEventListener("click", function(e){

            e.preventDefault;
            // mod[i].style.top = "0px";
            // mod[i].style.left = "0px";
            var modal = document.getElementsByClassName("modal")[i];
            modal.classList.add("open");
            console.log("ok");
        })
    }    
}

appendClickListener(square);