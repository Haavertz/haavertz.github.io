(async function () {
  const script = document.querySelector("script[src^='./as/v1/js/haavertz.js']");
  const version = script ? new URL(script.src, window.location.origin).searchParams.get("v") : null;
  console.log(version);

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
  console.log(download.cache);
})();
