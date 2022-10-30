// classi e metodi

class Smartphone {
    numeroChiamate:number=0
    oreChiamate:number=0
    minutiChiamate:number=0
    secondiChiamate:number=0
    credito:number=0

    ricarica(unaRicarica:number){
        this.credito += unaRicarica
    }

    chiamata(oreDurata:number,minutiDurata:number,secondiDurata:number){
        this.credito -= (0.20*minutiDurata+12*oreDurata);
        let addHours = this.oreChiamate + oreDurata -60;
        let addMinute = this.minutiChiamate + minutiDurata -60;
        let addSeconds = this.secondiChiamate + secondiDurata -60;
        let hourAdded = this.oreChiamate += oreDurata;
        let minAdded = this.minutiChiamate += minutiDurata;
        let secAdded = this.secondiChiamate += secondiDurata;
        hourAdded > 60 ? this.oreChiamate = addHours : hourAdded;
        if(minAdded > 60) {
            this.minutiChiamate = addMinute;
            this.oreChiamate++;
         } else {
            minAdded};
        if(secAdded > 60) {
            this.secondiChiamate = addSeconds;
            this.minutiChiamate++
        } else {
            secAdded};
        this.numeroChiamate ++
    }


    azzeraChiamate(){
        this.numeroChiamate = 0
        this.minutiChiamate = 0
        this.oreChiamate = 0
        this.secondiChiamate = 0
    }

}


let iphone = new Smartphone ();
let huawei = new Smartphone ();
let samsung = new Smartphone ();

iphone.ricarica(30)
huawei.ricarica(40)
samsung.ricarica(50)

abstract class User {
    name:string
    age:number
    smartphone:Smartphone
    callingTo:string
    callTime:string
    picture:string


    constructor (name:string, age:number, smartphone:Smartphone,callingTo:string,callTime:string,picture:string){
        this.name = name
        this.age = age
        this.smartphone = smartphone
        this.callingTo = callingTo
        this.callTime = callTime
        this.picture = picture
    }

}

class Utente extends User {
    userName: string
    job: string
    usualCall : string

    constructor (name:string, age:number, smartphone:Smartphone,callingTo:string,callTime:string,picture:string,userName:string,job:string,usualCall : string){
        super(name,age,smartphone,callingTo,callTime,picture)
        this.userName = userName
        this.job=job
        this.usualCall = usualCall
    }
}

let user1 = new Utente ("Giulia", 22, iphone,"amiche e ragazzo","dai 20 ai 40 minuti","../img/giulia.jpeg","user1","studentessa", "Paolo🥰")
let user2 = new Utente ("Maria", 52, huawei,"familiari vicini e lontani","dai 30 ai 40 minuti","../img/maria.jpg","user2","casalinga","Giovanna 👩🏼‍🦰")
let user3 = new Utente ("Pietro", 41, samsung,"fornitori e trasportatori","dai 15 ai 20 minuti","../img/pietro.jpeg","user3","Rivenditore di auto", "MVE Trasporti 🚛")
 
let users = [user1, user2, user3]



