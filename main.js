// DOM elementlarini olish
const inputNumber = document.getElementById('inputNumber');
const bosButton = document.getElementById('bosButton');
const displayNumber = document.getElementById('displayNumber');
const minusButton = document.getElementById('minusButton');
const plusButton = document.getElementById('plusButton');

// Bosish tugmasi funksiyasi
bosButton.addEventListener('click', function() {
    const inputValue = inputNumber.value;

    // Faqat sonlarni qabul qilish
    if (isNaN(inputValue) || inputValue === '') {
        alert('Iltimos, faqat son kiriting!');
    } else {
        displayNumber.textContent = inputValue;
    }
});

// Minus tugmasi funksiyasi
minusButton.addEventListener('click', function() {
    let currentValue = parseInt(displayNumber.textContent);
    displayNumber.textContent = currentValue - 1;
});

// Plus tugmasi funksiyasi
plusButton.addEventListener('click', function() {
    let currentValue = parseInt(displayNumber.textContent);
    displayNumber.textContent = currentValue + 1;
});
