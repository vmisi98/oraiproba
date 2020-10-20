var kepek=["https://source.unsplash.com/pWkk7iiCoDM/400x300","https://source.unsplash.com/aob0ukAYfuI/400x300","https://source.unsplash.com/EUfxH-pze7s/400x300","https://source.unsplash.com/M185_qYH8vg/400x300","https://source.unsplash.com/sesveuG_rNo/400x300","https://source.unsplash.com/AvhMzHwiE_0/400x300","https://source.unsplash.com/2gYsZUmockw/400x300","https://source.unsplash.com/EMSDtjVHdQ8/400x300","https://source.unsplash.com/8mUEy0ABdNE/400x300","https://source.unsplash.com/G9Rfc1qccH4/400x300","https://source.unsplash.com/aJeH0KcFkuc/400x300","https://source.unsplash.com/p2TQ-3Bh3Oo/400x300"]

var mem_kep=new Image();
mem_kep.src=kepek[0]

window.addEventListener('load' , init)
function init(){

document.getElementById("kep").src=mem_kep.src;
document.getElementById("hatra").addEventListener("click", setImage)
document.getElementById("elore").addEventListener("click", setImage)

}
const setImage=(e)=>{
    console.log(e.target.id)
    let irany=e.target.id
    let index =irany=="elore" ?
    
}
