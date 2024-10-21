let progressElement = document.querySelector(".progress-ring"),
    progressValueInput = document.querySelector(".inputValue__inp"),
    animateCheckbox = document.getElementById("checkboxAnimate"),
    hideCheckbox = document.getElementById("checkboxHide");

let hideMode = false;
/**
 * Интревал режима анимации
 */
let animationActions;
let animationMode = false;

const updateProgress = (progressEndValue) => {
    progressStartValue = 0;
    let fullCirckleCount = 0;
    if (!progressEndValue || progressEndValue == 0) {
        progressElement.style.background = `rgb(240, 240, 240)`;
        return;
    }
    const progress = setInterval(() => {
        if (progressStartValue + 100 * fullCirckleCount >= progressEndValue) {
            clearInterval(progress);
        }
        if (progressStartValue > 100) {
            progressStartValue = 0;
            fullCirckleCount += 1;
        }

        progressStartValue += 0.5;
        progressElement.style.background = `conic-gradient(rgb(60, 111, 232) ${
            progressStartValue * 3.6
        }deg, rgb(240, 240, 240) 0deg)`;
        if (progressStartValue + 100 * fullCirckleCount >= progressEndValue) {
            clearInterval(progress);
        }
    }, 2.5);
};

const runAnimate = () => {
    console.log(animationMode);

    if (animationMode) {
        animationMode = false;
        clearInterval(animationActions);
        updateProgress(Number(progressValueInput.value));
        return;
    }
    animationMode = true;
    animationActions = setInterval(() => {
        updateProgress(Math.round(Math.random() * 100));
    }, 2000);
};
// Запускаем прогресс при первой загрузке
if (!animationMode) {
    console.log("progressValueInput.value", progressValueInput.value);
    updateProgress(Number(progressValueInput.value));
}

// Отслеживаем изменение значений
progressValueInput.addEventListener("input", () => {
    updateProgress(Number(progressValueInput.value));
});

animateCheckbox.addEventListener("input", runAnimate);

hideCheckbox.addEventListener("input", () => {
    if (hideMode) {
        hideMode = false;
        console.log("HideModeOff");
        progressElement.style.display = "flex";
    } else {
        hideMode = true;
        console.log("HideModeOn");
        progressElement.style.display = "none";
    }
});
