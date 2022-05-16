function check() {
    var c = 0;
    var numberOfQuestions = 4;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var result = document.getElementById("result");
    var quiz = document.getElementById("quiz");
    if (q1 == "Cascading Style Sheet") {
        c++
    }
    if (q2 == "HTML") {
        c++
    }
    if (q3 == "No") {
        c++
    }
    if (q4 == "js") {
        c++
    }
   
    quiz.style.display = "none";
    result.textContent = Math.round((c / numberOfQuestions) * 100)
   
    result.textContent = ("Your Score is : " + " " + result.textContent + "%");

    function score(){
        score = result.textContent;
        if(result.textContent < 50)
        {
            alert(score +"" + "fail" );
        } 

    }
//    if (c<50) {
//     result.textContent = ("Retake quiz")
//    }
//    else if(c<=80) {
//     result.textContent = ("Fair")
//    }
//    if (c>80) {
//     result.textContent = ("Excellent")
//    }
}
   
//    if (c <= 2) {
//     result.textContent = (`Your score is ${c}. Retake quiz!`);
//    }
//     if (c = 3) {
//         result.textContent = (`Your score is ${c}. Fair`);
//     } else (c=>4) ;{
//         result.textContent = (`Your score is ${c}. Excellent`);
//     }


 

// function score(){
//     var c = 0;
//     var numberOfQuestions = 4;
//     var q1 = document.quiz.question1.value;
//     var q2 = document.quiz.question2.value;
//     var q3 = document.quiz.question3.value;
//     var q4 = document.quiz.question4.value;
//     var result = document.getElementById('result');
//     var quiz = document.getElementById('quiz');
//     var calculate_percent = 0;
    
//     document.write("your Total score is :" + score);
//     document.write("Your Total Score is :" + " " + score);
//     alert("Get To See Your results");
//     //Calculating scores
//     calculate_percent = score / 6;
//     percentage = score / 6 * 100;
//     if (percentage >= 80) {
//         document.write(" " + "[Performed Excellently]");
//     } else if (percentage >= 50 && percentage <= 80) {
//         document.write(" " + "[Passed Fairly]");
//     } else {
//         document.write(" " + "[Performed Poorly , Please Retake The Quiz ]");
//     }
// }
// }