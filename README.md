# ProgressRing

`ProgressRing` — это класс для создания кольцевого индикатора прогресса с возможностью анимации и управления видимостью.

## Установка и подключение

Чтобы использовать этот класс в проекте, вам нужно создать экземпляр класса, передав в него DOM-элемент, который будет отображать кольцо прогресса.

### Пример использования:

```javascript
import { ProgressRing } from "./ProgressRing/ProgressRing.js"; // Импорт класса

// Находим элемент, который будет представлять кольцо прогресса
const progressElement = document.querySelector(".progress-ring");

// Создаем экземпляр ProgressRing
const progressRing = new ProgressRing(progressElement);

// Установка прогресса
progressRing.setProgress(50); // Устанавливает прогресс на 50%

// Включение/выключение анимации
progressRing.setAnimateMode(true); // Запускает анимацию
progressRing.setAnimateMode(false); // Останавливает анимацию

// Скрыть/показать индикатор
progressRing.setHiddenMode(true); // Скрывает индикатор
progressRing.setHiddenMode(false); // Показывает индикатор
```

### Подключение стилий и разметка

```html
<head>
    <link rel="stylesheet" href="./ProgressRing/ProgressRing.css" />
</head>

...

<div class="progress-ring">
    <div class="progress-ring-in"></div>
</div>
```
