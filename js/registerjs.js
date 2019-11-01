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
    
    tit1.style.color = "#7a7a7a";
    
    tit2.style.color = "#aaa";
    
    tit3.style.color = "#aaa";
}

/************************************************************************************************************************************/

var

    kindAge = [
        "<option></option>",
        "<optgroup label='طفل/ة'>",
        "",
        "",
        "</optgroup>",
        "<optgroup label='تلميذ/ة'>",
        "</optgroup>",
        "<optgroup label='شاب/ة'>",
        "",
        "",
        "",
        "",
        "",
        "",
        "</optgroup>",
        "<optgroup label='رجل/إمرأة'>",
        "",
        "",
        "",
        "",
        "</optgroup>",
        "<optgroup label='شيخ/ة'>",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "</optgroup>"],
    
    the10Age = 1,
    
    the1Age = 1,
    
    theKindAgeNum = 0,
    
    theAge = 1,
    
    varTheAge = document.getElementById("theAge");

for (the10Age = 0; the10Age < 18; the10Age += 1) {
    
    varTheAge.innerHTML += kindAge[theKindAgeNum];
    
    theKindAgeNum += 1;
    
    varTheAge.innerHTML += kindAge[theKindAgeNum];
    
    theKindAgeNum += 1;
    
    for (the1Age = 1; the1Age < 6; the1Age += 1) {
        
        varTheAge.innerHTML += "<option value='age" + theAge + "'>" + theAge + "</option>";
        
        theAge += 1;
    }
        
}

/***********************************************************************************************************************************/

var // "<li><span id='2-5'></span></li>"

    checkName = [
        "<li><span id='1-1'>يجب أن يكون الاسم ثلاثي علي الأقل</span></li>",
        "<li><span id='1-2'>يجب أن يكون الاسم خماسي علي الأكثر</span></li>",
        "<li><span id='1-3'>يجب أن يبدأ الاسم بحرف كبير</span></li>",
        "<li><span id='1-4'>يجب أن لا يحتوي الاسم علي أرقام</span></li>",
        "<li><span id='1-5'>يجب أن لا يحتوي الاسم علي علامات خاصة ما عدا الشرطة السفلية</span></li>"
    ],
    
    /********************************/
    
    checkNumber = [
        "<li><span id='2-1'>يجب أن يتكون الرقم من 11 رقم</span></li>",
        "<li><span id='2-2'>يجب أن لا يحتوي الرقم علي مسافات</span></li>",
        "<li><span id='2-3'>يجب أن لا يحتوي الرقم علي علامات خاصة</span></li>",
        "<li><span id='2-4'>يجب أن يبدأ الرقم برقم (01) وبليه رقم 0 أو رقم 1 أو رقم 2</span></li>",
        "<li><span id='2-5'>يجب أن لا يحتوي الرقم علي أحرف</span></li>"
    ],
    
    /********************************/
    
    checkJop = [
        "<li><span id='3-1'>يجب أن يتكون اسم العمل علي الأقل علي 3 حروف</span></li>",
        "<li><span id='3-2'>يجب أن يتكون اسم العمل علي الأكثر علي 20 حرف</span></li>",
        "<li><span id='3-3'>يجب أن لا يحتوي اسم العمل علي علامات خاصة</span></li>"
    ],
    
    /************************************/
    
    checkNatio = [
        "<li><span id='4-1'>يجب أن تنتهي الجنسية بحرف الياء إذا كانت جنسية مكتوبة باللغة العربية</span></li>",
        "<li><span id='4-2'>يجب أن تتكون الجنسية من كلمة واحدة فقط</span></li>"
    ],
    
    /********************************/
    
    checkPassword = [
        "<li><span id='5-1'>يجب أن تبدأ كلمة المرور بحرف كبيرة</span></li>",
        "<li><span id='5-2'>يجب أن تحتوي كلمة المرور علي أرقام</span></li>",
        "<li><span id='5-3'>يجب أن تحتوي كلمة المرور علي حروف كبيرة و صغيرة</span></li>",
        "<li><span id='5-4'>يجب أن تتكون كلمة المرور علي الأقل من 10 حروف أو أرقام</span></li>",
        "<li><span id='5-5'>يجب أن تقل كلمة المرور عن 30 حرف أو رقم</span></li>",
        "<li><span id='5-6'>يجب أن لا تحتوي كلمة المرور علي مسافات</span></li>",
        "<li><span id='5-7'>يجب أن لا تحتوي كلمة المرور علي علامات خاصة عدا الشرطة السفلية</span></li>"
    ],
    
    /********************************/
    
    checkConfirm = [
        "<li><span id='6-1'>يجب أن تطابق كلمة تأكيد المرور كلمة المرور</span></li>"
    ],

    /********************************/

    nameTrue = false,
    
    numberTrue = false,
    
    jopTrue = false,
    
    natioTrue = false,
    
    passwordTrue = false,
    
    confirmpasswordTrue = false,
    
    /**********************************/
    i = 0, //the for varible to reset the arrays
    
    checkDiv = document.getElementById("checkslist"),
    /***********************************/

    nameTrueNum = 0,
    
    numberTrueNum = 0,
    
    jopTrueNum = 0,
    
    natioTrueNum = 0,
    
    passwordTrueNum = 0,
    
    confirmpasswordTrueNum = 0,
    
    /***************************************/

    nameTrueArr = [],
    
    numberTrueArr = [],
    
    jopTrueArr = [],
    
    natioTrueArr = [],
    
    passwordTrueArr = [],
    
    confirmpasswordTrueArr = [],
    
    /****************************************/
    
    nameElement = document.getElementById("theName1"),
    
    numberElement = document.getElementById("thePhone1"),
    
    jopElement = document.getElementById("theJop1"),
    
    natioElement = document.getElementById("theNationality1"),
    
    hobbyElement = document.getElementById("theHobby1"),
    
    passwordElement = document.getElementById("thePassword"),
    
    confirmpasswordElement = document.getElementById("theConfirm"),
    
    /********************************************************/
    
    checks1 = [],
    
    checks2 = [],
    
    checks3 = [],
    
    checks4 = [],
    
    checks5 = [],
    
    checks6 = [];
    
