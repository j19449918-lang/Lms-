// ==================== DATA ====================

const SUBJECTS = [
    "SIA", "GE9", "DM102", "PATHFIT", "NET102", "WEB DEV", "CC105", "ITE"
];

const SUBJECT_BG = {
    "SIA": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=60",
    "GE9": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=60",
    "DM102": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=60",
    "PATHFIT": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=60",
    "NET102": "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1600&q=60",
    "WEB DEV": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=60",
    "CC105": "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=60",
    "ITE": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=60"
};

const SUBJECT_COLORS = {
    "SIA": "#3498db",
    "GE9": "#9b59b6",
    "DM102": "#e74c3c",
    "PATHFIT": "#27ae60",
    "NET102": "#f39c12",
    "WEB DEV": "#2ecc71",
    "CC105": "#e67e22",
    "ITE": "#1abc9c"
};

const LESSONS = {
    "SIA": [
        { title: "Lesson 1: Introduction to Systems", summary: "• What is a system?\n• Components, input-process-output\n• Example: LMS as a system\n\nSummary: Systems are structured parts working together to achieve a goal." },
        { title: "Lesson 2: SDLC Basics", summary: "• Planning, Analysis, Design, Implementation, Testing, Maintenance\n• Why SDLC matters\n\nSummary: SDLC guides building software step-by-step for quality results." },
        { title: "Lesson 3: Requirements", summary: "• Functional vs Non-functional\n• User stories\n• Scope control\n\nSummary: Requirements describe what the system should do and how it should perform." }
    ],
    "GE9": [
        { title: "Lesson 1: Communication", summary: "• Verbal vs Non-verbal\n• Barriers in communication\n\nSummary: Effective communication reduces misunderstandings and improves teamwork." },
        { title: "Lesson 2: Critical Thinking", summary: "• Identify assumptions\n• Evidence-based decisions\n\nSummary: Critical thinking means analyzing info before concluding." }
    ],
    "DM102": [
        { title: "Lesson 1: Data & Information", summary: "• Data types\n• Information vs Knowledge\n\nSummary: Data becomes useful when processed into information." },
        { title: "Lesson 2: Database Basics", summary: "• Tables, rows, columns\n• Primary key, foreign key\n\nSummary: Databases store structured data for quick retrieval and management." }
    ],
    "PATHFIT": [
        { title: "Lesson 1: Fitness Fundamentals", summary: "• Health-related fitness components\n• Warm-up & cool-down\n\nSummary: Proper warm-up prevents injury and improves performance." },
        { title: "Lesson 2: Nutrition Basics", summary: "• Macronutrients\n• Hydration\n\nSummary: Balanced nutrition supports energy and recovery." }
    ],
    "NET102": [
        { title: "Lesson 1: Network Types", summary: "• LAN, WAN, MAN\n• Topologies overview\n\nSummary: Network type depends on coverage area and needs." },
        { title: "Lesson 2: IP Addressing", summary: "• IPv4 format\n• Subnet idea (intro)\n\nSummary: IP addressing uniquely identifies devices on a network." }
    ],
    "WEB DEV": [
        { title: "Lesson 1: HTML Basics", summary: "• Tags, elements, attributes\n• Semantic HTML\n\nSummary: HTML builds the structure of web pages." },
        { title: "Lesson 2: CSS Basics", summary: "• Selectors\n• Layout (flex/grid)\n\nSummary: CSS styles the page and controls layout." },
        { title: "Lesson 3: JS Basics", summary: "• Variables, functions\n• DOM manipulation\n\nSummary: JS adds interactivity and dynamic behavior." }
    ],
    "CC105": [
        { title: "Lesson 1: Intro to Computing", summary: "• Hardware vs software\n• OS basics\n\nSummary: Computing combines hardware + software to solve problems." },
        { title: "Lesson 2: Digital Safety", summary: "• Password practices\n• Phishing awareness\n\nSummary: Security starts with good habits and awareness." }
    ],
    "ITE": [
        { title: "Lesson 1: Ethics in IT", summary: "• Privacy\n• Responsible use\n\nSummary: Ethics guides proper behavior and choices in tech work." },
        { title: "Lesson 2: Professionalism", summary: "• Work attitude\n• Collaboration\n\nSummary: Professionalism builds trust and strong teams." }
    ]
};

