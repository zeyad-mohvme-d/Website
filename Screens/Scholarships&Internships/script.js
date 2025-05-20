document.addEventListener('DOMContentLoaded', () => {
  // Handle tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    };
  });

  document.querySelectorAll('.apply-btn').forEach(btn => {
    btn.onclick = () => {
      const title = btn.parentElement.querySelector('h3').innerText;
      alert(`You clicked to apply`);
    };
  });
});
