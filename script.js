document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('languageModal');
    const supportLink = document.getElementById('supportLink');
    const closeModal = document.querySelector('.close-modal');
    const langButtons = document.querySelectorAll('.lang-btn');

    // Translations dictionary
    const translations = {
        en: {
            'logo': 'EduPlatform',
            'courses': 'Courses',
            'Quizzes': 'Quizzes',
            'assignments': 'Assignments',
            'forums': 'Forums',
            'videos': 'Video Lectures & Tutorials',
            'progress': 'Progress',
            'LearningDashboard': 'Learning Dashboard',
            'certifications': 'Certifications',
            'login': 'Login',
            'register': 'Register',
            'rights': 'All rights reserved.',
            'support': 'Support',
            'contact': 'Contact Us',
            'instructors': 'Instructor Profiles',
            'chat': 'Live Chat',
            'choose-language': 'Choose Language'
        },

        ar: {
            'logo': 'منصة التعليم',
            'courses': 'الدورات',
            'Quizzes': 'الاختبارات',
            'assignments': 'المهام',
            'forums': 'المنتديات',
            'videos': 'محاضرات ودروس فيديو',
            'progress': 'التقدم',
            'LearningDashboard': 'لوحة التحكم التعليمية',
            'certifications': 'الشهادات',
            'login': 'تسجيل الدخول',
            'register': 'تسجيل',
            'rights': 'جميع الحقوق محفوظة.',
            'support': 'الدعم',
            'contact': 'اتصل بنا',
            'instructors': 'ملفات المدرسين',
            'chat': 'الدردشة المباشرة',
            'choose-language': 'اختر اللغة'
        },
    };

    // Show modal when support link is clicked
    supportLink.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
    });

    // Close modal when X is clicked
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle language selection
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            modal.style.display = 'none';
            
            // Save language preference to localStorage
            localStorage.setItem('preferredLanguage', lang);
        });
    });

    // Function to change language
    function changeLanguage(lang) {
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update RTL/LTR direction
        document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        // Update all elements with data-lang-key attributes
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            el.textContent = translations[lang][key];
        });
    }

    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        changeLanguage(savedLang);
    }
});