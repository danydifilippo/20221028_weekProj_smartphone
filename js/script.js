"use strict";
class Smartphone {
    constructor() {
        this.carica = 0;
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
    numero404() {
        this.credito;
    }
    getNumeroChiamate() {
        this.numeroChiamate;
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
    constructor(name, age, smartphone) {
        this.name = name;
        this.age = age;
        this.smartphone = smartphone;
    }
}
class Utente extends User {
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getSmartphone() {
        return this.smartphone;
    }
}
let user1 = new Utente("Giulia", 22, iphone);
let user2 = new Utente("Maria", 52, huawei);
let user3 = new Utente("Pietro", 41, samsung);
window.onload = () => {
    let date = new Date();
    let smartph = document.querySelector(".smartph");
    smartph.innerHTML = `<div class="displayUp">
<p>${date.getHours()}:${date.getMinutes()}</p>
<i class="fas fa-wifi"></i>
</div>`;
};
