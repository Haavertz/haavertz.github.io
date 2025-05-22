(async function () {
  const nav_buttons = document.querySelectorAll('.button');
  nav_buttons.forEach(nav_buttons => {
    nav_buttons.addEventListener('click', () => {
      document.querySelector('.button.active')?.classList.remove('active');
      nav_buttons.classList.add('active');
      
    });
  });
  // function updateClock() {
  //   const now = new Date();
  //   let hours = now.getHours();
  //   const minutes = now.getMinutes().toString().padStart(2, '0');
  //   const ampm = hours >= 12 ? 'PM' : 'AM';
  //   hours = hours % 12 || 12; 
  //   document.getElementById('clock').textContent = `${hours}:${minutes} ${ampm}`;
  // }

  // updateClock()

  async function download(language) {
    if (!["pt", "en"].includes(language))
      language = "en";
    const url = `../content/${language}.json`
    if (!download.cache[language]) {
      const content = await fetch(url).then(response => response.json());
      download.cache[language] = content;
    }
    return { language, url, content: download.cache[language] }
  }
  download.cache = {}

})();
