let input = document.querySelector("#input")
let btn = document.querySelector("#btn")




// Remeve placeholder on input click
input.addEventListener("click", () => {
  input.removeAttribute("placeholder")
})



// On click on button.
btn.addEventListener("click", () => {



  if (input.value == "") {
    alert("😔 Please Enter Link First.")
  }

  else {
    Genrate()
  }




})







let Genrate = () => {

  let url = "https://www.dl.dropboxusercontent.com"
  let val = input.value
  let convert = url + val.slice(23)

console.log (convert)


}


