// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const contents = document.querySelectorAll(".content");
    const menu = document.querySelector(".menu");
    const menuContainer = document.querySelector(".menu-container");

    menuItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Hide all menu items except the selected one
            menuItems.forEach(el => {
                if (el !== item) {
                    el.classList.add("menu-hidden");
                }
            });

            // Hide all content sections
            contents.forEach(content => {
                content.classList.remove("active");
            });

            // Show the clicked item's content
            const contentId = item.id + "Content";
            document.getElementById(contentId).classList.add("active");

            // Move the clicked menu item to the top center
            item.style.top = "10%";
            item.style.left = "50%";
            item.style.transform = "translate(-50%, -50%)";

            // Make the whole container clickable to return to the menu
            menuContainer.classList.add("container-clickable");
        });
    });

    // Add event listener to the container for returning to the main menu
    menuContainer.addEventListener("click", (event) => {
        // Check if we're in a state where we want to return to the main menu
        if (menuContainer.classList.contains("container-clickable")) {
            // Show all menu items
            menuItems.forEach(el => {
                el.classList.remove("menu-hidden");
                // Reset the positioning
                const originalPosition = el.id;
                switch (originalPosition) {
                    case "aboutMe":
                        el.style.top = "20%";
                        el.style.left = "30%";
                        break;
                    case "myWork":
                        el.style.top = "20%";
                        el.style.left = "70%";
                        break;
                    case "contact":
                        el.style.top = "60%";
                        el.style.left = "50%";
                        break;
                }
            });

            // Hide all content sections
            contents.forEach(content => {
                content.classList.remove("active");
            });

            // Remove the container-clickable class
            menuContainer.classList.remove("container-clickable");
        }
    });
});
