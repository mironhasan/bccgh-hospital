function owlCarouselDotsString() {
    const owlDot = document.querySelectorAll('.owl-dot');

    Array.from(owlDot).map((item, index)=> {
        const owlDotIndex = index + 1;
        item.children[0].textContent = '0' + owlDotIndex;
    })
}
owlCarouselDotsString();


function fixedHeader(scrollString) {
    window.addEventListener('scroll', ()=> {
        const header = document.querySelector('.header');

        if(window.pageYOffset > scrollString) header.classList.add('sticky');
        else header.classList.remove('sticky');
    });
}
fixedHeader(0);


function responsiveSidebar() {
    const sidebarNav = document.querySelector('.header-nav');
    const sidebarOpen = document.querySelector('.sidebar-open');
    const sidebarClose = document.querySelector('.sidebar-close');

    sidebarOpen.addEventListener('click', ()=> sidebarNav.classList.add('sidebar'));
    sidebarClose.addEventListener('click', ()=> sidebarNav.classList.remove('sidebar'));
}
responsiveSidebar();