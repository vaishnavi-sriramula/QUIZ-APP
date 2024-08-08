// Static questions categorized
var categories = {
    'Pipes and Cisterns': [
        {
            question: "Two pipes A and B can fill a tank in 20 minutes and 30 minutes respectively. If both pipes are opened together, how much time will it take to fill the tank?",
            options: ["12 minutes", "15 minutes", "10 minutes", "18 minutes"],
            correct: "12 minutes"
        },
        {
            question: "Pipe A can fill a tank in 10 hours while Pipe B can empty it in 15 hours. If both pipes are opened together, how long will it take to fill the tank?",
            options: ["30 hours", "60 hours", "10 hours", "15 hours"],
            correct: "30 hours"
        },
        {
            question: "A cistern can be filled by a tap in 4 hours but is emptied by an outlet pipe in 6 hours. How long will it take to fill the cistern if both the tap and the outlet pipe are opened?",
            options: ["12 hours", "10 hours", "24 hours", "8 hours"],
            correct: "12 hours"
        },
        {
            question: "Two pipes A and B can fill a tank in 12 hours and 16 hours respectively. If both pipes are opened together, how much time will they take to fill the tank?",
            options: ["7 hours", "9.6 hours", "6 hours", "8 hours"],
            correct: "7 hours"
        },
        {
            question: "A pipe can fill a tank in 12 minutes and another pipe can fill the same tank in 18 minutes. How long will it take to fill the tank if both pipes are opened together?",
            options: ["7.2 minutes", "10 minutes", "8 minutes", "12 minutes"],
            correct: "7.2 minutes"
        },
        {
            question: "A pipe can fill a cistern in 8 hours, but due to a leak in the cistern, it takes 10 hours to fill it. If the cistern is full, how long will the leak take to empty the cistern?",
            options: ["40 hours", "20 hours", "50 hours", "30 hours"],
            correct: "40 hours"
        },
        {
            question: "Two pipes can fill a tank in 8 hours and 12 hours respectively. If both pipes are opened together, how much time will they take to fill the tank?",
            options: ["4.8 hours", "6 hours", "5 hours", "7 hours"],
            correct: "4.8 hours"
        },
        {
            question: "Pipe A can fill a tank in 3 hours while Pipe B can fill it in 4 hours. If both pipes are opened together, how much time will they take to fill the tank?",
            options: ["1.7 hours", "2.4 hours", "2.5 hours", "2 hours"],
            correct: "1.7 hours"
        },
        {
            question: "Two pipes can fill a tank in 5 hours and 7 hours respectively. If both pipes are opened together, how much time will they take to fill the tank?",
            options: ["2.92 hours", "3 hours", "4 hours", "3.5 hours"],
            correct: "2.92 hours"
        },
        {
            question: "A pipe can fill a tank in 15 hours while another pipe can empty it in 20 hours. If both pipes are opened together, how long will it take to fill the tank?",
            options: ["60 hours", "30 hours", "50 hours", "40 hours"],
            correct: "60 hours"
        }
    ],
    'Probability': [
        {
            question: "What is the probability of getting a sum of 7 when two dice are thrown?",
            options: ["1/6", "1/12", "1/36", "1/18"],
            answer: "1/6"
        },
        {
            question: "What is the probability of drawing a red card from a standard deck of 52 cards?",
            options: ["1/2", "1/4", "1/3", "1/5"],
            correct: "1/2"
        },
        {
            question: "If a coin is tossed three times, what is the probability of getting at least one head?",
            options: ["7/8", "1/2", "3/4", "5/8"],
            correct: "7/8"
        },
        {
            question: "What is the probability of drawing an Ace from a standard deck of 52 cards?",
            options: ["1/13", "1/4", "1/26", "1/52"],
            correct: "1/13"
        },
        {
            question: "If a coin is tossed twice, what is the probability of getting two tails?",
            options: ["1/4", "1/3", "1/2", "1/8"],
            correct: "1/4"
        },
        {
            question: "What is the probability of getting a sum of 9 when two dice are thrown?",
            options: ["1/9", "1/12", "1/6", "1/8"],
            correct: "1/9"
        },
        {
            question: "If two coins are tossed, what is the probability of getting at least one head?",
            options: ["3/4", "1/2", "1/4", "2/3"],
            correct: "3/4"
        },
        {
            question: "What is the probability of drawing a face card from a standard deck of 52 cards?",
            options: ["3/13", "1/13", "1/4", "1/3"],
            correct: "3/13"
        },
        {
            question: "If a single die is rolled, what is the probability of getting an even number?",
            options: ["1/2", "1/3", "1/4", "1/6"],
            answer: "1/2"
        },
        {
            question: "What is the probability of drawing a king or queen from a standard deck of 52 cards?",
            options: ["2/13", "1/13", "1/26", "1/52"],
            correct: "2/13"
        }
    ],
    'Problems on Age': [
        {
            question: "John is twice as old as Jane. Five years ago, John was three times as old as Jane. How old is John now?",
            options: ["10 years", "15 years", "20 years", "30 years"],
            correct: "10 years"
        },
        {
            question: "The sum of the ages of a father and his son is 50 years. Five years ago, the father's age was three times the age of his son. What is the father's age now?",
            options: ["30 years", "35 years", "40 years", "45 years"],
            correct: "35 years"
        },
        {
            question: "A man is 24 years older than his son. In two years, his age will be twice the age of his son. What is the man's present age?",
            options: ["46 years", "48 years", "50 years", "52 years"],
            correct: "46 years"
        },
        {
            question: "The sum of the ages of a mother and her daughter is 45 years. Five years ago, the mother's age was four times the age of her daughter. What is the mother's age now?",
            options: ["36 years", "32 years", "28 years", "40 years"],
            correct: "36 years"
        },
        {
            question: "A father is three times as old as his son. After 12 years, the father will be twice as old as his son. What is the father's present age?",
            options: ["36 years", "42 years", "48 years", "54 years"],
            correct: "36 years"
        },
        {
            question: "The ages of two brothers are in the ratio 3:4. Four years later, the ratio of their ages will be 4:5. What are their present ages?",
            options: ["12 and 16", "15 and 20", "18 and 24", "21 and 28"],
            correct: "12 and 16"
        },
        {
            question: "The sum of the ages of two friends is 40 years. Four years ago, the age of one friend was three times the age of the other. What are their present ages?",
            options: ["28 and 12", "24 and 16", "30 and 10", "32 and 8"],
            correct: "28 and 12"
        },
        {
            question: "A man is 6 years older than his wife and 4 times as old as his son. If the son becomes 15 years old after 3 years, what is the present age of the wife?",
            options: ["39 years", "36 years", "33 years", "30 years"],
            correct: "36 years"
        },
        {
            question: "The sum of the ages of a brother and a sister is 25 years. Five years ago, the brother was twice as old as the sister. What are their present ages?",
            options: ["15 and 10", "18 and 7", "20 and 5", "17 and 8"],
            correct: "15 and 10"
        },
        {
            question: "A man is 4 times as old as his son. Five years ago, he was 5 times as old as his son. What is the man's present age?",
            options: ["40 years", "36 years", "32 years", "28 years"],
            correct: "40 years"
        }
    ],
    'Profit and Loss': [
        {
            question: "A shopkeeper sells an article at a gain of 10%. If the cost price is $200, what is the selling price?",
            options: ["$220", "$240", "$210", "$230"],
            correct: "$220"
        },
        {
            question: "An article is sold at a loss of 15%. If the cost price is $300, what is the selling price?",
            options: ["$255", "$270", "$285", "$300"],
            correct: "$255"
        },
        {
            question: "A man bought an article for $500 and sold it for $450. What is the loss percentage?",
            options: ["10%", "12%", "8%", "15%"],
            correct: "10%"
        },
        {
            question: "A shopkeeper sells an article at a profit of 20%. If the selling price is $240, what is the cost price?",
            options: ["$200", "$220", "$210", "$230"],
            correct: "$200"
        },
        {
            question: "An article is bought for $600 and sold for $720. What is the profit percentage?",
            options: ["20%", "15%", "25%", "30%"],
            correct: "20%"
        },
        {
            question: "A man sells an article at a gain of 25%. If the cost price is $800, what is the selling price?",
            options: ["$1000", "$900", "$950", "$850"],
            correct: "$1000"
        },
        {
            question: "An article is sold at a loss of 10%. If the selling price is $180, what is the cost price?",
            options: ["$200", "$190", "$210", "$220"],
            correct: "$200"
        },
        {
            question: "A shopkeeper sells an article for $150 making a profit of 25%. What was the cost price?",
            options: ["$120", "$100", "$130", "$140"],
            correct: "$120"
        },
        {
            question: "An article is bought for $400 and sold at a loss of 5%. What is the selling price?",
            options: ["$380", "$390", "$400", "$370"],
            correct: "$380"
        },
        {
            question: "A man sells an article at a gain of 15%. If the selling price is $575, what is the cost price?",
            options: ["$500", "$525", "$550", "$600"],
            correct: "$500"
        }
    ]
};

