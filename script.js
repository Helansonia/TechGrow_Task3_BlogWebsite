// Dark Mode Toggle Script
const darkModeToggle = document.getElementById("darkModeToggle");

// Check for stored preference
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Toggle Dark Mode on button click
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Store user preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
});
