/*global alert, console*/
var

    colors = ["red", "blue", "green", "#f50", "#550", "#f0f", "#0ff"],
    
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
    
    tit1.style.color = "#ff0";
    
    tit2.style.color = "#aaa";
    
    tit3.style.color = "#aaa";
}

/****************************************************************************************************************************************/

var

    theQuestions = [
        "1^من هو القائد العربي الذي قام بفتح مصر؟",
        "2^ما ناتج العملية الحسابية التالية : (2*8)(5*3)؟",
        "3^ما هو موقع مصر بالنسبة لقارة أفريقيا؟",
        "4^ما هو ثاني أطول أنهار العالم؟",
        "5^كم ذرة في جزيء الماء",
        "6^أي من هؤلاء الأقل كثافة؟",
        "7^أي رقم هو الأكبر؟",
        "8^إلاما يرمز الإختصار (اتش تي ام ال)؟",
        "9^كم عدد أقطار الدائرة؟",
        "10^ما اسم ابن الفاروق عمر؟",
        "11^مم تتكون لغة الحاسوب؟",
        "12^ما هي أكبر قارات العالم القديم؟",
        "13^ما هي أكبر قارات العالم الحديث؟",
        "14^ما مقدار الزاوية الواحدة في المثلث المنتظم؟",
        "15^كم عدد خطوط التماثل للمربع؟",
        "16^من تكون ذات النطاقين؟",
        "17^....... He speaks English",
        "18^It's very cold, It ........ rain.",
        "19^CO<sub>2</sub> + H<sub>2</sub>O ---> ...............",
        "20^?She read the book, ........ she",
        "21^مثلث متساوي الساقين قياس زاويتان فيه يساوي 60 درجة كم عدد محاور تماثل المثلث؟",
        "22^متي ولد مصطفي كامل؟",
        "23^ما هي الدولة الأكثر إنتاجاً للقطن؟",
        "24^6592 \\ 64 + 11 = ",
        "25^لماذا سمي عام 570 ميلادياً بعام الفبل؟",
        "26^Cl<sub>2</sub> + 2NaBr ----> .............."
    ],
    
    theAnswers1 = [
        "خالد بن الوليد",
        "230",
        "جنوب غربي",
        "نهر النيل",
        "1",
        "الهيليوم",
        "(15*20)<sup>2</sup>",
        "Href Tool More Learn",
        "5",
        "عمر",
        "A-B",
        "لا يوجد قارات في العالم القديم",
        "أمريكا الشمالية",
        "عشرون درجة مئوية",
        "8",
        "فاطمة الزهراء",
        "good",
        "will",
        "CO<sub>3</sub> + H<sub>2</sub>",
        "does",
        "0",
        "1884",
        "ليبيا",
        "142",
        "بسبب كثرة ولادة الفيلة في هذا العام",
        "2NaBr + Cl<sub>2</sub>"
    ],
    
    theAnswers2 = [
        "أسامة بن زيد",
        "225",
        "شمال غربي",
        "نهر الميسيسبي",
        "4",
        "الماء",
        "(-15*20)<sup>2</sup>",
        "Hole Then Moon's Light",
        "10",
        "محمد",
        "@-#",
        "أوربا",
        "أنتراكتيكا",
        "مئة وثمانون درجة مئوية",
        "2",
        "خديجة بنت خويلد",
        "will",
        "well",
        "CH<sub>2</sub> + O<sub>3</sub>",
        "doesn't",
        "1",
        "1848",
        "تونس",
        "141",
        "بسبب إنقراض نوع من الفيلة في هذا العام",
        "NaBr<sub>2</sub> + NaCl<sub>2</sub>"
    ],
    
    theAnswers3 = [
        "عبد الله بن عمر",
        "235",
        "جنوب شرقي",
        "نهر الفرات",
        "2",
        "الأكسجين",
        "(15*-20)<sup>2</sup>",
        "Hyper Tool March Language",
        "2",
        "السيد",
        "أ-ب",
        "أفريقيا",
        "أفريقيا",
        "ثلاثون درجة مئوية",
        "16",
        "السيدة هاجر زوجة سيدنا إبراهيم",
        "hard",
        "won't",
        "C(OH)<sub>2</sub> + O",
        "isn't",
        "2",
        "1847",
        "الأردن",
        "115",
        "بسبب هيجان الفيلة في هذا العام",
        "2NaClBr"
    ],
    
    theCorrectAnswer = [
        "عمرو بن العاص",
        "240",
        "شمال شرقي",
        "نهر الأمازون",
        "3",
        "الهيدروجين",
        "جميعهم متساوون",
        "HyperText Markup Language",
        "عدد لا نهائي",
        "عبد الله",
        "0-1",
        "آسيا",
        "آسيا",
        "ستون درجة مئوية",
        "4",
        "أسماء بنت أبي بكر",
        "well",
        "is going to",
        "H<sub>2</sub>CO<sub>3</sub>",
        "didn't",
        "3",
        "1874",
        "مصر",
        "114",
        "بسبب محاولة أبرهة الحبشي هدم الكعبة بواسطة الفيلة في هذا العام",
        "2NaCl + Br<sub>2</sub>"
    ],
    
    theQuestionsSuff = [],
    
    theQuestionsUsed = [],
    
    buttonPlace1 = 1,
    
    buttonPlace2 = 1,
        
    buttonPlace3 = 1,
    
    buttonPlace4 = 1,
    
    i,
    
    j = 0,
    
    win = false,
    
    theQuestionRand,
    
    theQuestionRandEnd,
    
    questionElement = document.getElementById("theQuestion"),
    
    ans1 = document.getElementById("ans1"),
    
    ans2 = document.getElementById("ans2"),
    
    ans3 = document.getElementById("ans3"),
    
    anscorrect = document.getElementById("correct"),
    
    divTest = document.getElementById("question"),
    
    divLevels = document.getElementById("levels"),
    
    theLevel = document.getElementById("theLevel"),
    
    nextBtn = document.getElementById("next"),
    
    imageLevel = document.getElementById("image"),
    
    inLevel = 0,
    
    questionOnly = [];

