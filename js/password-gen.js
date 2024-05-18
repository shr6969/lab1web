function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

document.getElementById('generatePasswordBtn').addEventListener('click', function() {
    const passwordLength = parseInt(document.getElementById('passwordLength').value);
    const generatedPassword = generatePassword(passwordLength);
    document.getElementById('passwordResult').textContent = generatedPassword;
});
