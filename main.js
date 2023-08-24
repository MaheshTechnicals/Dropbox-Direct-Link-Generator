let input = document.querySelector("#input")
let btn = document.querySelector("#btn")



// Remeve placeholder on input click
input.addEventListener("click", () => {
  input.removeAttribute("placeholder")
})



// On click on button.
btn.addEventListener("click", () => {

  let val = input.value

  if (val == "") {
    alert("😔 Please Enter Link First.")
  }

  else {
    Genrate()
  }




})