let btnGenerator = document.querySelector('#generate');
let copyButton = document.querySelector('#output');
let firstColor = document.querySelector('#first-color');
let secondColor = document.querySelector('#second-color');
let angle = document.querySelector('#angle');


// Генерируем рандомные числа, делаем их целыми и вовзращаем их в шестандцатиричной системе
let randomColor = () => Math.floor(Math.random() * 0xffffff).toString(16);

// Генерируем рандомные числа от 0 до 360
let randomAngle = () => Math.floor(Math.random() * 360)

let generateGradient = function () {

    // Получаем два рандомных цвета
    let color1 = randomColor();
    let color2 = randomColor();

    // Возвращаем первый цвет
    firstColor.innerHTML = `Цветовая палитра первого цвета <i>#${color1}</i>`
    // Возвращаем первый цвет
    secondColor.innerHTML = `Цветовая палитра второго цвета <i>#${color2}</i>`
    // Возвращаем первый цвет
    angle.innerHTML = `Угол градиента равен <i>${randomAngle()}deg</i>`


    // Задаём стиль backgroud для body
    document.body.style.background = `linear-gradient(${randomAngle()}deg, #${color1}, #${color2})`;
    // Изменяем текст кнопки
    copyButton.innerHTML = `<code> ${document.body.style.background} </code>`
}

btnGenerator.addEventListener('click', generateGradient);

generateGradient()




// КОПИРУЕМ СОДЕРЖИМОЕ КНОПКИ И <code></code>

// Копируем содержимое кнопки или отдельных компонентов при клике по ним
copyButton.addEventListener('click', copyFunctionForBtn)
firstColor.addEventListener('click', copyFunction)
secondColor.addEventListener('click', copyFunction)
angle.addEventListener('click', copyFunction)

// Копируем содержимое кнопки и добавляем background: ДЛЯ copyButton
function copyFunctionForBtn() {
    console.log(this);
    console.log(this.textContent);
    navigator.clipboard.writeText(`background:${this.textContent}`)
    showSnackBar()
}

// Копируем последнего ребенка (<i></i>) элемента по которое мы кликаем ДЛЯ firstColor, secondColor, angle
function copyFunction() {
    console.log(this);
    console.log(this.lastChild);
    console.log(this.lastChild.textContent);
    navigator.clipboard.writeText(this.lastChild.textContent)
    showSnackBar()
}


// Уведомление об успешном копировании
function showSnackBar() {
    let snackbar = document.querySelector("#snackbar");
  
    // Тут будем добавлять, удалять класс, при выполнение условии ниже
    snackbar.className = "show";
  
    // Функция ниже убирает класс "show" у snackbar по истечению 3000ms
    setTimeout(()=>{ 
        snackbar.className = snackbar.className.replace("show", "");
     }, 3000);

  }

