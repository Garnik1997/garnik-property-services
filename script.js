function contact() {
    alert("Спасибо за обращение! Мы свяжемся с вами в ближайшее время.");
}
const elements = document.querySelectorAll("section");

elements.forEach(section => {
    section.classList.add("hidden");
});

window.addEventListener("scroll", () => {
    elements.forEach(section => {
        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});