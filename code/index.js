function myFunction() {
    var dropdown = document.getElementById("dropDivMain");
    dropdown.classList.toggle("show");
    // var elementToRotate = document.getElementById("rotation");
    // elementToRotate.classList.toggle("rotated90");
    var dropdown1 = document.getElementById("dropDiv");
    dropdown1.classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn') && !e.target.closest('#dropDivMain')) {
        var dropdown = document.getElementById("dropDivMain");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
    if (!e.target.matches('.dropbtn1') && !e.target.closest('#dropDiv')) {
        var dropdown1 = document.getElementById("dropDiv");
        if (dropdown1.classList.contains('show')) {
            dropdown1.classList.remove('show');
        }
    }
};
