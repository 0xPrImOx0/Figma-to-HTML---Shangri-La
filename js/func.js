function menuToggle() {
    const menu = document.getElementById('hamburger');
    const ul = document.getElementById('ul');
    const back = document.getElementById('back-icon');

    // if (window.innerWidth >= 769) {
    //     ul.style.float = 'right';
    //     ul.style.position = 'relative';
    // }



    if (window.innerWidth <=768) {
        menu.addEventListener('click', () => {
            ul.style.zIndex = 111111111;
            ul.style.display = 'block';
        })
    }

    if (window.innerWidth <= 768) {
        back.addEventListener('click', () => {
            ul.style.zIndex = -1111111111;
            ul.style.display = 'none';
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    menuToggle();
    window.addEventListener('resize', menuToggle);
});
