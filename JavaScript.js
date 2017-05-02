// Click Count functions
var add1 = (function () {
    var counter1 = 0;
    return function () { return counter1 += 1; };
})();
var add2 = (function () {
    var counter2 = 0;
    return function () { return counter2 += 1; };
})();
var add3 = (function () {
    var counter3 = 0;
    return function () { return counter3 += 1; };
})();
var add4 = (function () {
    var counter4 = 0;
    return function () { return counter4 += 1; };
})();
var add5 = (function () {
    var counter5 = 0;
    return function () { return counter5 += 1; };
})();
var add6 = (function () {
    var counter6 = 0;
    return function () { return counter6 += 1; };
})();
var add7 = (function () {
    var counter7 = 0;
    return function () { return counter7 += 1; };
})();

// Reset Button
function resetScores() {
    document.getElementById('sbl').innerHTML = "000";
    document.getElementById('sbr').innerHTML = "000";
    document.getElementById('sbl2').innerHTML = "000";
    document.getElementById('sbr2').innerHTML = "000";
    document.getElementById('total').innerHTML = "000";

    document.getElementById('click1').innerHTML = 0;
    document.getElementById('click2').innerHTML = 0;
    document.getElementById('click3').innerHTML = 0;
    document.getElementById('click4').innerHTML = 0;
    document.getElementById('click5').innerHTML = 0;
    document.getElementById('click6').innerHTML = 0;
    document.getElementById('click7').innerHTML = 0;
    // Reset Red
    document.getElementById('hide1La').innerHTML = 0;
    document.getElementById('hide1Lb').innerHTML = 0;
    document.getElementById('hide2La').innerHTML = 0;
    document.getElementById('hide2Lb').innerHTML = 0;
    document.getElementById('hide3La').innerHTML = 0;
    document.getElementById('hide3Lb').innerHTML = 0;
    document.getElementById('hide4La').innerHTML = 0;
    document.getElementById('hide4Lb').innerHTML = 0;
    document.getElementById('hide5La').innerHTML = 0;
    document.getElementById('hide5Lb').innerHTML = 0;
    document.getElementById('hide6La').innerHTML = 0;
    document.getElementById('hide6Lb').innerHTML = 0;
    document.getElementById('hide7La').innerHTML = 0;
    document.getElementById('hide7Lb').innerHTML = 0;

    document.getElementById('nl1').innerHTML = 0;
    document.getElementById('nl2').innerHTML = 0;
    document.getElementById('nl3').innerHTML = 0;
    document.getElementById('nl4').innerHTML = 0;
    document.getElementById('nl5').innerHTML = 0;
    document.getElementById('nl6').innerHTML = 0;
    document.getElementById('nl7').innerHTML = 0;
    document.getElementById('nl8').innerHTML = 0;
    document.getElementById('nl9').innerHTML = 0;
    document.getElementById('nl10').innerHTML = 0;
    document.getElementById('nl11').innerHTML = 0;
    document.getElementById('nl12').innerHTML = 0;
    document.getElementById('nl13').innerHTML = 0;
    document.getElementById('nl14').innerHTML = 0;
    document.getElementById('nl15').innerHTML = 0;
    document.getElementById('nl16').innerHTML = 0;
    document.getElementById('nl17').innerHTML = 0;
    document.getElementById('nl18').innerHTML = 0;
    document.getElementById('nl19').innerHTML = 0;
    document.getElementById('nl20').innerHTML = 0;
    document.getElementById('nl21').innerHTML = 0;

    document.getElementById('nl1').style.backgroundColor = 'lightgrey';
    document.getElementById('nl2').style.backgroundColor = 'lightgrey';
    document.getElementById('nl3').style.backgroundColor = 'lightgrey';
    document.getElementById('nl1').style.color = 'lightgrey';
    document.getElementById('nl2').style.color = 'lightgrey';
    document.getElementById('nl3').style.color = 'lightgrey';
    document.getElementById('nl4').style.backgroundColor = 'lightgrey';
    document.getElementById('nl5').style.backgroundColor = 'lightgrey';
    document.getElementById('nl6').style.backgroundColor = 'lightgrey';
    document.getElementById('nl4').style.color = 'lightgrey';
    document.getElementById('nl5').style.color = 'lightgrey';
    document.getElementById('nl6').style.color = 'lightgrey';
    document.getElementById('nl7').style.backgroundColor = 'lightgrey';
    document.getElementById('nl8').style.backgroundColor = 'lightgrey';
    document.getElementById('nl9').style.backgroundColor = 'lightgrey';
    document.getElementById('nl7').style.color = 'lightgrey';
    document.getElementById('nl8').style.color = 'lightgrey';
    document.getElementById('nl9').style.color = 'lightgrey';
    document.getElementById('nl10').style.backgroundColor = 'lightgrey';
    document.getElementById('nl11').style.backgroundColor = 'lightgrey';
    document.getElementById('nl12').style.backgroundColor = 'lightgrey';
    document.getElementById('nl10').style.color = 'lightgrey';
    document.getElementById('nl11').style.color = 'lightgrey';
    document.getElementById('nl12').style.color = 'lightgrey';
    document.getElementById('nl13').style.backgroundColor = 'lightgrey';
    document.getElementById('nl14').style.backgroundColor = 'lightgrey';
    document.getElementById('nl15').style.backgroundColor = 'lightgrey';
    document.getElementById('nl13').style.color = 'lightgrey';
    document.getElementById('nl14').style.color = 'lightgrey';
    document.getElementById('nl15').style.color = 'lightgrey';
    document.getElementById('nl16').style.backgroundColor = 'lightgrey';
    document.getElementById('nl17').style.backgroundColor = 'lightgrey';
    document.getElementById('nl18').style.backgroundColor = 'lightgrey';
    document.getElementById('nl16').style.color = 'lightgrey';
    document.getElementById('nl17').style.color = 'lightgrey';
    document.getElementById('nl18').style.color = 'lightgrey';
    document.getElementById('nl19').style.backgroundColor = 'lightgrey';
    document.getElementById('nl20').style.backgroundColor = 'lightgrey';
    document.getElementById('nl21').style.backgroundColor = 'lightgrey';
    document.getElementById('nl19').style.color = 'lightgrey';
    document.getElementById('nl20').style.color = 'lightgrey';
    document.getElementById('nl21').style.color = 'lightgrey';
    //Reset Blue
    document.getElementById('hide1Ra').innerHTML = 0;
    document.getElementById('hide1Rb').innerHTML = 0;
    document.getElementById('hide2Ra').innerHTML = 0;
    document.getElementById('hide2Rb').innerHTML = 0;
    document.getElementById('hide3Ra').innerHTML = 0;
    document.getElementById('hide3Rb').innerHTML = 0;
    document.getElementById('hide4Ra').innerHTML = 0;
    document.getElementById('hide4Rb').innerHTML = 0;
    document.getElementById('hide5Ra').innerHTML = 0;
    document.getElementById('hide5Rb').innerHTML = 0;
    document.getElementById('hide6Ra').innerHTML = 0;
    document.getElementById('hide6Rb').innerHTML = 0;
    document.getElementById('hide7Ra').innerHTML = 0;
    document.getElementById('hide7Rb').innerHTML = 0;

    document.getElementById('nr1').innerHTML = 0;
    document.getElementById('nr2').innerHTML = 0;
    document.getElementById('nr3').innerHTML = 0;
    document.getElementById('nr4').innerHTML = 0;
    document.getElementById('nr5').innerHTML = 0;
    document.getElementById('nr6').innerHTML = 0;
    document.getElementById('nr7').innerHTML = 0;
    document.getElementById('nr8').innerHTML = 0;
    document.getElementById('nr9').innerHTML = 0;
    document.getElementById('nr10').innerHTML = 0;
    document.getElementById('nr11').innerHTML = 0;
    document.getElementById('nr12').innerHTML = 0;
    document.getElementById('nr13').innerHTML = 0;
    document.getElementById('nr14').innerHTML = 0;
    document.getElementById('nr15').innerHTML = 0;
    document.getElementById('nr16').innerHTML = 0;
    document.getElementById('nr17').innerHTML = 0;
    document.getElementById('nr18').innerHTML = 0;
    document.getElementById('nr19').innerHTML = 0;
    document.getElementById('nr20').innerHTML = 0;
    document.getElementById('nr21').innerHTML = 0;

    document.getElementById('nr1').style.backgroundColor = 'lightgrey';
    document.getElementById('nr2').style.backgroundColor = 'lightgrey';
    document.getElementById('nr3').style.backgroundColor = 'lightgrey';
    document.getElementById('nr1').style.color = 'lightgrey';
    document.getElementById('nr2').style.color = 'lightgrey';
    document.getElementById('nr3').style.color = 'lightgrey';
    document.getElementById('nr4').style.backgroundColor = 'lightgrey';
    document.getElementById('nr5').style.backgroundColor = 'lightgrey';
    document.getElementById('nr6').style.backgroundColor = 'lightgrey';
    document.getElementById('nr4').style.color = 'lightgrey';
    document.getElementById('nr5').style.color = 'lightgrey';
    document.getElementById('nr6').style.color = 'lightgrey';
    document.getElementById('nr7').style.backgroundColor = 'lightgrey';
    document.getElementById('nr8').style.backgroundColor = 'lightgrey';
    document.getElementById('nr9').style.backgroundColor = 'lightgrey';
    document.getElementById('nr7').style.color = 'lightgrey';
    document.getElementById('nr8').style.color = 'lightgrey';
    document.getElementById('nr9').style.color = 'lightgrey';
    document.getElementById('nr10').style.backgroundColor = 'lightgrey';
    document.getElementById('nr11').style.backgroundColor = 'lightgrey';
    document.getElementById('nr12').style.backgroundColor = 'lightgrey';
    document.getElementById('nr10').style.color = 'lightgrey';
    document.getElementById('nr11').style.color = 'lightgrey';
    document.getElementById('nr12').style.color = 'lightgrey';
    document.getElementById('nr13').style.backgroundColor = 'lightgrey';
    document.getElementById('nr14').style.backgroundColor = 'lightgrey';
    document.getElementById('nr15').style.backgroundColor = 'lightgrey';
    document.getElementById('nr13').style.color = 'lightgrey';
    document.getElementById('nr14').style.color = 'lightgrey';
    document.getElementById('nr15').style.color = 'lightgrey';
    document.getElementById('nr16').style.backgroundColor = 'lightgrey';
    document.getElementById('nr17').style.backgroundColor = 'lightgrey';
    document.getElementById('nr18').style.backgroundColor = 'lightgrey';
    document.getElementById('nr16').style.color = 'lightgrey';
    document.getElementById('nr17').style.color = 'lightgrey';
    document.getElementById('nr18').style.color = 'lightgrey';
    document.getElementById('nr19').style.backgroundColor = 'lightgrey';
    document.getElementById('nr20').style.backgroundColor = 'lightgrey';
    document.getElementById('nr21').style.backgroundColor = 'lightgrey';
    document.getElementById('nr19').style.color = 'lightgrey';
    document.getElementById('nr20').style.color = 'lightgrey';
    document.getElementById('nr21').style.color = 'lightgrey';

};

// Cricket Score Enter Buttons
function buttonClick1() {
    document.getElementById("click1").innerHTML = add1();
}
function buttonClick2() {
    document.getElementById("click2").innerHTML = add2();
}
function buttonClick3() {
    document.getElementById("click3").innerHTML = add3();
}
function buttonClick4() {
    document.getElementById("click4").innerHTML = add4();
}
function buttonClick5() {
    document.getElementById("click5").innerHTML = add5();
}
function buttonClick6() {
    document.getElementById("click6").innerHTML = add6();
}
function buttonClick7() {
    document.getElementById("click7").innerHTML = add7();
}

