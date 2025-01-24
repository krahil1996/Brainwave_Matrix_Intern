const menuLine = document.getElementById('menu-line');
const menuItems = document.getElementById('menu-items');
const menubtnIcon = document.querySelector('i')
menuLine.addEventListener('click', () => {
    menuItems.classList.toggle('open');
    const isOpen = menuItems.classList.contains('open');
    menubtnIcon.setAttribute('class', isOpen ? 'bx bx-x-circle' : 'bx bx-menu');
    console.log(isOpen);

})
