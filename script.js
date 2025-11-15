//for box1
const box1=document.getElementById("box1");
 box1.addEventListener("click",()=>{
    box1.style.backgroundColor="red";
    box1.style.color="white";
    console.log("box1 clicked to change color");
  
 });

 //for box2
const box2=document.getElementById("box2");
 box2.addEventListener("click",()=>{
    box2.style.backgroundColor="blue";
    box2.style.color="white";
    console.log("box2 clicked to change color");
  
 });

//for box3
const box3=document.getElementById("box3");
 box3.addEventListener("click",()=>{
    box3.style.backgroundColor="green";
    box3.style.color="white";
    console.log("box3 clicked to change color");
 });

//for box4
const box4=document.getElementById("box4");
box4.addEventListener("click",()=>{
    box4.style.backgroundColor="yellow";
    box4.style.color="black";
    console.log("box4 clicked to change color");
});

const button=document.getElementById("btn");
button.addEventListener("click",()=>{
   const name =document.getElementById("username").value;
   const head=document.getElementById("h2")

   if(name==""){
      head.innerText="Hello";
   }else{
      head.innerText="Hello,"+ name;
   }
   console.log("submit trigger to change heade text");
})

