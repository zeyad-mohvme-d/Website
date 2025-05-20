document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const applyButtons = document.querySelectorAll('.apply-btn');

  tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
  applyButtons.forEach(button => {
    button.addEventListener('click', function () {
      const cardTitle = this.parentElement.querySelector('h3').innerText;
      alert(`You clicked to apply for: ${cardTitle}`);
    });
  });
});
