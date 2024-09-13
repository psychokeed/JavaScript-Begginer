// numer guessing game

const minNum = 1;
const maxNum = 50;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running){
    guess = prompt("Guess a number between " + minNum + " and " + maxNum);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert(`please enter a number!!`);
    }
    else if(guess < minNum || guess > maxNum){
        alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            alert("Too low, please try again!!");
        }
        else if(guess > answer){
            alert("Too high, please try again!!");
        }
        else{
            alert(`Correct!! The answer is ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }

}
