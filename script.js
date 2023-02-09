var dinosaur = document.getElementById("dinosaur")
var cactus = document.getElementById("cactus")
var button = document.getElementById("button")

function black() {
    setTimeout(() => {
        if (dinosaur.classList != 'jump') {
            dinosaur.classList.add('jump');

            setTimeout(() => {
                dinosaur.classList.remove('jump');
            }, 300);
        }
    })
}

button.addEventListener('click', () => {
    cactus.classList.add('run');
})

document.addEventListener('keydown', (e) => {
    if (e.code == "Space") {
        black();
    }

})

let gameover = setInterval(() => {
    let dinosaurcollide = parseInt(window.getComputedStyle(dinosaur).getPropertyValue('top'));
    let cactuscollide = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    if (cactuscollide < 50 && cactuscollide > 0 && dinosaurcollide >= 130) {
        alert('❌GAME OVER❌');
    }
}, 10);