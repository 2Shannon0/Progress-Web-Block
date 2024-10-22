import { ProgressRing } from "./ProgressRing/ProgressRing.js";
let secretInputValueUnlocker = 0;
let hideMode = false;
let animationMode = false;

let progressValueInput = document.querySelector(".inputValue"),
    animateCheckbox = document.getElementById("checkboxAnimate"),
    hideCheckbox = document.getElementById("checkboxHide");

const progressElement = document.querySelector(".progress-ring");
const progressRing = new ProgressRing(progressElement);
progressRing.setProgress(Number(progressValueInput.value));

progressValueInput.addEventListener("input", () => {
    if (secretInputValueUnlocker < 6) {
        let value = Number(progressValueInput.value);
        if (value > 100) {
            progressValueInput.value = 100;
        } else if (value < 0 || isNaN(value)) {
            progressValueInput.value = 0;
        }
    }

    progressRing.setProgress(Number(progressValueInput.value));
});

animateCheckbox.addEventListener("input", () => {
    if (animationMode) {
        animationMode = false;
        progressRing.setAnimateMode(false);
    } else {
        animationMode = true;
        progressRing.setAnimateMode(true);
    }
});

hideCheckbox.addEventListener("input", () => {
    secretInputValueUnlocker++;
    if (hideMode) {
        hideMode = false;
        progressRing.setHiddenMode(false);
    } else {
        hideMode = true;
        progressRing.setHiddenMode(true);
    }
});
