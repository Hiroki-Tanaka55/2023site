const menu = document.querySelector('.js-menu');
const nav = document.querySelector('.js-nav');
const fix = document.querySelector('.js-fix');

  menu.addEventListener('click', function () {
      menu.classList.toggle('is-active');
      nav.classList.toggle('is-active');
      fix.classList.toggle('is-fix');
    if (menu.getAttribute('aria-expanded') === 'false') {
     menu.setAttribute('aria-expanded', 'true');
    } else {
      menu.setAttribute('aria-expanded', 'false');
    }
  });

  nav.addEventListener('click', function () {
    menu.classList.remove('is-active');
    nav.classList.remove('is-active');
    fix.classList.remove('is-fix');
    menu.setAttribute("aria-expanded", "false");
});


//escでメニュー閉じ
window.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    menu.classList.remove('is-active');
    nav.classList.remove('is-active');
    fix.classList.remove('is-fix');
    menu.focus();
    menu.setAttribute("aria-expanded", "false");
  }
});


// フォーカストラップ
const focusTrap = document.querySelector(".js-focus-trap");
focusTrap.addEventListener("focus", function() {
  menu.focus();
  });
