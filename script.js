document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        // Close menu when a nav link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
    }

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-ques');

        question.addEventListener('click', () => {
            // Check if the clicked item is already active
            const isActive = item.classList.contains('active');

            // First, close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // If the clicked item was not active, open it
            if (!isActive) {
                item.classList.add('active');
            }
            // If it was already active, the loop above has closed it.
        });
    });
});