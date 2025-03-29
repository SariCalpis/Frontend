document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

                // Triángulo superior
                ctx.beginPath();
                ctx.moveTo(25, 25);
                ctx.lineTo(105, 25);
                ctx.lineTo(25, 105);
                ctx.lineTo(25, 25);
                ctx.closePath();
                ctx.stroke();
                ctx.fill();

                // Triángulo inferior
                ctx.beginPath();
                ctx.moveTo(125, 125);
                ctx.lineTo(125, 45);
                ctx.lineTo(45, 125);
                ctx.closePath();
                ctx.stroke();

//cicrulo
    ctx.beginPath()
    ctx.fillStyle ='rgb(45, 121, 241)'
    ctx.arc(250, 80, 50, 0, 360);
    ctx.fill(); 
   
})