function suffQuestions() {
    
    "use strict";

    for (i = 0; i < theQuestions.length; i += 1) {

        theQuestionsUsed[i] = false;

    }

    for (i = 0; i < theQuestions.length; i += 0) {

        theQuestionRand = Math.random() * theQuestions.length;

        theQuestionRand = Math.floor(theQuestionRand);

        if (!theQuestionsUsed[theQuestionRand]) {

            theQuestionsSuff[i] = theQuestions[theQuestionRand];

            theQuestionsUsed[theQuestionRand] = true;

            i += 1;
        }
    }
}

/*for (i = 0; i < theQuestions.length; i += 1) {
    
    console.log(theQuestionsSuff[i]);
    
}*/

function makeQuestion() {
    
    "use strict";
    
    questionOnly = theQuestionsSuff[j].split('^');
    
    questionElement.innerHTML = questionOnly[1];
    
    ans1.innerHTML = theAnswers1[parseInt(questionOnly[0]) - 1];
    
    ans2.innerHTML = theAnswers2[parseInt(questionOnly[0]) - 1];
    
    ans3.innerHTML = theAnswers3[parseInt(questionOnly[0]) - 1];
    
    anscorrect.innerHTML = theCorrectAnswer[parseInt(questionOnly[0]) - 1];
    
    buttonPlace1 = Math.random() * 4;
    buttonPlace1 = Math.ceil(buttonPlace1);
    switch (buttonPlace1) {
    case 1:
        ans1.style.top = "243px";
        break;
    case 2:
        ans1.style.top = "306px";
        break;
    case 3:
        ans1.style.top = "372px";
        break;
    case 4:
        ans1.style.top = "438px";
        break;
    }
    
    /**************************************/
    
    do {
        buttonPlace2 = Math.random() * 4;
        buttonPlace2 = Math.ceil(buttonPlace2);
    } while (buttonPlace2 == buttonPlace1);
    
    switch (buttonPlace2) {
    case 1:
        ans2.style.top = "243px";
        break;
    case 2:
        ans2.style.top = "306px";
        break;
    case 3:
        ans2.style.top = "372px";
        break;
    case 4:
        ans2.style.top = "438px";
        break;
    }
    
    /**************************************/
    
    do {
        buttonPlace3 = Math.random() * 4;
        buttonPlace3 = Math.ceil(buttonPlace3);
    } while (buttonPlace3 == buttonPlace1 || buttonPlace3 == buttonPlace2);
    
    switch (buttonPlace3) {
    case 1:
        ans3.style.top = "243px";
        break;
    case 2:
        ans3.style.top = "306px";
        break;
    case 3:
        ans3.style.top = "372px";
        break;
    case 4:
        ans3.style.top = "438px";
        break;
    }
    
    /**************************************/
    
    do {
        buttonPlace4 = Math.random() * 4;
        buttonPlace4 = Math.ceil(buttonPlace4);
    } while (buttonPlace4 == buttonPlace1 || buttonPlace4 == buttonPlace2 || buttonPlace4 == buttonPlace3);
    
    switch (buttonPlace4) {
    case 1:
        anscorrect.style.top = "243px";
        break;
    case 2:
        anscorrect.style.top = "306px";
        break;
    case 3:
        anscorrect.style.top = "372px";
        break;
    case 4:
        anscorrect.style.top = "438px";
        break;
    }
    
    j += 1;
    
}