const ANNOUNCEMENTS = [
    { title: "Update Student Info", date: "Nov 29 - Dec 7, 2025", body: "Please update your student information. Stay ready for announcements." },
    { title: "No Screenshot Policy", date: "Ongoing", body: "No screenshots, no copying, no sharing of modules." },
    { title: "Quiz Week", date: "Next schedule", body: "Prepare for offline quizzes per subject." }
];

const QUIZZES = {
    "SIA": [
        { q: "What does SDLC stand for?", choices: ["System Design Life Cycle", "Software Development Life Cycle", "System Data Level Control", "None"], a: 1, exp: "SDLC = Software Development Life Cycle." },
        { q: "Which comes first in SDLC?", choices: ["Testing", "Planning", "Maintenance", "Deployment"], a: 1, exp: "Planning is typically the first phase." },
        { q: "What is a system?", choices: ["Random collection of parts", "Structured parts working together", "Single component", "Software only"], a: 1, exp: "A system is structured parts working together." },
        { q: "Functional requirements describe:", choices: ["What system should do", "How system should perform", "System speed", "System color"], a: 0, exp: "Functional requirements describe what the system should do." }
    ],
    "GE9": [
        { q: "Non-verbal communication includes:", choices: ["Tone of voice", "Emails", "Speeches", "Reports"], a: 0, exp: "Tone, gestures, facial expressions are non-verbal cues." },
        { q: "Critical thinking focuses on:", choices: ["Guessing", "Evidence", "Rumors", "Memes"], a: 1, exp: "Critical thinking uses evidence and reasoning." }
    ],
    "DM102": [
        { q: "A table consists of:", choices: ["Rows and columns", "Only rows", "Only columns", "Graphs"], a: 0, exp: "Tables are made of rows and columns." },
        { q: "Primary key is used to:", choices: ["Duplicate records", "Uniquely identify rows", "Store images", "Hide data"], a: 1, exp: "Primary key uniquely identifies a record." }
    ],
    "PATHFIT": [
        { q: "Warm-up helps to:", choices: ["Increase injury risk", "Prepare body", "Stop blood flow", "None"], a: 1, exp: "Warm-up prepares muscles and heart rate." },
        { q: "Hydration is important because:", choices: ["It reduces energy", "It supports body functions", "It causes cramps", "None"], a: 1, exp: "Water supports many body functions." }
    ],
    "NET102": [
        { q: "LAN stands for:", choices: ["Local Area Network", "Large Area Network", "Low Access Node", "None"], a: 0, exp: "LAN = Local Area Network." },
        { q: "IPv4 format example:", choices: ["192.168.1.1", "GG:HH:II", "www.site.com", "None"], a: 0, exp: "IPv4 uses dotted decimal numbers." }
    ],
    "WEB DEV": [
        { q: "HTML is used for:", choices: ["Structure", "Styling", "Database", "Routing"], a: 0, exp: "HTML defines structure." },
        { q: "CSS is used for:", choices: ["Structure", "Styling", "Server", "Compile"], a: 1, exp: "CSS defines styles and layout." },
        { q: "JavaScript is used for:", choices: ["Structure", "Styling", "Interactivity", "Database"], a: 2, exp: "JS adds interactivity and dynamic behavior." }
    ],
    "CC105": [
        { q: "OS means:", choices: ["Open Software", "Operating System", "Online Service", "None"], a: 1, exp: "OS = Operating System." },
        { q: "Phishing is:", choices: ["Fishing sport", "Online scam", "A browser", "A virus always"], a: 1, exp: "Phishing is a social engineering scam." }
    ],
    "ITE": [
        { q: "IT ethics focuses on:", choices: ["Privacy & responsibility", "Cheating", "Hacking always", "None"], a: 0, exp: "Ethics includes privacy and responsibility." },
        { q: "Professionalism includes:", choices: ["Respect", "Late work", "Avoid teamwork", "None"], a: 0, exp: "Respect and good attitude are professionalism." }
    ]
};

// ==================== APP STATE ====================

let quizState = {
    selectedSubject: null,
    selectedWeek: null,
    selectedDifficulty: null,
    currentQuestions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    timer: null,
    timeLeft: 0,
    quizStartTime: null
};

let currentUser = {
    name: "John Doe",
    email: "john.doe@bestlink.edu.ph",
    avatar: "https://via.placeholder.com/40"
};

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', function() {
    initApp();
    
});

