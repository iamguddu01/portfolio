// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication first
    if (!checkAuthentication()) {
        window.location.href = 'index.html';
        return;
    }
    
    initializeApp();
    setupEventListeners();
    loadSampleData();
    updateDashboard();
    generateCalendar();
    loadAttendanceTable();
    loadEventsList();
});