// Function to handle account creation
function create() {
    const username = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Save the username and password to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert("Registration successful! Welcome " + username);
        window.location.href = '/index.html';
    } else {
        alert("Please fill in both fields.");
    }
}

// Language data
const translations = {
    en: {
        title: "Register",
        labelName: "Full Name",
        labelEmail: "Email",
        labelPassword: "Password",
        labelConfirmPassword: "Confirm Password",
        labelAcademicLevel: "Academic Level",
        createAccount: "Create Account",
        loginPrompt: "Already have an account? <a href='../LoginScreen/LoginScreen.html'>Login here</a>"
    },
    ar: {
        title: "تسجيل",
        labelName: "الاسم الكامل",
        labelEmail: "البريد الإلكتروني",
        labelPassword: "كلمة المرور",
        labelConfirmPassword: "تأكيد كلمة المرور",
        labelAcademicLevel: "المستوى الأكاديمي",
        createAccount: "إنشاء حساب",
        loginPrompt: "هل لديك حساب بالفعل؟ <a href='../LoginScreen/LoginScreen.html'>سجل الدخول هنا</a>"
    }
};

// Function to change language
function changeLanguage(lang) {
    // Set the text direction and alignment for the entire page
    document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.textAlign = lang === 'ar' ? 'right' : 'left';

    // Update the text content for each element
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("label-name").innerText = translations[lang].labelName;
    document.getElementById("label-email").innerText = translations[lang].labelEmail;
    document.getElementById("label-password").innerText = translations[lang].labelPassword;
    document.getElementById("label-confirm-password").innerText = translations[lang].labelConfirmPassword;
    document.getElementById("label-academic-level").innerText = translations[lang].labelAcademicLevel;
    document.getElementById("create-account-btn").innerText = translations[lang].createAccount;
    document.getElementById("login-prompt").innerHTML = translations[lang].loginPrompt;

    // Additional styling for Arabic to push text further to the right
    if (lang === 'ar') {
        document.querySelectorAll('.form-group label').forEach(label => {
            label.style.marginRight = '20px'; // Add extra margin to the right
        });
    } else {
        document.querySelectorAll('.form-group label').forEach(label => {
            label.style.marginRight = '0'; // Reset margin for English
        });
    }
}