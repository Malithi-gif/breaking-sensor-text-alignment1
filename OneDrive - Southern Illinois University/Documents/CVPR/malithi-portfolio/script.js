const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const toTop = document.getElementById('toTop');
const navLinks = document.querySelectorAll('.side-nav a');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 500);

  let current = '';
  document.querySelectorAll('section[id]').forEach(section => {
    if (window.scrollY >= section.offsetTop - 160) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
