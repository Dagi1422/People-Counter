let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment(){
  count = count + 1
  countEl.innerText = count
}
function save(){
  let entry = count + " - "
  saveEl.textContent += entry //we are using textContent because innerText ignores the spaces with the hyphen
  countEl.textContent = 0 //so the number displayed is set back to 0
  count = 0 //so when we start to increment again, we want to start from 0 and not where we stopped from previously
}
