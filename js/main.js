const time = document.querySelector(`#time`);
const color = document.querySelector(`#color`);
const bodyTag = document.querySelector(`body`);

function decToHex(dec) {
    return Number(dec).toString(16);
}

function hexToDec(hex) {
    return parseInt(hex, 16);
}

function getRandomNum() {
    return Math.floor(Math.random()*13882323);
    //13882323 - grey
}

function correctTime(timeLocal) {
    timeLocal = timeLocal.toString();
    if (timeLocal.length < 2) {
        return `0${timeLocal}`
    }
    return timeLocal;
}


setTimeout(() => {
    // date
    let date = new Date();
    let [hours, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];

    const dateConvert = `${correctTime(hours)}:${correctTime(minutes)}:${correctTime(seconds)}`;
    time.textContent = dateConvert;
    // color
    const hex = `#` + decToHex(getRandomNum());
    color.textContent = hex;
    bodyTag.style.backgroundColor = hex;

    if (!bodyTag.style.backgroundColor) {
        const hex = `#` + decToHex(getRandomNum());
        color.textContent = hex;
        bodyTag.style.backgroundColor = hex;
    }
});


setInterval(() => {
    // date
    let date = new Date();
    let [hours, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];

    const dateConvert = `${correctTime(hours)}:${correctTime(minutes)}:${correctTime(seconds)}`;
    time.textContent = dateConvert;
    // color
    let colorConvert = hexToDec(color.textContent.slice(1));
    if (colorConvert < 13882000) {
        colorConvert = decToHex(++colorConvert);
        colorConvert = `#${colorConvert}`;
        color.textContent = colorConvert;
        bodyTag.style.backgroundColor = colorConvert;
        console.log(colorConvert);
    } else {
        const hex = `#` + decToHex(getRandomNum());
        color.textContent = hex;
        bodyTag.style.backgroundColor = hex;
    }

}, 1000);