(async function () {
  const nav_buttons = document.querySelectorAll('.button');
  const map_path = { 0 : "./index.html", 1 : "", 2 : "./code.html", 3 : "", 4 : "./resume.html", 5 : "" }
  nav_buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('disabled')) return; 
      document.querySelector('.button.active')?.classList.remove('active');
      button.classList.add('active');
      
      const path = map_path[index];
      if (path) { window.location.href = path; }

    });
  });
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
