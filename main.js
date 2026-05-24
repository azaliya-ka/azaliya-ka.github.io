
// DESKTOP ATTENDEES SLIDER
const attendees = document.querySelectorAll('.attendees_slides');
const arrows = document.querySelectorAll('.attendees_pages_arrow');
const number = document.querySelector('.current_pages');
let current = 0;

function showCurrentAttendees(index) {
    attendees.forEach(slide => {
        slide.classList.remove('active_slide');
    });

    attendees[index].classList.add('active_slide');
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

// MOBILE STEPS SLIDER
const steps = document.querySelectorAll('.mobile_step');
const stepArrows = document.querySelectorAll('.pages_arrow_step');
const stepBullets = document.querySelectorAll('.step_bullet');
let currentStep = 0;

function showCurrentStep(index) {
    steps.forEach(slide => {
        slide.classList.remove('active_step');
    });

    steps[index].classList.add('active_step');
}

function nextStep() {
    currentStep++;
    stepArrows.forEach(slide => {
        slide.classList.remove('not_active');
    });
    stepBullets.forEach(slide => {
        slide.classList.remove('active');
    });

    if (currentStep >= steps.length - 1) {
        currentStep = steps.length - 1;
        stepArrows[stepArrows.length - 1].classList.add('not_active');
    }

    showCurrentStep(currentStep);
    stepBullets[currentStep].classList.add('active');
}

function prevStep() {
    currentStep--;
    stepArrows.forEach(slide => {
        slide.classList.remove('not_active');
    });
    stepBullets.forEach(slide => {
        slide.classList.remove('active');
    });


    if (currentStep < 0) {
        currentStep = 0;
    }
    if (currentStep <= 0) {
        stepArrows[0].classList.add('not_active');
    }

    showCurrentStep(currentStep);
    stepBullets[currentStep].classList.add('active');
}

// MOBILE ATTENDEES CAROUSEL
const slides = document.querySelector('.attendees_carousel');
const totalMobileSlides = document.querySelectorAll('.attendee').length;
const mobileAttendeeNumber = document.querySelector('.current_page_number');
const mobileArrows = document.querySelectorAll('.pages_arrow');
let index = 0;

function nextAttendee() {
    index++;

    if (window.innerWidth <= 600) {
        if (index == totalMobileSlides - 1) {
            mobileArrows[mobileArrows.length - 1].classList.remove('active');
            mobileArrows[0].classList.add('active');
        }
        if (index >= totalMobileSlides) {
            index = 0;
            mobileAttendeeNumber.innerHTML = 1;
            mobileArrows[mobileArrows.length - 1].classList.add('active');
            mobileArrows[0].classList.remove('active');
        }

        mobileAttendeeNumber.innerHTML = index + 1;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }
}

setInterval(nextAttendee, 4000);