/********************************************************************************************************************************************/
function a1() {
    
    "use strict";
    
    for (i = 0; i < checkName.length; i += 1) {

        checks1[i] = document.getElementById("1-" + (i + 1));

    }
}
function a2() {
    
    "use strict";
    
    for (i = 0; i < checkNumber.length; i += 1) {

        checks2[i] = document.getElementById("2-" + (i + 1));

    }
}
function a3() {
    
    "use strict";
    
    for (i = 0; i < checkJop.length; i += 1) {
        checks3[i] = document.getElementById("3-" + (i + 1));

    }
}
function a4() {
    
    "use strict";
    
    for (i = 0; i < checkNatio.length; i += 1) {

        checks4[i] = document.getElementById("4-" + (i + 1));

    }
}
function a5() {
    
    "use strict";
    
    for (i = 0; i < checkPassword.length; i += 1) {

        checks5[i] = document.getElementById("5-" + (i + 1));

    }
}
function a6() {
    
    "use strict";
    
    for (i = 0; i < checkConfirm.length; i += 1) {

        checks6[i] = document.getElementById("6-" + (i + 1));

    }
}
/***************************************************************************************************************************************/
function b1() {
    
    "use strict";
    
    for (i = 0, nameTrueNum = 0; i < checkName.length; i += 1) {
        
        nameTrueNum += nameTrueArr[i];
        
    }
    
    if (nameTrueNum === checkName.length) {
        
        nameTrue = true;
        
    } else {
        
        nameTrue = false;
        
    }
}

/*************************************/

function b2() {
    
    "use strict";
    
    for (i = 0, numberTrueNum = 0; i < checkNumber.length; i += 1) {
        
        numberTrueNum += numberTrueArr[i];
        
    }
    
    if (numberTrueNum === checkNumber.length) {
        
        numberTrue = true;
        
    } else {
        
        numberTrue = false;
        
    }
}

/*************************************/

function b3() {
    
    "use strict";
    
    for (i = 0, jopTrueNum = 0; i < checkJop.length; i += 1) {
        
        jopTrueNum += jopTrueArr[i];
        
    }
    
    if (jopTrueNum === checkJop.length) {
        
        jopTrue = true;
        
    } else {
        
        jopTrue = false;
        
    }
}

/*************************************/

function b4() {
    
    "use strict";
    
    for (i = 0, natioTrueNum = 0; i < checkNatio.length; i += 1) {
        
        natioTrueNum += natioTrueArr[i];
        
    }
    
    if (natioTrueNum === checkNatio.length) {
        
        natioTrue = true;
        
    } else {
        
        natioTrue = false;
        
    }
}

