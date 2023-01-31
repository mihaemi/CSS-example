const textInput = document.getElementById('textInput')
const characters = document.getElementById('characters')
const totalWords = document.getElementById('words')

textInput.addEventListener('input', function () {
    characters.innerHTML = textInput.value.length + ' Characters';
    totalWords.innerHTML = textInput.value.trim().split(' ').length + ' Words'
})