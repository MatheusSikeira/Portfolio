let btnmenu = document.getElementById('abrir_button_menu');
let menu = document.getElementById('menu_mobile');
let fecharOverlay = document.getElementById('overlay_menu'); 

btnmenu.addEventListener('click', () =>{
    menu.classList.add('btn-abrir-menu-mobile');
});

menu.addEventListener('click', () =>{
    menu.classList.remove('btn-abrir-menu-mobile');
});

fecharOverlay.addEventListener('click', () =>{
    menu.classList.remove('btn-abrir-menu-mobile');
});