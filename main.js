let Btn = document.querySelector("#ok")
let Btn_trap = document.querySelector("#ok_trap")
let Natija = document.querySelector(".natija")


// turburchak usuli

Btn.addEventListener("click", (e)=>{
    e.preventDefault();

    console.log("salom");

    let A_uzgaruvchi = document.querySelector(".a").value - 0
    let B_uzgaruvchi = document.querySelector(".b").value - 0
    const n = 10;
    let h = (B_uzgaruvchi - A_uzgaruvchi)  / n;
    let sum = 0;

    console.log(A_uzgaruvchi, B_uzgaruvchi);

    const table = document.querySelector(".tabletsiya_turt")
    let k = 1;

    for(let delta_X = A_uzgaruvchi + h; delta_X <= B_uzgaruvchi; delta_X += h){


        let nat = Math.abs(Math.sin(delta_X + 3) * Math.log2(delta_X * delta_X + 3 * delta_X + 1))
        nat = Math.round(nat * 1000)/1000;
        console.log(nat);
        table.innerHTML += `<tr>
                                <td>${k++}</td>
                                <td>${nat}</td>
                            </tr>`
        sum += nat
    }
    sum = Math.round(sum * 1000)/1000;
    table.innerHTML += `<tr>
                            <td>Summa:</td>
                            <td>${sum}</td>
                        </tr>`
})



// trapetsiya usuli

Btn_trap.addEventListener("click", (e)=>{
    e.preventDefault();

    console.log("salom");

    let A_uzgaruvchi = document.querySelector(".at").value - 0
    let B_uzgaruvchi = document.querySelector(".bt").value - 0
    const n = 10;
    let h = (B_uzgaruvchi - A_uzgaruvchi)  / n;
    let sum = 0;

    console.log(A_uzgaruvchi, B_uzgaruvchi);

    const table = document.querySelector(".tabletsiya_trap")
    let k = 1;

    for(let delta_X = A_uzgaruvchi + h; delta_X <= B_uzgaruvchi - h; delta_X += h){


        let nat = Math.abs(Math.sin(delta_X + 3) * Math.log2(delta_X * delta_X + 3 * delta_X + 1))
        nat = Math.round(nat * 1000)/1000;
        console.log(nat);
        table.innerHTML += `<tr>
                                <td>${k++}</td>
                                <td>${nat}</td>
                            </tr>`
        sum += nat
    }
    let y0 = Math.abs(Math.sin(A_uzgaruvchi + 3) * Math.log2(A_uzgaruvchi * A_uzgaruvchi + 3 * A_uzgaruvchi + 1))/2

    let yn = Math.abs(Math.sin(B_uzgaruvchi + 3) * Math.log2(B_uzgaruvchi * B_uzgaruvchi + 3 * B_uzgaruvchi + 1))/2

    sum = (sum + y0 + yn) * h;

    sum = Math.round(sum * 1000)/1000;

    table.innerHTML += `<tr>
                            <td>Summa:</td>
                            <td>${sum}</td>
                        </tr>`
})

// simson usuli

