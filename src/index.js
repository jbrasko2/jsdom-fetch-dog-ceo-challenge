console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    loadImages();
});

function loadImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => {
        json.message.forEach(image => addImage(image))
    });
}

function addImage(image) {
    let container = document.getElementById('dog-image-container')
    let newImageEl = document.createElement('img')
    newImageEl.src = image
    container.appendChild(newImageEl)
}