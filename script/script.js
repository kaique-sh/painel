function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.mobile-menu-icon .icon');

    // Verifica se o menu está aberto
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.src = "assets/img/menu_white_36dp.svg"; // Ícone de menu
    } else {
        menuMobile.classList.add('open');
        icon.src = "assets/img/close_white_36dp.svg"; // Ícone de fechar
    }
}

// Alterna a sidebar
function toggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open-sidebar'); // Alterna a classe da sidebar
    let icon = document.getElementById('open_btn').querySelector('i');
    if (sidebar.classList.contains('open-sidebar')) {
        icon.classList.remove('bi-arrow-left-circle-fill');
        icon.classList.add('bi-arrow-right-circle-fill'); // Exibe o ícone de fechar
    } else {
        icon.classList.remove('bi-arrow-right-circle-fill');
        icon.classList.add('bi-arrow-left-circle-fill'); // Exibe o ícone de menu
    }
}

// Adiciona o evento ao botão do sidebar
document.getElementById('open_btn').addEventListener('click', toggleSidebar);
