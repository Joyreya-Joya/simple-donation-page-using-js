const header = document.querySelector(".header_div");
const tabBtns = document.querySelector(".tab_btns");
const stickyHeader = "sticky_header";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 300) {
        header.classList.add(stickyHeader);
        tabBtns.classList.remove('pt-14', 'pb-8');
        tabBtns.classList.add('pt-3', 'pb-5');
    } 
    else {
        header.classList.remove(stickyHeader);
        tabBtns.classList.remove('pt-3', 'pb-5');
        tabBtns.classList.add('pt-14', 'pb-8');
    }
});
