document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    projects.forEach((project, index) => {
        setTimeout(() => {
            project.style.opacity = "1";
            project.style.transform = "translateY(0)";
        }, index * 200);
    });
});

function toggleDescription(element) {
    element.classList.toggle("expanded");
}