document.addEventListener('DOMContentLoaded', () => {
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