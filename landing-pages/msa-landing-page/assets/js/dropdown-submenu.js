document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (dropdown) {
        const toggle = dropdown.querySelector(".dropdown-toggle");
        const menu = dropdown.querySelector(".dropdown-menu");

        toggle.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelectorAll(".dropdown-menu.show").forEach(function (openMenu) {
                if (openMenu !== menu) {
                    openMenu.classList.remove("show");
                }
            });

            menu.classList.toggle("show");
        });
    });

    document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-menu.show").forEach(function (menu) {
                menu.classList.remove("show");
            });
        }
    });
});
