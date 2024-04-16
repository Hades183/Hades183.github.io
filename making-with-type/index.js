document.addEventListener('DOMContentLoaded', function() {
    const colorBox = document.querySelector('.color-box');
    const textBlock1 = document.querySelector('.text-block-1');
    const textBlock2 = document.querySelector('.text-block-2');
    let currentColorIndex = 0;

    const bgColors = ['#ff0000', '#00ff00', '#0000ff'];
    const textColors1 = ['#ffffff', '#00ffff', '#000000'];
    const textColors2 = ['#000000', '#ffff00', '#ffffff'];
    const fontSizes1 = ['24px', '30px', '36px']; 
    const fontSizes2 = ['24px', '26px', '28px']; 

    function changeColor() {
        currentColorIndex = (currentColorIndex + 1) % bgColors.length;
        colorBox.style.backgroundColor = bgColors[currentColorIndex];
        

        textBlock1.style.color = textColors1[currentColorIndex];
        textBlock2.style.color = textColors2[currentColorIndex];


        textBlock1.style.fontSize = fontSizes1[currentColorIndex];
        textBlock2.style.fontSize = fontSizes2[currentColorIndex];
    }

    setInterval(changeColor, 2000);
});