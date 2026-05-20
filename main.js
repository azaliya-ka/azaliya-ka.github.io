
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

    if (current >= attendees.length - 1) {
        number.innerHTML="6";
        setActiveArrow(0);
        current = attendees.length - 1;
    }


    showCurrentAttendees(current);
}

function prevAttendees() {
    current--;

    if (current <= 0) {
        number.innerHTML="3";
        setActiveArrow(arrows.length - 1);
        current = 0;
    }

    showCurrentAttendees(current);
}


// MOBILE ATTENDEES SLIDER
const mobileAttendees = document.querySelectorAll('.attendee');
const mobileArrows = document.querySelectorAll('.pages_arrow');
const mobileNumber = document.querySelector('.current_page_number');
let mobileCurrent = 0;

function showCurrentMobileAttendee(index) {
    mobileAttendees.forEach(slide => {
        slide.classList.remove('active_page');
    });

    mobileAttendees[index].classList.add('active_page');
}

function nextMobileAttendee() {
    mobileCurrent++;
    mobileArrows.forEach(slide => {
        slide.classList.remove('not_active');
    });

    if (mobileCurrent >= mobileAttendees.length - 1) {
        mobileCurrent = mobileAttendees.length - 1;
        mobileArrows[mobileArrows.length - 1].classList.add('not_active');
    }


    showCurrentMobileAttendee(mobileCurrent);
    mobileNumber.innerHTML = mobileCurrent + 1;
}

function prevMobileAttendee() {
    mobileCurrent--;
    mobileArrows.forEach(slide => {
        slide.classList.remove('not_active');
    });

    if (mobileCurrent < 0) {
        mobileCurrent = 0;
    }
    if (mobileCurrent <= 0) {
        mobileArrows[0].classList.add('not_active');
    }

    showCurrentMobileAttendee(mobileCurrent);
    mobileNumber.innerHTML = mobileCurrent + 1;
}
