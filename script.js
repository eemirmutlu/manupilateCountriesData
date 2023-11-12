// for (let i = 0; i < countries.length; i++) {
//     console.log(countries[i]["name"])
//     const p = document.createElement("p")
//     p.style.color = "gray"
//     p.innerHTML = `${countries[i].name}`
//     document.body.appendChild(p)
// }

// let input = document.getElementById("input")

// input.setAttribute("placeholder", "Değerim")
// // input.removeAttribute("placeholder")

// const div = document.createElement("div")
// div.style.width = "300px"
// div.style.height = "300px"
// div.style.border = "1px solid black"
// div.style.borderRadius = "10px"

// // document.body.append(div)
// document.body.appendChild(div)
// document.body.removeChild(div)

// input.addEventListener("keyup", (element) => {
//     console.log(element.key);
//     console.log(element.keyCode);
//     if (element.keyCode == 13) {
//         countries.filter((ulke) => {
//             if (ulke.name == input.value) {
//                 const p = document.createElement("p")
//                 p.style.color = "red"
//                 p.innerHTML = `${ulke.name} - ${ulke.capital}`
//                 document.body.append(p)
//             }
//         })

//     }
// })

const container = document.createElement("div")
container.classList.add("container", "d-flex", "align-items-center", "flex-column", "my3")

document.body.append(container)

const btn = document.createElement("button")
btn.setAttribute("class", "btn btn-danger")
btn.textContent = "Countries"

container.append(btn)

btn.addEventListener("click", ulkeOlusturma)

function ulkeOlusturma() {
    const ulkelerDiv = document.createElement("div")
    ulkelerDiv.setAttribute("class", "d-flex flex-column gap-2 mt-2")
    countries.forEach((ulke) => {
        // console.log(ulke);
        const cardDiv = document.createElement("div")
        cardDiv.classList.add("card", "text-center")
        cardDiv.style.width = "18rem"

        const cardImg = document.createElement("img")
        cardImg.setAttribute("src", `${ulke.flag}`)
        cardImg.classList.add("card-img-top")

        const cardBody = document.createElement("div")
        cardBody.classList.add("card-body")

        const cardTitle = document.createElement("h5")
        cardTitle.classList.add("card-title")
        cardTitle.textContent = ulke.name

        const cardText = document.createElement("p")
        cardText.classList.add("card-text")
        let content = `${ulke.capital} - ${ulke.languages} - ${ulke.region}`
        cardText.textContent = content

        const pop = document.createElement("a")
        pop.setAttribute("class", "btn btn-warning w-100")
        pop.textContent = ulke.population

        cardDiv.append(cardImg)
        cardDiv.append(cardBody)

        cardBody.append(cardTitle)
        cardBody.append(cardText)
        cardBody.append(pop)

        ulkelerDiv.append(cardDiv)
    })

    container.append(ulkelerDiv)

}

const btn2 = document.createElement("button")
btn2.setAttribute("class", "btn btn-success mt-2")
btn2.textContent = "Population"

container.append(btn2)

btn2.addEventListener("click", populasyonBulma)

function populasyonBulma() {

    const populationDiv = document.createElement("div")
    populationDiv.classList.add("mt-3")
    populationDiv.style.width = "100%"

    countries.sort((a, b) => b.population - a.population)

    countries.forEach((ulke) => {
        // console.log(ulke.name);
        const div = document.createElement("div")
        div.setAttribute("class", "d-flex justify-content-between")

        const ulkeIsmi = document.createElement("p")
        ulkeIsmi.textContent = ulke.name

        const yuzdePop = document.createElement("div")
        let hesap = (ulke.population / 8_000_000_000) * 100
        yuzdePop.style.height = "30px"
        yuzdePop.style.width = `${hesap.toFixed(0)}%`
        yuzdePop.style.backgroundColor = "black"
        yuzdePop.style.borderRadius = "20px"
        yuzdePop.textContent = `${hesap.toFixed(2)}%`
        yuzdePop.style.color = "white"

        const population = document.createElement("p")
        population.textContent = ulke.population

        div.append(ulkeIsmi)
        div.append(yuzdePop)
        div.append(population)

        populationDiv.append(div)
    })
    container.append(populationDiv)
}