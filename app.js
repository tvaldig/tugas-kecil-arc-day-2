const BtnAdd1 = document.querySelector(".button1");
const BtnAdd2 = document.querySelector(".button2");
const BtnAdd3 = document.querySelector(".button3");
const main = document.getElementById("pg2");
const result = document.getElementById("pg3");
BtnAdd1.addEventListener("click", NextPage1);
BtnAdd2.addEventListener("click", NextPage2);
BtnAdd3.addEventListener("click", NextPage3);

function NextPage1(){
    const newDiv1 = document.createElement("div");
    newDiv1.classList.add('divshadow1');
    BtnAdd1.removeEventListener("click", NextPage1); 
    BtnAdd2.removeEventListener("click", NextPage2);
    BtnAdd3.removeEventListener("click", NextPage3);
    main.appendChild(newDiv1);
    Randomizer();
    Algo();
}

function NextPage2() {
    const newDiv2 = document.createElement("div");
    newDiv2.classList.add('divshadow2');
    BtnAdd1.removeEventListener("click", NextPage1);
    BtnAdd2.removeEventListener("click", NextPage2);
    BtnAdd3.removeEventListener("click", NextPage3);
    main.appendChild(newDiv2);
    Randomizer();
    Algo();
}

function NextPage3() {
    const newDiv3 = document.createElement("div");
    newDiv3.classList.add('divshadow3');
    BtnAdd1.removeEventListener("click", NextPage1);
    BtnAdd2.removeEventListener("click", NextPage2);
    BtnAdd3.removeEventListener("click", NextPage3);
    main.appendChild(newDiv3);
    Randomizer();
    Algo();
}

function Randomizer(){
    const newDiv4 = document.createElement("div");
    if ((Math.floor(Math.random() * 3 ) + 1) == 1){
        newDiv4.classList.add('divshadow1');
        main.appendChild(newDiv4);
    }
    else if ((Math.floor(Math.random() * 3) + 1) == 2) {
        newDiv4.classList.add('divshadow2');
        main.appendChild(newDiv4);
    }
    else if ((Math.floor(Math.random() * 3) + 1) == 3){
        newDiv4.classList.add('divshadow3');
        main.appendChild(newDiv4);
    }
    
}

function Algo(){
    const p = document.createElement("p");
    const node1 = document.createTextNode("Tie!");
    const node2 = document.createTextNode("Win!");
    const node3 = document.createTextNode("Lose!");
    if (NextPage1 == true){
        if ((Math.floor(Math.random() * 3) + 1) == 1) {
            p.appendChild(node1);
            result.appendChild(p);
        }
        else if ((Math.floor(Math.random() * 3) + 1) == 2) {
            p.appendChild(node2);
            result.appendChild(p);
        }
        else if ((Math.floor(Math.random() * 3) + 1) == 3) {
            p.appendChild(node3);
            result.appendChild(p);
        }
    }
    if (NextPage2 == true) {
        if ((Math.floor(Math.random() * 3) + 1) == 1) {
            p.appendChild(node1);
            result.appendChild(p);
        }
        else if ((Math.floor(Math.random() * 3) + 1) == 2) {
            p.appendChild(node2);
            result.appendChild(p);
        }
        else if ((Math.floor(Math.random() * 3) + 1) == 3) {
            p.appendChild(node3);
            result.appendChild(p);
        }
    
    }

    if (NextPage3 == true) {
        if ((Math.floor(Math.random() * 3) + 1) == 1) {
            p.appendChild(node1);
            result.appendChild(p);
        }
        else if ((Math.floor(Math.random() * 3) + 1) == 2) {
            p.appendChild(node2);
            result.appendChild(p);
        }
        else if ((Math.floor(Math.random() * 3) + 1) == 3) {
            p.appendChild(node3);
            result.appendChild(p);
        }

        
    }
}
