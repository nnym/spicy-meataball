var images = ["mario1", "spaghetti1", "spaghetti2", "spaghetti3", "spaghetti4",
    "spaghetti5", "spaghetti6"];

function setBackground() {
    let number = Math.floor(Math.random() * 7);
    let img = images[number]
    let uri = `url("images/${img}.png")`
    document.body.style.backgroundImage = `${uri}`;
    console.log(uri);
}

setBackground()
