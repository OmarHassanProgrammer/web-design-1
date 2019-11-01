/*global alert, console, document*/
var

    colors = ["red", "blue", "green", "#f50", "#550", "#f0f", "#0ff"],
    
    color,
    
    colort,
    
    tit1 = document.getElementById("sp1"),

    tit2 = document.getElementById("sp2"),
    
    tit3 = document.getElementById("sp3");

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

/****************************************************************************************************************************************/

var
    textBox = document.getElementById("textBox"),

    btnSave = document.getElementById("saveSelect"),
    
    btnLoad = document.getElementById("loadSelect"),
    
    btnC = document.getElementById("c"),
    
    btnDelete = document.getElementById("delete"),
    
    btnMod = document.getElementById("mod"),
    
    btnPow = document.getElementById("pow"),
    
    btn1 = document.getElementById("1"),
    
    btn2 = document.getElementById("2"),
    
    btn3 = document.getElementById("3"),
    
    btn4 = document.getElementById("4"),
    
    btn5 = document.getElementById("5"),
    
    btn6 = document.getElementById("6"),
    
    btn7 = document.getElementById("7"),
    
    btn8 = document.getElementById("8"),
    
    btn9 = document.getElementById("9"),
    
    btnDot = document.getElementById(","),
    
    btn0 = document.getElementById("0"),
    
    btn00 = document.getElementById("00"),
    
    btnPlus = document.getElementById("+"),
    
    btnMinus = document.getElementById("-"),
    
    btnEqule = document.getElementById("="),
    
    btnMulti = document.getElementById("*"),
    
    btnDivis = document.getElementById("/"),
    
    char = '',
    
    content = false,
    
    saved = [],
    
    first = true,
    
    char2,
    
    error = false;
/*******************************************************************************************************************************************/

function test() {
    
    "use strict";
    
    var calc = [];
    
    if (content) {
        
        switch (char) {
                
        case '+':
                
            calc = textBox.value.split("+");
                
            if (calc[1] == "" || calc[0] == "") {

                textBox.value = '';
                
                textBox.placeholder = 'Error';
                
                error = true;
                
                char = '';

            } else {

                textBox.value = parseFloat(calc[0]) + parseFloat(calc[1]);
                
                textBox.value += char2;

            }
                
            break;
                
        case '-':
                            
            calc = textBox.value.split("-");
                
            if (calc[1] == "" || calc[0] == "") {

                textBox.value = '';
                
                textBox.placeholder = 'Error';
                
                error = true;
                
                char = '';

            } else {
                
                textBox.value = parseFloat(calc[0]) - parseFloat(calc[1]);
                
                textBox.value += char2;
                    
            }
                
            break;
                
        case '%':
                
            calc = textBox.value.split(" Mod : ");
                
            if (calc[1] == "" || calc[0] == "") {

                textBox.value = '';
                
                textBox.placeholder = 'Error';
                
                error = true;
                
                char = '';

            } else {
                
                textBox.value = parseFloat(calc[0]) % parseFloat(calc[1]);
                
                textBox.value += char2;
                    
            }
                
            break;
                
        case '^':
                
             calc = textBox.value.split(" Pow : ");
                
            if (calc[1] == "" || calc[0] == "") {

                textBox.value = '';
                
                textBox.placeholder = 'Error';
                
                error = true;
                
                char = '';

            } else {
                
                var pow = parseFloat(calc[0]);
                
                for (var i = 1; i < parseFloat(calc[1]); i += 1) {
                    
                    pow = pow * parseFloat(calc[0]);
                    
                }
                
                textBox.value = pow;
                
                textBox.value += char2;
                    
            }
                
            break;
                
        case '*':
            
            calc = textBox.value.split("*");
                
            if (calc[1] == "" || calc[0] == "") {

                textBox.value = '';
                
                textBox.placeholder = 'Error';
                
                error = true;
                
                char = '';

            } else {

                textBox.value = parseFloat(calc[0]) * parseFloat(calc[1]);
                
                textBox.value += char2;
            
            }
                
            break;
                
        case '/':
                
            calc = textBox.value.split("/");

            if (calc[1] == "" || calc[0] == "") {

                textBox.value = '';
                
                textBox.placeholder = 'Error';
                
                error = true;
                
                char = '';

            } else {

                textBox.value = parseFloat(calc[0]) / parseFloat(calc[1]);
                
                textBox.value += char2;
                
            }
                
            break;
                
        } 
        
        content = false;
        
    } else {
            
            textBox.value += char2;
            
        }
        
}


