// SCROLL HEADER
const eventScrollHeader = () => {
    const nav = document.getElementById('header')

    if(this.scrollY >= 50) {
        nav.classList.add("active-header")
        return
    }

    nav.classList.remove("active-header")
}

window.addEventListener("scroll", eventScrollHeader)

// DROPDOWN MENU
const dropdownMenu1 = document.getElementById("dropdown-item-1")
const dropdownMenu2 = document.getElementById("dropdown-item-2")
const dropdownMenu3 = document.getElementById("dropdown-item-3")

const menuItem1 = document.getElementById("menu-item-1")
const menuItem2 = document.getElementById("menu-item-2")
const menuItem3 = document.getElementById("menu-item-3")

const showDropdown1 = (event) => {
    event.preventDefault()
    dropdownMenu1.classList.toggle("active-dropdown-menu")
    dropdownMenu2.classList.remove("active-dropdown-menu")
    dropdownMenu3.classList.remove("active-dropdown-menu")
}

const showDropdown2 = (event) => {
    event.preventDefault()
    dropdownMenu1.classList.remove("active-dropdown-menu")
    dropdownMenu2.classList.toggle("active-dropdown-menu")
    dropdownMenu3.classList.remove("active-dropdown-menu")
}

const showDropdown3 = (event) => {
    event.preventDefault()
    dropdownMenu1.classList.remove("active-dropdown-menu")
    dropdownMenu2.classList.remove("active-dropdown-menu")
    dropdownMenu3.classList.toggle("active-dropdown-menu")
}