setInterval(()=>{
    let bubble = document.createElement("span");
    bubble.setAttribute("class", "bubble");
    document.body.appendChild(bubble);
    let size = 10 + Math.floor(Math.random() * 35);
    let posL = Math.floor(Math.random() * document.body.clientWidth) - size;
    bubble.style.left = posL + "px";
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    let animedura = Math.floor(Math.random() * 10 + 2);
    bubble.style.animationDuration = animedura + "s";
    setTimeout(() => {
        document.body.removeChild(bubble);
    }, 10000);
}, 500)