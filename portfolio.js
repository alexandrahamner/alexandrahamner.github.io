/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Custom Cursor

let mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

