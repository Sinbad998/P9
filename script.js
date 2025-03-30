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

