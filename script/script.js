function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.mobile-menu-icon .icon');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        icon.src = "assets/img/close_white_36dp.svg";
    }
}

// Adiciona o evento ao botão do sidebar
document.getElementById('open_btn').addEventListener('click', function () {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open-sidebar');
});
