function fitText() {
    const container = document.querySelector('.body-text');
    const paragraph = document.getElementById('body-para');

    let fontSize = 32;  // 2 rem
    paragraph.style.fontSize = fontSize + 'px';

    while (container.scrollHeight > container.clientHeight && fontSize > 8) {
        fontSize--;
        paragraph.style.fontSize = fontSize + 'px';
    }
}

let resizeTimeout;
function onResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        fitText();
    }, 150);
}

document.addEventListener('DOMContentLoaded', function() {
    fitText();
    window.addEventListener('resize', onResize);
});