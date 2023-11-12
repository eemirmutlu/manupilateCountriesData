for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]["name"])
    const p = document.createElement("p")
    p.style.color = "gray"
    p.innerHTML = `${countries[i].name}`
    document.body.appendChild(p)
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
document.body.removeChild(div)

input.addEventListener("keyup", (element) => {
    console.log(element.key);
    console.log(element.keyCode);
    if (element.keyCode == 13) {
        countries.filter((ulke) => {
            if (ulke.name == input.value) {
                const p = document.createElement("p")
                p.style.color = "red"
                p.innerHTML = `${ulke.name} - ${ulke.capital}`
                document.body.append(p)
            }
        })

    }
})
