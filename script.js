// Enable horizontal scrolling with mouse wheel for movie rows
const rows = document.querySelectorAll('.row-posters');
rows.forEach(row => {
    row.addEventListener('wheel', (e) => {
        e.preventDefault();
        row.scrollLeft += e.deltaY;
    });
});

// Optionally, you can add more interactivity here (e.g., popups, dynamic content) 
