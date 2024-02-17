var data = [
    {
        id: 1,
        image1:"./assets/images/forest.png",
        area: "woods",
        name1:"Photography"
    },
    {
        id: 2,
        image1:"./assets/images/tree.png",
        area: "path",
        name1:"Website • Photography"
    },
    {
        id: 3,
        image1:"./assets/images/desert.png",
        area: "darkness",
        name1:"Website"
    },
    {
        id: 4,
        image1:"./assets/images/ocean.png",
        area: "waves",
        name1:"Photography"
    },
    {
        id: 5,
        image1:"./assets/images/rain.png",
        area: "drops",
        name1:"Photography"
    },
    {
        id: 6,
        image1:"./assets/images/kayaking.png",
        area: "ocean",
        name1:"Website"
    },
    {
        id: 7,
        image1:"./assets/images/town.png",
        area: "town",
        name1:"Website"
    },
    {
        id: 8,
        image1:"./assets/images/mountain.png",
        area: "mountain",
        name1:"Website"
    },
    {
        id: 9,
        image1:"./assets/images/camera.png",
        area: "camera",
        name1:"Website"
    },
]

var dark = document.querySelector("#dark")

for (let i = 0; i < data.length; i++) {
    const element = data[i];
    console.log(element);

    var card = document.createElement("div")
    card.className = "dark__card"
    
    var area = document.createElement("h3")
    var name1 = document.createElement("p")
    image1 = document.createAttribute("img")

    area.textContent = (element.area)
    name1.textContent = (element.name1)
    image1.setAttribute("src", element.image1)
    
    card.appendChild(image1)
    card.appendChild(area)
    card.appendChild(image1)

    dark.appendChild(card)
}
