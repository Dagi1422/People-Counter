let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment(){
  count = count + 1
  countEL.innerText = count
}
function save(){
  let entry = count + " - "
  saveEl.innerText += enrty
}