/*******************************************************************************************************************************************/

btn1.onclick = function () {
    
    "use strict";
    
    textBox.value += '1';
};

btn2.onclick = function () {
    
    "use strict";
    
    textBox.value += '2';
};

btn3.onclick = function () {
    
    "use strict";
    
    textBox.value += '3';
};

btn4.onclick = function () {
    
    "use strict";
    
    textBox.value += '4';
};

btn5.onclick = function () {
    
    "use strict";
    
    textBox.value += '5';
};

btn6.onclick = function () {
    
    "use strict";
    
    textBox.value += '6';
};

btn7.onclick = function () {
    
    "use strict";
    
    textBox.value += '7';
};

btn8.onclick = function () {
    
    "use strict";
    
    textBox.value += '8';
};

btn9.onclick = function () {
    
    "use strict";
    
    textBox.value += '9';
};

btn0.onclick = function () {
    
    "use strict";
    
    textBox.value += '0';
};

btn00.onclick = function () {
    
    "use strict";
    
    textBox.value += '00';
};

btnDot.onclick = function () {
    
    "use strict";
    
    textBox.value += '.';
};

btnC.onclick = function () {
    
    "use strict";
    
    textBox.value = '';
    
    textBox.placeholder = '';
    
    content = false;
};



btnDelete.onclick = function () {
    
    "use strict";
    
    if (
        textBox.value[textBox.value.length - 1] == '+' ||
        textBox.value[textBox.value.length - 1] == '-' ||
        textBox.value[textBox.value.length - 1] == '*' ||
        textBox.value[textBox.value.length - 1] == '/' 
    ) {
        content = false;
    }
    
    textBox.value = textBox.value.slice(0, textBox.value.length - 1);
};

btnMod.onclick = function () {
    
    "use strict";
    
    char2 = ' Mod : ';
    
    textBox.placeholder = '';
    
    test();
    
    char = '%';
    
    /*if(first) {
        textBox.value += '+';
    }*/
    
    if(!error) {
        content = true; 
    }
    
    error = false;
    
    first = false;
};

btnPow.onclick = function () {
    
    "use strict";
    
    char2 = ' Pow : ';
    
    textBox.placeholder = '';
    
    test();
    
    char = '^';
    
    /*if(first) {
        textBox.value += '+';
    }*/
    
    if(!error) {
        content = true; 
    }
    
    error = false;
    
    first = false;
};

btnPlus.onclick = function () {
    
    "use strict";
    
    char2 = '+';
    
    textBox.placeholder = '';
    
    test();
    
    char = '+';
    
    /*if(first) {
        textBox.value += '+';
    }*/
    
    if(!error) {
        content = true; 
    }
    
    error = false;
    
    first = false;
};

btnMinus.onclick = function () {
    
    "use strict";
    
    char2 = '-';
    
    textBox.placeholder = '';
    
    test();
            
    char = '-';
    
    /*if(first) {
        textBox.value += '-';
    }*/
    
    first = false;
    
    if(!error) {
        content = true; 
    }
    
    error = false;
};

btnDivis.onclick = function () {
    
    "use strict";
    
    char2 = '/';
    
    textBox.placeholder = '';
    
    test();
    
    char = '/';
    
   /* if(first) {
        textBox.value += '/';
    }*/
    
    first = false;
    
    if(!error) {
        content = true; 
    }
    
    error = false;
};

btnMulti.onclick = function () {
    
    "use strict";
    
    char2 = '*';
    
    textBox.placeholder = '';
    
    test();
        
    char = '*';
    
   /* if(first) {
        textBox.value += '*';
    }*/
    
    first = false;
    
    if(!error) {
        content = true; 
    }
    
    error = false;
};

btnEqule.onclick = function () {
    
    "use strict";
    
    char2 = '';
    
    test();
};

btnSave.onchange = function () {
    
    "use strict";
    
    if (btnSave.value != "none") {
        
        saved[parseFloat(btnSave.value) - 1] = textBox.value;
    }
    
    btnSave.value = "none";
};

btnLoad.onchange = function () {
    
    "use strict";
    
    if (btnLoad.value != "none") {
        
        textBox.value += saved[parseFloat(btnLoad.value) - 1];
    }
    
    btnLoad.value = "none";
};

























