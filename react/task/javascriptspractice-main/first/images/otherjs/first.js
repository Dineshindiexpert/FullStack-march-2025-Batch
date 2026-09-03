let userscore =0;
let compscore=0;

const choices =document.querySelectorAll(".choice");

choices.forEach((choice)=>  {

    choice.addEventListener("click",()=>{
        console.log("choice was clicked");
    })
});