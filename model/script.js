const phrases = [
    "Desenvolvedor Web",
    "Desenvolvedor Full Stack",
    "Designer de Prototipagem",
    "Desenvolvedor Freelancer",
];

let index = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function type() {
    if (index < phrases.length) {
        if (charIndex < phrases[index].length) {
            typingText.textContent += phrases[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            
            typingText.textContent += ' ';
            setTimeout(deleteText, 1000);
        }
    }
}

function deleteText() {
    if (charIndex > 0) {
        typingText.textContent = phrases[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 50);
    } else {
        index = (index + 1) % phrases.length;
        charIndex = 0; 
        setTimeout(type, 500);
    }
}


window.onload = function() {
    document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
    type();
};

