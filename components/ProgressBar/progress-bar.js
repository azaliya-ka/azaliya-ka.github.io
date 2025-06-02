class ProgressBar extends HTMLElement {
    static observedAttributes = ["progress"];
    constructor() {
        super();
        this.circle;
        this.circumference;
    }

    setProgress(percent) {
        const offset = this.circumference - percent / 100 * this.circumference;
        this.circle.style.strokeDashoffset = offset;
    }

    setHide(hide) {
        const progressBar = document.querySelector('.progress-bar');
        if (hide) {
            progressBar.style.visibility = "hidden";
        } else {
           progressBar.style.visibility = "visible";
        }
    }

    setAnimation(animate)  {
        const progressBar = document.querySelector('.progress-bar');
        if (animate) {
            progressBar.classList.add('animatinon');
        } else {
           progressBar.classList.remove('animatinon');
        }
    }

    setProgress = this.setProgress.bind(this);
    setHide = this.setHide.bind(this);
    setAnimation = this.setAnimation.bind(this);

    addEventListeners() {
        const progressValue = document.querySelector('.progress_value');
        const hide = document.querySelector('.hide');
        const animate = document.querySelector('.animate');

        progressValue.addEventListener('input', () => {
            this.setProgress(progressValue.value);
            this.setAttribute('progress', progressValue.value);
        });

        hide.addEventListener('input', () => {
            this.setHide(hide.checked);
        });

        animate.addEventListener('input', () => {
            this.setAnimation(animate.checked);
        });
    }

     setProgressCircle() {
        this.circle = document.querySelector('.circle');
        const radius = this.circle.r.baseVal.value;
        this.circumference = 2 * Math.PI * radius;

        this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
        this.circle.style.strokeDashoffset = this.circumference;
    }

    addEventListeners = this.addEventListeners.bind(this);
    setProgressCircle = this.setProgressCircle.bind(this);

    attributeChangedCallback(name, oldValue, newValue) {
        const progressValueInput = document.querySelector('.progress_value');
        if (name !== 'progress') return;
        if (newValue < 0) {
            progressValueInput.value = 0;
            this.setProgress(0);
            this.setAttribute('progress', 0);
        } else if (newValue > 100) {
            progressValueInput.value = 100;
            this.setProgress(100);
            this.setAttribute('progress', 0);
        }
        
    }


    connectedCallback() {
        this.innerHTML = `
            <div class="body">
                <svg width="250" height="250" class="progress-bar">
                    <circle class="circle_back" cx="125" cy="125" r="110"></circle>
                    <circle class="circle" cx="125" cy="125" r="110"></circle>
                </svg>

                <div>
                    <div class="api">
                    <input class="progress_value" value='${this.getAttribute('progress')}' type="number">
                    <p class="api_text">Value</p>
                    </div>
                    <div class="api">
                    <label class="switch">
                        <input type="checkbox" class="animate">
                        <span class="slider"></span>
                    </label>
                    <p class="api_text">Animate</p>
                    </div>
                    <div class="api">
                    <label class="switch">
                        <input type="checkbox" class="hide"></input>
                        <span class="slider"></span>
                    </label>
                    <p class="api_text">Hide</p>
                    </div>
                </div>
            </div>`;
        
        this.setProgressCircle();
        this.setProgress(this.getAttribute('progress'));
        this.addEventListeners();
    }
}

customElements.define("progress-bar", ProgressBar);