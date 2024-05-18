function countWords(text) {
    const words = text.split(/\s+/).filter(word => word !== '');
    return words.length;
}

document.getElementById('generatePasswordBtn').addEventListener('click', function() {
    const passwordLength = parseInt(document.getElementById('passwordLength').value);
    const generatedPassword = generatePassword(passwordLength);
    document.getElementById('passwordResult').textContent = generatedPassword;
});

document.getElementById('countWordsBtn').addEventListener('click', function() {
    const text = document.getElementById('wordCountInput').value;
    const wordCount = countWords(text);
    document.getElementById('wordCountResult').textContent = `Кількість слів: ${wordCount}`;
});
