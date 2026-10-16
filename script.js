let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcont = document.querySelector(".msgcont hide");
let msg = document.querySelector("#msg");

let turn = "o";

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


   
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn === "o"){
            box.innerText = "o";
            turn = "x";
        }else{
            box.innerText = "x";
            turn = "o";
        }
        box.disabled = true;

        checkwin();
    });
});
const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
    msgcont.classList.add("hide");
}
const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled= true;
    }
}
const showwin = (winner)=>{
    msg.innerText = winner +" is the winner";
    msgcont.classList.remove("hide");
};

const checkwin = ()=>{
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val !== "" && pos2val !== "" && pos3val !== ""){
            if(pos1val==pos2val && pos2val==pos3val){
                disableboxes();
                showwin(pos1val);
                return;             
            }
        }
    }
}

const resetgame = ()=>{
    turn = "o";
    enableboxes();
    
};
newbtn.addEventListener("click",resetgame);
reset_btn.addEventListener("click",resetgame);
