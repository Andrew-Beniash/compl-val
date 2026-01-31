/* ECMS Main Script */

document.addEventListener('DOMContentLoaded', () => {
    // Dropdown Logic
    const initDropdowns = () => {
        const triggers = document.querySelectorAll('[data-dropdown-trigger]');

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                const targetId = trigger.getAttribute('data-dropdown-trigger');
                const menu = document.getElementById(targetId);

                // Close others
                document.querySelectorAll('.dropdown-menu').forEach(m => {
                    if (m.id !== targetId) m.classList.remove('show');
                });

                menu.classList.toggle('show');
            });
        });

        // Click outside to close
        document.addEventListener('click', () => {
            document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
        });
    };

    // Mobile Navigation Logic
    const initMobileNav = () => {
        const toggle = document.querySelector('.mobile-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (toggle && navLinks) {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                navLinks.classList.toggle('active');

                const icon = toggle.querySelector('.material-symbols-outlined');
                if (navLinks.classList.contains('active')) {
                    icon.textContent = 'close';
                } else {
                    icon.textContent = 'menu';
                }
            });

            // Close when clicking outside
            document.addEventListener('click', (e) => {
                if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !toggle.contains(e.target)) {
                    navLinks.classList.remove('active');
                    toggle.querySelector('.material-symbols-outlined').textContent = 'menu';
                }
            });
        }
    };

    initDropdowns();
    initMobileNav();
});
