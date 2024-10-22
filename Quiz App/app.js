const questions = [
    {
        que: 'Which of the following is a markup language?',
        a: 'HTML',
        b: 'CSS',
        c: 'JavaScript',
        d: 'PHP',
        correct: 'a'
    },
    {
        que: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'None of the above',
        correct: 'b'
    },
    {
        que: 'What does CSS stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheets',
        c: 'JavaScript Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborghinis',
        correct: 'b'
    }
];

let index = 0;
let right = 0, wrong = 0;
const total = questions.length;
const quesBox = document.getElementById('quesBox');
const optionInputs = document.querySelectorAll('.option');
const resultBox = document.getElementById('resultBox');

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
};

const getAnswer = () => {
    let answer;
    optionInputs.forEach(input => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

const reset = () => {
    optionInputs.forEach(input => {
        input.checked = false;
    });
};

const endQuiz = () => {
    resultBox.innerHTML = `
        <h3>Quiz Completed</h3>
        <p>Correct Answers: ${right}</p>
        <p>Wrong Answers: ${wrong}</p>
        <p>Total Score: ${right} / ${total}</p>
    `;
};

// Initial call to load the first question
loadQuestion();
