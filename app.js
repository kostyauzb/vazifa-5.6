const words = {
    "Salom": "Hello",
    "Rahmat": "Thank you",
    "Hayr": "Goodbye",
    "Ishonch": "Trust",
    "qalaysiz": "how are you",
    "ismingiz nima": "what is your name",
    "jonim": "dear",
    "qandaydir": "something",
    "qizil": "red",
    "kitob": "book",
    "un": "bread"   
};

let currentWord;

function getRandomWord() {
    const wordKeys = Object.keys(words);
    const randomIndex = Math.floor(Math.random() * wordKeys.length);
    currentWord = wordKeys[randomIndex];
    document.getElementById("word").innerText = currentWord;
    document.getElementById("input").value = "";
    document.getElementById("result").innerText = "";
}

function checkTranslation() {
    const userInput = document.getElementById("input").value.trim().toLowerCase();
    const correctTranslation = words[currentWord].toLowerCase();

    if (userInput === correctTranslation) {
        document.getElementById("result").innerText = "To'g'ri!";
    } else {
        document.getElementById("result").innerText = "Noto'g'ri - qayta urinib ko'ring.";
    }
}
