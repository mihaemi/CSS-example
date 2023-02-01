const btn = document.querySelector('.toggleButton')
const changeBtn = document.querySelector('.bgChange')
const fa = document.querySelector('.fa-solid')
const faMoon = document.querySelector('.fa-moon')

btn.addEventListener('click', function() {
    changeBtn.classList.toggle('active')

    fa.classList.toggle('dark')

    faMoon.classList.toggle('active')

    if (changeBtn.classList == 'active') {
        faMoon.classList.add('moon-active')
    } else {
        faMoon.classList.remove('moon-active')
    }
    if (changeBtn.classList.contains('active')) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }
})