'use strict'

    let modal = document.querySelector('.modal');
    let notes = document.getElementsByClassName('note');
    let question = document.getElementById('text');
    let save = document.getElementById('save');
    let answer = document.getElementById('answer-input');
    let close = document.querySelector('.close');
    let incorrect = document.getElementById('incorrect');
    let arr = JSON.parse(localStorage.getItem('answers')) || [];

    let questions = [
        {
            question: 'What is always coming, but never arrives?',
            answer: 'Tomorrow'
        },
        {
            question: 'What can be broken, but is never held?',
            answer: 'Promise'
        },
        {
            question: 'What is it that lives if it is fed, and dies if you give it a drink?',
            answer: 'Fire'
        },
        {
            question: 'What is it that goes up, but never comes down?',
            answer: 'Age'
        },
        {
            question: 'What is it that if you have, you want to share me, and if you share, you do not have?',
            answer: 'Secret'
        },
        {
            question: 'What goes up and down, but always remains in the same place?',
            answer: 'Stairs'
        }
    ]

    notes = Array.from(notes);
    notes.map(function(item, index) {
        item.addEventListener('click', function() {
            if (!checklocalSt(index)) {
                modal.classList.add('display');
                insertQuestion(index);
                save.addEventListener('click', function() {
                    if (checkAnswer(index)) {
                        removeClass();
                        item.classList.add('correct');
                    } else {
                        incorrect.innerText = 'Your answer is incorrect! Try again.'
                    }
                });
            } else {
                item.classList.add('correct');
            }
        })   
    })

    function insertQuestion(index) {
        text.innerText = questions[index].question;
    }

    function checklocalSt(index) {
        if (arr.includes(questions[index].answer)) {
            return true;
        } else {
            return false;
        }
    }

    function checkAnswer(index) {
        if (answer.value === questions[index].answer) {
            arr.push(answer.value);
            localStorage.setItem('answers', JSON.stringify(arr));
            return true;
        } else {
            return false;
        }
    }

    function removeClass() {
        modal.classList.remove('display');
        incorrect.innerText = '';
        answer.value = '';
    }

    close.addEventListener('click', removeClass);

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            removeClass();
        }
    }) 
