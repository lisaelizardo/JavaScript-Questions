    
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
    ]

function renderQuestion(questionObjectIndex) {
    const questionObject = theQuestions[questionObjectIndex];
    const questionScreen = document.getElementById('question-screen');
    const questionHeader = document.getElementById('question-header');
    const answersArea = document.getElementById('answers-area');
    
    answersArea.innerHTML = "" // clear out the old html (the old ul and lis)
    // update the content of the question screen

    questionHeader.innerText = questionObject.question

    const ul = document.createElement('ul');
    const questionKeys = Object.keys(questionObject.answers);
    for (let i = 0; i < questionKeys.length; i++) {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.innerText = questionObject.answers[questionKeys[i]] 
        button.addEventListener("click", function() {
            const div = document.createElement('div');
            if (questionObject.correctAnswer === questionKeys[i]) {
                // render correct div
                div.innerText = "Correct!"
            } else {
                // render wrong div
                div.innerText = "Wrong!"
            }
            questionScreen.append(div);

            renderQuestion(questionObjectIndex+1)

            setTimeout(() => {
                div.style.display = "none"
            }, 1500)
        });
        li.append(button);
        ul.append(li);

    }

    answersArea.append(ul)
}

var secondsLeft = 60;
var time = document.querySelector(".timer");

function Time() {
    var timer = setInterval(function(){
        secondsLeft--;
        timer.textContent = secondsLeft + "seconds until GAME OVER.";
    
        if (secondsLeft === 0) {
            clearInterval(timer);
            sendMessage();
        }
    })}

    function sendMessage() {
        time.textContent = "GAME OVER";
    }

    Time();

function startGame() {
        // get current screen
    const startScreen = document.getElementById("start-screen");
    // set the display to none
    startScreen.style.display = "none";
    // get the next screen
    const questionScreen = document.getElementById('question-screen');
    // set the display to block to show it
    questionScreen.style.display = "block";

    renderQuestion(0)
}