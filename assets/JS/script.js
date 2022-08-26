//Questions for quiz
var questions = [
    {
        questionText:
            "As you enter the dungeon, the darkness limits your view to 10 ft. infront of you. What do you do?",
        choices: ["Enter the darkness", "Light a torch", "Cast Fireball", "Leave"],
        answer: "Light a torch"
    },
    {
        questionText:
            "You walk through the damp cobblestone hall and accidentally step on a trap. What do you do?",
        choices: ["Dodge out of the way", "Disarm the Trap", "Cast Mage Armor", "Drink an Invisibility Potion"],
        answer: "Dodge out of the way"
    },
    {
        questionText:
            "You open a door that leads into a room full of mirrors. One of your reflections begins to move on its own and attempts to swing its blade at you. What do you do?",
        choices: ["Block with your shield", "Shatter the mirror", "Cast Minor Illusion", "Try to pickpocket the relection"],
        answer: "Shatter the mirror"
    },
    {
        questionText:
            "You enter a room that has a 15 foot wide pit in the middle of the room. The door to the next room is on the opposite side. What do you do?",
        choices: ["Cast Feather Fall", "Toss your rope to the other side", "Jump across", "Find an invisible bridge"],
        answer: "Jump across"
    },
    {
        questionText:
            "You are faced against a group of goblins brandishing rusty daggers. They lunge at you with malicious intent. What do you do?",
        choices: ["Fight them one at a time", "Cast Thunderwave", "Walk straight through", "Taunt them"],
        answer: "Cast Thunderwave"
    },
    {
        questionText:
            "You find a single treasure chest in the middle of a room. What do you do?",
        choices: ["Open it and loot the contents", "Check for traps", "Whack it with a stick to see if it's a mimic", "Take the whole chest with you"],
        answer: "Check for traps"
    },
    {
        questionText:
            "The exit seems to be locked. The door has a riddle. 'What is it that given one, you'll have either two or none?' What do you say?",
        choices: ["A choice", "A thought", "A door", "An exit"],
        answer: "A choice"
    }
]
var index = 0
var questionsArea = document.querySelector("#questions")
var timerEl = document.querySelector('.timer');
var starQuiz = document.querySelector("#begin");
var score = 0
var timeLeft = 60

//begin quiz timer 
function playgame() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.innerText = 'Time: ' + timeLeft;

        } else {
            clearInterval(timeInterval);
        }
    }, 1000);
};

//Displays questions
starQuiz.addEventListener("click", function () {
    playgame()
    starQuiz.classList.add("hide")
    displayQuestion()
});

function displayQuestion() {
    questionsArea.innerHTML = ""
    var text = document.createElement("h2")
    text.innerText = questions[index].questionText
    questionsArea.appendChild(text)
    for (var i = 0; i < questions[index].choices.length; i++) {
        var button = document.createElement("button")
        button.innerText = questions[index].choices[i]
        button.addEventListener("click" , checkAnswer)
        questionsArea.appendChild(button)
    }
};

function checkAnswer(event) {
    var ansText = event.target.textContent;
    console.log(ansText);
    if(ansText === questions[index].answer){
        score = score + 100;
        console.log(score);
        index++;
        if (questions[index]) {
            displayQuestion()
            } else {
            alert("You Win! Score: " + score);
            storeScore();
    }

    } else {
        timeLeft -= 10;
        console.log(score);
        index++;
        displayQuestion()
    }
}