// Save to Local Storage
localStorage.setItem('questions', JSON.stringify(categories));

// Retrieve questions from Local Storage
var categories = JSON.parse(localStorage.getItem('questions'));

// Global variables
var getUsername, getCategory, getCategoryValue, getResponseCode, intervalTimer;
var getScore = 0;
var attemptQues = 0;
var backQues = document.getElementById('backQues');
var nextQues = document.getElementById('nextQues');
var submitQues = document.getElementById('submitQues');
var gotoHome = document.getElementById('gotoHome');
var startAgain = document.getElementById('startAgain');

// Enter Username
document.getElementById('enterBtn').addEventListener('click', function(){
    getUsername = document.getElementById('username').value;
    if(getUsername == ""){
        document.getElementById('username').classList.add('form-error');
    }else{
        document.getElementById('username').classList.remove('form-error');
        document.querySelector('.selectCategory-wrapper').style.display = "block";
    }
});

// Total timer
var actualTime = 100;
var timeSec = 101;
function totalTime(){
    document.getElementById('taskTime').innerHTML = timeSec - 1;
    timeSec--;
    if(timeSec == 0){
        alert('Time is up!');
        // Show/hide steps
        document.querySelector('.second-step').style.display = "none";
        document.querySelector('.third-step').style.display = "block";
    }
}

