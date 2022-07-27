"use strict";
const select_categories = document.getElementById("select_categories");
const select_difficulty = document.getElementById("difficulty");
const select_type = document.getElementById("select_type");
const main_button = document.getElementById("main_button");
const container_trivia = document.getElementById("container_trivia");

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
    fetch(urlMain + data)
    .then((response) => {
        return response.json();
    }).then((data) => {
        data.results.forEach(questions => {
            printQuestions(questions);
        });
    })
    .catch((error) => console.error(error))
}
const printQuestions = (element) => {
    let question = document.createElement('p');
    question.textContent = element.question;
    console.log(element.question);
    container_trivia.appendChild(question);
}
main_button.addEventListener('click', () => {   
    generateTrivia();
});
getCategories();