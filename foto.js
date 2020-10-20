window.addEventListener('load' , lista)

function lista(){

    console.log(document.images.length)
    console.log(document.images[2].alt)
    let fotoTomb=Array.from(document.images)
    let listaSrc=fotoTomb.reduce( (s,obj)=>s+`<li>${obj.src}</li>` , "" )
    document.getElementById("srclista").innerHTML=listaSrc


    document.getElementById("fel").innerHTML=fotoTomb.reduce((s,obj)=>s+`"${obj.src}",` , "")

}