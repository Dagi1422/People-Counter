let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let sumEl = document.getElementById("sum-el")

let count = 0
let sum = 0
function increment(){
  count = count + 1
  countEl.textContent = count
}
function save(){
  if (count != 0) {
    sum += count
    let entry = count + " - "
    saveEl.textContent += entry //we are using textContent because innerText ignores the spaces with the hyphen
    countEl.textContent = 0 //so the number displayed is set back to 0
    count = 0 //so when we start to increment again, we want to start from 0 and not where we stopped from previously
  }

}
function add(){
  if (sum != 0) {
    sumEl.textContent = `sum: ${sum}`
        
  }
}
function clr() {
  sumEl.textContent = "Sum: ";
  saveEl.textContent = "Previous Entries: ";
  sum = 0;
}

