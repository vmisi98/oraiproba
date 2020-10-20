window.addEventListener('load' , lista)
function init(){
    lista();
    document.querySelectorAll('img').forEach((obj)=>{
        obj.addEventListener("click", ujablak)

    })
}
function lista(){

    console.log(document.images.length)
    console.log(document.images[2].alt)
    let fotoTomb=Array.from(document.images)
    let listaSrc=fotoTomb.reduce( (s,obj)=>s+`<li>${obj.src}</li>` , "" )
    document.getElementById("srclista").innerHTML=listaSrc


    document.getElementById("fel").innerHTML=fotoTomb.reduce((s,obj)=>s+`"${obj.src}",` , "")

}
function ujablak(e){
console.log(e.target)
let kepObj=e.target
let url=kepObj.getAttribute('src')
window.open(url, 'Image')

}