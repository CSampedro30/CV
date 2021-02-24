var toggle = true;

function changeColor() {
    var rows = document.getElementsByClassName("div");
    for (var i = 0; i < rows.length; i += 1) {
        rows[i].style = "background-color: #ff0000";
    }
    var j = 0;
    if (toggle) {
        j = 1;
    }
    toggle = !toggle;
    for (var i = j; i < rows.length; i += 2) {
        rows[i].style = "background-color: #00ff00";
    }
}
