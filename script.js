let pupils = document.getElementsByClassName('pupil'); 
let pupilsArr = Array.from(pupils);


let start = -100;
let pupilRange = 200;


let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;


let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
   
    currentXPosition = event.clientX - mouseXStartPoint;
    fracXValue = currentXPosition / mouseXRange;

    currentYPosition = event.clientY;
    fracYValue = currentYPosition / mouseYEndPoint;

    
    let curr = start + (fracXValue * pupilRange);
    let pupilsYCurrentPosition = start + (fracYValue * pupilRange);

   
    pupilsArr.forEach((curPupil) => {
        curPupil.style.transform = `translate(${curr}px, ${pupilsYCurrentPosition}px)`;
    });
}

const windowResize = (event) => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
}

window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', windowResize);