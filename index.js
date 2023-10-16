let heads = 0, tails = 0;

const coin = document.querySelector(".coin");
const toss_button = document.querySelector("#toss-button");
const reset_button = document.querySelector("#reset-button");
const heads_count = document.querySelector("#heads-count");
const tails_count = document.querySelector("#tails-count");

toss_button.addEventListener("click", ()=>{
    let i = Math.floor(Math.random()*100)+1;
    coin.style.animation = "none";
    if(i<=50){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards"
        },100);
        heads++;
    }
    else {
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards"
        }, 100);
        tails++;
    }

    setTimeout(updateStats, 3100);
    disableButtons();
});

reset_button.addEventListener("click", ()=>{
    heads = 0;
    tails = 0;
    updateStats();
});


function updateStats(){
    heads_count.textContent = `Heads: ${heads}`;
    tails_count.textContent = `Tails: ${tails}`;
}
function disableButtons(){
    toss_button.disabled = true;
    reset_button.disabled = true;
    setTimeout(()=>{
        toss_button.disabled = false;
        reset_button.disabled = false;
    }, 3100);
}

