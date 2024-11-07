var togglebtnEl = document.getElementById("toggle-skills");
var skillsEl = document.getElementById("skill");
togglebtnEl.addEventListener("click", function () {
    if (skillsEl.style.display === 'none') {
        skillsEl.style.display = 'block';
    }
    else {
        skillsEl.style.display = 'none';
    }
});
