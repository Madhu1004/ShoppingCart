function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        if (tab.id === tabName) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    });
}

function togglePasswordVisibility(passwordFieldId) {
    const passwordInput = document.getElementById(passwordFieldId);
    const showPasswordCheckbox = document.getElementById(`show${passwordFieldId.replace('login', 'Login').replace('signup', 'Signup')}`);

    passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
}

function validateAndSignup() {
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Validate username, email, and password (similar to the previous example)

    // If all validations pass, proceed with signup
    signup(username, email, password);
}

function signup(username, email, password) {
    // API call for signup (similar to the previous example)
}

function validateAndLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Validate email and password (similar to the previous example)

    // If all validations pass, proceed with login
    login(email, password);
}

function login(email, password) {
    // API call for login (you need to implement this)
}

async function isUsernameUnique(username) {
    // Implement server-side logic to check the uniqueness of the username
    // For simplicity, let's assume a mock API endpoint that checks username uniqueness
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + encodeURIComponent(username));
    const data = await response.json();
    return data.length === 0; // Assuming if there are no posts with the given username, it's unique
}

// Function to check if an email is unique
async function isEmailUnique(email) {
    // Implement server-side logic to check the uniqueness of the email
    // For simplicity, let's assume a mock API endpoint that checks email uniqueness
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?email=' + encodeURIComponent(email));
    const data = await response.json();
    return data.length === 0; // Assuming if there are no comments with the given email, it's unique
}

function validateAndSignup() {
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Validate username
    if (username.trim() === '') {
        alert('Please enter a valid username.');
        return;
    }
    // Check uniqueness of username
    isUsernameUnique(username)
        .then(isUnique => {
            if (!isUnique) {
                alert('Username is already taken. Please choose another.');
                return;
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Check uniqueness of email
            isEmailUnique(email)
                .then(isUniqueEmail => {
                    if (!isUniqueEmail) {
                        alert('Email is already registered. Please use another email.');
                        return;
                    }

                    // Validate password
                    if (password.length < 6) {
                        alert('Password must be at least 6 characters long.');
                        return;
                    }

                    // If all validations pass, proceed with signup
                    signup(username, email, password);
                })
                .catch(error => {
                    console.error('Error checking email uniqueness:', error);
                });
        })
        .catch(error => {
            console.error('Error checking username uniqueness:', error);
        });
}

function validateAndLogin() {
    // Similar validations for login (you can implement them as needed)
}