var questions = [
    { question: "1. What is the capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"] },
    { question: "2. Who wrote 'Hamlet'?", options: ["Shakespeare", "Hemingway", "Dickens", "Austen"] },
    { question: "3. What is the square root of 64?", options: ["6", "7", "8", "9"] },
    { question: "4. Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"] },
    { question: "5. Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"] },
    { question: "6. What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"] },
    { question: "7. What is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Peacock"] },
    { question: "8. Who discovered electricity?", options: ["Newton", "Edison", "Franklin", "Tesla"] },
    { question: "9. What is the currency of Japan?", options: ["Yen", "Won", "Dollar", "Peso"] },
    { question: "10. How many continents are there?", options: ["5", "6", "7", "8"] },
    { question: "11. What is the chemical symbol for gold?", options: ["Ag", "Au", "Pb", "Fe"] },
    { question: "12. Who invented the telephone?", options: ["Edison", "Bell", "Tesla", "Newton"] },
    { question: "13. Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
    { question: "14. What is the longest river in the world?", options: ["Amazon", "Nile", "Mississippi", "Yangtze"] },
    { question: "15. Which is the smallest country in the world?", options: ["Maldives", "Vatican City", "Monaco", "Liechtenstein"] },
    { question: "16. What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"] },
    { question: "17. How many players are there in a football (soccer) team?", options: ["9", "10", "11", "12"] },
    { question: "18. Who is known as the 'Father of Computers'?", options: ["Turing", "Jobs", "Babbage", "Gates"] },
    { question: "19. What is the hardest natural substance on Earth?", options: ["Iron", "Gold", "Diamond", "Quartz"] },
    { question: "20. Which gas is essential for human respiration?", options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"] },
    { question: "21. What is the national sport of India?", options: ["Cricket", "Hockey", "Football", "Kabaddi"] },
    { question: "22. Which organ purifies the blood in the human body?", options: ["Lungs", "Liver", "Kidneys", "Heart"] },
    { question: "23. What is the chemical formula for water?", options: ["H2O", "CO2", "O2", "CH4"] },
    { question: "24. Who was the first person to walk on the moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"] },
    { question: "25. How many bones are there in the adult human body?", options: ["206", "208", "210", "212"] },
    { question: "26. What is the largest desert in the world?", options: ["Sahara", "Gobi", "Antarctica", "Kalahari"] },
    { question: "27. Which instrument is used to measure earthquakes?", options: ["Barometer", "Seismometer", "Thermometer", "Anemometer"] },
    { question: "28. What is the national flower of India?", options: ["Rose", "Lily", "Sunflower", "Lotus"] },
    { question: "29. Who discovered penicillin?", options: ["Pasteur", "Curie", "Fleming", "Koch"] },
    { question: "30. What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"] },
    { question: "31. What is the chemical symbol for iron?", options: ["Ir", "Fe", "Ag", "Pb"] },
    { question: "32. How many chromosomes do humans have?", options: ["23", "24", "46", "48"] },
    { question: "33. Who wrote 'The Origin of Species'?", options: ["Darwin", "Newton", "Einstein", "Galileo"] },
    { question: "34. What is the name of the galaxy we live in?", options: ["Andromeda", "Milky Way", "Sombrero", "Whirlpool"] },
    { question: "35. Which is the largest animal in the world?", options: ["Elephant", "Blue Whale", "GirafSfe", "Shark"] },
    { question: "36. How many hearts does an octopus have?", options: ["1", "2", "3", "4"] },
    { question: "37. Which is the tallest mountain in the world?", options: ["K2", "Everest", "Kilimanjaro", "Makalu"] },
    { question: "38. What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"] },
    { question: "39. What is the chemical symbol for sodium?", options: ["Na", "Sn", "So", "Ni"] },
    { question: "40. Which gas makes up most of the Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"] },
    { question: "41. What is the currency of the UK?", options: ["Euro", "Dollar", "Pound", "Franc"] },
    { question: "42. Which blood type is the universal donor?", options: ["A", "B", "O", "AB"] },
    { question: "43. What does DNA stand for?", options: ["Deoxyribose Nucleic Acid", "Dioxygen Nitric Acid", "Dimethyl Nuclear Acid", "Dihydro Neuron Acid"] },
    { question: "44. How many sides does a hexagon have?", options: ["4", "5", "6", "7"] },
    { question: "45. What is the main ingredient in sushi?", options: ["Bread", "Rice", "Pasta", "Noodles"] },
    { question: "46. Who developed the theory of relativity?", options: ["Newton", "Einstein", "Galileo", "Hawking"] },
    { question: "47. What is the capital of China?", options: ["Shanghai", "Beijing", "Hong Kong", "Shenzhen"] },
    { question: "48. Which is the fastest land animal?", options: ["Cheetah", "Lion", "Tiger", "Leopard"] },
    { question: "49. What is the chemical symbol for lead?", options: ["Pb", "Pd", "Pt", "Po"] },
    { question: "50. Which continent has the most countries?", options: ["Africa", "Asia", "Europe", "South America"] }
];
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

