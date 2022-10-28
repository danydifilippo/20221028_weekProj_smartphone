class Smartphone {
    carica:number=0
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

    numero404(){
        this.credito
    }

    getNumeroChiamate(){
        this.numeroChiamate
    }

    azzeraChiamate(){
        this.numeroChiamate = 0
        this.minutiChiamate = 0
        this.oreChiamate = 0
    }

}

function time () {
    let h:number = 0;
    let mn:number = 0;
    let s:number = 0;
    let startTime = setInterval (function() {
        s++;
        if(s===59){
           mn++;
           s=0 
        } else if(mn===59){
            h++;
            mn=0;
        }
    },1000);
}
time()

let iphone = new Smartphone ();
let huawei = new Smartphone ();
let samsung = new Smartphone ();

iphone.ricarica(50)
console.log(iphone.credito);

iphone.chiamata(3,15,24)
console.log(iphone.oreChiamate)
console.log(iphone.minutiChiamate);
console.log(iphone.secondiChiamate);

console.log(iphone.credito);

iphone.chiamata(0,50,44)
console.log(iphone.oreChiamate)
console.log(iphone.minutiChiamate);
console.log(iphone.secondiChiamate);

console.log(iphone.credito);

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

    constructor (name:string, age:number, smartphone:Smartphone,callingTo:string,callTime:string,picture:string,userName:string,job:string){
        super(name,age,smartphone,callingTo,callTime,picture)
        this.userName = userName
        this.job=job
    }
}

let user1 = new Utente ("Giulia", 22, iphone,"amiche e ragazzo","dai 20 ai 40 minuti","../img/giulia.jpeg","utente1","studentessa")
let user2 = new Utente ("Maria", 52, huawei,"familiari vicini e lontani","dai 30 ai 40 minuti","../img/maria.jpg","utente2","casalinga")
let user3 = new Utente ("Pietro", 41, samsung,"fornitori e trasportatori","15 ai 20 minuti","../img/pietro.jpeg","utente3","Concessionario ")
 
let users = [user1, user2, user3]

window.onload = () => {
let date = new Date()
let container = document.querySelector("#container") as HTMLDivElement
users.forEach(element => {
    container.innerHTML += `
    <div><div class="userBox"><h2>${element.name}</h2><h4>${element.age} anni</h4>
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
        </div>
    </section>`});
    }
    
