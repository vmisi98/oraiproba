var kepek=["https://source.unsplash.com/pWkk7iiCoDM/400x300","https://source.unsplash.com/aob0ukAYfuI/400x300","https://source.unsplash.com/EUfxH-pze7s/400x300","https://source.unsplash.com/M185_qYH8vg/400x300","https://source.unsplash.com/sesveuG_rNo/400x300","https://source.unsplash.com/AvhMzHwiE_0/400x300","https://source.unsplash.com/2gYsZUmockw/400x300","https://source.unsplash.com/EMSDtjVHdQ8/400x300","https://source.unsplash.com/8mUEy0ABdNE/400x300","https://source.unsplash.com/G9Rfc1qccH4/400x300","https://source.unsplash.com/aJeH0KcFkuc/400x300","https://source.unsplash.com/p2TQ-3Bh3Oo/400x300"]

var mem_kep=new Image();
mem_kep.src=kepek[0]


window.addEventListener('load',init)

function init(){
document.getElementById("kep").src=mem_kep.src
document.getElementById("csere").addEventListener('click',cserel)


}
function cserel(){
    let kepNev=document.getElementById("kep").src
    console.log(kepNev)
    let kepIndex=kepek.findIndex(e=>e==kepNev)
    console.log(kepIndex+ " "+ kepek.length)
  /*  kepIndex<kepek.length-1 ? mem_kep.src=kepek[kepIndex+1] : mem_kep.src=kepek[0]
    document.getElementById("kep").src=mem_kep.src */

    mem_kep.src=kepek[(kepIndex+1)%kepek.length]
    document.getElementById('kep').src=mem_kep.src

    
    

}