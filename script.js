const click=document.querySelector('.click');
const giftBox=document.querySelector('.gift-box');
const shadow=document.querySelector('.shadow');
const giftContainer=document.querySelector('.gift-container');
const text=document.querySelector('.ucapan');

click.addEventListener('click',()=>{
    if (click.className==="click"){
        click.classList.add('active')
        giftBox.classList.add('active')
        shadow.classList.add('active')
        giftContainer.classList.add('active')
        text.classList.add('active')
        text.classList.remove('active2')
    }
    else {
        click.classList.remove('active')
        giftBox.classList.remove('active')
        shadow.classList.remove('active')
        giftContainer.classList.remove('active')
        text.classList.remove('active')
        text.classList.add('active2')
    }
})

document.addEventListener("DOMContentLoaded", function(event){
    const klik=document.getElementById("klik");
    const contentImg = document.getElementById("contentImg");
    const img = document.getElementById("img");

    klik.addEventListener("click", function() {
        contentImg.style.display = "block";
    });
});



