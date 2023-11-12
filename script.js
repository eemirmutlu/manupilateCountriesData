for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]["name"])
}

let input = document.getElementById("input")

input.setAttribute("placeholder", "Değerim")
// input.removeAttribute("placeholder")

const div = document.createElement("div")
div.style.width = "300px"
div.style.height = "300px"
div.style.border = "1px solid black"
div.style.borderRadius = "10px"

// document.body.append(div)
document.body.appendChild(div)
