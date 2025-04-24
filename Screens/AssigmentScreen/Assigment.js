document.addEventListener('DOMContentLoaded', function() {
    const assignments = [
        {
            id: 1,
            title: "Mathematics Quiz",
            course: "Advanced Mathematics",
            dueDate: "2025-05-15",
            status: "pending",
            description: "Complete the quiz on algebraic equations and submit before the due date."
        },
        {
            id: 2,
            title: "Literature Essay",
            course: "Modern Literature",
            dueDate: "2025-05-10",
            status: "submitted",
            description: "Write a 1000-word essay on the themes in 'To Kill a Mockingbird'."
        },
        {
            id: 3,
            title: "Science Project",
            course: "Physics 101",
            dueDate: "2025-05-20",
            status: "pending",
            description: "Create a presentation on Newton's Laws of Motion."
        },
        {
            id: 4,
            title: "History Report",
            course: "World History",
            dueDate: "2025-04-30",
            status: "graded",
            grade: "A",
            description: "Research and write about the causes of World War II."
        }
    ];

    const assignmentsList = document.querySelector('.assignments-list');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Render assignments
    function renderAssignments(filter = 'all') {
        assignmentsList.innerHTML = '';
        
        const filteredAssignments = filter === 'all' 
            ? assignments 
            : assignments.filter(assignment => assignment.status === filter);

        if (filteredAssignments.length === 0) {
            assignmentsList.innerHTML = '<p>No assignments found.</p>';
            return;
        }

        filteredAssignments.forEach(assignment => {
            const assignmentCard = document.createElement('div');
            assignmentCard.className = 'assignment-card';
            
            let statusClass = '';
            let statusText = '';
            switch(assignment.status) {
                case 'pending':
                    statusClass = 'status-pending';
                    statusText = 'Pending';
                    break;
                case 'submitted':
                    statusClass = 'status-submitted';
                    statusText = 'Submitted';
                    break;
                case 'graded':
                    statusClass = 'status-graded';
                    statusText = `Graded: ${assignment.grade}`;
                    break;
            }

            assignmentCard.innerHTML = `
                <h3>${assignment.title}</h3>
                <p>${assignment.course}</p>
                <div class="assignment-meta">
                    <span class="assignment-due">Due: ${assignment.dueDate}</span>
                    <span class="assignment-status ${statusClass}">${statusText}</span>
                </div>
                <p>${assignment.description}</p>
                <div class="assignment-actions">
                    ${assignment.status === 'pending' 
                        ? `<button class="btn btn-primary" onclick="submitAssignment(${assignment.id})">Submit</button>` 
                        : ''}
                    <button class="btn btn-secondary" onclick="viewAssignmentDetails(${assignment.id})">Details</button>
                </div>
            `;
            
            assignmentsList.appendChild(assignmentCard);
        });
    }

    // Filter assignments
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            renderAssignments(this.dataset.filter);
        });
    });

    // Initial render
    renderAssignments();

    // Add these functions to the window object so they're accessible in the HTML onclick attributes
    window.submitAssignment = function(id) {
        const assignment = assignments.find(a => a.id === id);
        if (assignment) {
            assignment.status = 'submitted';
            renderAssignments(document.querySelector('.filter-btn.active').dataset.filter);
            alert(`Assignment "${assignment.title}" submitted successfully!`);
        }
    };

    window.viewAssignmentDetails = function(id) {
        const assignment = assignments.find(a => a.id === id);
        if (assignment) {
            alert(`Assignment Details:\n\nTitle: ${assignment.title}\nCourse: ${assignment.course}\nDue Date: ${assignment.dueDate}\nStatus: ${assignment.status}\nDescription: ${assignment.description}`);
        }
    };
});