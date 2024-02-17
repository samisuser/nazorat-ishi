var data = [
    {
        id: 1,
        image1: "./assets/images/forest.png",
        area: "woods",
        name1: "Photography"
    },
    {
        id: 2,
        image1: "./assets/images/sunforest.png",
        area: "path",
        name1: "Website • Photography"
    },
    {
        id: 3,
        image1: "./assets/images/desert.png",
        area: "darkness",
        name1: "Website"
    },
    {
        id: 4,
        image1: "./assets/images/ocean.png",
        area: "waves",
        name1: "Photography"
    },
    {
        id: 5,
        image1: "./assets/images/rain.png",
        area: "drops",
        name1: "Photography"
    },
    {
        id: 6,
        image1: "./assets/images/kayaking.png",
        area: "ocean",
        name1: "Website"
    },
    {
        id: 7,
        image1: "./assets/images/town.png",
        area: "town",
        name1: "Website"
    },
    {
        id: 8,
        image1: "./assets/images/mountain.png",
        area: "mountain",
        name1: "Website"
    },
    {
        id: 9,
        image1: "./assets/images/camera.png",
        area: "camera",
        name1: "Website"
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
    picture = document.createElement("img")

    area.className = "dark__card--h3"
    name1.className = "dark__card--p"
    picture.className = "dark__card--image"
    card.className = "dark__card"

    area.textContent = (element.area)
    name1.textContent = (element.name1)
    picture.setAttribute("src", element.image1)

    card.appendChild(picture)
    card.appendChild(area)
    card.appendChild(name1)

    dark.appendChild(card)
}

var memberData = [
    {
        cartoon: "./assets/images/man.png",
        nick: "Ron Swanson",
        level: "Founder",
        social: "./assets/images/maninsocial.png "
    },
    {
        cartoon: "./assets/images/woman.png",
        nick: "Julia Depish",
        level: "Marketing",
        social: "./assets/images/maninsocial.png "
    },
    {
        cartoon: "./assets/images/glass.png",
        nick: "Danny Devry",
        level: "Designer",
        social: "./assets/images/glassinsocial.png "
    },
    {
        cartoon: "./assets/images/japan.png",
        nick: "Lisa Smith",
        level: "Designer",
        social: "./assets/images/japaninsocial.png "
    }

]

var member = document.querySelector("#member")

for (let i = 0; i < memberData.length; i++) {
    const elem = memberData[i];
    console.log(elem);

    var card = document.createElement("div")
    card.className = "member__card"

    var nick = document.createElement("h3")
    var level = document.createElement("p")
    var cartoon = document.createElement("img")
    var social = document.createElement("img")

    nick.className = "member__card--h3"
    level.className = "member__card--p"
    cartoon.className = "member__card--image1"
    social.className = "member__card--img"


    nick.textContent = (elem.nick)
    level.textContent = (elem.level)
    cartoon.setAttribute("src", elem.cartoon)
    social.setAttribute("src", elem.social)

    card.appendChild(cartoon)
    card.appendChild(nick)
    card.appendChild(level)
    card.appendChild(social)

    member.appendChild(card)
}