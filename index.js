//console.log('funguju!');

let val1 = prompt("Zadej svou úroveň v HTML na stupnici od 0-100")
let val2 = prompt("Zadej svou úroveň v CSS na stupnici od 0-100")
let val3 = prompt("Zadej svou úroveň v JavaScriptu na stupnici od 0-100")

const updateSkill = (id_posuvniku, hodnota) => {
    
    const elm = document.querySelector(`#${id_posuvniku} .skill__value`)
    elm.innerHTML = `${hodnota} / 100`

    const elm2 = document.querySelector(`#${id_posuvniku} .skill__progress`)
    elm2.style.width = `${hodnota}%`
    
}

updateSkill("skill1", val1)
updateSkill("skill2", val2)
updateSkill("skill3", val3)