// Display questions
function displayQuestions(category) {
    var questionWrap = [];
    var questions = categories[category];
    questions.forEach((item, key) => {
        var correctAns = `<li class="rightAns">${item.correct}</li>`;
        var optionList = [];
        item.options.forEach(option => {
            if (option !== item.correct) {
                optionList.push(`<li class="wrongAns">${option}</li>`);
            } else {
                optionList.push(correctAns);
            }
        });
        optionList = shuffle(optionList);

        var itemHtml = `${(key == 0) ? '<div class="question-wrap active">' : '<div class="question-wrap">'}<div class="question-box"><div class="totalQuestionCurrent"><span class="currentQuesNo">${key + 1}</span>/10</div><h3 class="currentQues">${item.question}</h3></div><div class="quesOptions"><ul class="questionList">${optionList.join('')}</ul></div></div>`;
        questionWrap.push(itemHtml);
    });

    questionWrap.forEach(element => {
        document.getElementById('question-wrapper').insertAdjacentHTML('beforeend', element);
    });
}

// Shuffle Functionality
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Click on Category
var category = document.querySelectorAll('.selectCategory-wrapper ul li');
category.forEach(element => {
    element.addEventListener('click', function(e){
        element.classList.add('active');
        element.style.pointerEvents = "none";
        getCategory = element.innerHTML;
        document.getElementById('selectCat').innerHTML = getCategory;
        getCategoryValue = element.getAttribute("value");

        // Display static questions based on category
        displayQuestions(getCategory);

        // Show/hide steps
        document.querySelector('.first-step').style.display = "none";
        document.querySelector('.second-step').style.display = "block";

        // Answer select
        var answerBox = document.querySelectorAll('.questionList');
        answerBox.forEach(element => {
            var getChildElem = element.childNodes;
            getChildElem.forEach(element => {
                element.addEventListener("click", function(e){
                    attemptQues++;
                    if (element.classList.contains("rightAns")) {
                        element.classList.add('active');
                        getScore++;
                        document.getElementById('score').innerHTML = getScore;
                        document.getElementById('correct').innerHTML = getScore;
                    } else {
                        element.classList.add('active');
                    }
                    var siblings = element.parentElement.childNodes;
                    siblings.forEach(sibling => {
                        sibling.style.pointerEvents = "none";
                        if (sibling.classList.contains("rightAns")) {
                            sibling.classList.add('active');
                        }
                    });
                });
            });
        });

        intervalTimer = setInterval(function(){
            totalTime();
        }, 1000);
    });
});

