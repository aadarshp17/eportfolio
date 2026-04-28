function navigate(pageId) {
  document.querySelectorAll('.page').forEach(function (page) {
    page.classList.remove('active');
  });

  var target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
  }

  document.querySelectorAll('.nav-btn').forEach(function (btn) {
    btn.classList.remove('active');
    if (btn.getAttribute('data-page') === pageId) {
      btn.classList.add('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  resetFadeIns(target);
}

document.querySelectorAll('.nav-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var pageId = this.getAttribute('data-page');
    navigate(pageId);
  });
});

function resetFadeIns(container) {
  if (!container) return;

  var elements = container.querySelectorAll('.fade-in');
  elements.forEach(function (el) {
    el.classList.remove('visible');
  });

  elements.forEach(function (el, index) {
    var delay = parseInt(el.getAttribute('data-delay')) || (index * 100);
    setTimeout(function () {
      el.classList.add('visible');
    }, delay);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var homePage = document.getElementById('page-home');
  if (homePage) {
    resetFadeIns(homePage);
  }
});
