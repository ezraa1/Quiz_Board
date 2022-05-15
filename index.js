function check ();
var c= 0;
var q1 = document.quiz.question1.value;
var q1 = document.quiz.question1.value;
var q1 = document.quiz.question1.value;
var q1 = document.quiz.question1.value;
if (q1=="js") {c++}
if (q1=="js") {c++}
if (q1=="js") {c++}
if (q1=="js") {c++}


// var questions = [{
//     question: "What is CSS in full form?",
//     answers: {
//         optionA: "Cascading Style Sheet",
//         optionB: "Cascading Size Sheet",
//         optionC: "Cascading Size Style",
//         optionD: "Cascading Style Style",
//         correctOption: "optionA"
//     }
// },
// {
//     question: "What is the short form of Hypertext Markup Language?",
//     answers: {
//         optionA: "MTHL",
//         optionB: "HMLT",
//         optionC: " HTML",
//         optionD: "LMTH",
//         correctOption: "optionC"
//     }
// },
// {

//     question: "Is C++ a low level Language?",
//     answers: {
//         optionA: "Yes",
//         optionB: "No",
//         optionC: "Both",
//         optionD: "None",
//         correctOption: "optionA"
//     }
// },
// {
//     question: "What the other name of Javascript?",
//     answers: {
//         optionA: "java",
//         optionB: "js",
//         optionC: " I don't know",
//         optionD: "php",
//         correctOption: "optionB"
//     }
// }
// ]
// var window
// var score = 0;
// for (var i = 0; i < questions.length; i++){
//     var response = window.prompt(questions[i].question)
//     if(response == questions[i].answers){
//         score++;
//         alert("correct!");

//     } else{
//         alert("WRONG!");
//     }
// }
// alert("you got" + score + "/" + questions.length2);

//     const testContainer = document.getElementById('test');
//     const submitButton = document.getElementById('submit');
//     const resultsContainer= document.getElementByClassName('results');
//     const questions = [
//         {
//             question:"What is CSS in full form?",
//             answers:{
//             optionA:"Cascading Style Sheet",
//             optionB:"Cascading Size Sheet",
//             optionC:"Cascading Size Style",
//             optionD:"Cascading Style Style",
//             correctOption: "optionA"
//         }
//         },
//         {
//             question:"What is the short form of Hypertext Markup Language?",
//             answers:{
//             optionA:"MTHL",
//             optionB:"HMLT",
//             optionC:" HTML",
//             optionD:"LMTH",
//             correctOption: "optionC"
//         }
//         },
//         {

//             question:"Is C++ a low level Language?",
//             answers: {
//             optionA:"Yes",
//             optionB:"No",
//             optionC:"Both",
//             optionD:"None",
//             correctOption: "optionA"
//         }
//         },
//         {
//             question:"What the other name of Javascript?",
//             answers:{
//             optionA:"java",
//             optionB:"js",
//             optionC:" I don't know",
//             optionD:"php",
//             correctOption: "optionB"
//         }
//         }
//     ]
//     function buildTest(){}
//     function showResults(){}

//     buildTest();
//     submitButton.addEventListener('click',showResults);

//     function buildTest(){
//         const output = [];
//         myQuestions.forEach((currentQuestion, questionNumber) => {
//             const answers = [];
//             for(letter in currentQuestion.answers){
//             answers.push(
//                 `<label>
//                     <input type="radio" name="question${questionNumber}" value="${letter}"></input>
//                         ${letter} :
//                         ${currentQuestion.answers[letter]}
//                 </label>`
//             );
//         }

//         output.push(
//             `<div class="question"> ${currentQuestion.question}</div>
//             <div class = "answers"> ${answers.join('')} </div>`

//         );
//     }
// );
//  testContainer.innerHTML = output.join('');
// }

// myQuestions.forEach( (currentQuestion,questionNumber) => {

// } );
// function showResults(){
//     const optionContainers = quizContainer.querySelectorAll('.answers');
//     let numCorrect = 0;
//     myQuestions.forEach( (currentQuestion, questionNumber) => {
//         const optionContainer = optionContainers[questionNumber];
//         const selector = `input[name=question${questionNumber}]:checked`;
//         const userOption = (optionContainer.querySelector(selector) || {}).value;
//         if(userOption === currentQuestion.correctOption){
//             numCorrect++;
//             optionContainers[questionNumber].style.color = 'lightgreen';
//         }
//         else{
//             optionContainers[questionNumber].style.color = 'red';
//         }
//       });
//       resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

// }
// }