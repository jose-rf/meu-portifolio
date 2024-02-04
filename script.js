function clickMenu() {
    console.log('Clicou no menu');
    var menuPopup = document.querySelector('.menu-popup');
    menuPopup.classList.toggle('active');
}

function fecharMenu() {
    console.log('Fechou o menu');
    var menuPopup = document.querySelector('.menu-popup');
    menuPopup.classList.remove('active');
}
