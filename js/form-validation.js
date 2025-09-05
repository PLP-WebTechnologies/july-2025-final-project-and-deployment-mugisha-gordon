// Form validation functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous errors
            clearErrors();
            
            // Validate form
            let isValid = true;
            
            // Name validation
            const name = document.getElementById('name');
            if (!name.value.trim()) {
                showError('nameError', 'Please enter your name');
                isValid = false;
            }
            
            // Email validation
            const email = document.getElementById('email');
            if (!email.value.trim()) {
                showError('emailError', 'Please enter your email');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError('emailError', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Subject validation
            const subject = document.getElementById('subject');
            if (!subject.value.trim()) {
                showError('subjectError', 'Please enter a subject');
                isValid = false;
            }
            
            // Message validation
            const message = document.getElementById('message');
            if (!message.value.trim()) {
                showError('messageError', 'Please enter your message');
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                // In a real application, you would submit the form to a server here
                // For this example, we'll just show a success message
                contactForm.style.display = 'none';
                document.getElementById('formSuccess').style.display = 'block';
                
                // Reset form
                contactForm.reset();
            }
        });
    }
    
    // Clear error messages
    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }
    
    // Show error message
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});