const questions = [
    {
        question:"What is CSS in full form?",
        answers:{
        optionA:"Cascading Style Sheet",
        optionB:"Cascading Size Sheet",
        optionC:"Cascading Size Style",
        optionD:"Cascading Style Style",
        correctOption: "optionA"
    }
    },
    {
        question:"What is the short form of Hypertext Markup Language?",
        answers:{
        optionA:"MTHL",
        optionB:"HMLT",
        optionC:" HTML",
        optionD:"LMTH",
        correctOption: "optionC"
    }
    },
    {

        question:"Is C++ a low level Language?",
        answers: {
        optionA:"Yes",
        optionB:"No",
        optionC:"Both",
        optionD:"None",
        correctOption: "optionA"
    }
    },
    {
        question:"What the other name of Javascript?",
        answers:{
        optionA:"java",
        optionB:"js",
        optionC:" I don't know",
        optionD:"php",
        correctOption: "optionB"
    }
    }
]
    const testContainer = document.getElementById('test');
    const submitButton = document.getElementById('submit');
    function buildTest(){}
    function showResults(){}
    buildTest();
    submitButton.addEventListener('click',showResults);

    function buildTest(){
        const output = [];
        myQuestions.forEach((currentQuestion, questionNumber) => {
            answers.push(
                <label>
                    <input type="radio" name="question${questionNumber}" value="${lette}"></input>
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                </label>
            );
        }
        )
        output.push(
            `<div class="question"> ${currentQuestion.question}</div>
            <div class = "answers"> ${answers.join('')} </div>`

        );
    }
 
 testContainer.innerHTML = output.join('');

