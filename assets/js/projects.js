document.addEventListener('DOMContentLoaded', function() {
    const projectsData = {
        web: [
            {
          title: "Railway Reservation System",
          image: "https://ik.imagekit.io/jxtjn4hpqj/rail.png?updatedAt=1748060488962",
          description: "A comprehensive MERN stack application for train ticket booking, PNR status checking, and admin management.",
          link: "https://github.com/sruthisoppa/Railway-Reservation-System"
        },
        {
          title: "Interactive Portfolio",
          image: "https://ik.imagekit.io/jxtjn4hpqj/Screenshot%202025-05-24%20135540.png?updatedAt=1748075178352",
          description: "A creative personal portfolio with interactive elements and sticky-note-style project cards.",
          link: "https://github.com/sruthisoppa/Sruthi-Portfolio"
        },
        {
          title: "Blog Platform",
          image: "https://ik.imagekit.io/jxtjn4hpqj/Screenshot%202025-05-24%20104816.png?updatedAt=1748069775693",
          description: "Full-stack blog application with user authentication, CRUD operations, and responsive design.",
          link: "https://github.com/sruthisoppa/Blog-personal"
        }
        ],
        ml: [
            {
          title: "Email Spam Classifier",
          image: "https://ik.imagekit.io/jxtjn4hpqj/Screenshot%202025-05-24%20095612.png?updatedAt=1748060803517",
          description: "Naive Bayes algorithm implementation to detect spam emails with 95% accuracy.",
          link: "https://github.com/sruthisoppa/Email-Spam-Detection"
        },
        {
          title: "Graduate Admission Predictor",
          image: "https://ik.imagekit.io/jxtjn4hpqj/Screenshot%202025-05-24%20140004.png?updatedAt=1748075430199",
          description: "Machine learning model to predict graduate school admission chances using Linear Regression.",
          link: "https://github.com/sruthisoppa/Graduate-Admission-Prediction"
        },
        {
          title: "Stock Price Predictor",
          image: "https://ik.imagekit.io/jxtjn4hpqj/Screenshot%202025-05-24%20105607.png?updatedAt=1748072823940",
          description: "LSTM neural network for time series forecasting of stock market prices.",
          link: "https://github.com/sruthisoppa/Stock-Prediction"
        }
        ],
        other: [
            {
          title: "Quiz Application",
          image: "https://ik.imagekit.io/jxtjn4hpqj/Screenshot%202025-05-24%20122712.png?updatedAt=1748069906680",
          description: "Mobile quiz app with real-time leaderboard, admin panel, and SQLite database.",
          link: "https://github.com/sruthisoppa/Quiz-App"
        },
        {
          title: "Weather Dashboard",
          image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          description: "Real-time weather information application with 5-day forecast and location search.",
          link: "#"
        },
        {
          title: "Task Management App",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          description: "Productivity application for task organization with drag-and-drop functionality.",
          link: "#"
        }
        ]
    };

    const projectGrid = document.getElementById('project-content');
    const projectTabs = document.querySelectorAll('.project-tab');

    function renderProjects(category) {
        projectGrid.innerHTML = ''; // Clear current projects
        const projectsToDisplay = projectsData[category];

        projectsToDisplay.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-img">
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank" class="project-link">
                        View Project <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            `;
            projectGrid.appendChild(projectCard);
        });
    }

    // Function to handle tab clicks
    window.showProjects = function(category) {
        projectTabs.forEach(tab => tab.classList.remove('active'));
        document.querySelector(`.project-tab[onclick="showProjects('${category}')"]`).classList.add('active');
        renderProjects(category);
    };

    // Initialize with "web" projects on page load
    showProjects('web');
});