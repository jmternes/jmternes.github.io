function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

document.querySelector('.my-work').addEventListener('click', function() {
    document.querySelector('.body-content').style.display = 'none';
    document.querySelector('.work-content').style.display = 'flex';
});