function initApp() {
    loadSubjects();
    loadQuizSubjects();
    loadHomeSubjects();
    loadAnnouncements();
    loadSummaries();
    generateWeekGrid();
    setupEventListeners();
    setupWeekSelection();
    setupAuth();
    setupNavigation();
    updateUserInfo();
}

// ==================== SUBJECT FUNCTIONS ====================

function loadSubjects() {
    const container = document.getElementById('allSubjectCards');
    if (!container) return;
    container.innerHTML = '';
    SUBJECTS.forEach(subject => {
        container.appendChild(createSubjectCard(subject));
    });
}

function loadHomeSubjects() {
    const container = document.getElementById('homeSubjectCards');
    if (!container) return;
    container.innerHTML = '';
    SUBJECTS.slice(0, 4).forEach(subject => {
        container.appendChild(createSubjectCard(subject));
    });
}

function loadQuizSubjects() {
    const container = document.getElementById('quizSubjectGrid');
    if (!container) return;
    container.innerHTML = '';
    
    SUBJECTS.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'selection-card';
        card.dataset.subject = subject;
        const color = SUBJECT_COLORS[subject] || '#2EAF7D';
        
        card.innerHTML = `
            <i class="fas fa-book" style="color: ${color};"></i>
            <h3>${subject}</h3>
            <p>${LESSONS[subject]?.length || 0} lessons</p>
            <div class="difficulty-badges">
                <span class="difficulty-badge easy">${QUIZZES[subject]?.length || 0} questions</span>
            </div>
        `;
        
        card.addEventListener('click', function() {
            selectQuizSubject(subject);
        });
        container.appendChild(card);
    });
}

