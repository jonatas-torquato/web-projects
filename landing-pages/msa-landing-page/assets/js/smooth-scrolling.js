document.addEventListener('DOMContentLoaded', function () {
    const linksInterns = document.querySelectorAll('a[href^="#"]');

    linksInterns.forEach(link => {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href');

            if (targetId.length > 1 && document.querySelector(targetId)) {
                event.preventDefault();

                const targetElement = document.querySelector(targetId);
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const elementsToAnimate = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});