/*************************************/

function b5() {
    
    "use strict";
    
    for (i = 0, passwordTrueNum = 0; i < checkPassword.length; i += 1) {
        
        passwordTrueNum += passwordTrueArr[i];
        
    }
    
    if (passwordTrueNum === checkPassword.length) {
        
        passwordTrue = true;
        
    } else {
        
        passwordTrue = false;
        
    }
}

/*************************************/

function b6() {
    
    "use strict";
    
    for (i = 0, confirmpasswordTrueNum = 0; i < checkConfirm.length; i += 1) {
        
        confirmpasswordTrueNum += confirmpasswordTrueArr[i];
        
    }
    
    if (confirmpasswordTrueNum === checkConfirm.length) {
        
        confirmpasswordTrue = true;
        
    } else {
        
        confirmpasswordTrue = false;
        
    }
}

/************************************************************************************************************************************/

for (i = 0; i < checkName.length; i += 1) {
        
    nameTrueArr[i] = 0;
        
}

for (i = 0; i < checkNumber.length; i += 1) {
        
    numberTrueArr[i] = 0;
        
}

for (i = 0; i < checkJop.length; i += 1) {
        
    jopTrueArr[i] = 0;
        
}

for (i = 0; i < checkNatio.length; i += 1) {
        
    natioTrueArr[i] = 0;
        
}

for (i = 0; i < checkPassword.length; i += 1) {
        
    passwordTrueArr[i] = 0;
        
}

for (i = 0; i < checkConfirm.length; i += 1) {
        
    confirmpasswordTrueArr[i] = 0;
        
}

/************************************************************************************************************************************/

