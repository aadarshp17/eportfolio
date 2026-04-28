/* ─── PAGE NAVIGATION ─── */

function navigate(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(function (page) {
    page.classList.remove('active');
  });

  // Show target page
  var target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
  }

  // Update nav buttons
  document.querySelectorAll('.nav-btn').forEach(function (btn) {
    btn.classList.remove('active');
    if (btn.getAttribute('data-page') === pageId) {
      btn.classList.add('active');
    }
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-trigger fade-in animations for the new page
  resetFadeIns(target);
}

/* ─── NAV BUTTON CLICK HANDLERS ─── */

document.querySelectorAll('.nav-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var pageId = this.getAttribute('data-page');
    navigate(pageId);
  });
});

/* ─── FADE-IN ANIMATIONS ─── */

function resetFadeIns(container) {
  if (!container) return;

  var elements = container.querySelectorAll('.fade-in');
  elements.forEach(function (el) {
    el.classList.remove('visible');
  });

  // Stagger them in
  elements.forEach(function (el, index) {
    var delay = parseInt(el.getAttribute('data-delay')) || (index * 100);
    setTimeout(function () {
      el.classList.add('visible');
    }, delay);
  });
}

/* ─── INITIAL LOAD ─── */

document.addEventListener('DOMContentLoaded', function () {
  // Trigger fade-ins on the home page
  var homePage = document.getElementById('page-home');
  if (homePage) {
    resetFadeIns(homePage);
  }
});
