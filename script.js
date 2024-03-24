document.addEventListener('DOMContentLoaded', function() {
    var menuPopup = document.querySelector('.menu-popup');
    var menuState = localStorage.getItem('menuState');

    // Verificar o estado do menu armazenado
    if (menuState === 'open') {
        menuPopup.classList.add('active');
    } else {
        menuPopup.classList.remove('active');
    }
});

function clickMenu() {
    console.log('Clicou no menu');
    var menuPopup = document.querySelector('.menu-popup');

    // Toggle do estado do menu no armazenamento local
    if (menuPopup.classList.contains('active')) {
        localStorage.setItem('menuState', 'closed');
    } else {
        localStorage.setItem('menuState', 'open');
    }

    // Atualizar a classe do menu pop-up
    menuPopup.classList.toggle('active');
}

