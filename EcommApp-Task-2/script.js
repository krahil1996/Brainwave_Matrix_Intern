const menuLine = document.getElementById('menu-line');
const menuItems = document.getElementById('menu-items');
const menuItemsBtn = document.getElementsByTagName('button');
const menubtnIcon = document.querySelector('i')
menuLine.addEventListener('click', () => {
    menuItems.classList.toggle('open');
    const isOpen = menuItems.classList.contains('open');
    menubtnIcon.setAttribute('class', isOpen ? 'bx bx-x-circle' : 'bx bx-menu');
    console.log(isOpen);
})

const menuClose = () => {
    menuItems.classList.remove('open');
}



// product page 

const fetchProduct = async () => {
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }

    let response = await fetch("https://fakestoreapi.com/products", {
        method: "GET",
        headers: headersList
    });

    let data = await response.json();
    console.log(data);
}
fetchProduct()
