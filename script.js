var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
 
    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
            answers = [];

            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ':'
                    + questions[i].answers[letter]
                    +'/label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer){
        var answerContainer = quizContainer.querySelectorAll('.answers');
        var userAnswer = '';
        var numCorrect = 0;

        for(var i=0; i<questions.length; i++){
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            if(userAnswer===questions[i].correctAnswwer){
                numCorrect++;
                answerContainers[i].style.color = 'green';
            }
            else{
                answerContainers[i].style.color = 'red';
            }
        }
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;



    }

    showQuestions(questions, quizContainer);
    
    var theQuestions = [
        {
            question: "What is 'Jane Doe' an example of?",
            answers: {
                a: 'String',
                b: 'Number',
                c: 'Undefined'
            },
            correctAnswer: 'a'
        },
        {
            question: "What are examples of Primitive types?",
            answers: {
                a: 'Number, Boolean, String',
                b: 'Var, Function, Object',
                c: 'array, if, else'
            },
            correctAnswer: 'a'
        },  
        {
            question: "What is an array?",
            answers: {
                a: 'A single element',
                b: 'Name of an object',
                c: 'Store groups of data in a single variable'
            },
            correctAnswer: 'c'
        },  
        {
            question: "What is JavaScripts' extention?",
            answers: {
                a: '.html',
                b: '.js',
                c: '.css'
            },
            correctAnswer: 'b'
        },  
        {
            question: "Is JavaScript case sensitive?",
            answers: {
                a: 'No',
                b: 'Yes'
            },
            correctAnswer: 'b'
        }
        }
    ];

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
        }
}