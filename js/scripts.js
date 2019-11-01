/* global URL*/

/****************************************************** HEADER PART ******************************************************************/
var

    colors = ["red", "blue", "#080", "#f50", "#550", "#f0f", "#0ff"],
    
    color,
    
    colort,
    
    tit1 = document.getElementById("1"),

    tit2 = document.getElementById("2"),
    
    tit3 = document.getElementById("3");

function paint() {
    
    "use strict";
        
    colort = Math.random() * 7;

    color = Math.floor(colort);
        
    tit1.style.color = colors[color];
    
    tit2.style.color = colors[color];
    
    tit3.style.color = colors[color];
        
}

function out() {
    
    "use strict";
    
    tit1.style.color = "#7a7a7a";
    
    tit2.style.color = "#aaa";
    
    tit3.style.color = "#aaa";
}
/*
tit1.onmousemove = tit1.innerHTML = "fff";//paint();

tit2.onmouseover = paint();

tit3.onmouseover = paint();

tit1.onmouseout = tit1.style.color = "#7a7a7a";

tit2.onmouseout = tit2.style.color = "#aaa";

tit3.onmouseout = tit3.style.color = "#aaa";*/

/******************************************************** START PART *******************************************************************/

var

    inItAll = 1,
    
    images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"],
    
    btnText = ["سجل الآن", "إبدأ الإختبار", "الآلة الحاسبة"],
    
    imageElement = document.getElementById("image"),
    
    btnElemnt = document.getElementById("go"),
    
    inItCir = inItAll,
    
    cirlceActive = document.getElementById("go" + inItCir),
    
    nextbtn = document.getElementById("next"),
    
    backbtn = document.getElementById("back");

function moveStartPart() {
    
    "use strict";
    
    inItCir = inItAll;
    
    imageElement.style.backgroundImage = "url('" + images[inItAll - 1] + "')";
    
    btnElemnt.innerHTML = btnText[inItAll - 1];
    
    cirlceActive.style.backgroundColor = "#fff";
    
    cirlceActive = document.getElementById("go" + inItCir);
    
    cirlceActive.style.backgroundColor = "#000";
    
    if (inItAll == 3) {
    
        nextbtn.style.visibility = "hidden";
        
        backbtn.style.visibility = "visible";
        
    }  else if (inItAll < 3 && inItAll > 1) {
        
        nextbtn.style.visibility = "visible";
        
        backbtn.style.visibility = "visible";
        
    } else if (inItAll == 1) {
        
        nextbtn.style.visibility = "visible";
        
        backbtn.style.visibility = "hidden";
    }
    
}

moveStartPart();

nextbtn.onclick = function () {
    
    "use strict";
    
    inItAll += 1;
    
    moveStartPart();
        
};

backbtn.onclick = function () {
    
    "use strict";
    
    inItAll -= 1;
    
    moveStartPart();

};

btnElemnt.onclick = function goToPage() {
    
    "use strict";
    
    switch (btnElemnt.innerHTML) {
            
    case "سجل الآن":

        window.location = "register";

        break;
            
    case "إبدأ الإختبار":
            
        window.location = "test";

        break;
            
    case "الآلة الحاسبة":

        window.location = "calculator";

        break;
    }
    
};






