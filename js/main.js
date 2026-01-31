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
                    if (m && m.id !== targetId) m.classList.remove('show');
                });

                if (menu) menu.classList.toggle('show');
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

    // Tab Logic
    const initTabs = () => {
        const tabBtns = document.querySelectorAll('.tab-btn');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-tab');
                const parent = btn.closest('.tabs-container'); // Optional scoping

                // Find all tabs in the same group
                const groupBtns = parent ? parent.querySelectorAll('.tab-btn') : document.querySelectorAll(`[data-tab]`);
                const groupContents = parent ? parent.querySelectorAll('.tab-content') : document.querySelectorAll('.tab-content');

                // Deactivate all
                groupBtns.forEach(b => b.classList.remove('active'));
                groupContents.forEach(c => c.classList.remove('active'));

                // Activate selected
                btn.classList.add('active');
                const target = document.getElementById(targetId);
                if (target) target.classList.add('active');
            });
        });
    };

    // Modal Logic
    const initModals = () => {
        // Open Triggers
        document.querySelectorAll('[data-modal-target]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = btn.getAttribute('data-modal-target');
                const modal = document.getElementById(targetId);
                if (modal) modal.classList.add('open');
            });
        });

        // Close Triggers
        document.querySelectorAll('[data-modal-close]').forEach(btn => {
            btn.addEventListener('click', () => {
                const modal = btn.closest('.modal-overlay');
                if (modal) modal.classList.remove('open');
            });
        });

        // Close on Click Outside
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.classList.remove('open');
            });
        });
    };

    initDropdowns();
    initMobileNav();
    initTabs();
    initModals();
});
