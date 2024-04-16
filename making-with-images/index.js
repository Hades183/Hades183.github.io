// const colorBox = document.querySelector('.color-box');
// const imageLayers = Array.from(document.querySelectorAll('.image-layer'));

// let currentGroupIndex = 0;
// let currentLayerIndex = 0;

// function showNextLayer() {
//     const layer = imageLayers[currentLayerIndex + currentGroupIndex * 3];
//     layer.style.opacity = '1';

//     if (currentLayerIndex === 2) {
//         setTimeout(() => {
//             hideCurrentGroup();
//             startNewGroup();
//         }, 4000);
//     } else {
//         setTimeout(() => {
//             currentLayerIndex++;
//             showNextLayer();
//         }, 2000);
//     }
// }

// function hideCurrentGroup() {
//     imageLayers.forEach(layer => {
//         layer.style.opacity = '0';
//     });
// }


// function startNewGroup() {
//     currentGroupIndex = (currentGroupIndex + 1) % 3;
//     currentLayerIndex = 0;
//     showNextLayer();
// }

// showNextLayer();