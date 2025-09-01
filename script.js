// Smooth scrolling untuk navigasi anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Highlight menu saat scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main section');
    const scrollPos = window.scrollY + 150; // offset biar pas

    sections.forEach(section => {
        const id = section.getAttribute('id');
        const link = document.querySelector(`nav ul li a[href="#${id}"]`);

        if (link) {
            if (
                scrollPos >= section.offsetTop &&
                scrollPos < section.offsetTop + section.offsetHeight
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});
