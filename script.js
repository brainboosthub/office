const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const searchForm = document.getElementById('searchForm');
const toast = document.getElementById('toast');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const location = document.getElementById('locationInput').value.trim();
  const checkin = document.getElementById('checkinInput').value;
  const checkout = document.getElementById('checkoutInput').value;
  const guests = document.getElementById('guestsInput').value;

  if (!location) {
    showToast('Please enter a destination.');
    document.getElementById('locationInput').focus();
    return;
  }

  const summary = [location, checkin, checkout, guests].filter(Boolean).join(' • ');
  showToast(`Searching: ${summary}`);
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2600);
}
