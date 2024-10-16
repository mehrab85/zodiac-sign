// Get elements from the DOM
const nameInput = document.getElementById('name');
const dobInput = document.getElementById('dob');
const resultContainer = document.getElementById('result');
const characterImage = document.getElementById('characterImage');

// Character images associated with zodiac signs
const characterImages = {
    'Aquarius': 'images/aquarius.jpg',
    'Pisces': 'images/pisces.jpg',
    'Aries': 'images/aries.jpg',
    'Taurus': 'images/taurus.jpg',
    'Gemini': 'images/gemini.jpg',
    'Cancer': 'images/cancer.jpg',
    'Leo': 'images/leo.jpg',
    'Virgo': 'images/virgo.jpg',
    'Libra': 'images/libra.jpg',
    'Scorpio': 'images/scorpio.jpg',
    'Sagittarius': 'images/sagittarius.jpg',
    'Capricorn': 'images/capricorn.jpg',
};

// Zodiac signs based on the date of birth
function getZodiacSign(day, month) {
    const zodiacSigns = [
        { sign: 'Capricorn', lastDay: 19, month: 1 },
        { sign: 'Aquarius', lastDay: 18, month: 2 },
        { sign: 'Pisces', lastDay: 20, month: 3 },
        { sign: 'Aries', lastDay: 19, month: 4 },
        { sign: 'Taurus', lastDay: 20, month: 5 },
        { sign: 'Gemini', lastDay: 20, month: 6 },
        { sign: 'Cancer', lastDay: 22, month: 7 },
        { sign: 'Leo', lastDay: 22, month: 8 },
        { sign: 'Virgo', lastDay: 22, month: 9 },
        { sign: 'Libra', lastDay: 22, month: 10 },
        { sign: 'Scorpio', lastDay: 21, month: 11 },
        { sign: 'Sagittarius', lastDay: 21, month: 12 },
        { sign: 'Capricorn', lastDay: 31, month: 12 },
    ];

    return zodiacSigns.find((zodiac) => {
        return (month === zodiac.month && day <= zodiac.lastDay) ||
               (month === (zodiac.month % 12 + 1) && day > zodiac.lastDay);
    }).sign;
}

// Function to handle form submission
function showCharacter() {
    const name = nameInput.value;
    const dob = new Date(dobInput.value);
    const day = dob.getDate();
    const month = dob.getMonth() + 1; // Months are 0-indexed

    if (!name || isNaN(dob.getTime())) {
        resultContainer.innerHTML = 'Please enter a valid name and date of birth.';
        characterImage.src = ''; // Clear image if input is invalid
        characterImage.style.display = 'none'; // Hide the image if invalid
        return;
    }

    const zodiacSign = getZodiacSign(day, month);
    const imageSrc = characterImages[zodiacSign];

    // Display the result
    resultContainer.innerHTML = `Hello, ${name}! Your Zodiac sign is: ${zodiacSign}`;
    characterImage.src = imageSrc; // Set the character image
    characterImage.style.display = 'block'; // Show the image
}

// Add event listener for form submission
document.getElementById('characterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    showCharacter();
});
