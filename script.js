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
        showProjectDetails("Cryptopy is a Python project that offers basic text encryption and decryption functionality using a substitution cipher approach. It utilizes a predefined character set and substitution characters to convert plaintext into ciphertext and vice versa. The program consists of functions for encryption (encrypt_msg) and decryption (decrypt_msg), each employing their respective dictionaries for character substitution. The system can read input from a file, allowing users to encrypt or decrypt messages based on a specified flag. Additionally, it supports both encryption and decryption operations within the same codebase. By employing a simple yet effective encryption technique, Cryptopy serves as an educational tool for understanding cryptographic concepts and could find application in scenarios where lightweight text security is required, albeit not for robust encryption purposes due to the simplicity of the substitution cipher used.", "python", "https://github.com/ojaskittur/cryptography");
    });

    fileUploadButton.addEventListener('click', function (e) {
        e.preventDefault();
        showProjectDetails("The project is a straightforward question paper sharing repository built using Django, HTML, and CSS. It provides a simple platform for users to upload and download question papers from various time slots. The core functionality revolves around a user-friendly interface where individuals can effortlessly upload question papers associated with different time slots or academic sessions.Upon accessing the platform, users are presented with clear options to either upload or download question papers. Uploading is intuitive, requiring users to provide necessary details such as the slot, subject, and any additional relevant information. Similarly, downloading question papers is uncomplicated, with users being able to easily navigate through available slots and subjects to find the desired papers.By prioritizing simplicity, the project aims to offer a streamlined experience for users without overwhelming them with unnecessary features or complexities. ", "HTML, CSS, Django", "https://github.com/ojaskittur/404_NOT_FOUND/tree/main/django-upload-example");
    });

    profileButton.addEventListener('click', function (e) {
        e.preventDefault();
        showProjectDetails("I have created a personal portfolio using HTML, CSS, and JavaScript to showcase my skills, projects, and experiences. The portfolio features a clean and modern design, ensuring easy navigation and accessibility. Through HTML, I structured the content, ensuring it's organized and easy to read. CSS was utilized to style the layout, making it visually appealing with consistent typography, color schemes, and responsive design for various devices. JavaScript was incorporated to add interactivity and functionality, such as smooth transitions, interactive elements like sliders or pop-ups, and form validations. The portfolio includes sections highlighting my background, skills, projects with descriptions and links, contact information, and possibly a blog or testimonials section. Overall, the portfolio serves as a professional representation of my work, allowing visitors to gain insight into my abilities, achievements, and personality.", "HTML, CSS, JavaScript", "https://github.com/22BDS0082/Personal-Portfolios");
    });

    projectDetailsContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('close-button')) {
            closeProjectDetails();
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

