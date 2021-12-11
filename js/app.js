const eventScrollHeader = () => {
    const nav = document.getElementById('header')

    if(this.scrollY >= 50) {
        nav.classList.add("active-header")
        return
    }

    nav.classList.remove("active-header")
}

window.addEventListener("scroll", eventScrollHeader)