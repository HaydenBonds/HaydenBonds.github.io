"use strict"

let b2 = document.querySelector("#b2");
let R = null;
let chart2 = null;

async function showc()
{
    let url = `https://juxinglong.github.io/static/HW/hw6/MIS3033.json`;
    let r = await fetch(url);
    let rj = await r.json();

    let c2 = document.querySelector("#c2");

    let opts = {
        type: "pie",
        data: {
            labels: rj.map(x=>x.lg),
            datasets: [{data: rj.map(x=>x.n), label:"Number" },],
        },
    };

    if (chart2 != null)
    {
        chart2.destroy();
    }
    c2.innerHTML = ``;

    chart2 = new Chart(c2, opts);

    //anime.js
    opts={
        targets: [c2,],
            rotate:{ value: 60, duration: 3000,}

    };
    anime(opts);
 



    R = rj;
    console.log(R);
    
}

b2.addEventListener("click",showc)