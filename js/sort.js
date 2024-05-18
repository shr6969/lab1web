function sortArrayAscending() {
    const arrayInput = document.getElementById("arrayInput").value;
    const numbers = arrayInput.split(",").map(Number); // Конвертуємо рядок в масив чисел
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);
    displayResult(sortedNumbers);
}

function sortArrayDescending() {
    const arrayInput = document.getElementById("arrayInput").value;
    const numbers = arrayInput.split(",").map(Number); // Конвертуємо рядок в масив чисел
    const sortedNumbers = numbers.slice().sort((a, b) => b - a);
    displayResult(sortedNumbers);
}

function displayResult(sortedNumbers) {
    const resultDiv = document.getElementById("sortingResult");
    resultDiv.textContent = "Sorted array: " + sortedNumbers.join(", ");
}

document.getElementById('sortAscendingBtn').addEventListener('click', sortArrayAscending);
document.getElementById('sortDescendingBtn').addEventListener('click', sortArrayDescending);
