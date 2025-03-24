var qn = document.getElementById("qn");
var opta = document.getElementById("a");
var optb = document.getElementById("b");
var optc = document.getElementById("c");
var optd = document.getElementById("d");
var nextBtn = document.getElementById("nxt");
var prevBtn = document.getElementById("prv");
var markReviewBtn = document.getElementById("mr");
var nav = document.getElementById("nav");
var clearResponseBtn = document.getElementById("cr");
var options = document.querySelectorAll("input[name='options']");
var answeredQuestions = {}; // Stores selected answers as index (not option value)
var previousSelectedNumber = null;// Track the previously selected number span
const questions = JSON.parse(localStorage.getItem("questions"));//parses json to js
var currentIndex = 0; //track of the current question index
var answeredQuestions = {}; // Stores selected answers
var markedForReview = {}; // Tracks review status

// Function to update question and options
function updateQuestion() {
    qn.innerText = questions[currentIndex].question;
    opta.innerText = questions[currentIndex].options[0];
    optb.innerText = questions[currentIndex].options[1];
    optc.innerText = questions[currentIndex].options[2];
    optd.innerText = questions[currentIndex].options[3];

    // Restore previous selection if answered
    options.forEach(option => {
        if (answeredQuestions[currentIndex] === option.value) {
            option.checked = true;  // Recheck the stored answer
        } else {
            option.checked = false;
        }
    });

    // Add event listener to mark question as answered when an option is selected
    options.forEach(option => {
        option.addEventListener("change", function () {
            markQuestionAnswered();
        });
    });


var questionButton = document.querySelector(`#nav button:nth-child(${currentIndex + 1})`);
    if (questionButton) {
        if (markedForReview[currentIndex]) {
            questionButton.style.backgroundColor = "purple"; // Restore purple if marked for review
            questionButton.style.color = "white";
        } else if (answeredQuestions[currentIndex]) {
            questionButton.style.backgroundColor = "green"; // Restore green if answered
            questionButton.style.color = "white";
        } else {
            questionButton.style.backgroundColor = ""; // Default color
            questionButton.style.color = "";
        }
        
    }
}


// Function to mark question as answered (Green)
function markQuestionAnswered() {
    var selectedOption = document.querySelector("input[name='options']:checked");
    var questionButton = document.querySelector(`#nav button:nth-child(${currentIndex + 1})`);

    if (selectedOption) {
        answeredQuestions[currentIndex] = selectedOption.value; // Store the selected option value
       
        if (markedForReview[currentIndex]) { 
            questionButton.style.backgroundColor = "purple"; // 🟣 Keep purple if marked for review
        } else {
            questionButton.style.backgroundColor = "green"; // ✅ Mark as answered
        }
            questionButton.style.color = "white";
        }
    }


// Function to mark question for review (Purple)
markReviewBtn.addEventListener("click", function () {
    var questionButton = document.querySelector(`#nav button:nth-child(${currentIndex + 1})`);

    if (questionButton) {
        if (markedForReview[currentIndex]) {
            // If already marked for review, check if answered
            if (answeredQuestions[currentIndex]) {
                questionButton.style.backgroundColor = "green"; // ✅ Change to green if answered
            } else {
                questionButton.style.backgroundColor = ""; // Default color if not answered
                questionButton.style.color = "";
            }
            delete markedForReview[currentIndex]; // Unmark the question
        } else {
            questionButton.style.backgroundColor = "purple"; // 🟣 Mark for Review
            questionButton.style.color = "white";
            markedForReview[currentIndex] = true;
        }
        
    }
});
var previousSelectedNumber = null;

// Function to highlight the selected question number
function highlightSelectedNumber() {
    // Reset the previous number size
    if (previousSelectedNumber) {
        previousSelectedNumber.classList.remove("selected-number");
    }

    // Get the current question button
    var currentButton = document.querySelector(`#nav button:nth-child(${currentIndex + 1})`);

    if (!currentButton) return; // Avoid errors if button not found

    var numberSpan = currentButton.querySelector("span") || currentButton; // Get span or button text itself

    // Apply the class to enlarge the current number
    numberSpan.classList.add("selected-number");
    previousSelectedNumber = numberSpan; // Store the reference
}


// Event listener for "Next" button
nextBtn.addEventListener("click", function () {
    if (!answeredQuestions[currentIndex] && markedForReview[currentIndex]) {
        // If marked for review and not answered, keep purple
    } else {
        markQuestionAnswered();
    }

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        updateQuestion();
        highlightSelectedNumber(); // Highlight the selected question number
    }
});

// Event listener for "Previous" button
prevBtn.addEventListener("click", function () {
    if (!answeredQuestions[currentIndex] && markedForReview[currentIndex]) {
        // If marked for review and not answered, keep purple
    } else {
        markQuestionAnswered();
    }

    if (currentIndex > 0) {
        currentIndex--;
        updateQuestion();
        highlightSelectedNumber(); // Highlight the selected question number
    }
});

nav.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON" || event.target.tagName === "SPAN") {
        var button = event.target.tagName === "BUTTON" ? event.target : event.target.parentElement;

        
        // Extract the number from the button's text
        var questionNumber = parseInt(button.textContent.trim(), 10);

        console.log("Clicked:", button.textContent.trim());  // Debugging
        console.log("Extracted Number:", questionNumber);   // Debugging

        if (isNaN(questionNumber) || !questions[questionNumber - 1]) {
            console.log("Invalid number detected! No question exists for:", questionNumber);
            return;
        }
        

        if (!answeredQuestions[currentIndex] && markedForReview[currentIndex]) {
            // If marked for review and not answered, keep purple
        } else {
            markQuestionAnswered();
        }

        // Reset the previous number size
        if (previousSelectedNumber) {
            previousSelectedNumber.classList.remove("selected-number");
        }

        // Get the number span inside the button
        var numberSpan = button.querySelector("span");
        if (numberSpan) {
            numberSpan.classList.add("selected-number");
            previousSelectedNumber = numberSpan; // Store the reference
        }

        // Change the question
        currentIndex = questionNumber - 1;
        updateQuestion();
    }
});



// Function to clear response
clearResponseBtn.addEventListener("click", function () {
    // Uncheck the selected option
    options.forEach(option => option.checked = false);

    // Remove the answer from storage
    delete answeredQuestions[currentIndex];

    // Keep the purple color if it was marked for review
    var questionButton = document.querySelector(`#nav button:nth-child(${currentIndex + 1})`);
    if (questionButton) {
        if (markedForReview[currentIndex]) {
            questionButton.style.backgroundColor = "purple"; // 🟣 Keep purple
        } else {
            questionButton.style.backgroundColor = ""; // Reset to default
            questionButton.style.color = "";
        }
    }
});

// Initialize the first question
updateQuestion();

