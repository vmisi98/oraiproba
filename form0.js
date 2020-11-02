window.addEventListener('load',init)

    function init(){
        console.log("eltrolt sutik"+document.cookie)
        document.getElementById("adatok").innerHTML=document.cookie
        document.getElementById("pont").addEventListener("change",pontotMutat)
        document.querySelectorAll("input[name=card]").forEach((e)=>e.addEventListener("keyup",ugrik))
        document.getElementById("szEv").addEventListener("focusout",eletkor)
    
        document.getElementById("elkuld").addEventListener("click",ellenoriz)

        document.getElementById("torol").addEventListener("click", sutitTorol)
    }
    
    let hibak=[]

    function eletkor(){
        document.getElementById("eletkor").innerHTML="...eves vagy"
        console.log("focusout")
        let ev=document.getElementById('szEv').value
        console.log(ev)
        if(ev){
            console.log("ok")
            ev=parseInt(ev) 
            let today=new Date()
            document.getElementById("eletkor").innerHTML=(today.getFullYear()-ev)+" eves vagy?"
        }
       
    }
    
    function pontotMutat(e){
        console.log(e.target.value)
        document.getElementById("pontErtek").value=e.target.value
    }
    
    function ugrik(e){
        console.log(e.target)
        let ti=e.target.tabIndex
        console.log("tabindex="+ti)
        let db=document.getElementsByName("card").length
        console.log("darab="+db)
        console.log(e.target.value.length+" "+e.target.maxLength)
        if(parseInt(e.target.value.length)==parseInt(e.target.maxLength) && parseInt(ti)<parseInt(db))
             document.getElementsByName("card")[ti].focus()     
    }

    function ellenoriz(e){
        hibak=[]
        document.getElementById("hibalista").innerHTML=""
    
        if(document.getElementById("email").value.length<4)
            hibak.push("helytelen e-mail cim")

        //jelszo: a hossza min.8 karakter es legyen legalabb 1 szam benne
        if(document.getElementById("passw").value.length<8)
            hibak.push("a jelszo tul rovid")
        var hasNumber = /\d/;   
        if(!hasNumber.test(document.getElementById("passw").value))
            hibak.push("a jelszonak kell tartalmaznia szamot is")

        //erdeklodesi kor: egyet kotelezo kivalasztani
        let erdeklodesIndex=document.getElementById("sel").selectedIndex
        //console.log("erdeklodes="+erdeklodesIndex+" "+document.getElementById("sel").options[erdeklodesIndex].text)
        if(erdeklodesIndex<=0)
            hibak.push("valassz egy erdeklodesi kort")
    
        //checkbox: legalabb egyet kotelezo kivalasztani
        if(!document.querySelector('input[name=nyelv]:checked'))
          hibak.push("ki kell valasztani legalabb egy nyelvet")     
          
        //radio: egyet kotelezo kivalasztani
        if(!document.querySelector('input[name=kateg]:checked'))
          hibak.push("ki kell valasztani a hovatartozasi kategoriat")     
        
    
         //bankkartyaszam ellenorzes: 
        let cardTomb=Array.from(document.getElementsByName("card"))
        //cardTomb.forEach(e=>console.log(e.value))
        let reg= /^\d+$/;   //az elejetol a vegeig csak szamjegyek
       let rosszTomb=cardTomb.filter(e=>!reg.test(e.value))
       //rosszTomb.forEach(e=>console.log("nem szam:"+e.value))
       if(rosszTomb.length>0)
            hibak.push("a bankkartya szama nem jo")
                
        //szuletesi ev kitoltottsegenek az ellenorzese:
        if(!document.getElementById('szEv').value)
            hibak.push("a szultesi ev kitolese kotelezo")
        
        if(hibak.length>0){
             e.preventDefault();
             document.getElementById("hibalista").innerHTML=hibak.reduce((s,e)=>s+"<li>"+e+"</li>","")
        }else{
            //sutik letrehozasa
            document.cookie="mail="+document.getElementById("email").value+"; experies=''";
            document.cookie="pontErtek="+document.getElementById('pont').value+"; experies''";


        }
           
    }
    function sutitTorol(){
        document.cookie='email="" ; expires='+new Date();
        document.cookie='pontErtek="" ;expries='+new Date();
        document.getElementById("adatok").innerHTML=document.cookie
    }

