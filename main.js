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

// ATTENDEES CAROUSEL
const slides = document.querySelector('.attendees_carousel');
const totalMobileSlides = document.querySelectorAll('.attendee').length;
const mobileAttendeeNumber = document.querySelector('.current_page_number');
const mobileArrows = document.querySelectorAll('.pages_arrow');
const totalDesktopSlides = document.querySelectorAll('.attendees_slides').length;
const desktopAttendeeNumber = document.querySelector('.current_pages');
const desktopArrows = document.querySelectorAll('.attendees_pages_arrow');
let index = 0;
let desktopIndex = 0;

function nextAttendee() {
    index++;
    desktopIndex++

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
    } else {
        if (desktopIndex == totalDesktopSlides - 1) {
            desktopAttendeeNumber.innerHTML = 6;
            desktopArrows[desktopArrows.length - 1].classList.remove('active');
            desktopArrows[0].classList.add('active');
        }
        if (desktopIndex >= totalDesktopSlides) {
            desktopIndex = 0;
            desktopAttendeeNumber.innerHTML = 3;
            desktopArrows[desktopArrows.length - 1].classList.add('active');
            desktopArrows[0].classList.remove('active');
        }

        slides.style.transform = `translateX(-${desktopIndex * 100}%)`;
    }
}

setInterval(nextAttendee, 4000);
