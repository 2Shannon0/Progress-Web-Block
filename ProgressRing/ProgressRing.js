export class ProgressRing {
    constructor(element) {
        this.element = element;
        this.progress = 0;
        this.animationMode = false;
        this.hideMode = false;
        this.cahedProgress = 0;
    }

    setProgress(value) {
        value > this.progress ? this.updateUp(value) : this.updateDown(value);
        this.progress = value;
    }

    setAnimateMode(on) {
        if (on && !this.animationMode) {
            this.runAnimate();
        } else if (!on && this.animationMode) {
            this.stopAnimate();
        }
    }

    setHiddenMode(hidden) {
        this.hideMode = hidden;
        this.element.style.display = hidden ? "none" : "flex";
    }

    updateUp(progressEndValue) {
        let progressStartValue = this.progress;
        let fullCirckleCount = 0;
        if (!progressEndValue || progressEndValue == 0) {
            this.element.style.background = `rgb(240, 240, 240)`;
            return;
        }
        const progressUp = setInterval(() => {
            if (progressStartValue > 100) {
                progressStartValue = 0;
                fullCirckleCount += 1;
            }
            progressStartValue += 0.5;
            this.element.style.background = `conic-gradient(rgb(60, 111, 232) ${
                progressStartValue * 3.6
            }deg, rgb(240, 240, 240) 0deg)`;
            if (
                progressStartValue + 100 * fullCirckleCount >=
                progressEndValue
            ) {
                clearInterval(progressUp);
            }
        }, 2.5);
    }
    updateDown(progressEndValue) {
        let progressStartValue = this.progress;
        let fullCirckleCount = 0;
        if (!progressEndValue || progressEndValue == 0) {
            this.element.style.background = `rgb(240, 240, 240)`;
            return;
        }
        const progressDown = setInterval(() => {
            if (progressStartValue > 100) {
                progressStartValue = 0;
                fullCirckleCount += 1;
            }
            progressStartValue -= 0.5;
            this.element.style.background = `conic-gradient(rgb(60, 111, 232) ${
                progressStartValue * 3.6
            }deg, rgb(240, 240, 240) 0deg)`;
            if (
                progressStartValue + 100 * fullCirckleCount <=
                progressEndValue
            ) {
                clearInterval(progressDown);
            }
        }, 2.5);
    }

    runAnimate() {
        this.cahedProgress = this.progress;
        this.animationMode = true;
        this.animationActions = setInterval(() => {
            this.setProgress(Math.round(Math.random() * 100));
        }, 2000);
    }

    stopAnimate() {
        this.animationMode = false;
        clearInterval(this.animationActions);
        this.setProgress(this.cahedProgress);
    }
}
