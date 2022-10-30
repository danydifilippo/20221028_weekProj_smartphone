"use strict";
// classi e metodi
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
let iphone = new Smartphone();
let huawei = new Smartphone();
let samsung = new Smartphone();
iphone.ricarica(30);
huawei.ricarica(40);
samsung.ricarica(50);
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
    constructor(name, age, smartphone, callingTo, callTime, picture, userName, job, usualCall) {
        super(name, age, smartphone, callingTo, callTime, picture);
        this.userName = userName;
        this.job = job;
        this.usualCall = usualCall;
    }
}
let user1 = new Utente("Giulia", 22, iphone, "amiche e ragazzo", "dai 20 ai 40 minuti", "../img/giulia.jpeg", "user1", "studentessa", "Paolo🥰");
let user2 = new Utente("Maria", 52, huawei, "familiari vicini e lontani", "dai 30 ai 40 minuti", "../img/maria.jpg", "user2", "casalinga", "Giovanna 👩🏼‍🦰");
let user3 = new Utente("Pietro", 41, samsung, "fornitori e trasportatori", "dai 15 ai 20 minuti", "../img/pietro.jpeg", "user3", "Rivenditore di auto", "MVE Trasporti 🚛");
let users = [user1, user2, user3];
// Caricamento Html
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
            <div class="d-none endcalling">
                <h3><strong>Chiamata terminata</strong></h3>
                <p class="endcall"></p>
                <input type="button" value="OK" class="close ricarbtns"><input type="button" value="Credito" class="creditobtn ricarbtns">
            </div>
            <div class="d-none chargement">
                <h3><strong>Ricarica effettuata</strong></h3>
                <p class="cred"></p>
                <input type="button" value="OK" class="close ricarbtns"><input type="button" value="Credito" class="creditobtn ricarbtns">
            </div>
            <div class="d-none ricarica">
                <input type="text" value="${element.userName}" class="d-none inpImp">
                <h3><strong>Ricarica il tuo credito</strong></h3>
                <p>Inserisci l'importo e conferma</p>
                <input type="number" class="chargeInput">
                <input type="button" value="Ricarica" class="ricarbtns ricbtn"><input type="button" value="Esci" class="ricarbtns close">    
            </div>
            <div class="d-none chiamare">
                <h3><strong>Chiamata in uscita</strong></h3>
                <p>${element.usualCall}</p>
                <button class="closeCallbtn closeCall"><i class="fas fa-phone-slash"></i></button>
            </div>
            <div class="d-none credit">
                <h3><strong>Credito disponibile</strong></h3>
                <p class="cr">Il tuo credito residuo è di ${element.smartphone.credito} €</p>
                <input type="button" value="OK" class="close"><input type="button" value="Ricarica" class="charge">
            </div>
        </div>    
    </section>
