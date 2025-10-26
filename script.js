// رماد بيتطاير + تأثير نار خفيف
const canvas = document.getElementById('ash');
const ctx = canvas.getContext('2d');
let particles = [];

canvas.width = innerWidth;
canvas.height = innerHeight;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2;
    this.speedY = Math.random() * 0.5 + 0.2;
    this.alpha = Math.random() * 0.5 + 0.3;
  }
  update() {
    this.y -= this.speedY;
    if (this.y < 0) this.y = canvas.height;
  }
  draw() {
    ctx.fillStyle = `rgba(255, 150, 100, ${this.alpha})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < 200; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();

// إعادة ضبط المقاس عند تغيير حجم الشاشة
window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});
