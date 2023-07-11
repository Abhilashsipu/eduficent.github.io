const tabs = document.querySelectorAll('nav a');

tabs.forEach(tab => {
  tab.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
Copy
