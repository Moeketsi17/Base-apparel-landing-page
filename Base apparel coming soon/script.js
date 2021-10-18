
const form = document.getElementById('form');
const email = document.getElementById('email');
const icon = document.getElementById('icon-error');
const text = document.getElementById('text-error');
const btn = document.getElementById('button');
    
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function check() {
    if(email.value.match(pattern)) {
        email.style.borderColor = "hsl(0, 36%, 70%)";
        icon.style.display = "none"
        text.style.display = "none"
    }else {
        email.style.borderColor = "rgb(224, 64, 64)";
        icon.style.display = "block"
        text.style.display = "flex"
    }
}


