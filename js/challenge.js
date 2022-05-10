//Get the counter element so I can target it in my function
let counter = document.querySelector('#counter');
let likesArr = {};
let likes = document.getElementsByClassName("likes");
let intervalId;

function startClock() {
    
        intervalId = setInterval(function() {
        //the Function that runs after the designated interval
        counter.innerHTML = parseInt(counter.innerHTML) + 1
    }, 1000)
}

//Get all the buttons and add listeners
document.querySelector('#minus').addEventListener('click', handleMinus);
document.querySelector('#plus').addEventListener('click', handlePlus);
document.querySelector('#heart').addEventListener('click', handleHeart);
document.querySelector('#pause').addEventListener('click', handlePause);
document.querySelector('#comment-form').addEventListener('submit', handleComment);

//Make sure the counter starts once the page is loaded
document.addEventListener("DOMContentLoaded", startClock);

function handleMinus() {
    counter.innerHTML = parseInt(counter.innerHTML) - 1
}

function handlePlus() {
    counter.innerHTML = parseInt(counter.innerHTML) + 1
}

function handleHeart() {
    let likedNumber = counter.innerHTML;

    if (likedNumber in likesArr) {
        likesArr[likedNumber] += 1;
        document.getElementById(likedNumber).textContent = `${likedNumber} has been liked ${likesArr[likedNumber]} times`;
        
    }

    else {
        likesArr[likedNumber] = 1;
        let li = document.createElement("li");
        li.textContent = `${likedNumber} has been liked ${likesArr[likedNumber]} times`;
        li.id = likedNumber;
        document.querySelector('.likes').appendChild(li);
        }
    
    }
 
function handlePause() {
    
    if (document.querySelector('#pause').textContent === ' pause ') {
        clearInterval(intervalId);
        document.querySelector('#pause').textContent = ' resume ';
        document.querySelector('#minus').disabled = true;
        document.querySelector('#plus').disabled = true;
        document.querySelector('#heart').disabled = true;
    }
    else {
        startClock();
        document.querySelector('#pause').textContent = ' pause ';
        document.querySelector('#minus').disabled = false;
        document.querySelector('#plus').disabled = false;
        document.querySelector('#heart').disabled = false;
    }

}

function handleComment(e) {
    e.preventDefault();
    handleInput(e.target['comment-input'].value)
}

function handleInput(comment) {
    let li = document.createElement("li");
    li.textContent = comment;
    document.querySelector('#list').appendChild(li);
}



