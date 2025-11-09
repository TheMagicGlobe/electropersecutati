/*
 * Script pentru Preloader și Animații de Apariție Graduală (Fade-in)
 */
document.addEventListener('DOMContentLoaded', () => {

    // --- Logica pentru Preloader ---
    const preloader = document.getElementById('preloader');
    // Ascunde preloader-ul odată ce pagina s-a încărcat complet
    window.addEventListener('load', () => {
        if (preloader) {
            preloader.style.opacity = '0';
            // Elimină-l din layout după ce se termină tranziția
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500); // Timpul trebuie să corespundă cu cel din CSS
        }
    });

    // --- Logica pentru Apariție Graduală la Derulare (Fade-in-on-Scroll) ---
    const fadeElements = document.querySelectorAll('.fade-in-section');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target); // Oprește observarea odată ce este vizibil
                }
            });
        }, {
            threshold: 0.1 // Se declanșează când 10% din element este vizibil
        });

        fadeElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // Soluție de rezervă (fallback) pentru browsere foarte vechi
        fadeElements.forEach(el => {
            el.classList.add('is-visible');
        });
    }
});