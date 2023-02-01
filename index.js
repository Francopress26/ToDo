 const $btnMenu = document.querySelector(".btn-div")
 console.log($btnMenu)
const $menu = document.querySelector(".menu")
const $aside=document.querySelector(".aside")

let menuOppened = false


const $menuLink = document.querySelectorAll(".menu-link")
 const openMenu= ()=>{
        if(menuOppened == false){
            $aside.style.display="flex"
            
             menuOppened=true
        }else{
            $aside.style.display="block"

         
            menuOppened=true
        }
 }

 const menuAct=()=>{
    $menu.style.setProperty("display","none")
    menuOppened=false


 }

 $btnMenu.addEventListener("click", openMenu)
 $menuLink.forEach((a)=> a.addEventListener("click",menuAct))