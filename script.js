document.addEventListener('DOMContentLoaded', () => {
  new TypeIt('h2', {
    speed: 200,
    loop: true
  }).pause(2000).go()
})


const arrow = document.querySelector('.setaBaixo');
arrow.addEventListener('click', () => {
  window.scroll({
    top: 550,
    behavior:'smooth',
  });
})