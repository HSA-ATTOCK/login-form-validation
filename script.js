document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const subjectError = document.getElementById("subjectError");
  const submitBtn = document.getElementById("submitBtn");
  const form = document.getElementById("loginForm");
  const departmentRadios = document.getElementsByName("department");
  const subjectSelect = document.getElementById("subjectSelect");
  const subjectsList = document.getElementById("subjectsList");

  const subjectsData = {
    CS: ["MAD", "ACP", "Cloud Computing", "Information Security", "Game Development", "Entrepreneurship"],
    BM: ["Marketing", "Finance", "HRM", "Operations", "Economics", "Accounting"],
    ENG: ["Thermodynamics", "Mechanics", "CAD", "Material Science", "Maths", "Project"]
  };

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
    return regex.test(email);
  }

  function isValidPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,12}$/;
    return regex.test(password);
  }

  function getSelectedDepartment() {
    for (let radio of departmentRadios) {
      if (radio.checked) return radio.value;
    }
    return null;
  }

  function populateSubjects(dept) {
    document.getElementById("subjectsContainer").style.display = "block";

    subjectsList.innerHTML = "";
    subjectsData[dept].forEach(sub => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = sub;
      checkbox.name = "subjects";

      const label = document.createElement("label");
      label.appendChild(checkbox);
      label.append(" " + sub);

      subjectsList.appendChild(label);
    });
  }

  function countCheckedSubjects() {
    return [...document.querySelectorAll("input[name='subjects']:checked")].length;
  }

  function validateInputs() {
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    emailInput.value = email;

    let valid = true;

    if (!email) {
      emailError.textContent = "Email is required.";
      valid = false;
    } else if (!isValidEmail(email)) {
      emailError.textContent = "Invalid email format.";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    if (!password) {
      passwordError.textContent = "Password is required.";
      valid = false;
    } else if (!isValidPassword(password)) {
      passwordError.textContent = "Password must be 8-12 characters and include uppercase, lowercase, number, and special character.";
      valid = false;
    } else {
      passwordError.textContent = "";
    }

    const selectedDept = getSelectedDepartment();
    const selectedSubjects = countCheckedSubjects();
    if (!selectedDept) {
      subjectError.textContent = "Please select a department.";
      valid = false;
    } else if (selectedSubjects < 5) {
      subjectError.textContent = "Please select at least 5 subjects.";
      valid = false;
    } else {
      subjectError.textContent = "";
    }

    submitBtn.disabled = !valid;
  }

  togglePassword.addEventListener("click", function () {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
  });

  emailInput.addEventListener("input", validateInputs);
  passwordInput.addEventListener("input", validateInputs);
  // subjectSelect.addEventListener("change", validateInputs);
  subjectsList.addEventListener("change", validateInputs);
  departmentRadios.forEach(radio => {
    radio.addEventListener("change", function () {
      populateSubjects(radio.value);
      validateInputs();
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    // for showing inputs in console
      const selectedDept = document.querySelector('input[name="department"]:checked').value;
      const selectedSubjects = Array.from(document.querySelectorAll('input[name="subjects"]:checked')).map(cb => cb.value);
      const formData = {
      email: emailInput.value.trim(),
      password: passwordInput.value,
      department: selectedDept,
      subjects: selectedSubjects
      };
      console.log("Form Data:", formData);
    
    alert("Login Successful!");
  });
});
