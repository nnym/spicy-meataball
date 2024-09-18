var images = [
    "images/mario.png",
    "https://cdn.drawception.com/images/panels/2015/6-8/C5SLp4WAyC-10.png",
    "images/spaghetti.png",
    "https://cdn.drawception.com/images/panels/2015/6-8/C5SLp4WAyC-12.png",
    "https://cdn.drawception.com/images/panels/2015/6-8/C5SLp4WAyC-6.png",
    "https://cdn.drawception.com/images/panels/2015/6-8/C5SLp4WAyC-8.png",
    "https://cdn.drawception.com/images/panels/2015/6-8/C5SLp4WAyC-4.png"
];

function setBackground() {
    let uri = `url("${images[Math.floor(Math.random() * 7)]}")`;
    document.body.style.backgroundImage = uri;
    console.log(uri);
}

setBackground()
