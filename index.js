import { ProgressRing } from "./ProgressRing/ProgressRing.js";

let hideMode = false;
let animationMode = false;

let progressValueInput = document.querySelector(".inputValue__inp"),
    animateCheckbox = document.getElementById("checkboxAnimate"),
    hideCheckbox = document.getElementById("checkboxHide");

const progressElement = document.querySelector(".progress-ring");
const progressRing = new ProgressRing(progressElement);
progressRing.setProgress(Number(progressValueInput.value));

progressValueInput.addEventListener("input", () => {
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
    if (hideMode) {
        hideMode = false;
        progressRing.setHiddenMode(false);
    } else {
        hideMode = true;
        progressRing.setHiddenMode(true);
    }
});
