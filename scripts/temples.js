
// Get the current year
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

// Get the last modified date
document.querySelector("#lastModified").textContent =
    "Last Modified: " + document.lastModified;

// Hamburger menu functionality
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");

    const isOpen = navigation.classList.contains("show");

    menuButton.textContent = isOpen ? "✖" : "☰";

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});
