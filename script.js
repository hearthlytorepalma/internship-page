const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})

//to hide collapse navbar when clicked
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
