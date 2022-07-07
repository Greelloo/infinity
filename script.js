const burger = document.querySelector('.burger')
const navItem = document.querySelectorAll('.nav-link li')
const nav = document.querySelector('.nav-link')

burger.addEventListener('click', () => {
    // Toggle Nav link
    nav.classList.toggle('nav-active')

    navItem.forEach((item, index) => {
        if (item.style.animation) {
            item.style.animation = ''
        } else {
            item.style.animation = `slideIn .5s ease forwards ${index / 7 + 0.1}s`
        }
    })

    // Toggle burger button
    burger.classList.toggle('toggle')
})