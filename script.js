/*nav-bar**/ 
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

menuIcon.onclick = () => {
  navLinks.classList.toggle('active');
}

links.forEach(link => {
  link.onclick = () => {
    navLinks.classList.remove('active');
  };
});

/*btn-github*/
const githubBtn = document.querySelectorAll('.github-repo-btn')
githubBtn.forEach(function(button) {
  button.onclick = function() {
      window.open(button.getAttribute('data-url'), '_blank');
  };
});

// Sélectionner le formulaire
const contactForm = document.querySelector('#contact-form');

// Ajouter un gestionnaire d'événements pour la soumission du formulaire
contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Simuler l'envoi du formulaire avec fetch (ou une autre méthode)
    const formData = new FormData(contactForm);

    fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Afficher une pop-up pour confirmer l'envoi
            alert('Votre message a été envoyé avec succès !');
            contactForm.reset(); // Réinitialiser le formulaire
        } else {
            // Afficher une pop-up pour signaler une erreur
            alert('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
    }).catch(error => {
        // Gérer les erreurs réseau ou autres
        console.error('Erreur lors de l\'envoi du message :', error);
        alert('Impossible d\'envoyer le message. Vérifiez votre connexion internet et réessayez.');
    });
});