function checkTheName() {
    
    "use strict";
        
    if (nameElement.value.trim().split(" ").length < 3) {

        checks1[0].style.color = "red";

        nameTrueArr[0] = 0;

    } else {

        checks1[0].style.color = "green";

        nameTrueArr[0] = 1;

    }
    
    /*****--------*****/
    
    if (nameElement.value.trim().split(" ").length > 5) {
        
        checks1[1].style.color = "red";
        
        nameTrueArr[1] = 0;
        
    } else {
        
        checks1[1].style.color = "green";
        
        nameTrueArr[1] = 1;
        
    }
    
    /*****--------*****/
    
    if (nameElement.value.search(/[A-Za-z]/g) !== -1) {
        
        if (nameElement.value.search(/[A-Z]/g) !== 0) {

            checks1[2].style.color = "red";

            nameTrueArr[2] = 0;

        } else {
        
            checks1[2].style.color = "green";
        
            nameTrueArr[2] = 1;
        
        }
        
    } else {
        
        checks1[2].style.color = "green";
        
        nameTrueArr[2] = 1;
        
    }
    
    /*****--------*****/
    
    if (nameElement.value.trim().search(/[0-9]/g) !== -1) {
        
        checks1[3].style.color = "red";
        
        nameTrueArr[3] = 0;
        
    } else {
        
        checks1[3].style.color = "green";
        
        nameTrueArr[3] = 1;
        
    }
    
    /*****--------*****/
    
    if (nameElement.value.trim().search(/[-,!,@,#,$,%,^,&,*,=,/,;,',",(,),<,>,~,`]/g) !== -1) {
    
        checks1[4].style.color = "red";
        
        nameTrueArr[4] = 0;
        
    } else {
        
        checks1[4].style.color = "green";
        
        nameTrueArr[4] = 1;
        
    }
    
    
}

/*******************|||||||||||||||||||||||||||||||||||||||||||**********************/

function checkTheNumber() {
    
    "use strict";
    
    if (numberElement.value.trim().length !== 11) {
        
        checks2[0].style.color = "red";
        
        numberTrueArr[0] = 0;
        
    } else {
        
        checks2[0].style.color = "green";
        
        numberTrueArr[0] = 1;
        
    }
    
    /*****--------*****/
    
    if (numberElement.value.trim().search(/ /g) !== -1) {
    
        checks2[1].style.color = "red";
        
        numberTrueArr[1] = 0;
        
    } else {
        
        checks2[1].style.color = "green";
        
        numberTrueArr[1] = 1;
        
    }
    
     /*****--------*****/
    
    if (numberElement.value.trim().search(/[-,!,@,#,$,%,^,&,*,=,/,;,',",(,),<,>,~,`]/g) !== -1) {
    
        checks2[2].style.color = "red";
        
        numberTrueArr[2] = 0;
        
    } else {
        
        checks2[2].style.color = "green";
        
        numberTrueArr[2] = 1;
        
    }
    
    /*****--------*****/
    
    if (
        numberElement.value.trim()[0] != 0 ||
            numberElement.value.trim()[1] != 1 ||
            (numberElement.value.trim()[2] != 0 &&
            numberElement.value.trim()[2] != 1 &&
            numberElement.value.trim()[2] != 2)
    ) {
    
        checks2[3].style.color = "red";
        
        numberTrueArr[3] = 0;
        
    } else {
        
        checks2[3].style.color = "green";
        
        numberTrueArr[3] = 1;
        
    }
    
    /*****--------*****/
    
    if (numberElement.value.search(/[A-z]/g) !== -1) {
    
        checks2[4].style.color = "red";
        
        numberTrueArr[4] = 0;
        
    } else {
        
        checks2[4].style.color = "green";
        
        numberTrueArr[4] = 1;
        
    }
    
}

/*******************|||||||||||||||||||||||||||||||||||||||||||**********************/

function checkTheJop() {
    
    "use strict";
    
    if (jopElement.value.trim().length < 3) {
        
        checks3[0].style.color = "red";
        
        jopTrueArr[0] = 0;
        
    } else {
        
        checks3[0].style.color = "green";
        
        jopTrueArr[0] = 1;
        
    }
    
    /*****--------*****/
    
    if (jopElement.value.trim().length > 20) {
        
        checks3[1].style.color = "red";
        
        jopTrueArr[1] = 0;
        
    } else {
        
        checks3[1].style.color = "green";
        
        jopTrueArr[1] = 1;
        
    }
    
    /*****--------*****/
    
    if (jopElement.value.trim().search(/[-,!,@,#,$,%,^,&,*,=,/,;,',",(,),<,>,~,`]/g) !== -1) {
    
        checks3[2].style.color = "red";
        
        jopTrueArr[2] = 0;
        
    } else {
        
        checks3[2].style.color = "green";
        
        jopTrueArr[2] = 1;
        
    }
    
}

/*******************|||||||||||||||||||||||||||||||||||||||||||**********************/

function checkTheNatio() {
    
    "use strict";
    
    if (natioElement.value.search(/[A-z]/g) === -1) {

        if (natioElement.value[natioElement.value.length - 1] !== "ي") {

            checks4[0].style.color = "red";

            natioTrueArr[0] = 0;

        } else {

            checks4[0].style.color = "green";

            natioTrueArr[0] = 1;

        }
        
    } else {

        checks4[0].style.color = "green";

        natioTrueArr[0] = 1;

    }
    /*****--------*****/
    
    if (natioElement.value.trim().split(" ").length !== 1) {
        
        checks4[1].style.color = "red";
        
        natioTrueArr[1] = 0;
        
    } else {
        
        checks4[1].style.color = "green";
        
        natioTrueArr[1] = 1;
        
    }
    
}

/*******************|||||||||||||||||||||||||||||||||||||||||||**********************/

function checkThePassword() {
    
    "use strict";
    
    if (passwordElement.value.search(/[A-Z]/g) !== 0) {
        
        checks5[0].style.color = "red";
        
        passwordTrueArr[0] = 0;
        
    } else {
        
        checks5[0].style.color = "green";
        
        passwordTrueArr[0] = 1;
        
    }
    
    /*****--------*****/
    
    if (passwordElement.value.search(/[0-9]/g) == -1) {
        
        checks5[1].style.color = "red";
        
        passwordTrueArr[1] = 0;
        
    } else {
        
        checks5[1].style.color = "green";
        
        passwordTrueArr[1] = 1;
        
    }
    
    /*****--------*****/
    
    if (
        passwordElement.value.search(/[A-Z]/g) == -1 ||
            passwordElement.value.search(/[a-z]/g) == -1
    ) {
        
        checks5[2].style.color = "red";
        
        passwordTrueArr[2] = 0;
        
    } else {
        
        checks5[2].style.color = "green";
        
        passwordTrueArr[2] = 1;
        
    }
    
    /*****--------*****/
    
    if (passwordElement.value.length < 10) {
        
        checks5[3].style.color = "red";
        
        passwordTrueArr[3] = 0;
        
    } else {
        
        checks5[3].style.color = "green";
        
        passwordTrueArr[3] = 1;
        
    }
    
    /*****--------*****/
    
    if (passwordElement.value.length > 30) {
        
        checks5[4].style.color = "red";
        
        passwordTrueArr[4] = 0;
        
    } else {
        
        checks5[4].style.color = "green";
        
        passwordTrueArr[4] = 1;
        
    }
    
    /*****--------*****/
    
    if (passwordElement.value.search(" ") !== -1) {
        
        checks5[5].style.color = "red";
        
        passwordTrueArr[5] = 0;
        
    } else {
        
        checks5[5].style.color = "green";
        
        passwordTrueArr[5] = 1;
        
    }
    
    /*****--------*****/
    
    if (passwordElement.value.trim().search(/[!,@,#,$,%,^,&,*,=,/,;,',",(,),<,>,~,`]/g) !== -1) {
    
        checks5[6].style.color = "red";
        
        passwordTrueArr[6] = 0;
        
    } else {
        
        checks5[6].style.color = "green";
        
        passwordTrueArr[6] = 1;
        
    }
    
}

/*******************|||||||||||||||||||||||||||||||||||||||||||**********************/

function checkTheConfirm() {
    
    "use strict";
    
    if (confirmpasswordElement.value !== passwordElement.value) {
        
        checks6[0].style.color = "red";
        
        confirmpasswordTrueArr[0] = 0;
        
    } else {
        
        checks6[0].style.color = "green";
        
        confirmpasswordTrueArr[0] = 1;
        
    }
    
}

/***********************************************************************************************************************************/

nameElement.onfocus = function () {
    
    "use strict";
    
    nameElement.onkeyup = function () {
        
        checkDiv.innerHTML = checkName.join("");
        
        a1();

        checkTheName();
        
        b1();
        
    };
    
};

numberElement.onfocus = function () {
    
    "use strict";
    
    numberElement.onkeyup = function () {
        
        checkDiv.innerHTML = checkNumber.join("");
        
        a2();
    
        checkTheNumber();
        
        b2();
        
    };
    
};

jopElement.onfocus = function () {
    
    "use strict";
    
    jopElement.onkeyup = function () {
        
        checkDiv.innerHTML = checkJop.join("");
        
        a3();
    
        checkTheJop();
                
        b3();
        
    };
    
};

natioElement.onfocus = function () {
    
    "use strict";
    
    natioElement.onkeyup = function () {
        
        checkDiv.innerHTML = checkNatio.join("");
        
        a4();
    
        checkTheNatio();
        
        b4();
        
    };
    
};

passwordElement.onfocus = function () {
    
    "use strict";
    
    passwordElement.onkeyup = function () {
        
        checkDiv.innerHTML = checkPassword.join("");
        
        a5();
    
        checkThePassword();
        
        b5();
        
    };
    
};

confirmpasswordElement.onfocus = function () {
    
    "use strict";
    
    confirmpasswordElement.onkeyup = function () {
        
        checkDiv.innerHTML = checkConfirm.join("");
        
        a6();

        checkTheConfirm();
                
        b6();
        
    };
    
};

hobbyElement.onfocus = function () {
    
    "use strict";
    
    checkDiv.innerHTML = "";
    
};

var theButton = document.getElementById("submit"),
    
    ageSelect = document.getElementById("theAge"),
    
    subjectSelect = document.getElementById("theSubject"),
    
    genderRadio = document.getElementById("gender");

theButton.onclick = function () {
    
    "use strict";
    
    if (
        nameTrue &&
            numberTrue &&
            jopTrue &&
            natioTrue &&
            passwordTrue &&
            confirmpasswordTrue &&
            ageSelect.value !== "" &&
            subjectSelect.value !== "" &&
            genderRadio.value !== null
    ) {

        alert("السلام عليكم" + "\r\n" +
              "كيف حالك؟ هل أنت بخير" + "\r\n" +
              "لقد تم قبول تسجيلك. مرحبا بك معنا.");
        window.location = "main.html";
        
    } else {
        
        alert("من فضلك قم بإكمال كافة البيانات و قم بتحقيق كافة الشروط");
    }
    
};




