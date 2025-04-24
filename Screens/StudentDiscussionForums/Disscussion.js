document.addEventListener('DOMContentLoaded', function() {
    // Sample forum data
    const forums = {
        'General Discussion': [
            {
                id: 1,
                title: 'Welcome to the forum!',
                author: 'Admin',
                date: '2025-05-01',
                content: 'This is the general discussion forum. Feel free to post any questions or topics related to your studies.',
                replies: [
                    {
                        author: 'Student1',
                        date: '2025-05-02',
                        content: 'Thanks for the welcome!'
                    }
                ]
            }
        ],
        'Course Q&A': [
            {
                id: 2,
                title: 'Math 101 Question',
                author: 'CuriousStudent',
                date: '2025-05-03',
                content: 'Can someone explain problem 5 from the last assignment?',
                replies: []
            }
        ],
        'Project Collaboration': [],
        'Off-Topic': []
    };

    // DOM Elements
    const forumLinks = document.querySelectorAll('.forum-list a');
    const postForm = document.querySelector('.new-post form');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');

    // Current forum state
    let currentForum = 'General Discussion';

    // Set up forum links
    forumLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            currentForum = this.textContent;
            
            // Update active state
            forumLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // In a real app, you would load the posts for this forum
            console.log(`Loading posts for: ${currentForum}`);
            alert(`Forum "${currentForum}" selected. In a complete implementation, this would load the posts for this forum.`);
        });
    });

    // Set first forum as active by default
    forumLinks[0].classList.add('active');

    // Handle new post submission
    postForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = postTitle.value.trim();
        const content = postContent.value.trim();
        
        if (title && content) {
            // In a real app, you would send this to your backend
            const newPost = {
                id: Date.now(),
                title: title,
                author: 'CurrentUser', // This would be the logged in user
                date: new Date().toISOString().split('T')[0],
                content: content,
                replies: []
            };
            
            // Add to the current forum (in memory)
            forums[currentForum].unshift(newPost);
            
            // Reset form
            postForm.reset();
            
            // Show success message
            alert(`New post "${title}" created in "${currentForum}" forum!`);
            
            console.log('Updated forums data:', forums);
        } else {
            alert('Please fill in both title and content!');
        }
    });

    // Simulated function to view a post (would be used when clicking on a post title)
    window.viewPost = function(postId) {
        // Find the post in any forum
        for (const forum in forums) {
            const post = forums[forum].find(p => p.id === postId);
            if (post) {
                alert(`Viewing Post: ${post.title}\n\nAuthor: ${post.author}\nDate: ${post.date}\n\n${post.content}\n\nReplies: ${post.replies.length}`);
                return;
            }
        }
        alert('Post not found!');
    };

    // Additional feature: Add sample posts button for demo purposes
    const demoButton = document.createElement('button');
    demoButton.textContent = 'Add Sample Posts (Demo)';
    demoButton.style.marginTop = '1rem';
    demoButton.style.padding = '0.5rem 1rem';
    demoButton.style.backgroundColor = '#2ecc71';
    demoButton.style.color = 'white';
    demoButton.style.border = 'none';
    demoButton.style.borderRadius = '4px';
    demoButton.style.cursor = 'pointer';
    
    demoButton.addEventListener('click', function() {
        // Add sample posts to each forum
        const samplePosts = [
            {
                forum: 'Course Q&A',
                title: 'How to approach the final project?',
                content: 'I need some advice on how to start with the final project requirements.'
            },
            {
                forum: 'Project Collaboration',
                title: 'Looking for team members',
                content: 'I need 2 more people for our computer science project.'
            },
            {
                forum: 'Off-Topic',
                title: 'Best study music?',
                content: 'What does everyone listen to while studying?'
            }
        ];
        
        samplePosts.forEach(post => {
            forums[post.forum].push({
                id: Date.now() + Math.floor(Math.random() * 1000),
                title: post.title,
                author: 'DemoUser',
                date: new Date().toISOString().split('T')[0],
                content: post.content,
                replies: []
            });
        });
        
        alert('Sample posts added to all forums! Check the console to see the updated data.');
        console.log('Forums with sample posts:', forums);
    });
    
    // Add the demo button to the page
    document.querySelector('.new-post').appendChild(demoButton);
});