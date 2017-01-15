function adjustHeight() {
    document.getElementById('lefth').style.height = document.defaultView.getComputedStyle(document.getElementById('container'), "").getPropertyValue("height");
   
}
