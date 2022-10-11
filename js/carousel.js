var slide = 1;
var most = document.getElementsByClassName('carousel-item').length;
var text = document.getElementById("end");
text.innerHTML = " - Slide 1"

function previous(){
    if (slide == 1){
        slide = most;
        text.innerHTML = " - Slide " + slide;
        return true;
    }
    else{
        slide --;
        text.innerHTML = " - Slide " + slide;
        return true;
    }
}

function next(){
    if (slide == most){
        slide = 1;
        text.innerHTML = " - Slide " + slide;
        return true;
    }
    else{
        slide ++;
        text.innerHTML = " - Slide " + slide;
        return true;
    }
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function hide(items){
    // items.style.setProperty("transition", "display 0.5s", "important");
    // items.style.setProperty("display", "none", "important");
    items.style.transform = "translateY(25px)";
    sleep(2500);
    // items.style.setProperty("display", "none", "important");
    
    return true;
}