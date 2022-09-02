let menu = document.getElementsByClassName('header-mobile-menu-closed')[0]

function openClosedMenu () {
    if (menu.classList.value == 'header-mobile-menu-open') {
        menu.classList.remove('header-mobile-menu-open')
        menu.classList.add('header-mobile-menu-closed')
    } else {
        menu.classList.remove('header-mobile-menu-closed')
        menu.classList.add('header-mobile-menu-open')
    }
}