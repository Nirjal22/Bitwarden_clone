let isRotated = {
    rotation: false,
    rotation1: false
};

function myFunction(event) {
    var dropdown = document.getElementById("dropDivMain");
    var dropdown1 = document.getElementById("dropDiv");

    // Toggle visibility of dropdowns
    dropdown.classList.toggle("show");
    dropdown1.classList.toggle("show");
    
    // Determine if the click was on a span or its parent div
    let targetSpan;
    
    if (event.target.id === 'rotation' || event.target.id === 'rotation1') {
        targetSpan = event.target;
    } else if (event.target.closest('.bulk')) {
        targetSpan = document.getElementById('rotation');
    } else if (event.target.closest('.bulk1')) {
        targetSpan = document.getElementById('rotation1');
    }

    // Rotate the target span if found
    if (targetSpan) {
        if (isRotated[targetSpan.id]) {
            targetSpan.style.transform = 'rotate(0deg)';
        } else {
            targetSpan.style.transform = 'rotate(180deg)';
        }
        isRotated[targetSpan.id] = !isRotated[targetSpan.id];
    }
}

window.onclick = function (e) {
    var dropdown = document.getElementById("dropDivMain");
    var dropdown1 = document.getElementById("dropDiv");

    // Close dropdowns if clicked outside
    if (!e.target.matches('.bulk') && !e.target.closest('#navNames')) {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }

    if (!e.target.matches('.bulk1') && !e.target.closest('#navResource')) {
        if (dropdown1.classList.contains('show')) {
            dropdown1.classList.remove('show');
        }
    }
};
