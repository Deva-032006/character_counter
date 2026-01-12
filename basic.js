const Bar=document.querySelector(".bar");
const Hide=document.querySelector(".hide") ;
const Close=document.querySelector(".close");
// const num=document.querySelector(".number");
const textArea=document.getElementById("textarea");
const totalChar=document.getElementById("totalchar");
const remainChar=document.getElementById("remainchar")

Bar.addEventListener("click",()=>{
    Hide.style.display = "block"
})
Close.addEventListener("click",()=>{
    Hide.style.display="none";
})


textArea.addEventListener("keyup",() =>{
   updatecounter()
})

function updatecounter(){
    totalChar.innerText=textArea.value.length;
    remainChar.innerText=textArea.getAttribute("maxlength")- textArea.value.length;
}