</div>`;
        // funzioni e attivazione pulsanti
        let ricbtn = document.querySelectorAll('.ricbtn');
        ricbtn.forEach(elem => {
            var _a, _b, _c, _d, _e, _f;
            let chargeInput = (_a = elem.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector('.chargeInput');
            let userNow = (_b = elem.parentNode) === null || _b === void 0 ? void 0 : _b.querySelector('.inpImp');
            let changecr = (_d = (_c = elem.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode) === null || _d === void 0 ? void 0 : _d.querySelector('.cr');
            let changecred = (_f = (_e = elem.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode) === null || _f === void 0 ? void 0 : _f.querySelector('.cred');
            elem.addEventListener('click', () => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                (_e = (_d = (_c = (_b = (_a = elem.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.lastElementChild) === null || _c === void 0 ? void 0 : _c.previousElementSibling) === null || _d === void 0 ? void 0 : _d.previousElementSibling) === null || _e === void 0 ? void 0 : _e.classList.add('d-none');
                (_l = (_k = (_j = (_h = (_g = (_f = elem.parentNode) === null || _f === void 0 ? void 0 : _f.parentNode) === null || _g === void 0 ? void 0 : _g.lastElementChild) === null || _h === void 0 ? void 0 : _h.previousElementSibling) === null || _j === void 0 ? void 0 : _j.previousElementSibling) === null || _k === void 0 ? void 0 : _k.previousElementSibling) === null || _l === void 0 ? void 0 : _l.classList.remove('d-none');
                switch (userNow.value) {
                    case 'user1':
                        user1.smartphone.ricarica(Number(chargeInput.value));
                        changecr.innerHTML = `Il tuo credito residuo è di ${user1.smartphone.credito} € `;
                        changecred.innerHTML = `Ciao ${user1.name},<br>la ricarica di ${chargeInput.value} € è stata effettuata con successo...<br>Controlla ora il tuo credito`;
                        user1.smartphone.azzeraChiamate();
                        break;
                    case 'user2':
                        user2.smartphone.ricarica(Number(chargeInput.value));
                        changecr.innerHTML = `Il tuo credito residuo è di ${user2.smartphone.credito} € `;
                        changecred.innerHTML = `Ciao ${user2.name},<br>la ricarica di ${chargeInput.value} € è stata effettuata con successo...<br> Controlla ora il tuo credito`;
                        user2.smartphone.azzeraChiamate();
                        break;
                    case 'user3':
                        user3.smartphone.ricarica(Number(chargeInput.value));
                        changecr.innerHTML = `Il tuo credito residuo è di ${user3.smartphone.credito} € `;
                        changecred.innerHTML = `Ciao ${user3.name},<br>la ricarica di ${chargeInput.value} € è stata effettuata con successo...<br> Controlla ora il tuo credito`;
                        user3.smartphone.azzeraChiamate();
                        break;
                }
                chargeInput.value = '';
            });
        });
        let chiama = document.querySelectorAll('.chiamabtn');
        chiama.forEach(utente => {
            utente.addEventListener('click', () => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
                let userNow = (_b = (_a = utente.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.querySelector('.inpImp');
                let changecr = (_d = (_c = utente.parentNode) === null || _c === void 0 ? void 0 : _c.parentNode) === null || _d === void 0 ? void 0 : _d.querySelector('.cr');
                switch (userNow.value) {
                    case 'user1':
                        if (user1.smartphone.credito <= 0) {
                            (_g = (_f = (_e = utente.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode) === null || _f === void 0 ? void 0 : _f.lastElementChild) === null || _g === void 0 ? void 0 : _g.classList.remove('d-none');
                            changecr.innerHTML = `Il tuo credito residuo è di 0 €, ricarica la tua scheda per poter effettuare chiamate`;
                        }
                        else {
                            (_l = (_k = (_j = (_h = utente.parentNode) === null || _h === void 0 ? void 0 : _h.parentNode) === null || _j === void 0 ? void 0 : _j.lastElementChild) === null || _k === void 0 ? void 0 : _k.previousElementSibling) === null || _l === void 0 ? void 0 : _l.classList.remove('d-none');
                        }
                        break;
                    case 'user2':
                        if (user2.smartphone.credito <= 0) {
                            (_p = (_o = (_m = utente.parentNode) === null || _m === void 0 ? void 0 : _m.parentNode) === null || _o === void 0 ? void 0 : _o.lastElementChild) === null || _p === void 0 ? void 0 : _p.classList.remove('d-none');
                            changecr.innerHTML = `Il tuo credito residuo è di 0 €, ricarica la tua scheda per poter effettuare chiamate`;
                        }
                        else {
                            (_t = (_s = (_r = (_q = utente.parentNode) === null || _q === void 0 ? void 0 : _q.parentNode) === null || _r === void 0 ? void 0 : _r.lastElementChild) === null || _s === void 0 ? void 0 : _s.previousElementSibling) === null || _t === void 0 ? void 0 : _t.classList.remove('d-none');
                        }
                        break;
                    case 'user3':
                        if (user3.smartphone.credito <= 0) {
                            (_w = (_v = (_u = utente.parentNode) === null || _u === void 0 ? void 0 : _u.parentNode) === null || _v === void 0 ? void 0 : _v.lastElementChild) === null || _w === void 0 ? void 0 : _w.classList.remove('d-none');
                            changecr.innerHTML = `Il tuo credito residuo è di 0 €, ricarica la tua scheda per poter effettuare chiamate`;
                        }
                        else {
                            (_0 = (_z = (_y = (_x = utente.parentNode) === null || _x === void 0 ? void 0 : _x.parentNode) === null || _y === void 0 ? void 0 : _y.lastElementChild) === null || _z === void 0 ? void 0 : _z.previousElementSibling) === null || _0 === void 0 ? void 0 : _0.classList.remove('d-none');
                        }
                        break;
                }
            });
        });
        let credito = document.querySelectorAll('.creditobtn');
        credito.forEach(utn => {
            utn.addEventListener('click', () => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
                (_c = (_b = (_a = utn.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.lastElementChild) === null || _c === void 0 ? void 0 : _c.classList.remove('d-none');
                (_j = (_h = (_g = (_f = (_e = (_d = utn.parentNode) === null || _d === void 0 ? void 0 : _d.parentNode) === null || _e === void 0 ? void 0 : _e.lastElementChild) === null || _f === void 0 ? void 0 : _f.previousElementSibling) === null || _g === void 0 ? void 0 : _g.previousElementSibling) === null || _h === void 0 ? void 0 : _h.previousElementSibling) === null || _j === void 0 ? void 0 : _j.classList.add('d-none');
                (_r = (_q = (_p = (_o = (_m = (_l = (_k = utn.parentNode) === null || _k === void 0 ? void 0 : _k.parentNode) === null || _l === void 0 ? void 0 : _l.lastElementChild) === null || _m === void 0 ? void 0 : _m.previousElementSibling) === null || _o === void 0 ? void 0 : _o.previousElementSibling) === null || _p === void 0 ? void 0 : _p.previousElementSibling) === null || _q === void 0 ? void 0 : _q.previousElementSibling) === null || _r === void 0 ? void 0 : _r.classList.add('d-none');
            });
        });
        let ricarica = document.querySelectorAll('.ricaricabtn');
        ricarica.forEach(ute => {
            ute.addEventListener('click', () => {
                var _a, _b, _c, _d, _e;
                (_e = (_d = (_c = (_b = (_a = ute.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.lastElementChild) === null || _c === void 0 ? void 0 : _c.previousElementSibling) === null || _d === void 0 ? void 0 : _d.previousElementSibling) === null || _e === void 0 ? void 0 : _e.classList.remove('d-none');
            });
        });
        let close = document.querySelectorAll('.close');
        close.forEach(el => {
            el.addEventListener('click', () => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
                (_c = (_b = (_a = el.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.lastElementChild) === null || _c === void 0 ? void 0 : _c.classList.add('d-none');
                (_j = (_h = (_g = (_f = (_e = (_d = el.parentNode) === null || _d === void 0 ? void 0 : _d.parentNode) === null || _e === void 0 ? void 0 : _e.lastElementChild) === null || _f === void 0 ? void 0 : _f.previousElementSibling) === null || _g === void 0 ? void 0 : _g.previousElementSibling) === null || _h === void 0 ? void 0 : _h.previousElementSibling) === null || _j === void 0 ? void 0 : _j.classList.add('d-none');
                (_r = (_q = (_p = (_o = (_m = (_l = (_k = el.parentNode) === null || _k === void 0 ? void 0 : _k.parentNode) === null || _l === void 0 ? void 0 : _l.lastElementChild) === null || _m === void 0 ? void 0 : _m.previousElementSibling) === null || _o === void 0 ? void 0 : _o.previousElementSibling) === null || _p === void 0 ? void 0 : _p.previousElementSibling) === null || _q === void 0 ? void 0 : _q.previousElementSibling) === null || _r === void 0 ? void 0 : _r.classList.add('d-none');
                (_w = (_v = (_u = (_t = (_s = el.parentNode) === null || _s === void 0 ? void 0 : _s.parentNode) === null || _t === void 0 ? void 0 : _t.lastElementChild) === null || _u === void 0 ? void 0 : _u.previousElementSibling) === null || _v === void 0 ? void 0 : _v.previousElementSibling) === null || _w === void 0 ? void 0 : _w.classList.add('d-none');
            });
        });
        let charge = document.querySelectorAll('.charge');
        charge.forEach(ele => {
            ele.addEventListener('click', () => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                (_e = (_d = (_c = (_b = (_a = ele.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.lastElementChild) === null || _c === void 0 ? void 0 : _c.previousElementSibling) === null || _d === void 0 ? void 0 : _d.previousElementSibling) === null || _e === void 0 ? void 0 : _e.classList.remove('d-none');
                (_h = (_g = (_f = ele.parentNode) === null || _f === void 0 ? void 0 : _f.parentNode) === null || _g === void 0 ? void 0 : _g.lastElementChild) === null || _h === void 0 ? void 0 : _h.classList.add('d-none');
            });
        });
        let closeCall = document.querySelectorAll('.closeCall');
        closeCall.forEach(calling => {
            calling.addEventListener('click', () => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
                (_d = (_c = (_b = (_a = calling.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.lastElementChild) === null || _c === void 0 ? void 0 : _c.previousElementSibling) === null || _d === void 0 ? void 0 : _d.classList.add('d-none');
                (_l = (_k = (_j = (_h = (_g = (_f = (_e = calling.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode) === null || _f === void 0 ? void 0 : _f.lastElementChild) === null || _g === void 0 ? void 0 : _g.previousElementSibling) === null || _h === void 0 ? void 0 : _h.previousElementSibling) === null || _j === void 0 ? void 0 : _j.previousElementSibling) === null || _k === void 0 ? void 0 : _k.previousElementSibling) === null || _l === void 0 ? void 0 : _l.classList.remove('d-none');
                let userNow = (_o = (_m = calling.parentNode) === null || _m === void 0 ? void 0 : _m.parentNode) === null || _o === void 0 ? void 0 : _o.querySelector('.inpImp');
                let changetime = (_q = (_p = calling.parentNode) === null || _p === void 0 ? void 0 : _p.parentNode) === null || _q === void 0 ? void 0 : _q.querySelector('.endcall');
                let changecr = (_s = (_r = calling.parentNode) === null || _r === void 0 ? void 0 : _r.parentNode) === null || _s === void 0 ? void 0 : _s.querySelector('.cr');
                let time_mn = Math.floor(Math.random() * 25);
                let time_s = Math.floor(Math.random() * 59);
                switch (userNow.value) {
                    case 'user1':
                        user1.smartphone.chiamata(0, time_mn, time_s);
                        if (user1.smartphone.credito < 0) {
                            changecr.innerHTML = `Il tuo credito residuo è di 0 €, ricarica la tua scheda per poter effettuare chiamate`;
                            changetime.innerHTML = `La tua ultima chiamata è stata interrotta per mancanza di credito.<br> Effettua subito una ricarica per poter continuare le tue telefonate`;
                        }
                        else {
                            changecr.innerHTML = `Il tuo credito residuo è di ${user1.smartphone.credito} € `;
                            changetime.innerHTML = `La tua ultima chiamata è durata ${time_mn} minuti e ${time_s} secondi<br> Il tuo credito ora è di ${user1.smartphone.credito} € <br>
                    Dall'ultima ricarica hai effettuato ${user1.smartphone.numeroChiamate} chiamate per un tempo totale di ${user1.smartphone.oreChiamate}h:${user1.smartphone.minutiChiamate}m:${user1.smartphone.secondiChiamate}s`;
                        }
                        break;
                    case 'user2':
                        user2.smartphone.chiamata(0, time_mn, time_s);
                        if (user2.smartphone.credito < 0) {
                            changecr.innerHTML = `Il tuo credito residuo è di 0 €, ricarica la tua scheda per poter effettuare chiamate`;
                            changetime.innerHTML = `La tua ultima chiamata è stata interrotta per mancanza di credito.<br> Effettua subito una ricarica per poter continuare le tue telefonate`;
                        }
                        else {
                            changecr.innerHTML = `Il tuo credito residuo è di ${user2.smartphone.credito} € `;
                            changetime.innerHTML = `La tua ultima chiamata è durata ${time_mn} minuti e ${time_s} secondi<br> Il tuo credito ora è di ${user2.smartphone.credito} € <br>
                    Dall'ultima ricarica hai effettuato ${user2.smartphone.numeroChiamate} chiamate per un tempo totale di ${user2.smartphone.oreChiamate}h:${user2.smartphone.minutiChiamate}m:${user2.smartphone.secondiChiamate}s`;
                        }
                        break;
                    case 'user3':
                        user3.smartphone.chiamata(0, time_mn, time_s);
                        if (user3.smartphone.credito < 0) {
                            changecr.innerHTML = `Il tuo credito residuo è di 0 €, ricarica la tua scheda per poter effettuare chiamate`;
                            changetime.innerHTML = `La tua ultima chiamata è stata interrotta per mancanza di credito.<br> Effettua subito una ricarica per poter continuare le tue telefonate`;
                        }
                        else {
                            changecr.innerHTML = `Il tuo credito residuo è di ${user3.smartphone.credito} € `;
                            changetime.innerHTML = `La tua ultima chiamata è durata ${time_mn} minuti e ${time_s} secondi<br> Il tuo credito ora è di ${user3.smartphone.credito} € <br>
                    Dall'ultima ricarica hai effettuato ${user3.smartphone.numeroChiamate} chiamate per un tempo totale di ${user3.smartphone.oreChiamate}h:${user3.smartphone.minutiChiamate}m:${user3.smartphone.secondiChiamate}s`;
                        }
                        break;
                }
            });
        });
    });
};
