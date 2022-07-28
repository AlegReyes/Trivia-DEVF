"use strict";
const select_categories = document.getElementById("select_categories");
const select_difficulty = document.getElementById("difficulty");
const select_type = document.getElementById("select_type");
const main_button = document.getElementById("main_button");
const container_trivia = document.getElementById("container_trivia");
const btn_check = document.getElementById("btn_check");
let arrayAnswer = [];

const urlCategories = 'https://opentdb.com/api_category.php';
const urlMain = 'https://opentdb.com/api.php?amount=10' //&category=21&difficulty=medium&type=boolean

const generateOption = ((name, id) => {
    let option = document.createElement("option");
    option.value = id;
    option.textContent = name;
    select_categories.appendChild(option);
});
const getCategories = () => {
    fetch(urlCategories).then((response) => {
        return response.json();
    }).then((data) => {
        data.trivia_categories.forEach(element => {
            generateOption(element.name, element.id);
        });
    }).catch((error) => {
        console.error('Error fetch', error);
    });
}
const generateTrivia = () => {
    let array = [];
    let url = '';
    if (select_categories.value !== 'any') {
        array.push(`&category=${select_categories.value}`);
    }if (select_difficulty.value !== 'any') {
        array.push(`&difficulty=${select_difficulty.value}`);
    } if (select_type.value !== 'any') {
        array.push(`&type=${select_type.value}`);
    }
    array.forEach(element => {
        url += element
    });
    getQuestion(url);
}
const getQuestion = (data) => {
    let id = 0;
    fetch(urlMain + data)
    .then((response) => {
        return response.json();
    }).then((data) => {
        data.results.forEach(questions => {
            id++
            printQuestions(questions);
            getAnswer(questions, id);
        });
    })
    .catch((error) => console.error(error))
}
const getAnswer = (questions, id) => {
    let arr = [];
    arr.push(questions.correct_answer);
    arrayAnswer.push(questions.correct_answer);
    questions.incorrect_answers.forEach((incorretAnswer) => {
        arr.push(incorretAnswer);
    })
    arr.sort(function (){ return Math.random() - 0.5});
    arr.forEach((answer) => {
        printAnswer(answer, id);
    });
}   
const printQuestions = (element) => {
    // container_trivia.insertAdjacentHTML("beforeend",`<p>${element.question}</p>`);
    let question = document.createElement('p');
    console.log(element.question);
    question.insertAdjacentHTML("afterbegin",`${element.question}`);
    container_trivia.appendChild(question);
}
const printAnswer = (answer, id) => {
    let radio = document.createElement('input');
    let label = document.createElement('label');
    radio.type = 'radio';
    radio.value = answer;
    radio.name = `answer${id}`;
    label.insertAdjacentHTML("afterbegin", `${answer}`);
    container_trivia.appendChild(radio);
    container_trivia.appendChild(label);
};
main_button.addEventListener('click', () => {  
    generateTrivia();
    btn_check.style.display = 'block';
    console.log(arrayAnswer);
    container_trivia.innerHTML = ''
});
btn_check.addEventListener('click', () => {
    let valorFijo;
    let puntaje = 0;
    for (let i=1; i<11 ; i++) {
        valorFijo = document.querySelector(`input[name="answer${i}"]:checked`).value;
        if (arrayAnswer[i-1] === valorFijo) {
            puntaje += 100;
        }
    }
    arrayAnswer = [];
    alert(`Tu puntuacion fue de: ${puntaje}`)
});
getCategories();