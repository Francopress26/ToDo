

//---- LISTA DE X HACER ------
const $porHacer = document.getElementById("por-hacer")
const $formxHacer = document.getElementById("form-xhacer")
const $btnPorHacer = $formxHacer.querySelector("button")
const $inputPorHacer = document.getElementById("texto-xhacer")

const crearTarea = (textoInput,lista)=>{
     //creo el "li" y le pongo la clase
     const toDoItem = document.createElement("li")
     toDoItem.setAttribute("class","li-xhacer")
     const ids= Math.random(5,10).toString()
     toDoItem.setAttribute("id",ids)
 
 
     //creo el p y le pongo el texto del input
     const pToDo = document.createElement("p")
     pToDo.innerText=textoInput.value  //dinamico texto
     
     //creo el div mayor donde voy a guardar los 2 checkbox
     const divToDo = document.createElement("div") // div checkbox
     divToDo.setAttribute("class","checkbox")
 
     //creo los 2 div menores que van dentro del checkbox
     const checkDivP = document.createElement("div") //check-div de proceso
     checkDivP.setAttribute("class","check-div")
     const checkDivH = document.createElement("div") // check-div de hecho 
     checkDivH.setAttribute("class","check-div")
 
     //creo el boton de borrar 
     const btnBorrar = document.createElement("button")
     btnBorrar.innerText="X"
     btnBorrar.setAttribute("id","remove")
 
 
     //creo el primer input y label
         const labelProceso= document.createElement("label")
         labelProceso.innerText="Proceso"
         const inputxHacer = document.createElement("input") 
         inputxHacer.setAttribute("type","checkbox")
         inputxHacer.setAttribute("value","xhacer")
         inputxHacer.setAttribute("id","inputHacer")
         if(lista==="proceso"){
            inputxHacer.checked=true
         }else if(lista==="Hecho"){
            inputxHacer.checked=true
         }
          
 
     //creo el segundo input y label
         const labelHecha= document.createElement("label")
         labelHecha.innerText="Hecha"
         const inputHecho = document.createElement("input")
         inputHecho.setAttribute("type","checkbox")
         inputHecho.setAttribute("value","hecha")
         inputHecho.setAttribute("id","inputHecho")
         if(lista==="Hecho"){
            inputHecho.checked=true
         }
               
               
     //Guardo el primer label y check en el primer div de proceso
         checkDivP.insertAdjacentElement("beforeend",labelProceso)
         checkDivP.insertAdjacentElement("beforeend",inputxHacer)
       
       
     //Guardo el segundo label y check en el div de hechas 
         checkDivH.insertAdjacentElement("beforeend",labelHecha)
         checkDivH.insertAdjacentElement("beforeend",inputHecho)
               
     //inserto en el div de checkbox los 2 div de labels e input
         divToDo.insertAdjacentElement("beforeend",checkDivP)
         divToDo.insertAdjacentElement("beforeend",checkDivH)
 
     //inserto el boton al div de checkbox 
     divToDo.insertAdjacentElement("beforeend",btnBorrar)
   
 
    //guardo en el li el p
     toDoItem.insertAdjacentElement("beforeend",pToDo)
     // guardo en el li el div checkbox 
     toDoItem.setAttribute("draggable","true")
     toDoItem.insertAdjacentElement("beforeend",divToDo)    
        
     return toDoItem

}




const agregarToDo = (e)=>{
    const tarea = crearTarea($inputPorHacer,"Hacer")

    $porHacer.insertAdjacentElement("beforeend",tarea)
    $inputPorHacer.value=""
    e.preventDefault()
}

$btnPorHacer.addEventListener("click",agregarToDo)



const remove = (e)=>{

           if(e.target.id =="remove"){
            const ulHacer = document.getElementById("por-hacer")

            const check = e.srcElement
            const liRemove = check.parentElement.parentElement
            ulHacer.removeChild(liRemove)
           
           }    
}
$porHacer.addEventListener("click",remove)

//---------------------------------


//-----LISTA PROCESO-----

const ulProceso = document.getElementById("ul-proceso")
const formProceso = document.getElementById("form-proceso")
const inputProceso = document.getElementById("texto-proceso")
const btnProceso = document.getElementById("btn-Proceso")
const toDoProceso=(e)=>{
    try {
        const tarea= crearTarea(inputProceso,"proceso")
        console.log(ulProceso)
        ulProceso.insertAdjacentElement("beforeend",tarea)
        inputProceso.value=""
        e.preventDefault()
    } catch (error) {
        console.log(error)
    }
     
}
btnProceso.addEventListener("click",toDoProceso)

