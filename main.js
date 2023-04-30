let Btn = document.querySelector("#ok")
let Natija = document.querySelector(".natija")



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

        // sum += Math.sin(delta_X + 3) * Math.log2(delta_X * delta_X + 3 * delta_X + 1);
        let nat = (delta_X * delta_X + 5)* Math.tan(delta_X * delta_X + 1)
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