// Next Question Function
var indexitem = 0;
nextQues.addEventListener("click", function(){
    var questionBox = document.querySelectorAll('.question-wrap');
    questionBox.forEach((elem, key) => {
        elem.classList.remove('active');
    });
    questionBox[indexitem + 1].classList.add('active');
    indexitem++;
    backQues.style.display = "block";
    if (indexitem === questionBox.length - 1) {
        submitQues.style.display = "block";
        nextQues.style.display = "none";
    }
});

// Previous Question Button
backQues.addEventListener("click", function(){
    var questionBox = document.querySelectorAll('.question-wrap');
    questionBox.forEach((elem, key) => {
        elem.classList.remove('active');
    });
    indexitem--;
    questionBox[indexitem].classList.add('active');
    submitQues.style.display = "none";
    nextQues.style.display = "block";

    if (indexitem === 0) {
        backQues.style.display = "none";
    }
});

// Submit Question Functionality
submitQues.addEventListener("click", function(){
    indexitem = 0;
    clearInterval(intervalTimer);
    console.log(actualTime - timeSec);

    // Third step show and second hide
    document.querySelector('.second-step').style.display = "none";
    document.querySelector('.third-step').style.display = "block";

    // Final Score
    document.getElementById('userName').innerHTML = getUsername;
    document.getElementById('totalTime').innerHTML = actualTime - timeSec;
    document.getElementById('attempt').innerHTML = attemptQues;
    document.getElementById('wrong').innerHTML = attemptQues - getScore;
    document.getElementById('percentage').innerHTML = ((getScore / 10) * 100) + "%";

    // Buttons hide/show
    backQues.style.display = "none";
    submitQues.style.display = "none";
    nextQues.style.display = "block";
});

// Go to Home Functionality
gotoHome.addEventListener("click", function(){
    location.reload();
});

// Start Again Functionality
startAgain.addEventListener("click", function(){
    clearInterval(intervalTimer);
    getScore = 0;
    attemptQues = 0;
    document.getElementById('score').innerHTML = getScore;

    // Second step show and third hide
    document.querySelector('.second-step').style.display = "block";
    document.querySelector('.third-step').style.display = "none";

    // Restart Quiz timing
    timeSec = 101;
    intervalTimer = setInterval(function(){
        totalTime();
    }, 1000);

    // Rearrange Answers Options
    var answerBox = document.querySelectorAll('.questionList');
    answerBox.forEach(element => {
        var getChildElem = element.childNodes;
        getChildElem.forEach(element => {
            element.classList.remove('active');
            element.style.pointerEvents = "auto";
        });
    });

    // Set current question to the first
    var questionBox = document.querySelectorAll('.question-wrap');
    questionBox.forEach((elem, key) => {
        elem.classList.remove('active');
        if (key === 0) {
            elem.classList.add('active');
        }
    });

    // Buttons visibility
    backQues.style.display = "none";
    submitQues.style.display = "none";
    nextQues.style.display = "block";
});