function showSection(section) {
    document.getElementById('guide').style.display = section === 'guide' ? 'block' : 'none';
    document.getElementById('news').style.display = section === 'news' ? 'block' : 'none';
}

window.onload = function() {
    const hash = window.location.hash.substring(1);
    if (hash === 'news') {
        showSection('news');
    } else {
        showSection('guide');
    }
};