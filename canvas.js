document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath()
    ctx.moveTo(50,50);
    ctx.lineTo(50,300);
    ctx.lineTo(300,300);
    ctx.fill();
    ctx.closePath();


    ctx.beginPath()
    ctx.arc(250, 80, 50, 0, 360);
    ctx.fill(); 
    ctx.fillStyle=rgb(45, 121, 241);
   
})
