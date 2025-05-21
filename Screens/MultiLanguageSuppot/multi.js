document.addEventListener('DOMContentLoaded', function() {
    // Language data for all elements
    const translations = {
        en: {
            // Header
            "tagline": "Connecting students worldwide",
            
            // Welcome Section
            "welcome-title": "Find Your Perfect Opportunity",
            "welcome-text": "Discover scholarships and internships from around the world tailored to your needs and aspirations.",
            
            // Features
            "feature1-title": "Global Reach",
            "feature1-text": "Opportunities from 50+ countries worldwide",
            "feature2-title": "Academic Support",
            "feature2-text": "Guidance for your educational journey",
            "feature3-title": "Career Growth",
            "feature3-text": "Internships with top companies",
            
            // Footer
            "copyright": "© 2023 Global Opportunities. All rights reserved."
        },
        ar: {
            // Header
            "tagline": "ربط الطلاب حول العالم",
            
            // Welcome Section
            "welcome-title": "ابحث عن فرصتك المثالية",
            "welcome-text": "اكتشف المنح الدراسية والتدريبات من جميع أنحاء العالم المصممة خصيصًا لاحتياجاتك وتطلعاتك.",
            
            // Features
            "feature1-title": "وصول عالمي",
            "feature1-text": "فرص من أكثر من 50 دولة حول العالم",
            "feature2-title": "دعم أكاديمي",
            "feature2-text": "إرشاد لرحلتك التعليمية",
            "feature3-title": "نمو مهني",
            "feature3-text": "تدريبات مع أفضل الشركات",
            
            // Footer
            "copyright": "© 2023 الفرص العالمية. جميع الحقوق محفوظة."
        }
    };

    // Get all language selector links
    const languageLinks = document.querySelectorAll('.language-selector a');
    
    // Function to change language
    function changeLanguage(lang) {
        // Set the HTML direction and text alignment
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.body.style.textAlign = lang === 'ar' ? 'right' : 'left';
        
        // Update content sections
        document.querySelectorAll('[data-lang-content] .lang-content').forEach(content => {
            content.classList.toggle('active', content.dataset.lang === lang);
        });
        
        // Update elements with data-lang-key attributes
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.dataset.langKey;
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Update other elements
        document.querySelector('.tagline').textContent = translations[lang].tagline;
        document.querySelector('.lang-footer p').textContent = translations[lang].copyright;
        
        // Update active language link
        languageLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.lang === lang);
        });
        
        // Save language preference
        localStorage.setItem('preferredLanguage', lang);
    }
    
    // Add click event listeners to language links
    languageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.dataset.lang;
            changeLanguage(lang);
        });
    });
    
    // Check for saved language preference or use browser language
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 
                             (navigator.language.startsWith('ar') ? 'ar' : 'en');
    changeLanguage(preferredLanguage);
});