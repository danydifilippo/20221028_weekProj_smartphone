"use strict";
class Smartphone {
    constructor() {
        this.numeroChiamate = 0;
        this.oreChiamate = 0;
        this.minutiChiamate = 0;
        this.secondiChiamate = 0;
        this.credito = 0;
    }
    ricarica(unaRicarica) {
        this.credito += unaRicarica;
    }
    chiamata(oreDurata, minutiDurata, secondiDurata) {
        this.credito -= (0.20 * minutiDurata + 12 * oreDurata);
        let addHours = this.oreChiamate + oreDurata - 60;
        let addMinute = this.minutiChiamate + minutiDurata - 60;
        let addSeconds = this.secondiChiamate + secondiDurata - 60;
        let hourAdded = this.oreChiamate += oreDurata;
        let minAdded = this.minutiChiamate += minutiDurata;
        let secAdded = this.secondiChiamate += secondiDurata;
        hourAdded > 60 ? this.oreChiamate = addHours : hourAdded;
        if (minAdded > 60) {
            this.minutiChiamate = addMinute;
            this.oreChiamate++;
        }
        else {
            minAdded;
        }
        ;
        if (secAdded > 60) {
            this.secondiChiamate = addSeconds;
            this.minutiChiamate++;
        }
        else {
            secAdded;
        }
        ;
        this.numeroChiamate++;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        this.minutiChiamate = 0;
        this.oreChiamate = 0;
    }
}
function time() {
    let h = 0;
    let mn = 0;
    let s = 0;
    let startTime = setInterval(function () {
        s++;
        if (s === 59) {
            mn++;
            s = 0;
        }
        else if (mn === 59) {
            h++;
            mn = 0;
        }
    }, 1000);
}
time();
let iphone = new Smartphone();
let huawei = new Smartphone();
let samsung = new Smartphone();
iphone.ricarica(50);
console.log(iphone.credito);
iphone.chiamata(3, 15, 24);
console.log(iphone.oreChiamate);
console.log(iphone.minutiChiamate);
console.log(iphone.secondiChiamate);
console.log(iphone.credito);
iphone.chiamata(0, 50, 44);
console.log(iphone.oreChiamate);
console.log(iphone.minutiChiamate);
console.log(iphone.secondiChiamate);
console.log(iphone.credito);
class User {
    constructor(name, age, smartphone, callingTo, callTime, picture) {
        this.name = name;
        this.age = age;
        this.smartphone = smartphone;
        this.callingTo = callingTo;
        this.callTime = callTime;
        this.picture = picture;
    }
}
class Utente extends User {
    constructor(name, age, smartphone, callingTo, callTime, picture, userName, job) {
        super(name, age, smartphone, callingTo, callTime, picture);
        this.userName = userName;
        this.job = job;
    }
}
let user1 = new Utente("Giulia", 22, iphone, "amiche e ragazzo", "dai 20 ai 40 minuti", "../img/giulia.jpeg", "utente1", "studentessa");
let user2 = new Utente("Maria", 52, huawei, "familiari vicini e lontani", "dai 30 ai 40 minuti", "../img/maria.jpg", "utente2", "casalinga");
let user3 = new Utente("Pietro", 41, samsung, "fornitori e trasportatori", "dai 15 ai 20 minuti", "../img/pietro.jpeg", "utente3", "Rivenditore di auto");
let users = [user1, user2, user3];
window.onload = () => {
    let date = new Date();
    let container = document.querySelector("#container");
    users.forEach(element => {
        container.innerHTML += `
    <div id="${element.userName}_"><div class="userBox"><h2>${element.name}</h2><h4>${element.age} anni</h4>
    <p><strong>Occupazione:</strong></p><p>${element.job}</p>
    <p><strong>Sta la telefono soprattutto con:</strong></p><p>${element.callingTo}</p>
    <p><strong>Tempo stimato:</strong></p><p>${element.callTime}</p></div>
    <section id="${element.userName}">
        <div class="smartph">
            <div class="displayUp">
                <p>${date.getHours()}:${date.getMinutes()}</p>
                <p><i class="fas fa-wifi"></i> <i class="fas fa-signal"></i> <i class="fas fa-battery-three-quarters"></i></p>
            </div>
        </div>
        <div class="central">
          <h3>${element.name}</h3>
          <img src=${element.picture} alt="foto_user" />
        </div>
        <div class="buttons">
        <p><button class="creditobtn btn"><i class="fas fa-euro-sign"></i></button>Credito</p>
        <p><button class="chiamabtn btn"><i class="fas fa-phone"></i></button>Chiama</p>
        <p><button class="ricaricabtn btn"><i class="fas fa-sync-alt"></i></button>Ricarica</p>
        <div class="d-none credit">
        <h3><strong>Credito disponibile</strong></h3>
    <p>Il tuo credito residuo è di ${element.smartphone.credito} €</p>
    <input type="button" value="OK" class="close"><input type="button" value="Ricarica" class="charge"></div>
      </div>
  <div class="d-none ricarica">
<h3><strong>Ricarica il tuo credito</strong></h3>
<p>Inserisci l'importo e conferma</p>
<input type="number" class="chargeInput">
<input type="button" value="Ricarica" class="ricarbtns ricbtn"><input type="button" value="Esci" class="close ricarbtns"></div>      
</div>
    </section>
    <div class="d-none chiamare">

    </div>`;
    });
    let credito = document.querySelectorAll('.creditobtn');
    credito.forEach(utn => {
        utn.addEventListener('click', () => {
            var _a, _b, _c;
            (_c = (_b = (_a = utn.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.lastElementChild) === null || _c === void 0 ? void 0 : _c.classList.remove('d-none');
        });
    });
    let ricarica = document.querySelectorAll('.ricaricabtn');
    ricarica.forEach(ute => {
        ute.addEventListener('click', () => {
            var _a, _b, _c, _d;
            (_d = (_c = (_b = (_a = ute.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.lastElementChild) === null || _d === void 0 ? void 0 : _d.classList.remove('d-none');
        });
    });
    let close = document.querySelectorAll('.close');
    close.forEach(el => {
        el.addEventListener('click', () => {
            var _a, _b, _c;
            (_c = (_b = (_a = el.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.lastElementChild) === null || _c === void 0 ? void 0 : _c.classList.add('d-none');
        });
        let charge = document.querySelectorAll('.charge');
        charge.forEach(ele => {
            ele.addEventListener('click', () => {
                var _a, _b, _c, _d, _e, _f, _g;
                (_d = (_c = (_b = (_a = ele.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.lastElementChild) === null || _d === void 0 ? void 0 : _d.classList.remove('d-none');
                (_g = (_f = (_e = ele.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode) === null || _f === void 0 ? void 0 : _f.lastElementChild) === null || _g === void 0 ? void 0 : _g.classList.add('d-none');
            });
        });
        let ricbtn = document.querySelectorAll('.ricbtn');
        ricbtn.forEach(elem => {
            elem.addEventListener('click', () => {
                // elem.parentNode?.parentNode?.lastElementChild?.classList.add('d-none')
                let chargeInput = document.querySelectorAll('.chargeInput');
                console.log(chargeInput.values());
            });
        });
        //     let charge1 = document.querySelector('#charge_utente1') as HTMLButtonElement
        //         charge1.addEventListener('click',()=>{
        //             noteCredit1.classList.add('d-none')
        //             let ricarica1 = document.querySelector('#utente1_ricarica') as HTMLButtonElement
        //             ricarica1.classList.remove('d-none')
        //     })
        // })
        // })
        // let ricarica = document.querySelector('#Giulia_Char') as HTMLInputElement
        // ricarica.addEventListener ('click', ()=>{
        //     let noteRicarica = document.querySelector('#Giulia_ricarica') as HTMLDivElement
        //     console.log(ricarica.children.namedItem);
        //      ricarica.childNodes
        // })
        // let chiama = document.querySelectorAll<HTMLDivElement>('.chiama')
        // chiama.forEach(utn => {
        //     utn.addEventListener('click', () => {
        //        console.log(utn.parentNode?.parentNode?.parentNode?.lastElementChild);
        //        utn.nextElementSibling
        //     } )
    });
};
