const startButton = document.getElementById('start-button')
const questionContainerElement = document.getElementById
    ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

// Struggled to understand why my event listener was not working
startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort() = Math.random(- .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    questions.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


const questions = [
    {
        question: 'What is Flexxbox?',
        answers: [
            { text: 'Flex box allows you to change the sizing of a container', correct: true },
            { text: 'Flex box allows you to change the color of a container', correct: false },
            { text: 'Flex box allows you to use JS', correct: false },
            { text: 'Flex box is not a conecpt used in APIs', correct: false },
        ]

    }

]