// Score Enter Button Red (left)
function enterRedScore() {

    var lefttwenty = document.getElementById('click1');
    var leftNineteen = document.getElementById('click2');
    var leftEighteen = document.getElementById('click3');
    var leftSeventeen = document.getElementById('click4');
    var leftSixteen = document.getElementById('click5');
    var leftFifteen = document.getElementById('click6');
    var leftBull = document.getElementById('click7');

    var redtwentytotal = parseInt(document.getElementById('nl1').innerHTML, 10) + parseInt(document.getElementById('nl2').innerHTML, 10) + parseInt(document.getElementById('nl3').innerHTML, 10);
    var rednineteentotal = parseInt(document.getElementById('nl4').innerHTML, 10) + parseInt(document.getElementById('nl5').innerHTML, 10) + parseInt(document.getElementById('nl6').innerHTML, 10);
    var redeighteentotal = parseInt(document.getElementById('nl7').innerHTML, 10) + parseInt(document.getElementById('nl8').innerHTML, 10) + parseInt(document.getElementById('nl9').innerHTML, 10);
    var redseventeentotal = parseInt(document.getElementById('nl10').innerHTML, 10) + parseInt(document.getElementById('nl11').innerHTML, 10) + parseInt(document.getElementById('nl12').innerHTML, 10);
    var redsixteentotal = parseInt(document.getElementById('nl13').innerHTML, 10) + parseInt(document.getElementById('nl14').innerHTML, 10) + parseInt(document.getElementById('nl15').innerHTML, 10);
    var redfifteentotal = parseInt(document.getElementById('nl16').innerHTML, 10) + parseInt(document.getElementById('nl17').innerHTML, 10) + parseInt(document.getElementById('nl18').innerHTML, 10);
    var redbulltotal = parseInt(document.getElementById('nl19').innerHTML, 10) + parseInt(document.getElementById('nl20').innerHTML, 10) + parseInt(document.getElementById('nl21').innerHTML, 10);

    if (parseInt(document.getElementById('total').innerHTML, 10) == 301) {
        document.getElementById('sbl').innerHTML = "301";
        document.getElementById('sbr').innerHTML = "301";
        document.getElementById('total').innerHTML = "000";
    }
    if (parseInt(document.getElementById('total').innerHTML, 10) == 501) {
        document.getElementById('sbl').innerHTML = "501";
        document.getElementById('sbr').innerHTML = "501";
        document.getElementById('total').innerHTML = "000";
    }
    if (parseInt(document.getElementById('sbr').innerHTML, 10) != 0) {
        document.getElementById('sbl2').innerHTML = document.getElementById('total').innerHTML;
        document.getElementById('sbl').innerHTML = (parseInt(document.getElementById('sbl').innerHTML, 10) - parseInt(document.getElementById('sbl2').innerHTML, 10));
    }


    // CRICKET

    // redTwenty
    if ((redtwentytotal == 3) && (parseInt(document.getElementById('click1').innerHTML, 10) >= 1)) {
        document.getElementById('hide1Lb').innerHTML = (parseInt(document.getElementById('hide1Lb').innerHTML, 10)) + (parseInt(lefttwenty.innerHTML, 10));
        document.getElementById('click1').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;

    }
    if ((redtwentytotal == 0) && (parseInt(document.getElementById('click1').innerHTML, 10) == 1)) {
        document.getElementById('hide1La').innerHTML = 1;
        document.getElementById('nl1').innerHTML = 1;
        document.getElementById('nl1').style.backgroundColor = '#99C262';
        document.getElementById('nl1').style.color = '#99C262';
        document.getElementById('click1').innerHTML = 0;
    }
    if ((redtwentytotal == 0) && (parseInt(document.getElementById('click1').innerHTML, 10) == 2)) {
        document.getElementById('hide1La').innerHTML = 2;
        document.getElementById('nl1').innerHTML = 1;
        document.getElementById('nl2').innerHTML = 1;
        document.getElementById('nl1').style.backgroundColor = '#99C262';
        document.getElementById('nl2').style.backgroundColor = '#99C262';
        document.getElementById('nl1').style.color = '#99C262';
        document.getElementById('nl2').style.color = '#99C262';
        document.getElementById('click1').innerHTML = 0;
    }
    if ((redtwentytotal == 0) && (parseInt(document.getElementById('click1').innerHTML, 10) == 3)) {
        document.getElementById('hide1La').innerHTML = 3;
        document.getElementById('nl1').innerHTML = 1;
        document.getElementById('nl2').innerHTML = 1;
        document.getElementById('nl3').innerHTML = 1;
        document.getElementById('nl1').style.backgroundColor = '#99C262';
        document.getElementById('nl2').style.backgroundColor = '#99C262';
        document.getElementById('nl3').style.backgroundColor = '#99C262';
        document.getElementById('nl1').style.color = '#99C262';
        document.getElementById('nl2').style.color = '#99C262';
        document.getElementById('nl3').style.color = '#99C262';
        document.getElementById('click1').innerHTML = 0;
    }
    if ((redtwentytotal == 1) && (parseInt(document.getElementById('click1').innerHTML, 10) == 1)) {
        document.getElementById('hide1La').innerHTML = 2;
        document.getElementById('nl1').innerHTML = 1;
        document.getElementById('nl2').innerHTML = 1;
        document.getElementById('nl1').style.backgroundColor = '#99C262';
        document.getElementById('nl2').style.backgroundColor = '#99C262';
        document.getElementById('nl1').style.color = '#99C262';
        document.getElementById('nl2').style.color = '#99C262';
        document.getElementById('click1').innerHTML = 0;
    }
    if ((redtwentytotal == 1) && (parseInt(document.getElementById('click1').innerHTML, 10) == 2)) {
        document.getElementById('hide1La').innerHTML = 3;
        document.getElementById('nl1').innerHTML = 1;
        document.getElementById('nl2').innerHTML = 1;
        document.getElementById('nl3').innerHTML = 1;
        document.getElementById('nl1').style.backgroundColor = '#99C262';
        document.getElementById('nl2').style.backgroundColor = '#99C262';
        document.getElementById('nl3').style.backgroundColor = '#99C262';
        document.getElementById('nl1').style.color = '#99C262';
        document.getElementById('nl2').style.color = '#99C262';
        document.getElementById('nl3').style.color = '#99C262';
        document.getElementById('click1').innerHTML = 0;
    }
    if ((redtwentytotal == 2) && (parseInt(document.getElementById('click1').innerHTML, 10) == 1)) {
        document.getElementById('hide1La').innerHTML = 3;
        document.getElementById('nl1').innerHTML = 1;
        document.getElementById('nl2').innerHTML = 1;
        document.getElementById('nl3').innerHTML = 1;
        document.getElementById('nl1').style.backgroundColor = '#99C262';
        document.getElementById('nl2').style.backgroundColor = '#99C262';
        document.getElementById('nl3').style.backgroundColor = '#99C262';
        document.getElementById('nl1').style.color = '#99C262';
        document.getElementById('nl2').style.color = '#99C262';
        document.getElementById('nl3').style.color = '#99C262';
        document.getElementById('click1').innerHTML = 0;
    }
    if ((redtwentytotal == 0) && (parseInt(document.getElementById('click1').innerHTML, 10) > 3)) {
        document.getElementById('hide1La').innerHTML = 3;
        document.getElementById('hide1Lb').innerHTML = 3 + (parseInt(document.getElementById('click1').innerHTML, 10) - 6);
        document.getElementById('nl1').innerHTML = 1;
        document.getElementById('nl2').innerHTML = 1;
        document.getElementById('nl3').innerHTML = 1;
        document.getElementById('nl1').style.backgroundColor = '#99C262';
        document.getElementById('nl2').style.backgroundColor = '#99C262';
        document.getElementById('nl3').style.backgroundColor = '#99C262';
        document.getElementById('nl1').style.color = '#99C262';
        document.getElementById('nl2').style.color = '#99C262';
        document.getElementById('nl3').style.color = '#99C262';
        document.getElementById('click1').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((redtwentytotal == 1) && (parseInt(document.getElementById('click1').innerHTML, 10) >= 3)) {
        document.getElementById('hide1La').innerHTML = 3;
        document.getElementById('hide1Lb').innerHTML = 3 + (parseInt(document.getElementById('click1').innerHTML, 10) - 5);
        document.getElementById('nl1').innerHTML = 1;
        document.getElementById('nl1').innerHTML = 1;
        document.getElementById('nl2').innerHTML = 1;
        document.getElementById('nl3').innerHTML = 1;
        document.getElementById('nl1').style.backgroundColor = '#99C262';
        document.getElementById('nl2').style.backgroundColor = '#99C262';
        document.getElementById('nl3').style.backgroundColor = '#99C262';
        document.getElementById('nl1').style.color = '#99C262';
        document.getElementById('nl2').style.color = '#99C262';
        document.getElementById('nl3').style.color = '#99C262';
        document.getElementById('click1').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((redtwentytotal == 2) && (parseInt(document.getElementById('click1').innerHTML, 10) >= 2)) {
        document.getElementById('hide1La').innerHTML = 3;
        document.getElementById('hide1Lb').innerHTML = 3 + (parseInt(document.getElementById('click1').innerHTML, 10) - 4);
        document.getElementById('nl1').innerHTML = 1;
        document.getElementById('nl2').innerHTML = 1;
        document.getElementById('nl3').innerHTML = 1;
        document.getElementById('nl1').style.backgroundColor = '#99C262';
        document.getElementById('nl2').style.backgroundColor = '#99C262';
        document.getElementById('nl3').style.backgroundColor = '#99C262';
        document.getElementById('nl1').style.color = '#99C262';
        document.getElementById('nl2').style.color = '#99C262';
        document.getElementById('nl3').style.color = '#99C262';
        document.getElementById('click1').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }

    // redNineteen
    if ((rednineteentotal == 3) && (parseInt(document.getElementById('click2').innerHTML, 10) >= 1)) {
        document.getElementById('hide2Lb').innerHTML = (parseInt(document.getElementById('hide2Lb').innerHTML, 10)) + (parseInt(leftNineteen.innerHTML, 10));
        document.getElementById('click2').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((rednineteentotal == 0) && (parseInt(document.getElementById('click2').innerHTML, 10) == 1)) {
        document.getElementById('hide2La').innerHTML = 1;
        document.getElementById('nl4').innerHTML = 1;
        document.getElementById('nl4').style.backgroundColor = '#99C262';
        document.getElementById('nl4').style.color = '#99C262';
        document.getElementById('click2').innerHTML = 0;
    }
    if ((rednineteentotal == 0) && (parseInt(document.getElementById('click2').innerHTML, 10) == 2)) {
        document.getElementById('hide2La').innerHTML = 2;
        document.getElementById('nl4').innerHTML = 1;
        document.getElementById('nl5').innerHTML = 1;
        document.getElementById('nl4').style.backgroundColor = '#99C262';
        document.getElementById('nl5').style.backgroundColor = '#99C262';
        document.getElementById('nl4').style.color = '#99C262';
        document.getElementById('nl5').style.color = '#99C262';
        document.getElementById('click2').innerHTML = 0;
    }
    if ((rednineteentotal == 0) && (parseInt(document.getElementById('click2').innerHTML, 10) == 3)) {
        document.getElementById('hide2La').innerHTML = 3;
        document.getElementById('nl4').innerHTML = 1;
        document.getElementById('nl5').innerHTML = 1;
        document.getElementById('nl6').innerHTML = 1;
        document.getElementById('nl4').style.backgroundColor = '#99C262';
        document.getElementById('nl5').style.backgroundColor = '#99C262';
        document.getElementById('nl6').style.backgroundColor = '#99C262';
        document.getElementById('nl4').style.color = '#99C262';
        document.getElementById('nl5').style.color = '#99C262';
        document.getElementById('nl6').style.color = '#99C262';
        document.getElementById('click2').innerHTML = 0;
    }
    if ((rednineteentotal == 1) && (parseInt(document.getElementById('click2').innerHTML, 10) == 1)) {
        document.getElementById('hide2La').innerHTML = 2;
        document.getElementById('nl4').innerHTML = 1;
        document.getElementById('nl5').innerHTML = 1;
        document.getElementById('nl4').style.backgroundColor = '#99C262';
        document.getElementById('nl5').style.backgroundColor = '#99C262';
        document.getElementById('nl4').style.color = '#99C262';
        document.getElementById('nl5').style.color = '#99C262';
        document.getElementById('click2').innerHTML = 0;
    }
    if ((rednineteentotal == 1) && (parseInt(document.getElementById('click2').innerHTML, 10) == 2)) {
        document.getElementById('hide2La').innerHTML = 3;
        document.getElementById('nl4').innerHTML = 1;
        document.getElementById('nl5').innerHTML = 1;
        document.getElementById('nl6').innerHTML = 1;
        document.getElementById('nl4').style.backgroundColor = '#99C262';
        document.getElementById('nl5').style.backgroundColor = '#99C262';
        document.getElementById('nl6').style.backgroundColor = '#99C262';
        document.getElementById('nl4').style.color = '#99C262';
        document.getElementById('nl5').style.color = '#99C262';
        document.getElementById('nl6').style.color = '#99C262';
        document.getElementById('click2').innerHTML = 0;
    }
    if ((rednineteentotal == 2) && (parseInt(document.getElementById('click2').innerHTML, 10) == 1)) {
        document.getElementById('hide2La').innerHTML = 3;
        document.getElementById('nl4').innerHTML = 1;
        document.getElementById('nl5').innerHTML = 1;
        document.getElementById('nl6').innerHTML = 1;
        document.getElementById('nl4').style.backgroundColor = '#99C262';
        document.getElementById('nl5').style.backgroundColor = '#99C262';
        document.getElementById('nl6').style.backgroundColor = '#99C262';
        document.getElementById('nl4').style.color = '#99C262';
        document.getElementById('nl5').style.color = '#99C262';
        document.getElementById('nl6').style.color = '#99C262';
        document.getElementById('click2').innerHTML = 0;
    }
    if ((rednineteentotal == 0) && (parseInt(document.getElementById('click2').innerHTML, 10) > 3)) {
        document.getElementById('hide2La').innerHTML = 3;
        document.getElementById('hide2Lb').innerHTML = 3 + (parseInt(document.getElementById('click2').innerHTML, 10) - 6);
        document.getElementById('nl4').innerHTML = 1;
        document.getElementById('nl5').innerHTML = 1;
        document.getElementById('nl6').innerHTML = 1;
        document.getElementById('nl4').style.backgroundColor = '#99C262';
        document.getElementById('nl5').style.backgroundColor = '#99C262';
        document.getElementById('nl6').style.backgroundColor = '#99C262';
        document.getElementById('nl4').style.color = '#99C262';
        document.getElementById('nl5').style.color = '#99C262';
        document.getElementById('nl6').style.color = '#99C262';
        document.getElementById('click2').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((rednineteentotal == 1) && (parseInt(document.getElementById('click2').innerHTML, 10) >= 3)) {
        document.getElementById('hide2La').innerHTML = 3;
        document.getElementById('hide2Lb').innerHTML = 3 + (parseInt(document.getElementById('click2').innerHTML, 10) - 5);
        document.getElementById('nl4').innerHTML = 1;
        document.getElementById('nl5').innerHTML = 1;
        document.getElementById('nl6').innerHTML = 1;
        document.getElementById('nl4').style.backgroundColor = '#99C262';
        document.getElementById('nl5').style.backgroundColor = '#99C262';
        document.getElementById('nl6').style.backgroundColor = '#99C262';
        document.getElementById('nl4').style.color = '#99C262';
        document.getElementById('nl5').style.color = '#99C262';
        document.getElementById('nl6').style.color = '#99C262';
        document.getElementById('click2').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((rednineteentotal == 2) && (parseInt(document.getElementById('click2').innerHTML, 10) >= 2)) {
        document.getElementById('hide2La').innerHTML = 3;
        document.getElementById('hide2Lb').innerHTML = 3 + (parseInt(document.getElementById('click2').innerHTML, 10) - 4);
        document.getElementById('nl4').innerHTML = 1;
        document.getElementById('nl5').innerHTML = 1;
        document.getElementById('nl6').innerHTML = 1;
        document.getElementById('nl4').style.backgroundColor = '#99C262';
        document.getElementById('nl5').style.backgroundColor = '#99C262';
        document.getElementById('nl6').style.backgroundColor = '#99C262';
        document.getElementById('nl4').style.color = '#99C262';
        document.getElementById('nl5').style.color = '#99C262';
        document.getElementById('nl6').style.color = '#99C262';
        document.getElementById('click2').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }

    // redEighteen
    if ((redeighteentotal == 3) && (parseInt(document.getElementById('click3').innerHTML, 10) >= 1)) {
        document.getElementById('hide3Lb').innerHTML = (parseInt(document.getElementById('hide3Lb').innerHTML, 10)) + (parseInt(leftEighteen.innerHTML, 10));
        document.getElementById('click3').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((redeighteentotal == 0) && (parseInt(document.getElementById('click3').innerHTML, 10) == 1)) {
        document.getElementById('hide3La').innerHTML = 1;
        document.getElementById('nl7').innerHTML = 1;
        document.getElementById('nl7').style.backgroundColor = '#99C262';
        document.getElementById('nl7').style.color = '#99C262';
        document.getElementById('click3').innerHTML = 0;
    }
    if ((redeighteentotal == 0) && (parseInt(document.getElementById('click3').innerHTML, 10) == 2)) {
        document.getElementById('hide3La').innerHTML = 2;
        document.getElementById('nl7').innerHTML = 1;
        document.getElementById('nl8').innerHTML = 1;
        document.getElementById('nl7').style.backgroundColor = '#99C262';
        document.getElementById('nl8').style.backgroundColor = '#99C262';
        document.getElementById('nl7').style.color = '#99C262';
        document.getElementById('nl8').style.color = '#99C262';
        document.getElementById('click3').innerHTML = 0;
    }
    if ((redeighteentotal == 0) && (parseInt(document.getElementById('click3').innerHTML, 10) == 3)) {
        document.getElementById('hide3La').innerHTML = 3;
        document.getElementById('nl7').innerHTML = 1;
        document.getElementById('nl8').innerHTML = 1;
        document.getElementById('nl9').innerHTML = 1;
        document.getElementById('nl7').style.backgroundColor = '#99C262';
        document.getElementById('nl8').style.backgroundColor = '#99C262';
        document.getElementById('nl9').style.backgroundColor = '#99C262';
        document.getElementById('nl7').style.color = '#99C262';
        document.getElementById('nl8').style.color = '#99C262';
        document.getElementById('nl9').style.color = '#99C262';
        document.getElementById('click3').innerHTML = 0;
    }
    if ((redeighteentotal == 1) && (parseInt(document.getElementById('click3').innerHTML, 10) == 1)) {
        document.getElementById('hide3La').innerHTML = 2;
        document.getElementById('nl7').innerHTML = 1;
        document.getElementById('nl8').innerHTML = 1;
        document.getElementById('nl7').style.backgroundColor = '#99C262';
        document.getElementById('nl8').style.backgroundColor = '#99C262';
        document.getElementById('nl7').style.color = '#99C262';
        document.getElementById('nl8').style.color = '#99C262';
        document.getElementById('click3').innerHTML = 0;
    }
    if ((redeighteentotal == 1) && (parseInt(document.getElementById('click3').innerHTML, 10) == 2)) {
        document.getElementById('hide3La').innerHTML = 3;
        document.getElementById('nl7').innerHTML = 1;
        document.getElementById('nl8').innerHTML = 1;
        document.getElementById('nl9').innerHTML = 1;
        document.getElementById('nl7').style.backgroundColor = '#99C262';
        document.getElementById('nl8').style.backgroundColor = '#99C262';
        document.getElementById('nl9').style.backgroundColor = '#99C262';
        document.getElementById('nl7').style.color = '#99C262';
        document.getElementById('nl8').style.color = '#99C262';
        document.getElementById('nl9').style.color = '#99C262';
        document.getElementById('click3').innerHTML = 0;
    }
    if ((redeighteentotal == 2) && (parseInt(document.getElementById('click3').innerHTML, 10) == 1)) {
        document.getElementById('hide3La').innerHTML = 3;
        document.getElementById('nl7').innerHTML = 1;
        document.getElementById('nl8').innerHTML = 1;
        document.getElementById('nl9').innerHTML = 1;
        document.getElementById('nl7').style.backgroundColor = '#99C262';
        document.getElementById('nl8').style.backgroundColor = '#99C262';
        document.getElementById('nl9').style.backgroundColor = '#99C262';
        document.getElementById('nl7').style.color = '#99C262';
        document.getElementById('nl8').style.color = '#99C262';
        document.getElementById('nl9').style.color = '#99C262';
        document.getElementById('click3').innerHTML = 0;
    }
    if ((redeighteentotal == 0) && (parseInt(document.getElementById('click3').innerHTML, 10) > 3)) {
        document.getElementById('hide3La').innerHTML = 3;
        document.getElementById('hide3Lb').innerHTML = 3 + (parseInt(document.getElementById('click3').innerHTML, 10) - 6);
        document.getElementById('nl7').innerHTML = 1;
        document.getElementById('nl8').innerHTML = 1;
        document.getElementById('nl9').innerHTML = 1;
        document.getElementById('nl7').style.backgroundColor = '#99C262';
        document.getElementById('nl8').style.backgroundColor = '#99C262';
        document.getElementById('nl9').style.backgroundColor = '#99C262';
        document.getElementById('nl7').style.color = '#99C262';
        document.getElementById('nl8').style.color = '#99C262';
        document.getElementById('nl9').style.color = '#99C262';
        document.getElementById('click3').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((redeighteentotal == 1) && (parseInt(document.getElementById('click3').innerHTML, 10) >= 3)) {
        document.getElementById('hide3La').innerHTML = 3;
        document.getElementById('hide3Lb').innerHTML = 3 + (parseInt(document.getElementById('click3').innerHTML, 10) - 5);
        document.getElementById('nl7').innerHTML = 1;
        document.getElementById('nl7').innerHTML = 1;
        document.getElementById('nl8').innerHTML = 1;
        document.getElementById('nl9').innerHTML = 1;
        document.getElementById('nl7').style.backgroundColor = '#99C262';
        document.getElementById('nl8').style.backgroundColor = '#99C262';
        document.getElementById('nl9').style.backgroundColor = '#99C262';
        document.getElementById('nl7').style.color = '#99C262';
        document.getElementById('nl8').style.color = '#99C262';
        document.getElementById('nl9').style.color = '#99C262';
        document.getElementById('click3').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((redeighteentotal == 2) && (parseInt(document.getElementById('click3').innerHTML, 10) >= 2)) {
        document.getElementById('hide3La').innerHTML = 3;
        document.getElementById('hide3Lb').innerHTML = 3 + (parseInt(document.getElementById('click3').innerHTML, 10) - 4);
        document.getElementById('nl7').innerHTML = 1;
        document.getElementById('nl8').innerHTML = 1;
        document.getElementById('nl9').innerHTML = 1;
        document.getElementById('nl7').style.backgroundColor = '#99C262';
        document.getElementById('nl8').style.backgroundColor = '#99C262';
        document.getElementById('nl9').style.backgroundColor = '#99C262';
        document.getElementById('nl7').style.color = '#99C262';
        document.getElementById('nl8').style.color = '#99C262';
        document.getElementById('nl9').style.color = '#99C262';
        document.getElementById('click3').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }

    // redSeventeen
    if ((redseventeentotal == 3) && (parseInt(document.getElementById('click4').innerHTML, 10) >= 1)) {
        document.getElementById('hide4Lb').innerHTML = (parseInt(document.getElementById('hide4Lb').innerHTML, 10)) + (parseInt(leftSeventeen.innerHTML, 10));
        document.getElementById('click4').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((redseventeentotal == 0) && (parseInt(document.getElementById('click4').innerHTML, 10) == 1)) {
        document.getElementById('hide4La').innerHTML = 1;
        document.getElementById('nl10').innerHTML = 1;
        document.getElementById('nl10').style.backgroundColor = '#99C262';
        document.getElementById('nl10').style.color = '#99C262';
        document.getElementById('click4').innerHTML = 0;
    }
    if ((redseventeentotal == 0) && (parseInt(document.getElementById('click4').innerHTML, 10) == 2)) {
        document.getElementById('hide4La').innerHTML = 2;
        document.getElementById('nl10').innerHTML = 1;
        document.getElementById('nl11').innerHTML = 1;
        document.getElementById('nl10').style.backgroundColor = '#99C262';
        document.getElementById('nl11').style.backgroundColor = '#99C262';
        document.getElementById('nl10').style.color = '#99C262';
        document.getElementById('nl11').style.color = '#99C262';
        document.getElementById('click4').innerHTML = 0;
    }
    if ((redseventeentotal == 0) && (parseInt(document.getElementById('click4').innerHTML, 10) == 3)) {
        document.getElementById('hide4La').innerHTML = 3;
        document.getElementById('nl10').innerHTML = 1;
        document.getElementById('nl11').innerHTML = 1;
        document.getElementById('nl12').innerHTML = 1;
        document.getElementById('nl10').style.backgroundColor = '#99C262';
        document.getElementById('nl11').style.backgroundColor = '#99C262';
        document.getElementById('nl12').style.backgroundColor = '#99C262';
        document.getElementById('nl10').style.color = '#99C262';
        document.getElementById('nl11').style.color = '#99C262';
        document.getElementById('nl12').style.color = '#99C262';
        document.getElementById('click4').innerHTML = 0;
    }
    if ((redseventeentotal == 1) && (parseInt(document.getElementById('click4').innerHTML, 10) == 1)) {
        document.getElementById('hide4La').innerHTML = 2;
        document.getElementById('nl10').innerHTML = 1;
        document.getElementById('nl11').innerHTML = 1;
        document.getElementById('nl10').style.backgroundColor = '#99C262';
        document.getElementById('nl11').style.backgroundColor = '#99C262';
        document.getElementById('nl10').style.color = '#99C262';
        document.getElementById('nl11').style.color = '#99C262';
        document.getElementById('click4').innerHTML = 0;
    }
    if ((redseventeentotal == 1) && (parseInt(document.getElementById('click4').innerHTML, 10) == 2)) {
        document.getElementById('hide4La').innerHTML = 3;
        document.getElementById('nl10').innerHTML = 1;
        document.getElementById('nl11').innerHTML = 1;
        document.getElementById('nl12').innerHTML = 1;
        document.getElementById('nl10').style.backgroundColor = '#99C262';
        document.getElementById('nl11').style.backgroundColor = '#99C262';
        document.getElementById('nl12').style.backgroundColor = '#99C262';
        document.getElementById('nl10').style.color = '#99C262';
        document.getElementById('nl11').style.color = '#99C262';
        document.getElementById('nl12').style.color = '#99C262';
        document.getElementById('click4').innerHTML = 0;
    }
    if ((redseventeentotal == 2) && (parseInt(document.getElementById('click4').innerHTML, 10) == 1)) {
        document.getElementById('hide4La').innerHTML = 3;
        document.getElementById('nl10').innerHTML = 1;
        document.getElementById('nl11').innerHTML = 1;
        document.getElementById('nl12').innerHTML = 1;
        document.getElementById('nl10').style.backgroundColor = '#99C262';
        document.getElementById('nl11').style.backgroundColor = '#99C262';
        document.getElementById('nl12').style.backgroundColor = '#99C262';
        document.getElementById('nl10').style.color = '#99C262';
        document.getElementById('nl11').style.color = '#99C262';
        document.getElementById('nl12').style.color = '#99C262';
        document.getElementById('click4').innerHTML = 0;
    }
    if ((redseventeentotal == 0) && (parseInt(document.getElementById('click4').innerHTML, 10) > 3)) {
        document.getElementById('hide4La').innerHTML = 3;
        document.getElementById('hide4Lb').innerHTML = 3 + (parseInt(document.getElementById('click4').innerHTML, 10) - 6);
        document.getElementById('nl10').innerHTML = 1;
        document.getElementById('nl11').innerHTML = 1;
        document.getElementById('nl12').innerHTML = 1;
        document.getElementById('nl10').style.backgroundColor = '#99C262';
        document.getElementById('nl11').style.backgroundColor = '#99C262';
        document.getElementById('nl12').style.backgroundColor = '#99C262';
        document.getElementById('nl10').style.color = '#99C262';
        document.getElementById('nl11').style.color = '#99C262';
        document.getElementById('nl12').style.color = '#99C262';
        document.getElementById('click4').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((redseventeentotal == 1) && (parseInt(document.getElementById('click4').innerHTML, 10) >= 3)) {
        document.getElementById('hide4La').innerHTML = 3;
        document.getElementById('hide4Lb').innerHTML = 3 + (parseInt(document.getElementById('click4').innerHTML, 10) - 5);
        document.getElementById('nl10').innerHTML = 1;
        document.getElementById('nl10').innerHTML = 1;
        document.getElementById('nl11').innerHTML = 1;
        document.getElementById('nl12').innerHTML = 1;
        document.getElementById('nl10').style.backgroundColor = '#99C262';
        document.getElementById('nl11').style.backgroundColor = '#99C262';
        document.getElementById('nl12').style.backgroundColor = '#99C262';
        document.getElementById('nl10').style.color = '#99C262';
        document.getElementById('nl11').style.color = '#99C262';
        document.getElementById('nl12').style.color = '#99C262';
        document.getElementById('click4').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((redseventeentotal == 2) && (parseInt(document.getElementById('click4').innerHTML, 10) >= 2)) {
        document.getElementById('hide4La').innerHTML = 3;
        document.getElementById('hide4Lb').innerHTML = 3 + (parseInt(document.getElementById('click4').innerHTML, 10) - 4);
        document.getElementById('nl10').innerHTML = 1;
        document.getElementById('nl11').innerHTML = 1;
        document.getElementById('nl12').innerHTML = 1;
        document.getElementById('nl10').style.backgroundColor = '#99C262';
        document.getElementById('nl11').style.backgroundColor = '#99C262';
        document.getElementById('nl12').style.backgroundColor = '#99C262';
        document.getElementById('nl10').style.color = '#99C262';
        document.getElementById('nl11').style.color = '#99C262';
        document.getElementById('nl12').style.color = '#99C262';
        document.getElementById('click4').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }

    // redSixteen
    if ((redsixteentotal == 3) && (parseInt(document.getElementById('click5').innerHTML, 10) >= 1)) {
        document.getElementById('hide5Lb').innerHTML = (parseInt(document.getElementById('hide5Lb').innerHTML, 10)) + (parseInt(leftSixteen.innerHTML, 10));
        document.getElementById('click5').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((redsixteentotal == 0) && (parseInt(document.getElementById('click5').innerHTML, 10) == 1)) {
        document.getElementById('hide5La').innerHTML = 1;
        document.getElementById('nl13').innerHTML = 1;
        document.getElementById('nl13').style.backgroundColor = '#99C262';
        document.getElementById('nl13').style.color = '#99C262';
        document.getElementById('click5').innerHTML = 0;
    }
    if ((redsixteentotal == 0) && (parseInt(document.getElementById('click5').innerHTML, 10) == 2)) {
        document.getElementById('hide5La').innerHTML = 2;
        document.getElementById('nl13').innerHTML = 1;
        document.getElementById('nl14').innerHTML = 1;
        document.getElementById('nl13').style.backgroundColor = '#99C262';
        document.getElementById('nl14').style.backgroundColor = '#99C262';
        document.getElementById('nl13').style.color = '#99C262';
        document.getElementById('nl14').style.color = '#99C262';
        document.getElementById('click5').innerHTML = 0;
    }
    if ((redsixteentotal == 0) && (parseInt(document.getElementById('click5').innerHTML, 10) == 3)) {
        document.getElementById('hide5La').innerHTML = 3;
        document.getElementById('nl13').innerHTML = 1;
        document.getElementById('nl14').innerHTML = 1;
        document.getElementById('nl15').innerHTML = 1;
        document.getElementById('nl13').style.backgroundColor = '#99C262';
        document.getElementById('nl14').style.backgroundColor = '#99C262';
        document.getElementById('nl15').style.backgroundColor = '#99C262';
        document.getElementById('nl13').style.color = '#99C262';
        document.getElementById('nl14').style.color = '#99C262';
        document.getElementById('nl15').style.color = '#99C262';
        document.getElementById('click5').innerHTML = 0;
    }
    if ((redsixteentotal == 1) && (parseInt(document.getElementById('click5').innerHTML, 10) == 1)) {
        document.getElementById('hide5La').innerHTML = 2;
        document.getElementById('nl13').innerHTML = 1;
        document.getElementById('nl14').innerHTML = 1;
        document.getElementById('nl13').style.backgroundColor = '#99C262';
        document.getElementById('nl14').style.backgroundColor = '#99C262';
        document.getElementById('nl13').style.color = '#99C262';
        document.getElementById('nl14').style.color = '#99C262';
        document.getElementById('click5').innerHTML = 0;
    }
    if ((redsixteentotal == 1) && (parseInt(document.getElementById('click5').innerHTML, 10) == 2)) {
        document.getElementById('hide5La').innerHTML = 3;
        document.getElementById('nl13').innerHTML = 1;
        document.getElementById('nl14').innerHTML = 1;
        document.getElementById('nl15').innerHTML = 1;
        document.getElementById('nl13').style.backgroundColor = '#99C262';
        document.getElementById('nl14').style.backgroundColor = '#99C262';
        document.getElementById('nl15').style.backgroundColor = '#99C262';
        document.getElementById('nl13').style.color = '#99C262';
        document.getElementById('nl14').style.color = '#99C262';
        document.getElementById('nl15').style.color = '#99C262';
        document.getElementById('click5').innerHTML = 0;
    }
    if ((redsixteentotal == 2) && (parseInt(document.getElementById('click5').innerHTML, 10) == 1)) {
        document.getElementById('hide5La').innerHTML = 3;
        document.getElementById('nl13').innerHTML = 1;
        document.getElementById('nl14').innerHTML = 1;
        document.getElementById('nl15').innerHTML = 1;
        document.getElementById('nl13').style.backgroundColor = '#99C262';
        document.getElementById('nl14').style.backgroundColor = '#99C262';
        document.getElementById('nl15').style.backgroundColor = '#99C262';
        document.getElementById('nl13').style.color = '#99C262';
        document.getElementById('nl14').style.color = '#99C262';
        document.getElementById('nl15').style.color = '#99C262';
        document.getElementById('click5').innerHTML = 0;
    }
    if ((redsixteentotal == 0) && (parseInt(document.getElementById('click5').innerHTML, 10) > 3)) {
        document.getElementById('hide5La').innerHTML = 3;
        document.getElementById('hide5Lb').innerHTML = 3 + (parseInt(document.getElementById('click5').innerHTML, 10) - 6);
        document.getElementById('nl13').innerHTML = 1;
        document.getElementById('nl14').innerHTML = 1;
        document.getElementById('nl15').innerHTML = 1;
        document.getElementById('nl13').style.backgroundColor = '#99C262';
        document.getElementById('nl14').style.backgroundColor = '#99C262';
        document.getElementById('nl15').style.backgroundColor = '#99C262';
        document.getElementById('nl13').style.color = '#99C262';
        document.getElementById('nl14').style.color = '#99C262';
        document.getElementById('nl15').style.color = '#99C262';
        document.getElementById('click5').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((redsixteentotal == 1) && (parseInt(document.getElementById('click5').innerHTML, 10) >= 3)) {
        document.getElementById('hide5La').innerHTML = 3;
        document.getElementById('hide5Lb').innerHTML = 3 + (parseInt(document.getElementById('click5').innerHTML, 10) - 5);
        document.getElementById('nl13').innerHTML = 1;
        document.getElementById('nl13').innerHTML = 1;
        document.getElementById('nl14').innerHTML = 1;
        document.getElementById('nl15').innerHTML = 1;
        document.getElementById('nl13').style.backgroundColor = '#99C262';
        document.getElementById('nl14').style.backgroundColor = '#99C262';
        document.getElementById('nl15').style.backgroundColor = '#99C262';
        document.getElementById('nl13').style.color = '#99C262';
        document.getElementById('nl14').style.color = '#99C262';
        document.getElementById('nl15').style.color = '#99C262';
        document.getElementById('click5').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((redsixteentotal == 2) && (parseInt(document.getElementById('click5').innerHTML, 10) >= 2)) {
        document.getElementById('hide5La').innerHTML = 3;
        document.getElementById('hide5Lb').innerHTML = 3 + (parseInt(document.getElementById('click5').innerHTML, 10) - 4);
        document.getElementById('nl13').innerHTML = 1;
        document.getElementById('nl14').innerHTML = 1;
        document.getElementById('nl15').innerHTML = 1;
        document.getElementById('nl13').style.backgroundColor = '#99C262';
        document.getElementById('nl14').style.backgroundColor = '#99C262';
        document.getElementById('nl15').style.backgroundColor = '#99C262';
        document.getElementById('nl13').style.color = '#99C262';
        document.getElementById('nl14').style.color = '#99C262';
        document.getElementById('nl15').style.color = '#99C262';
        document.getElementById('click5').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }

    // redFifteen
    if ((redfifteentotal == 3) && (parseInt(document.getElementById('click6').innerHTML, 10) >= 1)) {
        document.getElementById('hide6Lb').innerHTML = (parseInt(document.getElementById('hide6Lb').innerHTML, 10)) + (parseInt(leftFifteen.innerHTML, 10));
        document.getElementById('click6').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((redfifteentotal == 0) && (parseInt(document.getElementById('click6').innerHTML, 10) == 1)) {
        document.getElementById('hide6La').innerHTML = 1;
        document.getElementById('nl16').innerHTML = 1;
        document.getElementById('nl16').style.backgroundColor = '#99C262';
        document.getElementById('nl16').style.color = '#99C262';
        document.getElementById('click6').innerHTML = 0;
    }
    if ((redfifteentotal == 0) && (parseInt(document.getElementById('click6').innerHTML, 10) == 2)) {
        document.getElementById('hide6La').innerHTML = 2;
        document.getElementById('nl16').innerHTML = 1;
        document.getElementById('nl17').innerHTML = 1;
        document.getElementById('nl16').style.backgroundColor = '#99C262';
        document.getElementById('nl17').style.backgroundColor = '#99C262';
        document.getElementById('nl16').style.color = '#99C262';
        document.getElementById('nl17').style.color = '#99C262';
        document.getElementById('click6').innerHTML = 0;
    }
    if ((redfifteentotal == 0) && (parseInt(document.getElementById('click6').innerHTML, 10) == 3)) {
        document.getElementById('hide6La').innerHTML = 3;
        document.getElementById('nl16').innerHTML = 1;
        document.getElementById('nl17').innerHTML = 1;
        document.getElementById('nl18').innerHTML = 1;
        document.getElementById('nl16').style.backgroundColor = '#99C262';
        document.getElementById('nl17').style.backgroundColor = '#99C262';
        document.getElementById('nl18').style.backgroundColor = '#99C262';
        document.getElementById('nl16').style.color = '#99C262';
        document.getElementById('nl17').style.color = '#99C262';
        document.getElementById('nl18').style.color = '#99C262';
        document.getElementById('click6').innerHTML = 0;
    }
    if ((redfifteentotal == 1) && (parseInt(document.getElementById('click6').innerHTML, 10) == 1)) {
        document.getElementById('hide6La').innerHTML = 2;
        document.getElementById('nl16').innerHTML = 1;
        document.getElementById('nl17').innerHTML = 1;
        document.getElementById('nl16').style.backgroundColor = '#99C262';
        document.getElementById('nl17').style.backgroundColor = '#99C262';
        document.getElementById('nl16').style.color = '#99C262';
        document.getElementById('nl17').style.color = '#99C262';
        document.getElementById('click6').innerHTML = 0;
    }
    if ((redfifteentotal == 1) && (parseInt(document.getElementById('click6').innerHTML, 10) == 2)) {
        document.getElementById('hide6La').innerHTML = 3;
        document.getElementById('nl16').innerHTML = 1;
        document.getElementById('nl17').innerHTML = 1;
        document.getElementById('nl18').innerHTML = 1;
        document.getElementById('nl16').style.backgroundColor = '#99C262';
        document.getElementById('nl17').style.backgroundColor = '#99C262';
        document.getElementById('nl18').style.backgroundColor = '#99C262';
        document.getElementById('nl16').style.color = '#99C262';
        document.getElementById('nl17').style.color = '#99C262';
        document.getElementById('nl18').style.color = '#99C262';
        document.getElementById('click6').innerHTML = 0;
    }
    if ((redfifteentotal == 2) && (parseInt(document.getElementById('click6').innerHTML, 10) == 1)) {
        document.getElementById('hide6La').innerHTML = 3;
        document.getElementById('nl16').innerHTML = 1;
        document.getElementById('nl17').innerHTML = 1;
        document.getElementById('nl18').innerHTML = 1;
        document.getElementById('nl16').style.backgroundColor = '#99C262';
        document.getElementById('nl17').style.backgroundColor = '#99C262';
        document.getElementById('nl18').style.backgroundColor = '#99C262';
        document.getElementById('nl16').style.color = '#99C262';
        document.getElementById('nl17').style.color = '#99C262';
        document.getElementById('nl18').style.color = '#99C262';
        document.getElementById('click6').innerHTML = 0;
    }
    if ((redfifteentotal == 0) && (parseInt(document.getElementById('click6').innerHTML, 10) > 3)) {
        document.getElementById('hide6La').innerHTML = 3;
        document.getElementById('hide6Lb').innerHTML = 3 + (parseInt(document.getElementById('click6').innerHTML, 10) - 6);
        document.getElementById('nl16').innerHTML = 1;
        document.getElementById('nl17').innerHTML = 1;
        document.getElementById('nl18').innerHTML = 1;
        document.getElementById('nl16').style.backgroundColor = '#99C262';
        document.getElementById('nl17').style.backgroundColor = '#99C262';
        document.getElementById('nl18').style.backgroundColor = '#99C262';
        document.getElementById('nl16').style.color = '#99C262';
        document.getElementById('nl17').style.color = '#99C262';
        document.getElementById('nl18').style.color = '#99C262';
        document.getElementById('click6').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((redfifteentotal == 1) && (parseInt(document.getElementById('click6').innerHTML, 10) >= 3)) {
        document.getElementById('hide6La').innerHTML = 3;
        document.getElementById('hide6Lb').innerHTML = 3 + (parseInt(document.getElementById('click6').innerHTML, 10) - 5);
        document.getElementById('nl16').innerHTML = 1;
        document.getElementById('nl16').innerHTML = 1;
        document.getElementById('nl17').innerHTML = 1;
        document.getElementById('nl18').innerHTML = 1;
        document.getElementById('nl16').style.backgroundColor = '#99C262';
        document.getElementById('nl17').style.backgroundColor = '#99C262';
        document.getElementById('nl18').style.backgroundColor = '#99C262';
        document.getElementById('nl16').style.color = '#99C262';
        document.getElementById('nl17').style.color = '#99C262';
        document.getElementById('nl18').style.color = '#99C262';
        document.getElementById('click6').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((redfifteentotal == 2) && (parseInt(document.getElementById('click6').innerHTML, 10) >= 2)) {
        document.getElementById('hide6La').innerHTML = 3;
        document.getElementById('hide6Lb').innerHTML = 3 + (parseInt(document.getElementById('click6').innerHTML, 10) - 4);
        document.getElementById('nl16').innerHTML = 1;
        document.getElementById('nl17').innerHTML = 1;
        document.getElementById('nl18').innerHTML = 1;
        document.getElementById('nl16').style.backgroundColor = '#99C262';
        document.getElementById('nl17').style.backgroundColor = '#99C262';
        document.getElementById('nl18').style.backgroundColor = '#99C262';
        document.getElementById('nl16').style.color = '#99C262';
        document.getElementById('nl17').style.color = '#99C262';
        document.getElementById('nl18').style.color = '#99C262';
        document.getElementById('click6').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }

    // redBull
    if ((redbulltotal == 3) && (parseInt(document.getElementById('click7').innerHTML, 10) >= 1)) {
        document.getElementById('hide7Lb').innerHTML = (parseInt(document.getElementById('hide7Lb').innerHTML, 10)) + (parseInt(leftBull.innerHTML, 10));
        document.getElementById('click7').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((redbulltotal == 0) && (parseInt(document.getElementById('click7').innerHTML, 10) == 1)) {
        document.getElementById('hide7La').innerHTML = 1;
        document.getElementById('nl19').innerHTML = 1;
        document.getElementById('nl19').style.backgroundColor = '#99C262';
        document.getElementById('nl19').style.color = '#99C262';
        document.getElementById('click7').innerHTML = 0;
    }
    if ((redbulltotal == 0) && (parseInt(document.getElementById('click7').innerHTML, 10) == 2)) {
        document.getElementById('hide7La').innerHTML = 2;
        document.getElementById('nl19').innerHTML = 1;
        document.getElementById('nl20').innerHTML = 1;
        document.getElementById('nl19').style.backgroundColor = '#99C262';
        document.getElementById('nl20').style.backgroundColor = '#99C262';
        document.getElementById('nl19').style.color = '#99C262';
        document.getElementById('nl20').style.color = '#99C262';
        document.getElementById('click7').innerHTML = 0;
    }
    if ((redbulltotal == 0) && (parseInt(document.getElementById('click7').innerHTML, 10) == 3)) {
        document.getElementById('hide7La').innerHTML = 3;
        document.getElementById('nl19').innerHTML = 1;
        document.getElementById('nl20').innerHTML = 1;
        document.getElementById('nl21').innerHTML = 1;
        document.getElementById('nl19').style.backgroundColor = '#99C262';
        document.getElementById('nl20').style.backgroundColor = '#99C262';
        document.getElementById('nl21').style.backgroundColor = '#99C262';
        document.getElementById('nl19').style.color = '#99C262';
        document.getElementById('nl20').style.color = '#99C262';
        document.getElementById('nl21').style.color = '#99C262';
        document.getElementById('click7').innerHTML = 0;
    }
    if ((redbulltotal == 1) && (parseInt(document.getElementById('click7').innerHTML, 10) == 1)) {
        document.getElementById('hide7La').innerHTML = 2;
        document.getElementById('nl19').innerHTML = 1;
        document.getElementById('nl20').innerHTML = 1;
        document.getElementById('nl19').style.backgroundColor = '#99C262';
        document.getElementById('nl20').style.backgroundColor = '#99C262';
        document.getElementById('nl19').style.color = '#99C262';
        document.getElementById('nl20').style.color = '#99C262';
        document.getElementById('click7').innerHTML = 0;
    }
    if ((redbulltotal == 1) && (parseInt(document.getElementById('click7').innerHTML, 10) == 2)) {
        document.getElementById('hide7La').innerHTML = 3;
        document.getElementById('nl19').innerHTML = 1;
        document.getElementById('nl20').innerHTML = 1;
        document.getElementById('nl21').innerHTML = 1;
        document.getElementById('nl19').style.backgroundColor = '#99C262';
        document.getElementById('nl20').style.backgroundColor = '#99C262';
        document.getElementById('nl21').style.backgroundColor = '#99C262';
        document.getElementById('nl19').style.color = '#99C262';
        document.getElementById('nl20').style.color = '#99C262';
        document.getElementById('nl21').style.color = '#99C262';
        document.getElementById('click7').innerHTML = 0;
    }
    if ((redbulltotal == 2) && (parseInt(document.getElementById('click7').innerHTML, 10) == 1)) {
        document.getElementById('hide7La').innerHTML = 3;
        document.getElementById('nl19').innerHTML = 1;
        document.getElementById('nl20').innerHTML = 1;
        document.getElementById('nl21').innerHTML = 1;
        document.getElementById('nl19').style.backgroundColor = '#99C262';
        document.getElementById('nl20').style.backgroundColor = '#99C262';
        document.getElementById('nl21').style.backgroundColor = '#99C262';
        document.getElementById('nl19').style.color = '#99C262';
        document.getElementById('nl20').style.color = '#99C262';
        document.getElementById('nl21').style.color = '#99C262';
        document.getElementById('click7').innerHTML = 0;
    }
    if ((redbulltotal == 0) && (parseInt(document.getElementById('click7').innerHTML, 10) > 3)) {
        document.getElementById('hide7La').innerHTML = 3;
        document.getElementById('hide7Lb').innerHTML = 3 + (parseInt(document.getElementById('click7').innerHTML, 10) - 6);
        document.getElementById('nl19').innerHTML = 1;
        document.getElementById('nl20').innerHTML = 1;
        document.getElementById('nl21').innerHTML = 1;
        document.getElementById('nl19').style.backgroundColor = '#99C262';
        document.getElementById('nl20').style.backgroundColor = '#99C262';
        document.getElementById('nl21').style.backgroundColor = '#99C262';
        document.getElementById('nl19').style.color = '#99C262';
        document.getElementById('nl20').style.color = '#99C262';
        document.getElementById('nl21').style.color = '#99C262';
        document.getElementById('click7').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((redbulltotal == 1) && (parseInt(document.getElementById('click7').innerHTML, 10) >= 3)) {
        document.getElementById('hide7La').innerHTML = 3;
        document.getElementById('hide7Lb').innerHTML = 3 + (parseInt(document.getElementById('click7').innerHTML, 10) - 5);
        document.getElementById('nl19').innerHTML = 1;
        document.getElementById('nl19').innerHTML = 1;
        document.getElementById('nl20').innerHTML = 1;
        document.getElementById('nl21').innerHTML = 1;
        document.getElementById('nl19').style.backgroundColor = '#99C262';
        document.getElementById('nl20').style.backgroundColor = '#99C262';
        document.getElementById('nl21').style.backgroundColor = '#99C262';
        document.getElementById('nl19').style.color = '#99C262';
        document.getElementById('nl20').style.color = '#99C262';
        document.getElementById('nl21').style.color = '#99C262';
        document.getElementById('click7').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }
    if ((redbulltotal == 2) && (parseInt(document.getElementById('click7').innerHTML, 10) >= 2)) {
        document.getElementById('hide7La').innerHTML = 3;
        document.getElementById('hide7Lb').innerHTML = 3 + (parseInt(document.getElementById('click7').innerHTML, 10) - 4);
        document.getElementById('nl19').innerHTML = 1;
        document.getElementById('nl20').innerHTML = 1;
        document.getElementById('nl21').innerHTML = 1;
        document.getElementById('nl19').style.backgroundColor = '#99C262';
        document.getElementById('nl20').style.backgroundColor = '#99C262';
        document.getElementById('nl21').style.backgroundColor = '#99C262';
        document.getElementById('nl19').style.color = '#99C262';
        document.getElementById('nl20').style.color = '#99C262';
        document.getElementById('nl21').style.color = '#99C262';
        document.getElementById('click7').innerHTML = 0;
        document.getElementById('sbl').innerHTML = parseInt(document.getElementById('hide1Lb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Lb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Lb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Lb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Lb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Lb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Lb').innerHTML, 10) * 25;
    }

    // Reset add
    add1 = (function () {
        var counter1 = 0;
        return function () { return counter1 += 1; };
    })();
    add2 = (function () {
        var counter2 = 0;
        return function () { return counter2 += 1; };
    })();
    add3 = (function () {
        var counter3 = 0;
        return function () { return counter3 += 1; };
    })();
    add4 = (function () {
        var counter4 = 0;
        return function () { return counter4 += 1; };
    })();
    add5 = (function () {
        var counter5 = 0;
        return function () { return counter5 += 1; };
    })();
    add6 = (function () {
        var counter6 = 0;
        return function () { return counter6 += 1; };
    })();
    add7 = (function () {
        var counter7 = 0;
        return function () { return counter7 += 1; };
    })();
};

// Cricket Score Enter Buttons
function buttonClick1() {
    document.getElementById("click1").innerHTML = add1();
}
function buttonClick2() {
    document.getElementById("click2").innerHTML = add2();
}
function buttonClick3() {
    document.getElementById("click3").innerHTML = add3();
}
function buttonClick4() {
    document.getElementById("click4").innerHTML = add4();
}
function buttonClick5() {
    document.getElementById("click5").innerHTML = add5();
}
function buttonClick6() {
    document.getElementById("click6").innerHTML = add6();
}
function buttonClick7() {
    document.getElementById("click7").innerHTML = add7();
}

// Score Enter Button Blue (right)
function enterBlueScore() {

    var blue20 = document.getElementById('hide1Rb');
    var blue19 = document.getElementById('hide2Rb');
    var blue18 = document.getElementById('hide3Rb');
    var blue17 = document.getElementById('hide4Rb');
    var blue16 = document.getElementById('hide5Rb');
    var blue15 = document.getElementById('hide6Rb');
    var blue25 = document.getElementById('hide7Rb');

    var righttwenty = document.getElementById('click1');
    var rightNineteen = document.getElementById('click2');
    var rightEighteen = document.getElementById('click3');
    var rightSeventeen = document.getElementById('click4');
    var rightSixteen = document.getElementById('click5');
    var rightFifteen = document.getElementById('click6');
    var rightBull = document.getElementById('click7');

    var bluetwentytotal = parseInt(document.getElementById('nr1').innerHTML, 10) + parseInt(document.getElementById('nr2').innerHTML, 10) + parseInt(document.getElementById('nr3').innerHTML, 10);
    var bluenineteentotal = parseInt(document.getElementById('nr4').innerHTML, 10) + parseInt(document.getElementById('nr5').innerHTML, 10) + parseInt(document.getElementById('nr6').innerHTML, 10);
    var blueeighteentotal = parseInt(document.getElementById('nr7').innerHTML, 10) + parseInt(document.getElementById('nr8').innerHTML, 10) + parseInt(document.getElementById('nr9').innerHTML, 10);
    var blueseventeentotal = parseInt(document.getElementById('nr10').innerHTML, 10) + parseInt(document.getElementById('nr11').innerHTML, 10) + parseInt(document.getElementById('nr12').innerHTML, 10);
    var bluesixteentotal = parseInt(document.getElementById('nr13').innerHTML, 10) + parseInt(document.getElementById('nr14').innerHTML, 10) + parseInt(document.getElementById('nr15').innerHTML, 10);
    var bluefifteentotal = parseInt(document.getElementById('nr16').innerHTML, 10) + parseInt(document.getElementById('nr17').innerHTML, 10) + parseInt(document.getElementById('nr18').innerHTML, 10);
    var bluebulltotal = parseInt(document.getElementById('nr19').innerHTML, 10) + parseInt(document.getElementById('nr20').innerHTML, 10) + parseInt(document.getElementById('nr21').innerHTML, 10);


    if (parseInt(document.getElementById('total').innerHTML, 10) == 301) {
        document.getElementById('sbl').innerHTML = "301";
        document.getElementById('sbr').innerHTML = "301";
        document.getElementById('total').innerHTML = "000";
    }
    if (parseInt(document.getElementById('total').innerHTML, 10) == 501) {
        document.getElementById('sbl').innerHTML = "501";
        document.getElementById('sbr').innerHTML = "501";
        document.getElementById('total').innerHTML = "000";
    }
    if (parseInt(document.getElementById('sbr').innerHTML, 10) != 0) {
        document.getElementById('sbr2').innerHTML = document.getElementById('total').innerHTML;
        document.getElementById('sbr').innerHTML = (parseInt(document.getElementById('sbr').innerHTML, 10) - parseInt(document.getElementById('sbr2').innerHTML, 10));
    }

    // CRICKET

    // blueTwenty
    if ((bluetwentytotal == 3) && (parseInt(document.getElementById('click1').innerHTML, 10) >= 1)) {
        document.getElementById('hide1Rb').innerHTML = (parseInt(document.getElementById('hide1Rb').innerHTML, 10)) + (parseInt(righttwenty.innerHTML, 10));
        document.getElementById('click1').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((bluetwentytotal == 0) && (parseInt(document.getElementById('click1').innerHTML, 10) == 1)) {
        document.getElementById('hide1Ra').innerHTML = 1;
        document.getElementById('nr1').innerHTML = 1;
        document.getElementById('nr1').style.backgroundColor = '#99C262';
        document.getElementById('nr1').style.color = '#99C262';
        document.getElementById('click1').innerHTML = 0;
    }
    if ((bluetwentytotal == 0) && (parseInt(document.getElementById('click1').innerHTML, 10) == 2)) {
        document.getElementById('hide1Ra').innerHTML = 2;
        document.getElementById('nr1').innerHTML = 1;
        document.getElementById('nr2').innerHTML = 1;
        document.getElementById('nr1').style.backgroundColor = '#99C262';
        document.getElementById('nr2').style.backgroundColor = '#99C262';
        document.getElementById('nr1').style.color = '#99C262';
        document.getElementById('nr2').style.color = '#99C262';
        document.getElementById('click1').innerHTML = 0;
    }
    if ((bluetwentytotal == 0) && (parseInt(document.getElementById('click1').innerHTML, 10) == 3)) {
        document.getElementById('hide1Ra').innerHTML = 3;
        document.getElementById('nr1').innerHTML = 1;
        document.getElementById('nr2').innerHTML = 1;
        document.getElementById('nr3').innerHTML = 1;
        document.getElementById('nr1').style.backgroundColor = '#99C262';
        document.getElementById('nr2').style.backgroundColor = '#99C262';
        document.getElementById('nr3').style.backgroundColor = '#99C262';
        document.getElementById('nr1').style.color = '#99C262';
        document.getElementById('nr2').style.color = '#99C262';
        document.getElementById('nr3').style.color = '#99C262';
        document.getElementById('click1').innerHTML = 0;
    }
    if ((bluetwentytotal == 1) && (parseInt(document.getElementById('click1').innerHTML, 10) == 1)) {
        document.getElementById('hide1Ra').innerHTML = 2;
        document.getElementById('nr1').innerHTML = 1;
        document.getElementById('nr2').innerHTML = 1;
        document.getElementById('nr1').style.backgroundColor = '#99C262';
        document.getElementById('nr2').style.backgroundColor = '#99C262';
        document.getElementById('nr1').style.color = '#99C262';
        document.getElementById('nr2').style.color = '#99C262';
        document.getElementById('click1').innerHTML = 0;
    }
    if ((bluetwentytotal == 1) && (parseInt(document.getElementById('click1').innerHTML, 10) == 2)) {
        document.getElementById('hide1Ra').innerHTML = 3;
        document.getElementById('nr1').innerHTML = 1;
        document.getElementById('nr2').innerHTML = 1;
        document.getElementById('nr3').innerHTML = 1;
        document.getElementById('nr1').style.backgroundColor = '#99C262';
        document.getElementById('nr2').style.backgroundColor = '#99C262';
        document.getElementById('nr3').style.backgroundColor = '#99C262';
        document.getElementById('nr1').style.color = '#99C262';
        document.getElementById('nr2').style.color = '#99C262';
        document.getElementById('nr3').style.color = '#99C262';
        document.getElementById('click1').innerHTML = 0;
    }
    if ((bluetwentytotal == 2) && (parseInt(document.getElementById('click1').innerHTML, 10) == 1)) {
        document.getElementById('hide1Ra').innerHTML = 3;
        document.getElementById('nr1').innerHTML = 1;
        document.getElementById('nr2').innerHTML = 1;
        document.getElementById('nr3').innerHTML = 1;
        document.getElementById('nr1').style.backgroundColor = '#99C262';
        document.getElementById('nr2').style.backgroundColor = '#99C262';
        document.getElementById('nr3').style.backgroundColor = '#99C262';
        document.getElementById('nr1').style.color = '#99C262';
        document.getElementById('nr2').style.color = '#99C262';
        document.getElementById('nr3').style.color = '#99C262';
        document.getElementById('click1').innerHTML = 0;
    }
    if ((bluetwentytotal == 0) && (parseInt(document.getElementById('click1').innerHTML, 10) > 3)) {
        document.getElementById('hide1Ra').innerHTML = 3;
        document.getElementById('hide1Rb').innerHTML = 3 + (parseInt(document.getElementById('click1').innerHTML, 10) - 6);
        document.getElementById('nr1').innerHTML = 1;
        document.getElementById('nr2').innerHTML = 1;
        document.getElementById('nr3').innerHTML = 1;
        document.getElementById('nr1').style.backgroundColor = '#99C262';
        document.getElementById('nr2').style.backgroundColor = '#99C262';
        document.getElementById('nr3').style.backgroundColor = '#99C262';
        document.getElementById('nr1').style.color = '#99C262';
        document.getElementById('nr2').style.color = '#99C262';
        document.getElementById('nr3').style.color = '#99C262';
        document.getElementById('click1').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((bluetwentytotal == 1) && (parseInt(document.getElementById('click1').innerHTML, 10) >= 3)) {
        document.getElementById('hide1Ra').innerHTML = 3;
        document.getElementById('hide1Rb').innerHTML = 3 + (parseInt(document.getElementById('click1').innerHTML, 10) - 5);
        document.getElementById('nr1').innerHTML = 1;
        document.getElementById('nr1').innerHTML = 1;
        document.getElementById('nr2').innerHTML = 1;
        document.getElementById('nr3').innerHTML = 1;
        document.getElementById('nr1').style.backgroundColor = '#99C262';
        document.getElementById('nr2').style.backgroundColor = '#99C262';
        document.getElementById('nr3').style.backgroundColor = '#99C262';
        document.getElementById('nr1').style.color = '#99C262';
        document.getElementById('nr2').style.color = '#99C262';
        document.getElementById('nr3').style.color = '#99C262';
        document.getElementById('click1').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((bluetwentytotal == 2) && (parseInt(document.getElementById('click1').innerHTML, 10) >= 2)) {
        document.getElementById('hide1Ra').innerHTML = 3;
        document.getElementById('hide1Rb').innerHTML = 3 + (parseInt(document.getElementById('click1').innerHTML, 10) - 4);
        document.getElementById('nr1').innerHTML = 1;
        document.getElementById('nr2').innerHTML = 1;
        document.getElementById('nr3').innerHTML = 1;
        document.getElementById('nr1').style.backgroundColor = '#99C262';
        document.getElementById('nr2').style.backgroundColor = '#99C262';
        document.getElementById('nr3').style.backgroundColor = '#99C262';
        document.getElementById('nr1').style.color = '#99C262';
        document.getElementById('nr2').style.color = '#99C262';
        document.getElementById('nr3').style.color = '#99C262';
        document.getElementById('click1').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }

    // blueNineteen
    if ((bluenineteentotal == 3) && (parseInt(document.getElementById('click2').innerHTML, 10) >= 1)) {
        document.getElementById('hide2Rb').innerHTML = (parseInt(document.getElementById('hide2Rb').innerHTML, 10)) + (parseInt(rightNineteen.innerHTML, 10));
        document.getElementById('click2').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((bluenineteentotal == 0) && (parseInt(document.getElementById('click2').innerHTML, 10) == 1)) {
        document.getElementById('hide2Ra').innerHTML = 1;
        document.getElementById('nr4').innerHTML = 1;
        document.getElementById('nr4').style.backgroundColor = '#99C262';
        document.getElementById('nr4').style.color = '#99C262';
        document.getElementById('click2').innerHTML = 0;
    }
    if ((bluenineteentotal == 0) && (parseInt(document.getElementById('click2').innerHTML, 10) == 2)) {
        document.getElementById('hide2Ra').innerHTML = 2;
        document.getElementById('nr4').innerHTML = 1;
        document.getElementById('nr5').innerHTML = 1;
        document.getElementById('nr4').style.backgroundColor = '#99C262';
        document.getElementById('nr5').style.backgroundColor = '#99C262';
        document.getElementById('nr4').style.color = '#99C262';
        document.getElementById('nr5').style.color = '#99C262';
        document.getElementById('click2').innerHTML = 0;
    }
    if ((bluenineteentotal == 0) && (parseInt(document.getElementById('click2').innerHTML, 10) == 3)) {
        document.getElementById('hide2Ra').innerHTML = 3;
        document.getElementById('nr4').innerHTML = 1;
        document.getElementById('nr5').innerHTML = 1;
        document.getElementById('nr6').innerHTML = 1;
        document.getElementById('nr4').style.backgroundColor = '#99C262';
        document.getElementById('nr5').style.backgroundColor = '#99C262';
        document.getElementById('nr6').style.backgroundColor = '#99C262';
        document.getElementById('nr4').style.color = '#99C262';
        document.getElementById('nr5').style.color = '#99C262';
        document.getElementById('nr6').style.color = '#99C262';
        document.getElementById('click2').innerHTML = 0;
    }
    if ((bluenineteentotal == 1) && (parseInt(document.getElementById('click2').innerHTML, 10) == 1)) {
        document.getElementById('hide2Ra').innerHTML = 2;
        document.getElementById('nr4').innerHTML = 1;
        document.getElementById('nr5').innerHTML = 1;
        document.getElementById('nr4').style.backgroundColor = '#99C262';
        document.getElementById('nr5').style.backgroundColor = '#99C262';
        document.getElementById('nr4').style.color = '#99C262';
        document.getElementById('nr5').style.color = '#99C262';
        document.getElementById('click2').innerHTML = 0;
    }
    if ((bluenineteentotal == 1) && (parseInt(document.getElementById('click2').innerHTML, 10) == 2)) {
        document.getElementById('hide2Ra').innerHTML = 3;
        document.getElementById('nr4').innerHTML = 1;
        document.getElementById('nr5').innerHTML = 1;
        document.getElementById('nr6').innerHTML = 1;
        document.getElementById('nr4').style.backgroundColor = '#99C262';
        document.getElementById('nr5').style.backgroundColor = '#99C262';
        document.getElementById('nr6').style.backgroundColor = '#99C262';
        document.getElementById('nr4').style.color = '#99C262';
        document.getElementById('nr5').style.color = '#99C262';
        document.getElementById('nr6').style.color = '#99C262';
        document.getElementById('click2').innerHTML = 0;
    }
    if ((bluenineteentotal == 2) && (parseInt(document.getElementById('click2').innerHTML, 10) == 1)) {
        document.getElementById('hide2Ra').innerHTML = 3;
        document.getElementById('nr4').innerHTML = 1;
        document.getElementById('nr5').innerHTML = 1;
        document.getElementById('nr6').innerHTML = 1;
        document.getElementById('nr4').style.backgroundColor = '#99C262';
        document.getElementById('nr5').style.backgroundColor = '#99C262';
        document.getElementById('nr6').style.backgroundColor = '#99C262';
        document.getElementById('nr4').style.color = '#99C262';
        document.getElementById('nr5').style.color = '#99C262';
        document.getElementById('nr6').style.color = '#99C262';
        document.getElementById('click2').innerHTML = 0;
    }
    if ((bluenineteentotal == 0) && (parseInt(document.getElementById('click2').innerHTML, 10) > 3)) {
        document.getElementById('hide2Ra').innerHTML = 3;
        document.getElementById('hide2Rb').innerHTML = 3 + (parseInt(document.getElementById('click2').innerHTML, 10) - 6);
        document.getElementById('nr4').innerHTML = 1;
        document.getElementById('nr5').innerHTML = 1;
        document.getElementById('nr6').innerHTML = 1;
        document.getElementById('nr4').style.backgroundColor = '#99C262';
        document.getElementById('nr5').style.backgroundColor = '#99C262';
        document.getElementById('nr6').style.backgroundColor = '#99C262';
        document.getElementById('nr4').style.color = '#99C262';
        document.getElementById('nr5').style.color = '#99C262';
        document.getElementById('nr6').style.color = '#99C262';
        document.getElementById('click2').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((bluenineteentotal == 1) && (parseInt(document.getElementById('click2').innerHTML, 10) >= 3)) {
        document.getElementById('hide2Ra').innerHTML = 3;
        document.getElementById('hide2Rb').innerHTML = 3 + (parseInt(document.getElementById('click2').innerHTML, 10) - 5);
        document.getElementById('nr4').innerHTML = 1;
        document.getElementById('nr4').innerHTML = 1;
        document.getElementById('nr5').innerHTML = 1;
        document.getElementById('nr6').innerHTML = 1;
        document.getElementById('nr4').style.backgroundColor = '#99C262';
        document.getElementById('nr5').style.backgroundColor = '#99C262';
        document.getElementById('nr6').style.backgroundColor = '#99C262';
        document.getElementById('nr4').style.color = '#99C262';
        document.getElementById('nr5').style.color = '#99C262';
        document.getElementById('nr6').style.color = '#99C262';
        document.getElementById('click2').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((bluenineteentotal == 2) && (parseInt(document.getElementById('click2').innerHTML, 10) >= 2)) {
        document.getElementById('hide2Ra').innerHTML = 3;
        document.getElementById('hide2Rb').innerHTML = 3 + (parseInt(document.getElementById('click2').innerHTML, 10) - 4);
        document.getElementById('nr4').innerHTML = 1;
        document.getElementById('nr5').innerHTML = 1;
        document.getElementById('nr6').innerHTML = 1;
        document.getElementById('nr4').style.backgroundColor = '#99C262';
        document.getElementById('nr5').style.backgroundColor = '#99C262';
        document.getElementById('nr6').style.backgroundColor = '#99C262';
        document.getElementById('nr4').style.color = '#99C262';
        document.getElementById('nr5').style.color = '#99C262';
        document.getElementById('nr6').style.color = '#99C262';
        document.getElementById('click2').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }

    // blueEighteen
    if ((blueeighteentotal == 3) && (parseInt(document.getElementById('click3').innerHTML, 10) >= 1)) {
        document.getElementById('hide3Rb').innerHTML = (parseInt(document.getElementById('hide3Rb').innerHTML, 10)) + (parseInt(rightEighteen.innerHTML, 10));
        document.getElementById('click3').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((blueeighteentotal == 0) && (parseInt(document.getElementById('click3').innerHTML, 10) == 1)) {
        document.getElementById('hide3Ra').innerHTML = 1;
        document.getElementById('nr7').innerHTML = 1;
        document.getElementById('nr7').style.backgroundColor = '#99C262';
        document.getElementById('nr7').style.color = '#99C262';
        document.getElementById('click3').innerHTML = 0;
    }
    if ((blueeighteentotal == 0) && (parseInt(document.getElementById('click3').innerHTML, 10) == 2)) {
        document.getElementById('hide3Ra').innerHTML = 2;
        document.getElementById('nr7').innerHTML = 1;
        document.getElementById('nr8').innerHTML = 1;
        document.getElementById('nr7').style.backgroundColor = '#99C262';
        document.getElementById('nr8').style.backgroundColor = '#99C262';
        document.getElementById('nr7').style.color = '#99C262';
        document.getElementById('nr8').style.color = '#99C262';
        document.getElementById('click3').innerHTML = 0;
    }
    if ((blueeighteentotal == 0) && (parseInt(document.getElementById('click3').innerHTML, 10) == 3)) {
        document.getElementById('hide3Ra').innerHTML = 3;
        document.getElementById('nr7').innerHTML = 1;
        document.getElementById('nr8').innerHTML = 1;
        document.getElementById('nr9').innerHTML = 1;
        document.getElementById('nr7').style.backgroundColor = '#99C262';
        document.getElementById('nr8').style.backgroundColor = '#99C262';
        document.getElementById('nr9').style.backgroundColor = '#99C262';
        document.getElementById('nr7').style.color = '#99C262';
        document.getElementById('nr8').style.color = '#99C262';
        document.getElementById('nr9').style.color = '#99C262';
        document.getElementById('click3').innerHTML = 0;
    }
    if ((blueeighteentotal == 1) && (parseInt(document.getElementById('click3').innerHTML, 10) == 1)) {
        document.getElementById('hide3Ra').innerHTML = 2;
        document.getElementById('nr7').innerHTML = 1;
        document.getElementById('nr8').innerHTML = 1;
        document.getElementById('nr7').style.backgroundColor = '#99C262';
        document.getElementById('nr8').style.backgroundColor = '#99C262';
        document.getElementById('nr7').style.color = '#99C262';
        document.getElementById('nr8').style.color = '#99C262';
        document.getElementById('click3').innerHTML = 0;
    }
    if ((blueeighteentotal == 1) && (parseInt(document.getElementById('click3').innerHTML, 10) == 2)) {
        document.getElementById('hide3Ra').innerHTML = 3;
        document.getElementById('nr7').innerHTML = 1;
        document.getElementById('nr8').innerHTML = 1;
        document.getElementById('nr9').innerHTML = 1;
        document.getElementById('nr7').style.backgroundColor = '#99C262';
        document.getElementById('nr8').style.backgroundColor = '#99C262';
        document.getElementById('nr9').style.backgroundColor = '#99C262';
        document.getElementById('nr7').style.color = '#99C262';
        document.getElementById('nr8').style.color = '#99C262';
        document.getElementById('nr9').style.color = '#99C262';
        document.getElementById('click3').innerHTML = 0;
    }
    if ((blueeighteentotal == 2) && (parseInt(document.getElementById('click3').innerHTML, 10) == 1)) {
        document.getElementById('hide3Ra').innerHTML = 3;
        document.getElementById('nr7').innerHTML = 1;
        document.getElementById('nr8').innerHTML = 1;
        document.getElementById('nr9').innerHTML = 1;
        document.getElementById('nr7').style.backgroundColor = '#99C262';
        document.getElementById('nr8').style.backgroundColor = '#99C262';
        document.getElementById('nr9').style.backgroundColor = '#99C262';
        document.getElementById('nr7').style.color = '#99C262';
        document.getElementById('nr8').style.color = '#99C262';
        document.getElementById('nr9').style.color = '#99C262';
        document.getElementById('click3').innerHTML = 0;
    }
    if ((blueeighteentotal == 0) && (parseInt(document.getElementById('click3').innerHTML, 10) > 3)) {
        document.getElementById('hide3Ra').innerHTML = 3;
        document.getElementById('hide3Rb').innerHTML = 3 + (parseInt(document.getElementById('click3').innerHTML, 10) - 6);
        document.getElementById('nr7').innerHTML = 1;
        document.getElementById('nr8').innerHTML = 1;
        document.getElementById('nr9').innerHTML = 1;
        document.getElementById('nr7').style.backgroundColor = '#99C262';
        document.getElementById('nr8').style.backgroundColor = '#99C262';
        document.getElementById('nr9').style.backgroundColor = '#99C262';
        document.getElementById('nr7').style.color = '#99C262';
        document.getElementById('nr8').style.color = '#99C262';
        document.getElementById('nr9').style.color = '#99C262';
        document.getElementById('click3').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((blueeighteentotal == 1) && (parseInt(document.getElementById('click3').innerHTML, 10) >= 3)) {
        document.getElementById('hide3Ra').innerHTML = 3;
        document.getElementById('hide3Rb').innerHTML = 3 + (parseInt(document.getElementById('click3').innerHTML, 10) - 5);
        document.getElementById('nr7').innerHTML = 1;
        document.getElementById('nr7').innerHTML = 1;
        document.getElementById('nr8').innerHTML = 1;
        document.getElementById('nr9').innerHTML = 1;
        document.getElementById('nr7').style.backgroundColor = '#99C262';
        document.getElementById('nr8').style.backgroundColor = '#99C262';
        document.getElementById('nr9').style.backgroundColor = '#99C262';
        document.getElementById('nr7').style.color = '#99C262';
        document.getElementById('nr8').style.color = '#99C262';
        document.getElementById('nr9').style.color = '#99C262';
        document.getElementById('click3').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((blueeighteentotal == 2) && (parseInt(document.getElementById('click3').innerHTML, 10) >= 2)) {
        document.getElementById('hide3Ra').innerHTML = 3;
        document.getElementById('hide3Rb').innerHTML = 3 + (parseInt(document.getElementById('click3').innerHTML, 10) - 4);
        document.getElementById('nr7').innerHTML = 1;
        document.getElementById('nr8').innerHTML = 1;
        document.getElementById('nr9').innerHTML = 1;
        document.getElementById('nr7').style.backgroundColor = '#99C262';
        document.getElementById('nr8').style.backgroundColor = '#99C262';
        document.getElementById('nr9').style.backgroundColor = '#99C262';
        document.getElementById('nr7').style.color = '#99C262';
        document.getElementById('nr8').style.color = '#99C262';
        document.getElementById('nr9').style.color = '#99C262';
        document.getElementById('click3').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }

    // blueSeventeen
    if ((blueseventeentotal == 3) && (parseInt(document.getElementById('click4').innerHTML, 10) >= 1)) {
        document.getElementById('hide4Rb').innerHTML = (parseInt(document.getElementById('hide4Rb').innerHTML, 10)) + (parseInt(rightSeventeen.innerHTML, 10));
        document.getElementById('click4').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((blueseventeentotal == 0) && (parseInt(document.getElementById('click4').innerHTML, 10) == 1)) {
        document.getElementById('hide4Ra').innerHTML = 1;
        document.getElementById('nr10').innerHTML = 1;
        document.getElementById('nr10').style.backgroundColor = '#99C262';
        document.getElementById('nr10').style.color = '#99C262';
        document.getElementById('click4').innerHTML = 0;
    }
    if ((blueseventeentotal == 0) && (parseInt(document.getElementById('click4').innerHTML, 10) == 2)) {
        document.getElementById('hide4Ra').innerHTML = 2;
        document.getElementById('nr10').innerHTML = 1;
        document.getElementById('nr11').innerHTML = 1;
        document.getElementById('nr10').style.backgroundColor = '#99C262';
        document.getElementById('nr11').style.backgroundColor = '#99C262';
        document.getElementById('nr10').style.color = '#99C262';
        document.getElementById('nr11').style.color = '#99C262';
        document.getElementById('click4').innerHTML = 0;
    }
    if ((blueseventeentotal == 0) && (parseInt(document.getElementById('click4').innerHTML, 10) == 3)) {
        document.getElementById('hide4Ra').innerHTML = 3;
        document.getElementById('nr10').innerHTML = 1;
        document.getElementById('nr11').innerHTML = 1;
        document.getElementById('nr12').innerHTML = 1;
        document.getElementById('nr10').style.backgroundColor = '#99C262';
        document.getElementById('nr11').style.backgroundColor = '#99C262';
        document.getElementById('nr12').style.backgroundColor = '#99C262';
        document.getElementById('nr10').style.color = '#99C262';
        document.getElementById('nr11').style.color = '#99C262';
        document.getElementById('nr12').style.color = '#99C262';
        document.getElementById('click4').innerHTML = 0;
    }
    if ((blueseventeentotal == 1) && (parseInt(document.getElementById('click4').innerHTML, 10) == 1)) {
        document.getElementById('hide4Ra').innerHTML = 2;
        document.getElementById('nr10').innerHTML = 1;
        document.getElementById('nr11').innerHTML = 1;
        document.getElementById('nr10').style.backgroundColor = '#99C262';
        document.getElementById('nr11').style.backgroundColor = '#99C262';
        document.getElementById('nr12').style.backgroundColor = '#99C262';
        document.getElementById('nr10').style.color = '#99C262';
        document.getElementById('nr11').style.color = '#99C262';
        document.getElementById('nr12').style.color = '#99C262';
        document.getElementById('click4').innerHTML = 0;
    }
    if ((blueseventeentotal == 1) && (parseInt(document.getElementById('click4').innerHTML, 10) == 2)) {
        document.getElementById('hide4Ra').innerHTML = 3;
        document.getElementById('nr10').innerHTML = 1;
        document.getElementById('nr11').innerHTML = 1;
        document.getElementById('nr12').innerHTML = 1;
        document.getElementById('nr10').style.backgroundColor = '#99C262';
        document.getElementById('nr11').style.backgroundColor = '#99C262';
        document.getElementById('nr12').style.backgroundColor = '#99C262';
        document.getElementById('nr10').style.color = '#99C262';
        document.getElementById('nr11').style.color = '#99C262';
        document.getElementById('nr12').style.color = '#99C262';
        document.getElementById('click4').innerHTML = 0;
    }
    if ((blueseventeentotal == 2) && (parseInt(document.getElementById('click4').innerHTML, 10) == 1)) {
        document.getElementById('hide4Ra').innerHTML = 3;
        document.getElementById('nr10').innerHTML = 1;
        document.getElementById('nr11').innerHTML = 1;
        document.getElementById('nr12').innerHTML = 1;
        document.getElementById('nr10').style.backgroundColor = '#99C262';
        document.getElementById('nr11').style.backgroundColor = '#99C262';
        document.getElementById('nr12').style.backgroundColor = '#99C262';
        document.getElementById('nr10').style.color = '#99C262';
        document.getElementById('nr11').style.color = '#99C262';
        document.getElementById('nr12').style.color = '#99C262';
        document.getElementById('click4').innerHTML = 0;
    }
    if ((blueseventeentotal == 0) && (parseInt(document.getElementById('click4').innerHTML, 10) > 3)) {
        document.getElementById('hide4Ra').innerHTML = 3;
        document.getElementById('hide4Rb').innerHTML = 3 + (parseInt(document.getElementById('click4').innerHTML, 10) - 6);
        document.getElementById('nr10').innerHTML = 1;
        document.getElementById('nr11').innerHTML = 1;
        document.getElementById('nr12').innerHTML = 1;
        document.getElementById('nr10').style.backgroundColor = '#99C262';
        document.getElementById('nr11').style.backgroundColor = '#99C262';
        document.getElementById('nr12').style.backgroundColor = '#99C262';
        document.getElementById('nr10').style.color = '#99C262';
        document.getElementById('nr11').style.color = '#99C262';
        document.getElementById('nr12').style.color = '#99C262';
        document.getElementById('click4').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((blueseventeentotal == 1) && (parseInt(document.getElementById('click4').innerHTML, 10) >= 3)) {
        document.getElementById('hide4Ra').innerHTML = 3;
        document.getElementById('hide4Rb').innerHTML = 3 + (parseInt(document.getElementById('click4').innerHTML, 10) - 5);
        document.getElementById('nr10').innerHTML = 1;
        document.getElementById('nr10').innerHTML = 1;
        document.getElementById('nr11').innerHTML = 1;
        document.getElementById('nr12').innerHTML = 1;
        document.getElementById('nr10').style.backgroundColor = '#99C262';
        document.getElementById('nr11').style.backgroundColor = '#99C262';
        document.getElementById('nr12').style.backgroundColor = '#99C262';
        document.getElementById('nr10').style.color = '#99C262';
        document.getElementById('nr11').style.color = '#99C262';
        document.getElementById('nr12').style.color = '#99C262';
        document.getElementById('click4').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((blueseventeentotal == 2) && (parseInt(document.getElementById('click4').innerHTML, 10) >= 2)) {
        document.getElementById('hide4Ra').innerHTML = 3;
        document.getElementById('hide4Rb').innerHTML = 3 + (parseInt(document.getElementById('click4').innerHTML, 10) - 4);
        document.getElementById('nr10').innerHTML = 1;
        document.getElementById('nr11').innerHTML = 1;
        document.getElementById('nr12').innerHTML = 1;
        document.getElementById('nr10').style.backgroundColor = '#99C262';
        document.getElementById('nr11').style.backgroundColor = '#99C262';
        document.getElementById('nr12').style.backgroundColor = '#99C262';
        document.getElementById('nr10').style.color = '#99C262';
        document.getElementById('nr11').style.color = '#99C262';
        document.getElementById('nr12').style.color = '#99C262';
        document.getElementById('click4').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }

    // blueSixteen
    if ((bluesixteentotal == 3) && (parseInt(document.getElementById('click5').innerHTML, 10) >= 1)) {
        document.getElementById('hide5Rb').innerHTML = (parseInt(document.getElementById('hide5Rb').innerHTML, 10)) + (parseInt(rightSixteen.innerHTML, 10));
        document.getElementById('click5').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((bluesixteentotal == 0) && (parseInt(document.getElementById('click5').innerHTML, 10) == 1)) {
        document.getElementById('hide5Ra').innerHTML = 1;
        document.getElementById('nr13').innerHTML = 1;
        document.getElementById('nr13').style.backgroundColor = '#99C262';
        document.getElementById('nr13').style.color = '#99C262';
        document.getElementById('click5').innerHTML = 0;
    }
    if ((bluesixteentotal == 0) && (parseInt(document.getElementById('click5').innerHTML, 10) == 2)) {
        document.getElementById('hide5Ra').innerHTML = 2;
        document.getElementById('nr13').innerHTML = 1;
        document.getElementById('nr14').innerHTML = 1;
        document.getElementById('nr13').style.backgroundColor = '#99C262';
        document.getElementById('nr14').style.backgroundColor = '#99C262';
        document.getElementById('nr13').style.color = '#99C262';
        document.getElementById('nr14').style.color = '#99C262';
        document.getElementById('click5').innerHTML = 0;
    }
    if ((bluesixteentotal == 0) && (parseInt(document.getElementById('click5').innerHTML, 10) == 3)) {
        document.getElementById('hide5Ra').innerHTML = 3;
        document.getElementById('nr13').innerHTML = 1;
        document.getElementById('nr14').innerHTML = 1;
        document.getElementById('nr15').innerHTML = 1;
        document.getElementById('nr13').style.backgroundColor = '#99C262';
        document.getElementById('nr14').style.backgroundColor = '#99C262';
        document.getElementById('nr15').style.backgroundColor = '#99C262';
        document.getElementById('nr13').style.color = '#99C262';
        document.getElementById('nr14').style.color = '#99C262';
        document.getElementById('nr15').style.color = '#99C262';
        document.getElementById('click5').innerHTML = 0;
    }
    if ((bluesixteentotal == 1) && (parseInt(document.getElementById('click5').innerHTML, 10) == 1)) {
        document.getElementById('hide5Ra').innerHTML = 2;
        document.getElementById('nr13').innerHTML = 1;
        document.getElementById('nr14').innerHTML = 1;
        document.getElementById('nr13').style.backgroundColor = '#99C262';
        document.getElementById('nr14').style.backgroundColor = '#99C262';
        document.getElementById('nr13').style.color = '#99C262';
        document.getElementById('nr14').style.color = '#99C262';
        document.getElementById('click5').innerHTML = 0;
    }
    if ((bluesixteentotal == 1) && (parseInt(document.getElementById('click5').innerHTML, 10) == 2)) {
        document.getElementById('hide5Ra').innerHTML = 3;
        document.getElementById('nr13').innerHTML = 1;
        document.getElementById('nr14').innerHTML = 1;
        document.getElementById('nr15').innerHTML = 1;
        document.getElementById('nr13').style.backgroundColor = '#99C262';
        document.getElementById('nr14').style.backgroundColor = '#99C262';
        document.getElementById('nr15').style.backgroundColor = '#99C262';
        document.getElementById('nr13').style.color = '#99C262';
        document.getElementById('nr14').style.color = '#99C262';
        document.getElementById('nr15').style.color = '#99C262';
        document.getElementById('click5').innerHTML = 0;
    }
    if ((bluesixteentotal == 2) && (parseInt(document.getElementById('click5').innerHTML, 10) == 1)) {
        document.getElementById('hide5Ra').innerHTML = 3;
        document.getElementById('nr13').innerHTML = 1;
        document.getElementById('nr14').innerHTML = 1;
        document.getElementById('nr15').innerHTML = 1;
        document.getElementById('nr13').style.backgroundColor = '#99C262';
        document.getElementById('nr14').style.backgroundColor = '#99C262';
        document.getElementById('nr15').style.backgroundColor = '#99C262';
        document.getElementById('nr13').style.color = '#99C262';
        document.getElementById('nr14').style.color = '#99C262';
        document.getElementById('nr15').style.color = '#99C262';
        document.getElementById('click5').innerHTML = 0;
    }
    if ((bluesixteentotal == 0) && (parseInt(document.getElementById('click5').innerHTML, 10) > 3)) {
        document.getElementById('hide5Ra').innerHTML = 3;
        document.getElementById('hide5Rb').innerHTML = 3 + (parseInt(document.getElementById('click5').innerHTML, 10) - 6);
        document.getElementById('nr13').innerHTML = 1;
        document.getElementById('nr14').innerHTML = 1;
        document.getElementById('nr15').innerHTML = 1;
        document.getElementById('nr13').style.backgroundColor = '#99C262';
        document.getElementById('nr14').style.backgroundColor = '#99C262';
        document.getElementById('nr15').style.backgroundColor = '#99C262';
        document.getElementById('nr13').style.color = '#99C262';
        document.getElementById('nr14').style.color = '#99C262';
        document.getElementById('nr15').style.color = '#99C262';
        document.getElementById('click5').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((bluesixteentotal == 1) && (parseInt(document.getElementById('click5').innerHTML, 10) >= 3)) {
        document.getElementById('hide5Ra').innerHTML = 3;
        document.getElementById('hide5Rb').innerHTML = 3 + (parseInt(document.getElementById('click5').innerHTML, 10) - 5);
        document.getElementById('nr13').innerHTML = 1;
        document.getElementById('nr13').innerHTML = 1;
        document.getElementById('nr14').innerHTML = 1;
        document.getElementById('nr15').innerHTML = 1;
        document.getElementById('nr13').style.backgroundColor = '#99C262';
        document.getElementById('nr14').style.backgroundColor = '#99C262';
        document.getElementById('nr15').style.backgroundColor = '#99C262';
        document.getElementById('nr13').style.color = '#99C262';
        document.getElementById('nr14').style.color = '#99C262';
        document.getElementById('nr15').style.color = '#99C262';
        document.getElementById('click5').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((bluesixteentotal == 2) && (parseInt(document.getElementById('click5').innerHTML, 10) >= 2)) {
        document.getElementById('hide5Ra').innerHTML = 3;
        document.getElementById('hide5Rb').innerHTML = 3 + (parseInt(document.getElementById('click5').innerHTML, 10) - 4);
        document.getElementById('nr13').innerHTML = 1;
        document.getElementById('nr14').innerHTML = 1;
        document.getElementById('nr15').innerHTML = 1;
        document.getElementById('nr13').style.backgroundColor = '#99C262';
        document.getElementById('nr14').style.backgroundColor = '#99C262';
        document.getElementById('nr15').style.backgroundColor = '#99C262';
        document.getElementById('nr13').style.color = '#99C262';
        document.getElementById('nr14').style.color = '#99C262';
        document.getElementById('nr15').style.color = '#99C262';
        document.getElementById('click5').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }

    // blueFifteen
    if ((bluefifteentotal == 3) && (parseInt(document.getElementById('click6').innerHTML, 10) >= 1)) {
        document.getElementById('hide6Rb').innerHTML = (parseInt(document.getElementById('hide6Rb').innerHTML, 10)) + (parseInt(rightFifteen.innerHTML, 10));
        document.getElementById('click6').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((bluefifteentotal == 0) && (parseInt(document.getElementById('click6').innerHTML, 10) == 1)) {
        document.getElementById('hide6Ra').innerHTML = 1;
        document.getElementById('nr16').innerHTML = 1;
        document.getElementById('nr16').style.backgroundColor = '#99C262';
        document.getElementById('nr16').style.color = '#99C262';
        document.getElementById('click6').innerHTML = 0;
    }
    if ((bluefifteentotal == 0) && (parseInt(document.getElementById('click6').innerHTML, 10) == 2)) {
        document.getElementById('hide6Ra').innerHTML = 2;
        document.getElementById('nr16').innerHTML = 1;
        document.getElementById('nr17').innerHTML = 1;
        document.getElementById('nr16').style.backgroundColor = '#99C262';
        document.getElementById('nr17').style.backgroundColor = '#99C262';
        document.getElementById('nr16').style.color = '#99C262';
        document.getElementById('nr17').style.color = '#99C262';
        document.getElementById('click6').innerHTML = 0;
    }
    if ((bluefifteentotal == 0) && (parseInt(document.getElementById('click6').innerHTML, 10) == 3)) {
        document.getElementById('hide6Ra').innerHTML = 3;
        document.getElementById('nr16').innerHTML = 1;
        document.getElementById('nr17').innerHTML = 1;
        document.getElementById('nr18').innerHTML = 1;
        document.getElementById('nr16').style.backgroundColor = '#99C262';
        document.getElementById('nr17').style.backgroundColor = '#99C262';
        document.getElementById('nr18').style.backgroundColor = '#99C262';
        document.getElementById('nr16').style.color = '#99C262';
        document.getElementById('nr17').style.color = '#99C262';
        document.getElementById('nr18').style.color = '#99C262';
        document.getElementById('click6').innerHTML = 0;
    }
    if ((bluefifteentotal == 1) && (parseInt(document.getElementById('click6').innerHTML, 10) == 1)) {
        document.getElementById('hide6Ra').innerHTML = 2;
        document.getElementById('nr16').innerHTML = 1;
        document.getElementById('nr17').innerHTML = 1;
        document.getElementById('nr16').style.backgroundColor = '#99C262';
        document.getElementById('nr17').style.backgroundColor = '#99C262';
        document.getElementById('nr16').style.color = '#99C262';
        document.getElementById('nr17').style.color = '#99C262';
        document.getElementById('click6').innerHTML = 0;
    }
    if ((bluefifteentotal == 1) && (parseInt(document.getElementById('click6').innerHTML, 10) == 2)) {
        document.getElementById('hide6Ra').innerHTML = 3;
        document.getElementById('nr16').innerHTML = 1;
        document.getElementById('nr17').innerHTML = 1;
        document.getElementById('nr18').innerHTML = 1;
        document.getElementById('nr16').style.backgroundColor = '#99C262';
        document.getElementById('nr17').style.backgroundColor = '#99C262';
        document.getElementById('nr18').style.backgroundColor = '#99C262';
        document.getElementById('nr16').style.color = '#99C262';
        document.getElementById('nr17').style.color = '#99C262';
        document.getElementById('nr18').style.color = '#99C262';
        document.getElementById('click6').innerHTML = 0;
    }
    if ((bluefifteentotal == 2) && (parseInt(document.getElementById('click6').innerHTML, 10) == 1)) {
        document.getElementById('hide6Ra').innerHTML = 3;
        document.getElementById('nr16').innerHTML = 1;
        document.getElementById('nr17').innerHTML = 1;
        document.getElementById('nr18').innerHTML = 1;
        document.getElementById('nr16').style.backgroundColor = '#99C262';
        document.getElementById('nr17').style.backgroundColor = '#99C262';
        document.getElementById('nr18').style.backgroundColor = '#99C262';
        document.getElementById('nr16').style.color = '#99C262';
        document.getElementById('nr17').style.color = '#99C262';
        document.getElementById('nr18').style.color = '#99C262';
        document.getElementById('click6').innerHTML = 0;
    }
    if ((bluefifteentotal == 0) && (parseInt(document.getElementById('click6').innerHTML, 10) > 3)) {
        document.getElementById('hide6Ra').innerHTML = 3;
        document.getElementById('hide6Rb').innerHTML = 3 + (parseInt(document.getElementById('click6').innerHTML, 10) - 6);
        document.getElementById('nr16').innerHTML = 1;
        document.getElementById('nr17').innerHTML = 1;
        document.getElementById('nr18').innerHTML = 1;
        document.getElementById('nr16').style.backgroundColor = '#99C262';
        document.getElementById('nr17').style.backgroundColor = '#99C262';
        document.getElementById('nr18').style.backgroundColor = '#99C262';
        document.getElementById('nr16').style.color = '#99C262';
        document.getElementById('nr17').style.color = '#99C262';
        document.getElementById('nr18').style.color = '#99C262';
        document.getElementById('click6').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((bluefifteentotal == 1) && (parseInt(document.getElementById('click6').innerHTML, 10) >= 3)) {
        document.getElementById('hide6Ra').innerHTML = 3;
        document.getElementById('hide6Rb').innerHTML = 3 + (parseInt(document.getElementById('click6').innerHTML, 10) - 5);
        document.getElementById('nr16').innerHTML = 1;
        document.getElementById('nr16').innerHTML = 1;
        document.getElementById('nr17').innerHTML = 1;
        document.getElementById('nr18').innerHTML = 1;
        document.getElementById('nr16').style.backgroundColor = '#99C262';
        document.getElementById('nr17').style.backgroundColor = '#99C262';
        document.getElementById('nr18').style.backgroundColor = '#99C262';
        document.getElementById('nr16').style.color = '#99C262';
        document.getElementById('nr17').style.color = '#99C262';
        document.getElementById('nr18').style.color = '#99C262';
        document.getElementById('click6').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((bluefifteentotal == 2) && (parseInt(document.getElementById('click6').innerHTML, 10) >= 2)) {
        document.getElementById('hide6Ra').innerHTML = 3;
        document.getElementById('hide6Rb').innerHTML = 3 + (parseInt(document.getElementById('click6').innerHTML, 10) - 4);
        document.getElementById('nr16').innerHTML = 1;
        document.getElementById('nr17').innerHTML = 1;
        document.getElementById('nr18').innerHTML = 1;
        document.getElementById('nr16').style.backgroundColor = '#99C262';
        document.getElementById('nr17').style.backgroundColor = '#99C262';
        document.getElementById('nr18').style.backgroundColor = '#99C262';
        document.getElementById('nr16').style.color = '#99C262';
        document.getElementById('nr17').style.color = '#99C262';
        document.getElementById('nr18').style.color = '#99C262';
        document.getElementById('click6').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }

    // blueBull
    if ((bluebulltotal == 3) && (parseInt(document.getElementById('click7').innerHTML, 10) >= 1)) {
        document.getElementById('hide7Rb').innerHTML = (parseInt(document.getElementById('hide7Rb').innerHTML, 10)) + (parseInt(rightBull.innerHTML, 10));
        document.getElementById('click7').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((bluebulltotal == 0) && (parseInt(document.getElementById('click7').innerHTML, 10) == 1)) {
        document.getElementById('hide7Ra').innerHTML = 1;
        document.getElementById('nr19').innerHTML = 1;
        document.getElementById('nr19').style.backgroundColor = '#99C262';
        document.getElementById('nr19').style.color = '#99C262';
        document.getElementById('click7').innerHTML = 0;
    }
    if ((bluebulltotal == 0) && (parseInt(document.getElementById('click7').innerHTML, 10) == 2)) {
        document.getElementById('hide7Ra').innerHTML = 2;
        document.getElementById('nr19').innerHTML = 1;
        document.getElementById('nr20').innerHTML = 1;
        document.getElementById('nr19').style.backgroundColor = '#99C262';
        document.getElementById('nr20').style.backgroundColor = '#99C262';
        document.getElementById('nr19').style.color = '#99C262';
        document.getElementById('nr20').style.color = '#99C262';
        document.getElementById('click7').innerHTML = 0;
    }
    if ((bluebulltotal == 0) && (parseInt(document.getElementById('click7').innerHTML, 10) == 3)) {
        document.getElementById('hide7Ra').innerHTML = 3;
        document.getElementById('nr19').innerHTML = 1;
        document.getElementById('nr20').innerHTML = 1;
        document.getElementById('nr21').innerHTML = 1;
        document.getElementById('nr19').style.backgroundColor = '#99C262';
        document.getElementById('nr20').style.backgroundColor = '#99C262';
        document.getElementById('nr21').style.backgroundColor = '#99C262';
        document.getElementById('nr19').style.color = '#99C262';
        document.getElementById('nr20').style.color = '#99C262';
        document.getElementById('nr21').style.color = '#99C262';
        document.getElementById('click7').innerHTML = 0;
    }
    if ((bluebulltotal == 1) && (parseInt(document.getElementById('click7').innerHTML, 10) == 1)) {
        document.getElementById('hide7Ra').innerHTML = 2;
        document.getElementById('nr19').innerHTML = 1;
        document.getElementById('nr20').innerHTML = 1;
        document.getElementById('nr19').style.backgroundColor = '#99C262';
        document.getElementById('nr20').style.backgroundColor = '#99C262';
        document.getElementById('nr19').style.color = '#99C262';
        document.getElementById('nr20').style.color = '#99C262';
        document.getElementById('click7').innerHTML = 0;
    }
    if ((bluebulltotal == 1) && (parseInt(document.getElementById('click7').innerHTML, 10) == 2)) {
        document.getElementById('hide7Ra').innerHTML = 3;
        document.getElementById('nr19').innerHTML = 1;
        document.getElementById('nr20').innerHTML = 1;
        document.getElementById('nr21').innerHTML = 1;
        document.getElementById('nr19').style.backgroundColor = '#99C262';
        document.getElementById('nr20').style.backgroundColor = '#99C262';
        document.getElementById('nr21').style.backgroundColor = '#99C262';
        document.getElementById('nr19').style.color = '#99C262';
        document.getElementById('nr20').style.color = '#99C262';
        document.getElementById('nr21').style.color = '#99C262';
        document.getElementById('click7').innerHTML = 0;
    }
    if ((bluebulltotal == 2) && (parseInt(document.getElementById('click7').innerHTML, 10) == 1)) {
        document.getElementById('hide7Ra').innerHTML = 3;
        document.getElementById('nr19').innerHTML = 1;
        document.getElementById('nr20').innerHTML = 1;
        document.getElementById('nr21').innerHTML = 1;
        document.getElementById('nr19').style.backgroundColor = '#99C262';
        document.getElementById('nr20').style.backgroundColor = '#99C262';
        document.getElementById('nr21').style.backgroundColor = '#99C262';
        document.getElementById('nr19').style.color = '#99C262';
        document.getElementById('nr20').style.color = '#99C262';
        document.getElementById('nr21').style.color = '#99C262';
        document.getElementById('click7').innerHTML = 0;
    }
    if ((bluebulltotal == 0) && (parseInt(document.getElementById('click7').innerHTML, 10) > 3)) {
        document.getElementById('hide7Ra').innerHTML = 3;
        document.getElementById('hide7Rb').innerHTML = 3 + (parseInt(document.getElementById('click7').innerHTML, 10) - 6);
        document.getElementById('nr19').innerHTML = 1;
        document.getElementById('nr20').innerHTML = 1;
        document.getElementById('nr21').innerHTML = 1;
        document.getElementById('nr19').style.backgroundColor = '#99C262';
        document.getElementById('nr20').style.backgroundColor = '#99C262';
        document.getElementById('nr21').style.backgroundColor = '#99C262';
        document.getElementById('nr19').style.color = '#99C262';
        document.getElementById('nr20').style.color = '#99C262';
        document.getElementById('nr21').style.color = '#99C262';
        document.getElementById('click7').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((bluebulltotal == 1) && (parseInt(document.getElementById('click7').innerHTML, 10) >= 3)) {
        document.getElementById('hide7Ra').innerHTML = 3;
        document.getElementById('hide7Rb').innerHTML = 3 + (parseInt(document.getElementById('click7').innerHTML, 10) - 5);
        document.getElementById('nr19').innerHTML = 1;
        document.getElementById('nr20').innerHTML = 1;
        document.getElementById('nr21').innerHTML = 1;
        document.getElementById('nr19').style.backgroundColor = '#99C262';
        document.getElementById('nr20').style.backgroundColor = '#99C262';
        document.getElementById('nr21').style.backgroundColor = '#99C262';
        document.getElementById('nr19').style.color = '#99C262';
        document.getElementById('nr20').style.color = '#99C262';
        document.getElementById('nr21').style.color = '#99C262';
        document.getElementById('click7').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }
    if ((bluebulltotal == 2) && (parseInt(document.getElementById('click7').innerHTML, 10) >= 2)) {
        document.getElementById('hide7Ra').innerHTML = 3;
        document.getElementById('hide7Rb').innerHTML = 3 + (parseInt(document.getElementById('click7').innerHTML, 10) - 4);
        document.getElementById('nr19').innerHTML = 1;
        document.getElementById('nr20').innerHTML = 1;
        document.getElementById('nr21').innerHTML = 1;
        document.getElementById('nr19').style.backgroundColor = '#99C262';
        document.getElementById('nr20').style.backgroundColor = '#99C262';
        document.getElementById('nr21').style.backgroundColor = '#99C262';
        document.getElementById('nr19').style.color = '#99C262';
        document.getElementById('nr20').style.color = '#99C262';
        document.getElementById('nr21').style.color = '#99C262';
        document.getElementById('click7').innerHTML = 0;
        document.getElementById('sbr').innerHTML = parseInt(document.getElementById('hide1Rb').innerHTML, 10) * 20
        + parseInt(document.getElementById('hide2Rb').innerHTML, 10) * 19
        + parseInt(document.getElementById('hide3Rb').innerHTML, 10) * 18
        + parseInt(document.getElementById('hide4Rb').innerHTML, 10) * 17
        + parseInt(document.getElementById('hide5Rb').innerHTML, 10) * 16
        + parseInt(document.getElementById('hide6Rb').innerHTML, 10) * 15
        + parseInt(document.getElementById('hide7Rb').innerHTML, 10) * 25;
    }


    // Reset add
    add1 = (function () {
        var counter1 = 0;
        return function () { return counter1 += 1; };
    })();
    add2 = (function () {
        var counter2 = 0;
        return function () { return counter2 += 1; };
    })();
    add3 = (function () {
        var counter3 = 0;
        return function () { return counter3 += 1; };
    })();
    add4 = (function () {
        var counter4 = 0;
        return function () { return counter4 += 1; };
    })();
    add5 = (function () {
        var counter5 = 0;
        return function () { return counter5 += 1; };
    })();
    add6 = (function () {
        var counter6 = 0;
        return function () { return counter6 += 1; };
    })();
    add7 = (function () {
        var counter7 = 0;
        return function () { return counter7 += 1; };
    })();
};


// Calculator
$(document).ready(function () {
    var testNumLength = function (number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length - 9, 9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        }
    };
    var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("000");
    $("#numbers2 > button").not("#clearR,#clearB").click(function () {
        number += $(this).text();
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#clearR,#clearB").click(function () {
        number = "";
        totaldiv.text("000");
        if ($(this).attr("id") === "clearall") {
            newnumber = "";
        }
    });
    $("#enterRed").click(function () {
        number = "";
        totaldiv.text("000");
    });
    $("#enterBlue").click(function () {
        number = "";
        totaldiv.text("000");
    });
    $("#reset").click(function () {
        number = "";
        totaldiv.text("000");
    });
});
