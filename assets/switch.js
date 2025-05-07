function switchVisible() {
    if (document.getElementById('box')) {
        if (document.getElementById('box').style.display == 'none') {
            document.getElementById('box').style.display = 'block';
            document.getElementById('dirbox').style.display = 'none';
            document.title = 'Haavertz';
        }
        else {
            document.getElementById('box').style.display = 'none';
            document.getElementById('dirbox').style.display = 'block';
            document.title = 'Haavertz | directory';
        }
    }
}