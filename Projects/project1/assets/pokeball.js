// animation to "open" the pokeball
openAnimation = () => {
    let pokeBall = document.getElementById("openBall").querySelector("img");
    pokeBall.src = "openBall.png"
}

// animation to change opacity of the sprite until the pokeball is opened
spriteAnimation = () => {
    let spriteImg = document.getElementById("sprite").querySelector("img");
    spriteImg.style.opacity = 1; 
}

// starts after the page is loaded, for the 4 default buttons 
setTimeout(openAnimation, 100);

// shows the sprite once the pokeball is opened
setTimeout(spriteAnimation, 200);