// Caricamento Html
window.onload = () =>{
let date = new Date()
let container = document.querySelector("#container") as HTMLDivElement
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
</div>`


// funzioni e attivazione pulsanti

    let ricbtn = document.querySelectorAll<HTMLDivElement>('.ricbtn')
    ricbtn.forEach(elem=> {
        let chargeInput = elem.parentNode?.querySelector('.chargeInput') as HTMLInputElement
        let userNow = elem.parentNode?.querySelector('.inpImp') as HTMLInputElement
        let changecr = elem.parentNode?.parentNode?.querySelector('.cr') as HTMLElement
        let changecred = elem.parentNode?.parentNode?.querySelector('.cred') as HTMLElement
        elem.addEventListener('click', () => {
        elem.parentNode?.parentNode?.lastElementChild?.previousElementSibling?.previousElementSibling?.classList.add('d-none')
        elem.parentNode?.parentNode?.lastElementChild?.previousElementSibling?.previousElementSibling?.previousElementSibling?.classList.remove('d-none')
            switch (userNow.value){
                case 'user1':
                    user1.smartphone.ricarica(Number(chargeInput.value));
                    changecr.innerHTML = `Il tuo credito residuo è di ${user1.smartphone.credito} € `
                    changecred.innerHTML = `Ciao ${user1.name},<br>la ricarica di ${chargeInput.value} € è stata effettuata con successo...<br>Controlla ora il tuo credito`
                    user1.smartphone.azzeraChiamate()
                    break;
                case 'user2':
                    user2.smartphone.ricarica(Number(chargeInput.value));
                    changecr.innerHTML = `Il tuo credito residuo è di ${user2.smartphone.credito} € `
                    changecred.innerHTML = `Ciao ${user2.name},<br>la ricarica di ${chargeInput.value} € è stata effettuata con successo...<br> Controlla ora il tuo credito`
                    user2.smartphone.azzeraChiamate()
                    break;
                case 'user3':
                    user3.smartphone.ricarica(Number(chargeInput.value));
                    changecr.innerHTML = `Il tuo credito residuo è di ${user3.smartphone.credito} € `
                    changecred.innerHTML = `Ciao ${user3.name},<br>la ricarica di ${chargeInput.value} € è stata effettuata con successo...<br> Controlla ora il tuo credito`
                    user3.smartphone.azzeraChiamate()
                    break;
            }
            chargeInput.value=''
        })
        
    })
   
    let chiama = document.querySelectorAll<HTMLDivElement>('.chiamabtn')
    chiama.forEach(utente => {
        utente.addEventListener('click', () => {
        let userNow = utente.parentNode?.parentNode?.querySelector('.inpImp') as HTMLInputElement
        let changecr = utente.parentNode?.parentNode?.querySelector('.cr') as HTMLElement 
        switch (userNow.value){
            case 'user1':
                if(user1.smartphone.credito<=0) {
                utente.parentNode?.parentNode?.lastElementChild?.classList.remove('d-none')
                 changecr.innerHTML = `Il tuo credito residuo è di 0 €, ricarica la tua scheda per poter effettuare chiamate`
                } else {utente.parentNode?.parentNode?.lastElementChild?.previousElementSibling?.classList.remove('d-none')}
                break;
            case 'user2':
                if(user2.smartphone.credito<=0) {
                    utente.parentNode?.parentNode?.lastElementChild?.classList.remove('d-none')
                     changecr.innerHTML = `Il tuo credito residuo è di 0 €, ricarica la tua scheda per poter effettuare chiamate`
                    } else {utente.parentNode?.parentNode?.lastElementChild?.previousElementSibling?.classList.remove('d-none')}
                    break;
            case 'user3':
                if(user3.smartphone.credito<=0) {
                    utente.parentNode?.parentNode?.lastElementChild?.classList.remove('d-none')
                     changecr.innerHTML = `Il tuo credito residuo è di 0 €, ricarica la tua scheda per poter effettuare chiamate`
                    } else {utente.parentNode?.parentNode?.lastElementChild?.previousElementSibling?.classList.remove('d-none')}
                    break;
        }
         
            
        } )
        } )
    
    let credito = document.querySelectorAll<HTMLDivElement>('.creditobtn')
    credito.forEach(utn => {
        utn.addEventListener('click', () => {
        utn.parentNode?.parentNode?.lastElementChild?.classList.remove('d-none')
        utn.parentNode?.parentNode?.lastElementChild?.previousElementSibling?.previousElementSibling?.previousElementSibling?.classList.add('d-none') 
        utn.parentNode?.parentNode?.lastElementChild?.previousElementSibling?.previousElementSibling?.previousElementSibling?.previousElementSibling?.classList.add('d-none') 
    })
    })


    let ricarica = document.querySelectorAll<HTMLDivElement>('.ricaricabtn')
    ricarica.forEach(ute => {
        ute.addEventListener('click', () => {
        ute.parentNode?.parentNode?.lastElementChild?.previousElementSibling?.previousElementSibling?.classList.remove('d-none')
        })
    })
    let close = document.querySelectorAll<HTMLDivElement>('.close')
    close.forEach(el=> {
        el.addEventListener('click', () => {
        el.parentNode?.parentNode?.lastElementChild?.classList.add('d-none') 
        el.parentNode?.parentNode?.lastElementChild?.previousElementSibling?.previousElementSibling?.previousElementSibling?.classList.add('d-none') 
        el.parentNode?.parentNode?.lastElementChild?.previousElementSibling?.previousElementSibling?.previousElementSibling?.previousElementSibling?.classList.add('d-none') 
        el.parentNode?.parentNode?.lastElementChild?.previousElementSibling?.previousElementSibling?.classList.add('d-none')
    })
    });
    let charge = document.querySelectorAll<HTMLDivElement>('.charge')
    charge.forEach(ele=> {
        ele.addEventListener('click', () => {
        ele.parentNode?.parentNode?.lastElementChild?.previousElementSibling?.previousElementSibling?.classList.remove('d-none')
        ele.parentNode?.parentNode?.lastElementChild?.classList.add('d-none')
        })
    })
    let closeCall = document.querySelectorAll<HTMLButtonElement>('.closeCall')
    closeCall.forEach(calling=> {
        calling.addEventListener('click',() =>{
            calling.parentNode?.parentNode?.lastElementChild?.previousElementSibling?.classList.add('d-none')
            calling.parentNode?.parentNode?.lastElementChild?.previousElementSibling?.previousElementSibling?.previousElementSibling?.previousElementSibling?.classList.remove('d-none')
            let userNow = calling.parentNode?.parentNode?.querySelector('.inpImp') as HTMLInputElement
            let changetime = calling.parentNode?.parentNode?.querySelector('.endcall') as HTMLElement
            let changecr = calling.parentNode?.parentNode?.querySelector('.cr') as HTMLElement
            let time_mn = Math.floor(Math.random()*25)
            let time_s = Math.floor(Math.random()*59)
            switch (userNow.value){
                case 'user1':
                    user1.smartphone.chiamata(0,time_mn,time_s)
                    if (user1.smartphone.credito < 0) {
                        changecr.innerHTML = `Il tuo credito residuo è di 0 €, ricarica la tua scheda per poter effettuare chiamate`
                        changetime.innerHTML = `La tua ultima chiamata è stata interrotta per mancanza di credito.<br> Effettua subito una ricarica per poter continuare le tue telefonate`
                    } else {
                    changecr.innerHTML = `Il tuo credito residuo è di ${user1.smartphone.credito} € `
                    changetime.innerHTML = `La tua ultima chiamata è durata ${time_mn} minuti e ${time_s} secondi<br> Il tuo credito ora è di ${user1.smartphone.credito} € <br>
                    Dall'ultima ricarica hai effettuato ${user1.smartphone.numeroChiamate} chiamate per un tempo totale di ${user1.smartphone.oreChiamate}h:${user1.smartphone.minutiChiamate}m:${user1.smartphone.secondiChiamate}s`}
                    break;
                case 'user2':
                    user2.smartphone.chiamata(0,time_mn,time_s)
                    if (user2.smartphone.credito < 0) {
                        changecr.innerHTML = `Il tuo credito residuo è di 0 €, ricarica la tua scheda per poter effettuare chiamate`
                        changetime.innerHTML = `La tua ultima chiamata è stata interrotta per mancanza di credito.<br> Effettua subito una ricarica per poter continuare le tue telefonate`
                    } else {
                    changecr.innerHTML = `Il tuo credito residuo è di ${user2.smartphone.credito} € `
                    changetime.innerHTML = `La tua ultima chiamata è durata ${time_mn} minuti e ${time_s} secondi<br> Il tuo credito ora è di ${user2.smartphone.credito} € <br>
                    Dall'ultima ricarica hai effettuato ${user2.smartphone.numeroChiamate} chiamate per un tempo totale di ${user2.smartphone.oreChiamate}h:${user2.smartphone.minutiChiamate}m:${user2.smartphone.secondiChiamate}s`}
                    break;
                case 'user3':
                    user3.smartphone.chiamata(0,time_mn,time_s)
                    if (user3.smartphone.credito < 0) {
                        changecr.innerHTML = `Il tuo credito residuo è di 0 €, ricarica la tua scheda per poter effettuare chiamate`
                        changetime.innerHTML = `La tua ultima chiamata è stata interrotta per mancanza di credito.<br> Effettua subito una ricarica per poter continuare le tue telefonate`
                    } else {
                    changecr.innerHTML = `Il tuo credito residuo è di ${user3.smartphone.credito} € `
                    changetime.innerHTML = `La tua ultima chiamata è durata ${time_mn} minuti e ${time_s} secondi<br> Il tuo credito ora è di ${user3.smartphone.credito} € <br>
                    Dall'ultima ricarica hai effettuato ${user3.smartphone.numeroChiamate} chiamate per un tempo totale di ${user3.smartphone.oreChiamate}h:${user3.smartphone.minutiChiamate}m:${user3.smartphone.secondiChiamate}s`}
                    break;
            }
        })
    })
});
}

        
     
    