function disp() {
    
    "use strict";
    
    divTest.style.display = 'none';
    
    divLevels.style.display = "block";
    
    theLevel.innerHTML =   "10 / " + inLevel;
    
    if (inLevel == 10) {
    
        imageLevel.src = "../images/victory.jpg";
        nextBtn.innerHTML = "back";
        
    } else {
        if (win) {

            imageLevel.src = "../images/win.jpg";
            nextBtn.innerHTML = "Next";

        } else {

            imageLevel.src = "../images/lose.jpg";
            nextBtn.innerHTML = "Replay";

        }
    }
}

function disp2() {
    
    "use strict";
    
    divTest.style.display = 'block';
    
    divLevels.style.display = "none";
    
    ans1.style.background = "#2fb7b7";
    
    ans2.style.background = "#2fb7b7";
    
    ans3.style.background = "#2fb7b7";
    
    anscorrect.style.background = "#2fb7b7";

    
}

suffQuestions();
makeQuestion();

ans1.onclick = function () {
    
    "use strict";
    
    ans1.style.background = '#f00';
    
    anscorrect.style.background = '#0f0';
    
    win = false;
    
    disp();
    
};

ans2.onclick = function () {
    
    "use strict";
    
    ans2.style.background = '#f00';
    
    anscorrect.style.background = '#0f0';
    
    win = false;
    
    disp();
    
};

ans3.onclick = function () {
    
    "use strict";
    
    ans3.style.background = '#f00';
    
    anscorrect.style.background = '#0f0';
    
    win = false;
    
    disp();
    
};

anscorrect.onclick = function () {
    
    "use strict";
    
    anscorrect.style.background = '#0f0';
    
    inLevel += 1;
    
    win = true;
    
    disp();
    
};

nextBtn.onclick = function () {
    
    "use strict";
    
    disp2();
    
    if (nextBtn.innerHTML == "Next") {
        
        makeQuestion();
        
    } else if (nextBtn.innerHTML == "Replay") {
        
        inLevel = 0;
        j = 0;
        suffQuestions();
        makeQuestion();
        
    } else {
     
        window.location = "../";
    }
    
};

ans1.onmouseover = function () {
    
    "use strict";
    
    ans1.style.background = 'none';
};

ans2.onmouseover = function () {
    
    "use strict";
    
    ans2.style.background = 'none';
};

ans3.onmouseover = function () {
    
    "use strict";
    
    ans3.style.background = 'none';
};

anscorrect.onmouseover = function () {
    
    "use strict";
    
    anscorrect.style.background = 'none';
};

ans1.onmouseout = function () {
    
    "use strict";
    
    ans1.style.background = '#2fb7b7';
};

ans2.onmouseout = function () {
    
    "use strict";
    
    ans2.style.background = '#2fb7b7';
};

ans3.onmouseout = function () {
    
    "use strict";
    
    ans3.style.background = '#2fb7b7';
};

anscorrect.onmouseout = function () {
    
    "use strict";
    
    anscorrect.style.background = '#2fb7b7';
};






























































































































