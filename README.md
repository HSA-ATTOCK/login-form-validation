#  Login Form with Dynamic Validation and Selection

This project is a **responsive and user-friendly login form** built using **HTML, CSS, and JavaScript**, designed to demonstrate form validation, dynamic content rendering, and UI/UX design practices.

---

##  Features

**Email & Password Validation**
- Email format validation using regular expressions.
- Password must include:
  - 8–12 characters
  - Uppercase and lowercase letters
  - At least one number
  - At least one special character

**Department Selection (Radio Buttons)**
- User can select only **one department** from:
  - CS (Computer Science)
  - BM (Business Management)
  - ENG (Engineering)

**Dynamic Subject Selection (Checkboxes)**
- Subjects are displayed **only after selecting a department**.
- Subjects vary by department.
- Must select **at least 5 out of 6** to proceed.

**Responsive UI Design**
- Clean and centered layout with soft shadows and rounded corners.
- Fixed form size to prevent shifting on validation errors.
- Styled using modern CSS practices.

**Password Visibility Toggle**
- Allows users to view/hide password using an eye icon.

**Console Output**
- On form submission, logs all input values in a structured format:
  ```json
  {
    "email": "user@example.com",
    "password": "User@123",
    "department": "CS",
    "subjects": ["OOP", "DBMS", "AI", "Web Dev", "Networking"]
  }

---

##  Technologies Used

- HTML5

- CSS3

- Vanilla JavaScript (ES6)

- Font Awesome for icons

---

##  Folder Structure

login-form
│
├── index.html         # HTML structure
├── styles.css         # Custom CSS styles
├── script.js          # JavaScript logic for validation and behavior
└── README.md          # Project description and documentation

---

##  Learning Outcomes

This project demonstrates:

- DOM manipulation
- Form validation with custom conditions
- Conditional rendering based on user input
- Dynamic UI updates without frameworks
- Good UI/UX design with pure CSS

---

##  Author

Haider Sajjad Azmat
