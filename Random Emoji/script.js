const emojiList = ["😮", "😲", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤢", "🤮", "🤕", "🥳", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹", "👺", "😿", "😾", "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "💀", "👻", "👽", "🤖", "💩", "😺", "😸", "😹", "😻", "😼", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧"]
const emojiContainer = document.getElementById('emoji')
const generateBtn = document.getElementById('btn');
emojiContainer.textContent = emojiList[0];
generateBtn.addEventListener('click', function () {
    let output = emojiList[Math.floor(Math.random() * emojiList.length)];
    emojiContainer.textContent = output;
})