const questions = [
    {
        question:"What is CSS in full form?",
        optionA:"Cascading Style Sheet",
        optionB:"Cascading Size Sheet",
        optionC:"Cascading Size Style",
        optionD:"Cascading Style Style",
        correctOption: "optionA"
    },
    {
        question:"What is the short form of Hypertext Markup Language?",
        optionA:"MTHL",
        optionB:"HMLT",
        optionC:" HTML",
        optionD:"LMTH",
        correctOption: "optionC"
        
    },
    {

        question:"Is C++ a low level Language?",
        optionA:"Yes",
        optionB:"No",
        optionC:"Both",
        optionD:"None",
        correctOption: "optionA"
    },
    {
        question:"What the other name of Javascript?",
        optionA:"java",
        optionB:"js",
        optionC:" I don't know",
        optionD:"php",
        correctOption: "optionB"
    }
]
let randomQuestions = []
function putQuestions () {
    while (randomQuestions.length<=3) {
        const any = questions[Math.floor(Math.any() * questions.length)]
        if (!randomQuestions.includes(any)) {
            randomQuestions.push(any)
        }
    }
}
let questionNumber = 1
let studentScore = 0
let wrongAnswer = 0
let indexNumber = 0
function nextQuestion(index) {
    putQuestions()
    const currentQuestion = randomQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("student-score").innerHTML = studentScore
    document.getElementById("show-question").innerHTML = currentQuestion.question;
    document.getElementById("first-option").innerHTML = currentQuestion.optionA;
    document.getElementById("second-option").innerHTML = currentQuestion.optionB;
    document.getElementById("third-option").innerHTML = currentQuestion.optionC;
    document.getElementById("fourth-option").innerHTML = currentQuestion.optionD;
    

}
function checkForAnswer() {
    const currentQuestion = randomQuestions[indexNumber]
    const currentQuestionAnswer = currentQuestion.correctOption
    const options = document.getElementsByName("option");
    let correctOption = null
    options.forEach((option)) =>
}