function createSubjectCard(subject) {
    const card = document.createElement('div');
    card.className = 'subject-card';
    const color = SUBJECT_COLORS[subject] || '#2EAF7D';
    
    card.innerHTML = `
        <div class="subject-header" style="background: linear-gradient(135deg, ${color}dd, ${color});">
            <h3>${subject}</h3>
            <p>${LESSONS[subject]?.length || 0} Lessons</p>
        </div>
        <div class="subject-body">
            <p>${getSubjectDescription(subject)}</p>
            <div class="subject-stats">
                <span><i class="fas fa-file-alt"></i> ${LESSONS[subject]?.length || 0} modules</span>
                <span><i class="fas fa-question-circle"></i> ${QUIZZES[subject]?.length || 0} questions</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', function() {
        openSubjectDetail(subject);
    });
    return card;
}

function getSubjectDescription(subject) {
    const descriptions = {
        "SIA": "Systems Integration and Architecture",
        "GE9": "General Education 9 - Ethics",
        "DM102": "Database Management",
        "PATHFIT": "Physical Activity and Fitness",
        "NET102": "Networking Fundamentals",
        "WEB DEV": "Web Development",
        "CC105": "Introduction to Computing",
        "ITE": "Information Technology Elective"
    };
    return descriptions[subject] || "Course subject";
}

// ==================== SUBJECT DETAIL ====================

function openSubjectDetail(subject) {
    const page = document.getElementById('subjectDetailPage');
    if (!page) return;
    
    page.innerHTML = `
        <div class="subject-detail-header" style="background: linear-gradient(rgba(2, 53, 60, 0.85), rgba(2, 53, 60, 0.9)), url('${SUBJECT_BG[subject]}');">
            <h1>${subject}</h1>
            <p>${getSubjectDescription(subject)}</p>
        </div>
        
        <div class="subject-tabs">
            <button class="tab-btn active" data-tab="lessons">Lessons</button>
            <button class="tab-btn" data-tab="summaries">Summaries</button>
            <button class="tab-btn" data-tab="quizzes">Quizzes</button>
        </div>
        
        <div id="lessonsTab" class="tab-content active">
            <div class="lessons-container">
                ${generateLessonsHTML(subject)}
            </div>
        </div>
        
        <div id="summariesTab" class="tab-content">
            <div class="summaries-container">
                ${generateSummariesHTML(subject)}
            </div>
        </div>
        
        <div id="quizzesTab" class="tab-content">
            <div class="quiz-selection">
                <h2>Take a Quiz</h2>
                <p>Test your knowledge on ${subject}.</p>
                <div style="text-align: center; margin-top: 30px;">
                    <button class="quiz-btn" onclick="selectQuizSubject('${subject}')" style="padding: 15px 40px;">
                        <i class="fas fa-play"></i> Start Quiz
                    </button>
                </div>
            </div>
        </div>
    `;
    
    setupTabs();
    showPage('subjectDetailPage');
}

function generateLessonsHTML(subject) {
    const lessons = LESSONS[subject] || [];
    return lessons.map(lesson => `
        <div class="lesson-card">
            <h3>${lesson.title}</h3>
            <p>${lesson.summary.substring(0, 100)}...</p>
            <div class="lesson-meta">
                <span><i class="fas fa-clock"></i> 30 mins</span>
                <span><i class="fas fa-bookmark"></i> ${subject}</span>
            </div>
        </div>
    `).join('');
}

function generateSummariesHTML(subject) {
    const lessons = LESSONS[subject] || [];
    return lessons.map(lesson => `
        <div class="summary-card">
            <h3>${lesson.title}</h3>
            <p>${lesson.summary.replace(/\n/g, '<br>')}</p>
            <div class="summary-meta">
                <span><i class="fas fa-bookmark"></i> ${subject}</span>
            </div>
        </div>
    `).join('');
}

function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(this.dataset.tab + 'Tab').classList.add('active');
        });
    });
}

// ==================== QUIZ FUNCTIONS ====================

function selectQuizSubject(subject) {
    quizState.selectedSubject = {
        id: subject,
        name: subject,
        questions: QUIZZES[subject] || []
    };
    
    const weekHeader = document.getElementById('quizWeekHeader');
    if (weekHeader) {
        weekHeader.innerHTML = `
            <h1>${subject} - Select Week</h1>
            <p>Choose which week you want to take a quiz on. Each week has different topics and difficulty levels.</p>
        `;
    }
    
    const difficultyHeader = document.getElementById('quizDifficultyHeader');
    if (difficultyHeader) {
        difficultyHeader.innerHTML = `
            <h1>${subject} - Select Difficulty</h1>
            <p>Choose the difficulty level for your quiz.</p>
        `;
    }
    
    quizState.selectedWeek = null;
    quizState.selectedDifficulty = null;
    document.getElementById('selectedWeekInfo').classList.remove('active');
    document.querySelectorAll('.week-card').forEach(card => card.classList.remove('selected'));
    
    showPage('quizSelectWeekPage');
}

function generateWeekGrid() {
    const weekGrid = document.getElementById('weekGrid');
    if (!weekGrid) return;
    
    weekGrid.innerHTML = '';
    
    for (let i = 1; i <= 17; i++) {
        const weekCard = document.createElement('div');
        weekCard.className = 'week-card';
        weekCard.dataset.week = i;
        
        let icon = 'fa-calendar-alt';
        let label = '';
        
        if (i <= 5) { icon = 'fa-seedling'; label = 'Fundamentals'; }
        else if (i <= 10) { icon = 'fa-mountain'; label = 'Core Concepts'; }
        else if (i <= 15) { icon = 'fa-fire'; label = 'Advanced'; }
        else { icon = 'fa-trophy'; label = 'Final Topics'; }
        
        weekCard.innerHTML = `
            <i class="fas ${icon}"></i>
            <span class="week-number">Week ${i}</span>
            <span class="week-label">${label}</span>
        `;
        
        weekGrid.appendChild(weekCard);
    }
}

function setupWeekSelection() {
    const weekGrid = document.getElementById('weekGrid');
    if (!weekGrid) return;

    weekGrid.addEventListener('click', function(e) {
        const weekCard = e.target.closest('.week-card');
        if (!weekCard) return;

        // Remove selected from all weeks
        document.querySelectorAll('.week-card').forEach(card => {
            card.classList.remove('selected');
        });

        // Mark clicked week as selected
        weekCard.classList.add('selected');

        const weekNumber = weekCard.dataset.week;
        quizState.selectedWeek = weekNumber;

        // ── Update displayed week number in multiple places ──
        document.getElementById('selectedWeekDisplay').textContent = `Week ${weekNumber}`;
        document.getElementById('selectedWeekNumber').textContent = weekNumber;
        document.getElementById('modalWeekNumber').textContent = weekNumber;           // for modal
        document.getElementById('startQuizWeekDisplay').textContent = weekNumber;      // for button

        // Update progress bar
        const progressPercentage = (parseInt(weekNumber) / 17) * 100;
        document.getElementById('weekProgressFill').style.width = `${progressPercentage}%`;
        document.querySelector('.week-progress span:last-child').textContent = `${weekNumber}/17 weeks`;

        // Show selected info block
        document.getElementById('selectedWeekInfo').classList.add('active');

        // Enable and update start button
        const startBtn = document.getElementById('startQuizBtn');
        startBtn.disabled = false;
        
        const hint = document.getElementById('startQuizHint');
        hint.textContent = "Click the button above and choose difficulty to start";

        // Optional: reset any previous difficulty selection visual
        document.querySelectorAll('.selection-card[data-difficulty]').forEach(c => {
            c.classList.remove('selected-difficulty');
        });
        quizState.selectedDifficulty = null;
    });
}
function startQuiz() {
    if (!quizState.selectedSubject) {
        alert("No subject selected.");
        return;
    }
    if (!quizState.selectedWeek) {
        alert("Please select a week first.");
        return;
    }
    if (!quizState.selectedDifficulty) {
        alert("Please select difficulty level.");
        return;
    }

    const subjectQuestions = QUIZZES[quizState.selectedSubject.id] || [];

    // ── Set number of questions according to difficulty ──
    let numQuestions;
    if      (quizState.selectedDifficulty === 'easy')   numQuestions = 5;
    else if (quizState.selectedDifficulty === 'medium') numQuestions = 10;
    else if (quizState.selectedDifficulty === 'hard')   numQuestions = 20;
    else numQuestions = 10; // fallback

    // Prepare questions (take first N, or repeat if not enough)
    let questions = [];
    if (subjectQuestions.length >= numQuestions) {
        questions = subjectQuestions.slice(0, numQuestions);
    } else {
        while (questions.length < numQuestions) {
            questions = questions.concat(subjectQuestions);
        }
        questions = questions.slice(0, numQuestions);
    }

    quizState.currentQuestions   = questions;
    quizState.currentQuestionIndex = 0;
    quizState.userAnswers        = new Array(questions.length).fill(null);
    quizState.timeLeft           = numQuestions * 60; // 1 min/question
    quizState.quizStartTime      = Date.now();

    showPage('activeQuizPage');
    loadQuizQuestion();
    startQuizTimer();
}

// 1. Opens the difficulty selection modal
function openDifficultyModal() {
    if (!quizState.selectedWeek) {
        alert("Please select a week first.");
        return;
    }

    // Show the current week number in the modal title
    document.getElementById('diffModalWeek').textContent = quizState.selectedWeek;

    // Make the modal visible
    document.getElementById('difficultyModal').style.display = 'flex';
}

// 2. Closes the difficulty modal (called when clicking ×)
function closeDifficultyModal() {
    document.getElementById('difficultyModal').style.display = 'none';
}

// 3. Called when user clicks Easy / Medium / Hard card inside the modal
function startQuizWithDifficulty(difficulty) {
    quizState.selectedDifficulty = difficulty;
    closeDifficultyModal();       // hide modal
    startQuiz();                  // now actually start the quiz
}

function loadQuizQuestion() {
    const quizContainer = document.querySelector('.quiz-container');
    if (!quizContainer) return;
    
    const question = quizState.currentQuestions[quizState.currentQuestionIndex];
    const currentNum = quizState.currentQuestionIndex + 1;
    const totalNum = quizState.currentQuestions.length;
    const progressPercentage = (currentNum / totalNum) * 100;
    
    quizContainer.innerHTML = `
        <div class="quiz-header">
            <h2>${quizState.selectedSubject.name} - Week ${quizState.selectedWeek} (${quizState.selectedDifficulty})</h2>
            <div class="quiz-timer" id="quizTimer">
                <i class="fas fa-clock"></i> <span id="timerDisplay">${formatTime(quizState.timeLeft)}</span>
            </div>
        </div>
        
        <div class="quiz-progress">
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <span>Question ${currentNum} of ${totalNum}</span>
                <span>${Math.round(progressPercentage)}% Complete</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progressPercentage}%;"></div>
            </div>
        </div>
        
        <div class="quiz-question">
            ${question.q}
        </div>
        
        <div class="quiz-options" id="quizOptions">
            ${question.choices.map((choice, index) => `
                <div class="quiz-option ${quizState.userAnswers[quizState.currentQuestionIndex] === index ? 'selected' : ''}" 
                     data-option-index="${index}">
                    ${String.fromCharCode(65 + index)}. ${choice}
                </div>
            `).join('')}
        </div>
        
        <div class="quiz-navigation">
            <button class="quiz-btn" id="prevQuestionBtn" ${quizState.currentQuestionIndex === 0 ? 'disabled' : ''}>
                <i class="fas fa-arrow-left"></i> Previous
            </button>
            <button class="quiz-btn" id="nextQuestionBtn">
                ${quizState.currentQuestionIndex === totalNum - 1 ? 'Submit Quiz' : 'Next <i class="fas fa-arrow-right"></i>'}
            </button>
        </div>
    `;
    
    setupQuizOptions();
    document.getElementById('prevQuestionBtn')?.addEventListener('click', prevQuestion);
    document.getElementById('nextQuestionBtn')?.addEventListener('click', nextQuestion);
}

function setupQuizOptions() {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(option => {
        option.addEventListener('click', function() {
            options.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            quizState.userAnswers[quizState.currentQuestionIndex] = parseInt(this.dataset.optionIndex);
        });
    });
}

function prevQuestion() {
    if (quizState.currentQuestionIndex > 0) {
        quizState.currentQuestionIndex--;
        loadQuizQuestion();
    }
}

function nextQuestion() {
    if (quizState.userAnswers[quizState.currentQuestionIndex] === null) {
        alert('Please select an answer');
        return;
    }
    
    if (quizState.currentQuestionIndex === quizState.currentQuestions.length - 1) {
        submitQuiz();
    } else {
        quizState.currentQuestionIndex++;
        loadQuizQuestion();
    }
}

function submitQuiz() {
    let correctCount = 0;
    quizState.currentQuestions.forEach((question, index) => {
        if (quizState.userAnswers[index] === question.a) {
            correctCount++;
        }
    });
    
    const totalQuestions = quizState.currentQuestions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    
    document.getElementById('resultSubject').textContent = quizState.selectedSubject.name;
    document.getElementById('resultWeek').textContent = `Week ${quizState.selectedWeek}`;
    document.getElementById('resultDifficulty').textContent = 
        quizState.selectedDifficulty.charAt(0).toUpperCase() + quizState.selectedDifficulty.slice(1);
    document.getElementById('resultTime').textContent = formatTime(quizState.timeLeft);
    document.getElementById('resultCorrect').textContent = correctCount;
    document.getElementById('resultTotal').textContent = totalQuestions;
    document.getElementById('resultPercentage').textContent = `${percentage}%`;
    document.getElementById('quizScore').textContent = `${correctCount}/${totalQuestions}`;
    
    let title = '';
    if (percentage >= 90) title = 'Excellent!';
    else if (percentage >= 70) title = 'Good Job!';
    else if (percentage >= 50) title = 'Fair Effort!';
    else title = 'Keep Practicing!';
    document.getElementById('quizResultTitle').textContent = title;
    
    document.getElementById('quizResultModal').style.display = 'flex';
    clearInterval(quizState.timer);
}

function startQuizTimer() {
    if (quizState.timer) clearInterval(quizState.timer);
    
    quizState.timer = setInterval(() => {
        quizState.timeLeft--;
        const timerDisplay = document.getElementById('timerDisplay');
        if (timerDisplay) {
            timerDisplay.textContent = formatTime(quizState.timeLeft);
        }
        if (quizState.timeLeft <= 0) {
            clearInterval(quizState.timer);
            alert('Time\'s up! Submitting your quiz...');
            submitQuiz();
        }
    }, 1000);
}

// ==================== SUMMARY FUNCTIONS ====================

function loadSummaries() {
    const container = document.getElementById('summaryContainer');
    if (!container) return;
    
    container.innerHTML = '<h2>All Lesson Summaries</h2>';
    
    SUBJECTS.forEach(subject => {
        const subjectSummaries = document.createElement('div');
        subjectSummaries.style.marginTop = '30px';
        subjectSummaries.innerHTML = `<h3 style="color: var(--primary); margin-bottom: 15px;">${subject} - ${getSubjectDescription(subject)}</h3>`;
        
        const summariesGrid = document.createElement('div');
        summariesGrid.className = 'summaries-container';
        
        const lessons = LESSONS[subject] || [];
        lessons.forEach(lesson => {
            const card = document.createElement('div');
            card.className = 'summary-card';
            card.innerHTML = `
                <h3>${lesson.title}</h3>
                <p>${lesson.summary.replace(/\n/g, '<br>')}</p>
                <div class="summary-meta">
                    <span><i class="fas fa-bookmark"></i> ${subject}</span>
                </div>
            `;
            summariesGrid.appendChild(card);
        });
        
        subjectSummaries.appendChild(summariesGrid);
        container.appendChild(subjectSummaries);
    });
}

// ==================== ANNOUNCEMENT FUNCTIONS ====================

function loadAnnouncements() {
    const container = document.getElementById('announcementList');
    if (!container) return;
    
    container.innerHTML = '';
    
    ANNOUNCEMENTS.forEach(announcement => {
        const li = document.createElement('li');
        li.className = 'announcement-item';
        li.innerHTML = `
            <div class="announcement-title">${announcement.title}</div>
            <div class="announcement-meta">
                <span><i class="far fa-calendar"></i> ${announcement.date}</span>
                <span><i class="fas fa-user"></i> Admin</span>
            </div>
            <div class="announcement-content">
                ${announcement.body}
            </div>
        `;
        container.appendChild(li);
    });
}

// ==================== UTILITY FUNCTIONS ====================

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateUserInfo() {
    const userNameElements = document.querySelectorAll('#currentUserName, #welcomeUserName, #profileName');
    userNameElements.forEach(el => {
        if (el) el.textContent = currentUser.name;
    });
    
    const avatarElements = document.querySelectorAll('#userAvatar, #profileAvatar');
    avatarElements.forEach(el => {
        if (el) el.src = currentUser.avatar;
    });
}

// ==================== PAGE NAVIGATION ====================

function setupNavigation() {
    const menuLinks = document.querySelectorAll('.sidebar-menu a, .action-btn[data-page]');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            if (page) {
                showPage(page + 'Page');
                document.querySelectorAll('.sidebar-menu a').forEach(a => {
                    a.classList.remove('active');
                });
                const activeLink = document.querySelector(`.sidebar-menu a[data-page="${page}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    });
    
    document.getElementById('profileBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        showPage('profilePage');
    });
    
    document.getElementById('userProfileBtn')?.addEventListener('click', function() {
        showPage('profilePage');
    });
    
    document.querySelector('.menu-toggle')?.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
    });
}

