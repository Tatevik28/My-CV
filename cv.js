'use strict'

    let modal = document.querySelector('.modal');
    let notes = document.getElementsByClassName('note');
    let question = document.getElementById('text');
    let save = document.getElementById('save');
    let answer = document.getElementById('answer-input');
    let close = document.querySelector('.close');
    let questions = [
        {
            question: 'One',
            answer: 'One'
        },
        {
            question: 'Two',
            answer: ''
        },
        {
            question: 'Three',
            answer: ''
        },
        {
            question: 'Four',
            answer: ''
        },
        {
            question: 'Five',
            answer: ''
        },
        {
            question: 'Six',
            answer: ''
        }
    ]

    notes = Array.from(notes);
    notes.map(function(item, index) {
        item.addEventListener('click', function() {
            modal.classList.add('display');
            insertQuestion(index);
            save.addEventListener('click', function() {
                if (checkAnswer(index)) {
                    text.innerText = 'Correct';
                }
            });
        })
    })

    function insertQuestion(index) {
        text.innerText = questions[index].question;
    }

    function checkAnswer(index) {
        if (answer.value === questions[index].answer) {
            return true;
        } else {
            return false;
        }
    }

    close.addEventListener('click', function () {
        modal.classList.remove('display');
    });
    
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.classList.remove('display');
        }
    }) 
