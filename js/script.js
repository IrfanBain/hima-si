AOS.init();

//img
const pbak = document.querySelector("#pbakk img")
const sikrab = document.querySelector("#sikrabb img")
const raker = document.querySelector("#rakerr img")

let pbakp = ["/img/kegiatan/pbak/one.jpg", "/img/kegiatan/pbak/two.jpg", "/img/kegiatan/pbak/three.jpg", "/img/kegiatan/pbak/four.jpg", "/img/kegiatan/pbak/five.jpg"]
let sikrabp = ["/img/kegiatan/sikrab/1.jpg", "/img/kegiatan/sikrab/2.jpg", "/img/kegiatan/sikrab/3.jpg", "/img/kegiatan/sikrab/4.jpg", "/img/kegiatan/sikrab/5.jpg"]
let rakerp = ["/img/kegiatan/raker/1.jpg", "/img/kegiatan/raker/2.jpg", "/img/kegiatan/raker/3.jpg", "/img/kegiatan/raker/4.jpg", "/img/kegiatan/raker/5.jpg"]

let h = 0, i = 0, j = 0
setInterval(function(){
    pbak.setAttribute("src", `${pbakp[h++]}`)
    sikrab.setAttribute("src", `${sikrabp[i++]}`)
    raker.setAttribute("src", `${rakerp[j++]}`)

    // pbak.style.animation = "fade 2.5s ease-in-out infinite"

    if(h >= 5 && i >= 5){
        h = 0
        i =0
        j = 0
    }
}, 3000)

const togle = document.getElementById('togle')
const menu = document.getElementById('menu')

togle.addEventListener('click', function(){
    menu.classList.toggle('active-menu')
})