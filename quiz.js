function checkAnswers() {
    let score = 0;
    let result = 0;
    let quiz = document.forms.quiz.elements;

    let answer1 = yearsToMatchBillionnaires;
    if (answer1 == "150") {
        score = score + 0;
    }
    else if (answer1 == "600") {
        score = score + 0;
    }
    else if (answer1 == "1500") {
        score = score + 1;
    }
    else {
        score = score + 0;
    }

    let answer2 = corporationsResponsible;
    if (answer2 == "20") {
        score = score + 0;
    }
    else if (answer2 == "70") {
        score = score + 0;
    }
    else if (answer2=="100") {
        score = score + 1;
    }
    else {
        score = score + 0;
    }

    let answer3 = cocaCola;
    if (answer3 == "1%") {
        score = score + 0;
    }
    else if (answer3== "3%") {
        score = score + 0;
    }
    else if (answer3=="7%") {
        score = score + 0;
    }
    else {
        score = score + 1;
    }

    if (score == 3) {
        result="3/3!";
    }
    else if (score == 2) {
        result = "2/3!";
    }
    else if (score == 1) {
        result = "1/3.";
    }
    else {
        result = "0/3.";
    }

    alert ("You got: " + result);
}