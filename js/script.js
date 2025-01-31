

const menuBtn = document.querySelector('.menu-btn'),
  headerCatalog = document.querySelector(".header-catalog");
  body = document.body;



menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  headerCatalog.classList.toggle('active')

  if (navigation.classList.contains('active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
});






