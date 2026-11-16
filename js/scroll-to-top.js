(() => {
    const scrollTopButton = document.getElementById("scroll-to-top");

    if (!scrollTopButton) {
        return;
    }

    const updateButtonVisibility = () => {
        scrollTopButton.hidden = window.scrollY < 300;
    };

    window.addEventListener("scroll", updateButtonVisibility, {
        passive: true
    });

    scrollTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    updateButtonVisibility();
})();