function showPage(pageId) {
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.add('hidden');
    });
    
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.remove('hidden');
    }
    
    if (pageId === 'summaryPage') {
        loadSummaries();
    }
}

// ==================== AUTH FUNCTIONS ====================

function setupAuth() {
    document.getElementById('showRegister')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('registerPage').classList.remove('hidden');
    });
    
    document.getElementById('showLogin')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('registerPage').classList.add('hidden');
        document.getElementById('loginPage').classList.remove('hidden');
    });
    
    document.getElementById('loginForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
    });
    
    document.getElementById('registerForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('registerPage').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
    });
}

// ==================== EVENT LISTENERS ====================
    
    document.getElementById('newQuizBtn')?.addEventListener('click', function() {
        document.getElementById('quizResultModal').style.display = 'none';
        showPage('quizSelectSubjectPage');
    });
    
    document.getElementById('reviewQuizBtn')?.addEventListener('click', function() {
        document.getElementById('quizResultModal').style.display = 'none';
        quizState.currentQuestionIndex = 0;
        showPage('activeQuizPage');
        loadQuizQuestion();
    });
    
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    document.getElementById('editAvatarBtn')?.addEventListener('click', function() {
        document.getElementById('avatarModal').style.display = 'flex';
    });
    
    document.getElementById('uploadAvatarBtn')?.addEventListener('click', function() {
        document.getElementById('avatarUpload').click();
    });
    
    document.getElementById('avatarUpload')?.addEventListener('change', function(e) {
        if (this.files && this.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('avatarPreview').innerHTML = 
                    `<img src="${e.target.result}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
            };
            reader.readAsDataURL(this.files[0]);
        }
    });
    
    document.getElementById('saveAvatarBtn')?.addEventListener('click', function() {
        const preview = document.querySelector('#avatarPreview img');
        if (preview) {
            currentUser.avatar = preview.src;
            updateUserInfo();
        }
        document.getElementById('avatarModal').style.display = 'none';
    });
    
    document.getElementById('saveProfileBtn')?.addEventListener('click', function() {
        currentUser.name = document.getElementById('profileFullName').value;
        updateUserInfo();
        alert('Profile updated successfully!');
    });
    
