const header = document.querySelector(".header_div");
const stickyHeader = "sticky_header";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 250) {
        header.classList.add(stickyHeader);
    } else {
        header.classList.remove(stickyHeader);
    }
});
