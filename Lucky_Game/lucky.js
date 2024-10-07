import { totalCoin } from "../var.js";
console.log(totalCoin.coin);
const imgGift = document.querySelector('.gift_show_box-img'); 
const descGift = document.querySelector('.gift_show_box-desc'); 
const btnAll = document.querySelectorAll('.golden-button');
const gift = ["Chúc bạn may mắn lần sau!", "1000đ", "2000đ", "5000đ", "1 tỷ"];
// Random number
function randomGift() {
    const numRandom = Math.random();
    if(numRandom <= 0.5) return 0;
    if(0.5 < numRandom && numRandom <= 0.7) return  1;
    if(0.7 < numRandom && numRandom <= 0.85) return 2;
    if(0.85 < numRandom && numRandom < 0.95) return  3;
    return  4;
}
// get parent
function getParent(element) {
    return element = element.parentElement;
}
// btn clicked
btnAll.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const numGift = randomGift();
        const parentBtn = getParent(btn);
        const firstChild = parentBtn.firstElementChild;
        firstChild.style.backgroundImage = "url(../Lucky_Game/img/open_gift.png)";
        firstChild.style.animation = "unset";
        btn.classList.add('disabled');
        if(numGift === 0) {
            imgGift.src = "../Lucky_Game/img/goodluck.png";
            descGift.textContent = gift[numGift];
        } else if (numGift === 1) {
            imgGift.src = "../Lucky_Game/img/one.png";
            descGift.textContent = gift[numGift];
        } else if (numGift === 2) {
            imgGift.src = "../Lucky_Game/img/two.png";
            descGift.textContent = gift[numGift];
        } else if (numGift === 3) {
            imgGift.src = "../Lucky_Game/img/five.png";
            descGift.textContent = gift[numGift];
        } else if (numGift === 4) {
            imgGift.src = "../Lucky_Game/img/ty.png";
            descGift.textContent = gift[numGift];
        }
    })
})