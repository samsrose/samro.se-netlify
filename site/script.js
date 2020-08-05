var messageBox = document.querySelector('.js-message');
var btn = document.querySelector('.js-message-btn');
var card = document.querySelector('.js-profile-card');
var closeBtn = document.querySelectorAll('.js-message-close');
var follBtn = document.querySelector('.js-foll-btn');


btn.addEventListener('click',function (evt) {
  evt.preventDefault();
  card.classList.add('active');
});

closeBtn.forEach(function (elm) {
  elm.addEventListener('click',function (e) {
    e.preventDefault();
    card.classList.remove('active');
  });
});

follBtn.addEventListener('click',function (evt) {
  evt.preventDefault();
  open('https://linkedin.com/in/samuelsrose', '_target-blank');
});