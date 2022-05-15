function check () {
var c= 0;
var numberOfQuestions =4;
var q1 = document.quiz.question1.value;
var q2 = document.quiz.question2.value;
var q3 = document.quiz.question3.value;
var q4 = document.quiz.question4.value;
var result = document.getElementById('result');
var quiz = document.getElementById('quiz');
if (q1=="Cascading Style Sheet") {c++}
if (q2=="HTML") {c++}
if (q3=="No") {c++}
if (q4=="js") {c++}

 result.textContent = Math.round((c / numberOfQuestions) * 100)




}


