const text = document.querySelector(".text-seccond");
const btnYes = document.querySelector(".btn-yes");
// const btnNo = document.querySelector(".btn-no");
const btnNext = document.querySelector(".next");

function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "♡ Thank You ♡";
    }, 0);
    setTimeout(() => {
        text.textContent = "My Dear ღ";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Ayu Wandira";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);


// btnNo.addEventListener("mouseover", (e) => {
//     const containerHeight = container.getBoundingClientRect().
//     height;
//     const containerwidth = container.getBoundingClientRect().
//     width;
//     const btnHeight = btnNo.getBoundingClientRect().
//     height;
//     const btnWidth = btnNo.getBoundingClientRect().
//     width;
//     const btnTop = btnNo.getBoundingClientRect().
//     top;
//     const btnLeft = btnNo.getBoundingClientRect().
//     left;

//     let newTop = btnTop;
//     let newLeft = btnLeft;

//     while(Math.abs(newTop - btnTop) < containerHeight / 3) {
//         newTop = getRandomNumber(0, containerHeight - btnHeight);
//     }

//     while(Math.abs(newLeft - btnLeft) < containerwidth / 3) {
//         newLeft = getRandomNumber(0, containerwidth - btnWidth);
//     }

//     btnNo.style.top = Math.floor(newTop) + "px";
//     btnNo.style.left = Math.floor(newLeft) + "px";
// })

btnYes.addEventListener("click", (e) => {
    // btnNo.classList.add("hide");
    btnNext.classList.remove("hide");
});