const removeP= (e)=>{

    if(e.target.id =="remove"){
     const ulHacer = document.getElementById("ul-proceso")
        const check = e.srcElement
        const liRemove = check.parentElement.parentElement
        ulHacer.removeChild(liRemove)
    }    
}
ulProceso.addEventListener("click",removeP)


//___checkbox de x hacer checked a proceso 
const checkedH=(e)=>{
    if(e.target.id==="inputHacer"){
        if(e.target.checked){
            const check = e.srcElement
            const li = check.parentElement.parentElement.parentElement
            ulProceso.insertAdjacentElement("beforeend",li)
        }
    }
}
$porHacer.addEventListener("click",checkedH)


// chechboxk sacar el check de proceso y que pase a x hacer
const uncheckH=(e)=>{
    if(e.target.id==="inputHacer"){
        if(!e.target.checked){
                const li = e.srcElement.parentElement.parentElement.parentElement
                $porHacer.insertAdjacentElement("beforeend",li)
        }
        
    }
}
ulProceso.addEventListener("click",uncheckH)

//----------------------------------------






///-LISTA DE HECHAS
const ulHechas =document.getElementById("ul-hechas")
const formHechas = document.getElementById("form-hechas")
const inputHechas=document.getElementById("texto-hechas")
const btnHechas = document.getElementById("btn-Hechas")
const toDoHechas=(e)=>{
    try {
        const tarea = crearTarea(inputHechas,"Hecho")

   ulHechas.insertAdjacentElement("beforeend",tarea)
   inputHechas.value=""
        e.preventDefault()
    } catch (e) {
        console.log(e)
    }
}
btnHechas.addEventListener("click",toDoHechas)

//-Check de hecha pasa a la lista de hechas
const checkHechas = (e)=>{
    if(e.target.id==="inputHecho"){
        const li = e.srcElement.parentElement.parentElement.parentElement
        e.srcElement.parentElement.parentElement.children[0].children[1].checked=true    
        console.log(li)
        ulHechas.insertAdjacentElement("beforeend",li)
    }
}

$porHacer.addEventListener("click",checkHechas)
ulProceso.addEventListener("click",checkHechas)




//Uncheck checkbox hechas 
    const unCheckHechas=(e)=>{
        if(e.target.id==="inputHecho"){
            const li = e.srcElement.parentElement.parentElement.parentElement
            ulProceso.insertAdjacentElement("beforeend",li)
        }
        if(e.target.id==="inputHacer"){
            const li = e.srcElement.parentElement.parentElement.parentElement
            e.srcElement.parentElement.parentElement.children[1].children[1].checked=false
            $porHacer.insertAdjacentElement("beforeend",li)
        }
    }
ulHechas.addEventListener("click",unCheckHechas)

//Remove hechas
    const removeHechas = (e)=>{
        console.log("removeEeE")
        if(e.target.id==="remove"){
            const li = e.srcElement.parentElement.parentElement
            const ul =document.getElementById("ul-hechas")
            ul.removeChild(li)
        }
      
    }

ulHechas.addEventListener("click",removeHechas)





///DRAG TRY

const $main = document.querySelector("main")


$main.addEventListener("dragstart", (event) => {
    // store a ref. on the dragged elem
    if(Number(event.target.id)<1){
        dragged=event.target
    }
  
  });
  const divLists = document.querySelectorAll(".div-list")


  divLists[1].addEventListener("dragover", (event) => {
    // prevent default to allow drop
    event.preventDefault();
  }, false);



  divLists[1].addEventListener("drop", (event) => {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged element to the selected drop target
    
    ulProceso.appendChild(dragged)
    dragged.children[1].children[0].children[1].checked=true
    dragged.children[1].children[1].children[1].checked=false

  });


  divLists[0].addEventListener("dragover", (event) => {
    // prevent default to allow drop
    event.preventDefault();
  }, false);
  divLists[0].addEventListener("drop", (event) => {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged element to the selected drop target

        $porHacer.appendChild(dragged)
        dragged.children[1].children[0].children[1].checked=false
        dragged.children[1].children[1].children[1].checked=false

  });
  


  divLists[2].addEventListener("dragover", (event) => {
    // prevent default to allow drop
    event.preventDefault();
  }, false);
  divLists[2].addEventListener("drop", (event) => {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged element to the selected drop target
    ulHechas.appendChild(dragged)
    dragged.children[1].children[0].children[1].checked=true
    dragged.children[1].children[1].children[1].checked=true
  });


////ASIDE

const openBtn = document.querySelector("#open-menu")
const aside = document.querySelector("aside")
const closeBtn = document.getElementById("closeBTN")


openBtn.addEventListener("click",(e)=>{
    aside.classList.toggle("asideHide")
      
})
closeBtn.addEventListener("click",()=>{
    aside.classList.toggle("asideHide")

})