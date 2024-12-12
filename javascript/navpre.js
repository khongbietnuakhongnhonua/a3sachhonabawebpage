function addVersionToURL(url) {
    const version = new Date().getTime();
    return url + '?v=' + version;
}

document.addEventListener('DOMContentLoaded', function() {
    fetch(addVersionToURL('/navbar.html'))
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            const script = document.createElement('script');
            script.src = addVersionToURL('/javascript/navbar.js');
            document.body.appendChild(script);
        })
        .catch(error => {
        });
});
