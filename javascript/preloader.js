var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.classList.add('hidden');
});

var hidebody = document.getElementById("hidebody");
window.addEventListener("load", function() {
    hidebody.classList.add('hidden');
});

window.addEventListener("load", function() {
    loader.classList.add('hidden');
});

window.addEventListener("load", function() {
    setTimeout(function() {
        hidebody.style.display = "none";
    }, 1000);
});

var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    setTimeout(function() {
        loader.style.display = "none";
    }, 1000);
});