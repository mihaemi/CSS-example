const menu = document.getElementById('menu')
const expand = document.getElementById('expand')

const toggleDropdown = () => {
    menu.classList.toggle('open');
    expand.innerHTML = !menu.classList.contains('open') ?"expand_more" : "close"
}

const mainButton = () => 
    alert('main button clicked');

const menuButton = () => {
    toggleDropdown();
    alert('menu button clicked')
    }