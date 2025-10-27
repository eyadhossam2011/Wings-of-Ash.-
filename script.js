// تأثير بسيط للوميض في الانترو
const title = document.querySelector('.intro-content h1');
if (title) {
  setInterval(() => {
    title.style.textShadow = `0 0 ${Math.random() * 30}px #ff0000`;
  }, 500);
}
