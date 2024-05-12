const text = document.querySelector(".text-seccond");
const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const imageThree = document.querySelector(".image-3");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const btnNext = document.querySelector(".next");
const kata = document.querySelector(".kata");
const kataDua = document.querySelector(".kata-dua");

function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Happy Birthday";
    }, 0);
    setTimeout(() => {
        text.textContent = "Ayu Wandira";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Selamat Ulang Tahun";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);

btnNo.addEventListener("mouseover", (e) => {
    const containerHeight = container.getBoundingClientRect().
    height;
    const containerwidth = container.getBoundingClientRect().
    width;
    const btnHeight = btnNo.getBoundingClientRect().
    height;
    const btnWidth = btnNo.getBoundingClientRect().
    width;
    const btnTop = btnNo.getBoundingClientRect().
    top;
    const btnLeft = btnNo.getBoundingClientRect().
    left;

    let newTop = btnTop;
    let newLeft = btnLeft;

    while(Math.abs(newTop - btnTop) < containerHeight / 3) {
        newTop = getRandomNumber(0, containerHeight - btnHeight);
    }

    while(Math.abs(newLeft - btnLeft) < containerwidth / 3) {
        newLeft = getRandomNumber(0, containerwidth - btnWidth);
    }

    btnNo.style.top = Math.floor(newTop) + "px";
    btnNo.style.left = Math.floor(newLeft) + "px";
})

btnYes.addEventListener("click", (e) => {
    btnNo.classList.add("hide");
    btnNext.classList.remove("hide");
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");
    imageThree.classList.remove("hide");
    kata.classList.add("hide");
    kataDua.classList.remove("hide"); 
});

