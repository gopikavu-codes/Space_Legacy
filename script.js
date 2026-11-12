
// Space mission timeline data

const missions = [
    {
        year: "1969",
        title: "Apollo 11",
        description: "The first humans landed on the Moon."
    },
    {
        year: "1971",
        title: "Apollo 15",
        description: "The Lunar Roving Vehicle explored the Moon."
    },
    {
        year: "1976",
        title: "Viking 1",
        description: "NASA's first successful Mars lander."
    },
    {
        year: "2021",
        title: "Perseverance",
        description: "NASA's rover landed on Mars."
    }
];

// Display timeline

const timeline = document.getElementById("timeline-content");

missions.forEach(function(mission) {

    const item = document.createElement("div");

    item.className = "card";

    item.style.marginBottom = "15px";

    item.innerHTML = `
        <h3>${mission.year}</h3>
        <h4>${mission.title}</h4>
        <p>${mission.description}</p>
    `;

    timeline.appendChild(item);

});

// Explore button

document.querySelector(".explore-btn").addEventListener("click", function() {

    console.log("Welcome to Space History!");

});


const quizQuestions = [
    {
        question: "Where did Apollo astronauts land?",
        options: ["Mars", "Moon", "Venus"],
        answer: 1
    },
    {
        question: "Which rover landed on Mars in 2021?",
        options: ["Curiosity", "Perseverance", "Opportunity"],
        answer: 1
    },
    {
        question: "What helped slow down Perseverance during landing?",
        options: ["Parachute", "Wheels", "Solar panel"],
        answer: 0
    },
    {
        question: "Which mission first landed humans on the Moon?",
        options: ["Apollo 11", "Apollo 15", "Apollo 17"],
        answer: 0
    },
    {
        question: "What does ALSEP stand for?",
        options: [
            "Apollo Lunar Surface Experiments Package",
            "Advanced Lunar Space Exploration Program",
            "Apollo Landing Space Equipment Project"
        ],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {
    answered = false;

    const q = quizQuestions[currentQuestion];

    document.getElementById("question").textContent = q.question;
    document.getElementById("quiz-result").textContent = "";
    document.getElementById("score").textContent =
        "Question " + (currentQuestion + 1) + " of 5";

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(function(option, index) {
        const button = document.createElement("button");
        button.textContent = option;

        button.onclick = function() {
            if (answered) return;

            answered = true;

            if (index === q.answer) {
                score++;
                document.getElementById("quiz-result").textContent =
                    "🎉 Correct Answer!";
            } else {
                document.getElementById("quiz-result").textContent =
                    "❌ Wrong! Correct answer: " + q.options[q.answer];
            }

            document.getElementById("next-btn").disabled = false;
        };

        optionsDiv.appendChild(button);
    });

    document.getElementById("next-btn").disabled = true;
    document.getElementById("next-btn").textContent = "Next Question →";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").textContent =
            "Quiz Completed! 🚀";

        document.getElementById("options").innerHTML = "";

        document.getElementById("quiz-result").textContent =
            "Your final score: " + score + " / 5";

        document.getElementById("next-btn").style.display = "none";
        document.getElementById("score").textContent =
            "Thank you for exploring space history!";
    }
}

loadQuestion();



