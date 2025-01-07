window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const cryptographyButton = document.getElementById('cryptography-button');
    const fileUploadButton = document.getElementById('fileupload-button');
    const profileButton = document.getElementById('profile-button');
    const projectDetailsContainer = document.querySelector('.project-details-container');

    function showProjectDetails(description, technologies, projectLink) {
        const projectDetails = `
            <div class="project-details">
                <span class="close-button">&times;</span>
                <h2 class="project-heading">Project Description</h2>
                <p class="project-description">${description}</p>
                <h2 class="project-heading">Technologies Used</h2>
                <p class="technologies-used">${technologies}</p>
                <a href="${projectLink}" target="_blank" class="button">Link to Project</a>
            </div>
        `;
        projectDetailsContainer.innerHTML = projectDetails;
        projectDetailsContainer.style.display = 'block';
    }

    function closeProjectDetails() {
        projectDetailsContainer.style.display = 'none';
    }

    cryptographyButton.addEventListener('click', function (e) {
        e.preventDefault();
        showProjectDetails("The NPTEL Practice Quizzes Platform is a web-based application designed to aid students in their preparation for NPTEL (National Programme on Technology Enhanced Learning) courses. This platform provides a comprehensive set of practice quizzes that mirror the format and content of NPTEL exams, helping learners to test their knowledge, track their progress, and improve their performance.", "HTML, CSS, JavaScript", "https://22bds0082.github.io/nptel-practice/index.html#");
    });

    fileUploadButton.addEventListener('click', function (e) {
        e.preventDefault();
        showProjectDetails("

I played a key role in developing a web application that generates personalized learning roadmaps by analyzing users' current jobs, goal jobs, and skills. I extracted text from user-uploaded resumes stored in S3 buckets and integrated it with the Gemini API to identify relevant skills. By combining API-extracted skills with user inputs, I created targeted skill development plans. Additionally, I utilized S3 buckets to store static files for enhanced performance and scalability and contributed to both backend and frontend development, ensuring efficient data handling and a user-friendly interface.", "HTML, CSS,JavaScript, Django", "https://github.com/ojaskittur/careertrix");
    });

    profileButton.addEventListener('click', function (e) {
        e.preventDefault();
        showProjectDetails("I have created a personal portfolio using HTML, CSS, and JavaScript to showcase my skills, projects, and experiences. The portfolio features a clean and modern design, ensuring easy navigation and accessibility. Through HTML, I structured the content, ensuring it's organized and easy to read. CSS was utilized to style the layout, making it visually appealing with consistent typography, color schemes, and responsive design for various devices. JavaScript was incorporated to add interactivity and functionality, such as smooth transitions, interactive elements like sliders or pop-ups, and form validations. The portfolio includes sections highlighting my background, skills, projects with descriptions and links, contact information, and possibly a blog or testimonials section. Overall, the portfolio serves as a professional representation of my work, allowing visitors to gain insight into my abilities, achievements, and personality.", "HTML, CSS, JavaScript", "https://github.com/22BDS0082/Personal-Portfolio");
    });

    projectDetailsContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('close-button')) {
            closeProjectDetails();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const languagesButton = document.getElementById('languages-button');
    const frameworksButton = document.getElementById('frameworks-button');
    const toolsButton = document.getElementById('tools-button');
    const skillsContainer = document.querySelector('.skills-container');

    function showSkillsDetails(title, subheading, description) {
        const skillsDetails = `
            <div class="skills">
                <span class="close-button">&times;</span>
                <p class="heading-description">${title}</p>
                <p class="subheading">${subheading}</p>
                <p class="description">${description}</p>
            </div>
        `;
        skillsContainer.innerHTML = skillsDetails;
        skillsContainer.style.display = 'block';
    }

    function closeSkillsDetails() {
        skillsContainer.style.display = 'none';
    }

    languagesButton.addEventListener('click', function (e) {
        e.preventDefault();
        showSkillsDetails("Languages:", "Python, C, C++, Java, R, Javascript:", "Proficient in Python, C, C++, Java, R, and JavaScript, encompassing a versatile skill set for various software development needs. With Python, I conduct data analysis, leveraging libraries like NumPy. In C and C++, I am proficient in data structures and algorithms, showcasing my ability to solve problems and think critically. With Java, I am exploring object-oriented programming principles and basic application development. My introduction to R involves learning statistical computing and data analysis techniques. With JavaScript, I create dynamic web applications using frameworks like React.js, focusing on user-centric design and functionality. This breadth of experience across multiple programming languages enables me to deliver comprehensive and efficient solutions to diverse software challenges.");
    });

    frameworksButton.addEventListener('click', function (e) {
        e.preventDefault();
        showSkillsDetails("Frameworks:", "React:", "Proficient in React, a popular JavaScript library used for building user interfaces. With React, I can efficiently develop interactive web applications with reusable components, enabling a smoother and more organized development process. My skills in React include creating dynamic and responsive UIs that enhance user experience, utilizing features like state management, virtual DOM manipulation, and component lifecycle methods. I am adept at integrating React with other libraries and frameworks, such as Redux for state management and React Router for navigation, to create robust and scalable applications. Additionally, my understanding of React hooks enables me to write cleaner and more concise code, improving overall project maintainability. Continuously staying updated with the latest advancements in React, I am committed to leveraging this technology to deliver high-quality, modern web solutions.");
    });

    toolsButton.addEventListener('click', function (e) {
        e.preventDefault();
        showSkillsDetails("Developer Tools:", "GitHub:", "Proficient in GitHub, a widely used platform for version control and collaboration in software development projects. With GitHub, I effectively manage code repositories, track changes, and collaborate with team members using features such as pull requests, code reviews, and issue tracking. I am experienced in utilizing Git, the distributed version control system underlying GitHub, to maintain a structured and organized development workflow. By leveraging GitHub's branching model, I can efficiently work on multiple features or bug fixes simultaneously while ensuring code integrity and stability through version control best practices. Additionally, I am familiar with GitHub Pages for hosting static websites and utilizing GitHub Actions for automating workflows such as testing, building, and deployment. With my proficiency in GitHub, I contribute to creating a collaborative and efficient development environment, enabling seamless teamwork and project success.");
    });

    skillsContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('close-button')) {
            closeSkillsDetails();
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function (e) 
    {
        if (contactForm.action.includes('google.com/forms'))
         {
            return; 
         }
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || subject === '' || message === '') 
        {
            formMessage.innerHTML = 'Please fill in all fields.';
            formMessage.style.color = 'red';
            return;
        }

        if (!validateEmail(email)) 
        {
            formMessage.innerHTML = 'Please enter a valid email address.';
            formMessage.style.color = 'red';
            return;
        }
        formMessage.innerHTML = 'Your message has been sent successfully.';
        formMessage.style.color = 'green';

        contactForm.reset();
    });
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});

