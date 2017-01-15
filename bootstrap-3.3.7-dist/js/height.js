function adjustHeight() {
    document.getElementById('lefth').style.height = document.defaultView.getComputedStyle(document.getElementById('inher'), "").getPropertyValue("height");
   
}
 window.adjustHeight(); 