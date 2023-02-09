var dinosaur = document.getElementById("dinosaur")
var cactus = document.getElementById("cactus")

function black(){
    setTimeout(()=>{
        if(dinosaur.classList != 'jump'){
            dinosaur.classList.add('jump');

        setTimeout(() => {
            dinosaur.classList.remove('jump');
            },300);
        }
    })
}

document.addEventListener('keydown',()=>{
    black();
})

let gameover = setInterval(() => {
let dinosaurcollide = parseInt(window.getComputedStyle(dinosaur).getPropertyValue('top'));
let cactuscollide = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
if(cactuscollide<30 && cactuscollide>0 && dinosaurcollide>=150){
    alert('Game Over');
}
}, 10);