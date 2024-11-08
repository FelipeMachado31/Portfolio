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


emailjs.init('ytaQzSYC8qgU4eKkI'); 


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  emailjs.sendForm('service_smji11o', 'template_gz2lhd8', this) 
    .then(function(response) {
      console.log('SUCCESS!', response);
      
      
      document.getElementById('toast-message').textContent = 'Mensagem enviada com sucesso!';
      document.getElementById('toast').classList.remove('hidden', 'bg-red-500');
      document.getElementById('toast').classList.add('bg-green-500');
      
      
      document.getElementById('contact-form').reset(); 

      
      setTimeout(function() {
        document.getElementById('toast').classList.add('hidden');
      }, 3000);
    }, function(error) {
      console.log('FAILED...', error);

      
      document.getElementById('toast-message').textContent = 'Falha ao enviar mensagem. Tente novamente.';
      document.getElementById('toast').classList.remove('hidden', 'bg-green-500');
      document.getElementById('toast').classList.add('bg-red-500');

      
      setTimeout(function() {
        document.getElementById('toast').classList.add('hidden');
      }, 3000);
    });
});


