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

//フォームのページ離脱時のアラート　ios safariには効かない　※アラートが出るので開発中はOFF
//  window.addEventListener("beforeunload", function(e) {
 //   var confirmationMessage = "入力内容を破棄します。";
 //   e.returnValue = confirmationMessage;
 //   return confirmationMessage;
 // });

//ウェブフォント
  (function(d) {
    var config = {
      kitId: 'szd4icr',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
