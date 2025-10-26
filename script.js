// انتقال تلقائي بين الصفحات
let pages = document.querySelectorAll('.page');
let index = 0;

function nextPage() {
  pages[index].classList.remove('active');
  index = (index + 1) % pages.length;
  pages[index].classList.add('active');
}

setInterval(nextPage, 6000); // كل 6 ثواني يتغير المشهد
