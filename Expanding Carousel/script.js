const card = document.querySelectorAll('.card')

function removeActiveClass() {
    card.forEach(card => {
        card.classList.remove('active')
    })
}

card.forEach(card => {
    card.addEventListener('click', ()=> {
        removeActiveClass()
        card.classList.add('active')
    })
})