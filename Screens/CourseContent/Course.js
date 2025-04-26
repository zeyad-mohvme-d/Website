document.addEventListener('DOMContentLoaded', function() {
    // Sample course data with image placeholders
    const courses = [
        { 
            id: 1, 
            title: "HTML & CSS Fundamentals", 
            description: "Learn the basics of web development", 
            category: "web", 
            duration: "4 hours",
            image: "https://via.placeholder.com/300x150?text=HTML+CSS" 
        },
        { 
            id: 2, 
            title: "JavaScript for Beginners", 
            description: "Get started with JavaScript programming", 
            category: "web", 
            duration: "6 hours",
            image: "https://via.placeholder.com/300x150?text=JavaScript" 
        },
        { 
            id: 3, 
            title: "UI/UX Design Principles", 
            description: "Master the fundamentals of good design", 
            category: "design", 
            duration: "5 hours",
            image: "https://via.placeholder.com/300x150?text=UI+UX" 
        },
        { 
            id: 4, 
            title: "Photoshop Basics", 
            description: "Learn photo editing and graphic design", 
            category: "design", 
            duration: "3 hours",
            image: "https://via.placeholder.com/300x150?text=Photoshop" 
        },
        { 
            id: 5, 
            title: "Entrepreneurship 101", 
            description: "Start your own business successfully", 
            category: "business", 
            duration: "8 hours",
            image: "https://via.placeholder.com/300x150?text=Business" 
        },
        { 
            id: 6, 
            title: "Digital Marketing", 
            description: "Learn online marketing strategies", 
            category: "business", 
            duration: "7 hours",
            image: "https://via.placeholder.com/300x150?text=Marketing" 
        }
    ];

    const courseGrid = document.getElementById('courseGrid');
    const categoryBtns = document.querySelectorAll('.category-btn');

    // Display all courses initially
    displayCourses(courses);

    // Add event listeners to category buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter courses
            const category = this.dataset.category;
            if (category === 'all') {
                displayCourses(courses);
            } else {
                const filteredCourses = courses.filter(course => course.category === category);
                displayCourses(filteredCourses);
            }
        });
    });

    // Function to display courses
    function displayCourses(coursesToDisplay) {
        courseGrid.innerHTML = '';
        
        if (coursesToDisplay.length === 0) {
            courseGrid.innerHTML = '<p style="color:white; width:100%; text-align:center;">No courses found in this category.</p>';
            return;
        }

        coursesToDisplay.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            courseCard.innerHTML = `
                <img src="${course.image}" alt="${course.title}" class="course-img">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-info">${course.description}</p>
                <p class="course-info"><strong>Duration:</strong> ${course.duration}</p>
                <span class="category-tag">${formatCategory(course.category)}</span>
            `;
            courseGrid.appendChild(courseCard);
        });
    }

    // Helper function to format category names
    function formatCategory(category) {
        const categoryNames = {
            'web': 'Web Development',
            'design': 'Design',
            'business': 'Business'
        };
        return categoryNames[category] || category;
    }
});