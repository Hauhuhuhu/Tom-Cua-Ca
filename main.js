
import { totalCoin } from "./var.js";

// let totalCoin = 10; 

const btnChoose = document.querySelectorAll(".tick");
const imgAll = document.querySelectorAll(".item__img");
const number_coin = document.querySelector(".number_coin");
const btnPlay = document.querySelector(".btn-play");
const resultText = document.querySelector(".play__result");
const reset = document.querySelector(".reset");
let options = [ "Nai", "Bầu", "Gà", "Cá", "Cua", "Tôm"];
let select = [null, null, null, null, null, null];
let TotalCoinsSelected = 0;
let numberChoose = 0;
let result1 = "";
let result2 = "";
let result3 = "";
let finalResult = 0;
let rotated = 0;
// console.log(btnPlay);

reset.addEventListener("click", function(e) {
    rotated -= 360;
    reset.style.transform = `rotate(${rotated}deg)`;
    numberChoose = 0;
    select = [null, null, null, null, null, null];
    if(!btnPlay.disabled) {
        totalCoin.coin += TotalCoinsSelected;
        renderCoin();
    }
    TotalCoinsSelected = 0;
    btnPlay.disabled = true;
    btnPlay.style.opacity = 0.5;
    btnPlay.style.cursor = "unset";
    btnChoose.forEach(function(btn) {
        btn.checked = false;
        btn.disabled = false;
    })
})

// Random kết quả
function lucky() {
    return Math.floor(Math.random() * options.length);
}

// Play 
btnPlay.addEventListener('click', function(e) {
    btnChoose.forEach(function(btn) {
        btn.disabled = true;
    })
    result1 = lucky();
    result2 = lucky();
    result3 = lucky();
    const Allresult = [result1, result2, result3];
    let coin = select.reduce(function(result, value, index) {
        for(let i of Allresult) {
            if(index === i && value !== null) result += 4;
        }
        return result;
    }, 0)
    totalCoin.coin += coin;
    console.log(coin, result1, result2, result3);
    renderResult(coin);
    renderCoin();
    btnPlay.disabled = true;
    btnPlay.style.opacity = 0.5;
    btnPlay.style.cursor = "unset";
})
// Lựa chọn bằng btn của người chơi.
btnChoose.forEach(function(btn, index) {
    btn.addEventListener("click", function(e) {
        if(totalCoin.coin === 0 && btn.checked) {
            alert("Bạn đã hết tiền!");
            btn.checked = false;
            btn.disabled = true;
            return;
        }
        if(btn.checked) {
            select[index] = 2;
            totalCoin.coin -= 2;
            numberChoose += 1;
            TotalCoinsSelected += 2;
        } else {
            select[index] = null;
            totalCoin.coin += 2;
            numberChoose -= 1;
            TotalCoinsSelected -= 2;
        }
        checkNumberChoose();
        renderCoin();
    })
})
// Lựa chọn bằng ảnh
imgAll.forEach(function(img, index) {
    img.addEventListener("click", function(e) {
        if(numberChoose === 3) {
            e.preventDefault();
            if(!btnChoose[index].checked) {
                btnChoose[index].disabled = true;
            }
        }
        else if(totalCoin.coin === 0 && !btnChoose[index].checked) {
            alert("Bạn đã hết tiền!");
            btnChoose[index].checked = false;
            btnChoose[index].disabled = true;
            e.preventDefault();
        }
        else {
            if(!btnChoose[index].checked) {
                btnChoose[index].checked = !btnChoose[index].checked;
                select[index] = 2;
                totalCoin.coin -= 2;
                numberChoose += 1;
                TotalCoinsSelected += 2;
            } else {
                btnChoose[index].checked = !btnChoose[index].checked;
                select[index] = null;
                totalCoin.coin += 2;
                numberChoose -= 1;
                TotalCoinsSelected -= 2;
            }
            renderCoin();
        }
        checkNumberChoose();
    })
})


// check numberChoose
function checkNumberChoose () {
    // check numberChoose === 0;
    if(numberChoose === 0) {
        btnPlay.disabled = true;
        btnPlay.style.opacity = 0.5;
        btnPlay.style.cursor = "unset";
    } else {
        btnPlay.disabled = false;
        btnPlay.style.opacity = 1;
        btnPlay.style.cursor = "pointer";
    }

    // check numberChoose > 3;
    if(numberChoose === 3) {
        btnChoose.forEach(function(btn) {
            if(!btn.checked) {
                btn.disabled = true;
            }
        })
    } else {
        btnChoose.forEach(function(btn) {
            btn.disabled = false;
        })
    }
}
checkNumberChoose();
// renderCoin
function renderCoin() {
    number_coin.textContent = totalCoin.coin;
}
renderCoin()

// render result
function renderResult(coin) {
    resultText.innerHTML = `Kết quả là: ${options[result1]}, ${options[result2]}, ${options[result3]} <br> Tổng số coin nhận về: ${coin}.`
    resultText.style.visibility = "unset";
    resultText.style.opacity = "1";
}











// lucky game


