const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")

let count1 = 0
let count2 = 0
let count3 = 0

option1.addEventListener('click', ()=>{
    count1++
    showResult()
})
option2.addEventListener('click', ()=>{
    count2++
    showResult()
})
option3.addEventListener('click', ()=>{
    count3++
    showResult()
})

function showResult(){
    const total = count1 + count2 + count3
    const perctage1 = ((count1 / total) * 100).toFixed(2)
    const perctage2 = ((count2 / total) * 100).toFixed(2)
    const perctage3 = ((count3 / total) * 100).toFixed(2)

    showResult.innerHTML = `
    Hasil Voting = <br>
    Pilihan 1 : ${count1} (${perctage1}) <br>
    Pilihan 2 : ${count1} (${perctage2}) <br>
    Pilihan 3 : ${count1} (${perctage3}) <br>
    `
}
