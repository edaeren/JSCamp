console.log("Merhaba Kodlama.io")

//JS type safe degildir
let dolarBugun=9.30

let dolarDun=9.20
dolarDun="9.20"
{
    let dolarDun= 9.10
}

console.log(dolarDun)

const euroDun= 11.2
//euroDun=11 hata bu yapilmiyor

console.log(euroDun)
let konutKredileri =[12,"Emlak Konut Kredisi",["a","b","c"]]

console.log("<ul>")
for(let i=0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")
 



console.log(konutKredileri)