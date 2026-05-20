
// DESKTOP ATTENDEES SLIDER
const attendees = document.querySelectorAll('.attendees_images');
const arrows = document.querySelectorAll('.attendees_pages_arrow');
const number = document.querySelector('.current_pages');
let current = 0;

function showCurrentAttendees(index) {
    attendees.forEach(slide => {
        slide.classList.remove('active_pages');
    });

    attendees[index].classList.add('active_pages');
}

function setActiveArrow(index) {
    arrows.forEach(slide => {
        slide.classList.remove('active');
    });

    arrows[index].classList.add('active');
}

function nextAttendees() {
    current++;

    if (current == 1) {
        number.innerHTML="6";
        setActiveArrow(0);
    }
    if (current == 0) number.innerHTML="3";

    if (current >= attendees.length) {
        current = attendees.length - 1;
    }


    showCurrentAttendees(current);
}

function prevAttendees() {
    current--;

    if (current == 1) number.innerHTML="6";
    if (current == 0) {
        number.innerHTML="3";
        setActiveArrow(arrows.length - 1);
    }

    if (current < 0) {
        current = 0;
    }

    showCurrentAttendees(current);
}
