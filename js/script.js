document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector('main input');
    const headerLinks = document.querySelectorAll('header ul li a');

    // Add focus effect to input field
    inputField.addEventListener('focus', () => {
        inputField.style.transition = 'box-shadow 0.5s';
        inputField.style.boxShadow = '0 0 15px rgba(255, 51, 51, 0.8)';
    });

    inputField.addEventListener('blur', () => {
        inputField.style.boxShadow = 'none';
    });

    // Add hover animation to header links
    headerLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
            link.style.transition = 'transform 0.3s';
        });

        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });

    // Placeholder animation
    let placeholderText = [
        "Search for restaurant, cuisine or a dish",
        "E.g., Pizza, Biryani, or Cafe"
    ];
    let currentIndex = 0;

    setInterval(() => {
        inputField.placeholder = placeholderText[currentIndex];
        currentIndex = (currentIndex + 1) % placeholderText.length;
    }, 3000);
});