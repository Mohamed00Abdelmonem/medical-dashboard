document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggleMobile = document.getElementById('sidebarToggleMobile');
    const sidebarToggleDesktop = document.getElementById('sidebarToggleDesktop'); // New desktop toggle
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    // Mobile sidebar toggle
    if (sidebarToggleMobile) {
        sidebarToggleMobile.addEventListener('click', () => {
            sidebar.classList.toggle('d-none');
            // Optionally, you might want to add an overlay or push content
        });
    }

    // Desktop sidebar toggle
    if (sidebarToggleDesktop) {
        sidebarToggleDesktop.addEventListener('click', () => {
            body.classList.toggle('sidebar-hidden');
        });
    }
});