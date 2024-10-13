function showSection(section) {
    document.getElementById('guide').style.display = section === 'guide' ? 'block' : 'none';
    document.getElementById('news').style.display = section === 'news' ? 'block' : 'none';
}