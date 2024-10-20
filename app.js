let boxes = document.querySelectorAll(".box");
let resbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
// to maintain turns
let turnO = true ; //player,playery means O
//winning cases
let count=0;
const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
//making each box functional
boxes.forEach((box)=>
{
    box.addEventListener("click",()=>{
        
        if(turnO)
        {
            box.innerText="O";

            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;// once if button is clicked making it unchangeable
        count++;
        let isWinner= checkWinner();
        if(count==9&& !isWinner)
        {
            gameDraw();
        }
       
    });
   
});
const gameDraw =()=>
{
    msg.innerText="game was a draw,click on new game";
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const disableBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};
const enableBoxes=()=>
{
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }

}
const showWinner =(winner)=>
{
   // msg.innerText ='Congratulations, Winner is ${winner}';
   msg.innerText = `Congratulations, Winner is ${winner}`;

    msgcontainer.classList.remove("hide");//removing hide so that this winner msg will be displayed else as we kept display:gide we cant see it
    disableBoxes();

};
const resetGame=()=>
{
    turnO=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");


};
const checkWinner=() =>
    {
         for(let pattern of winPattern)
         {
            let pos1val =boxes[pattern[0]].innerText;
            let pos2val =boxes[pattern[1]].innerText;
            let pos3val =boxes[pattern[2]].innerText;
            if(pos1val!=""&&pos2val!=""&&pos3val!="" )
            {
                if(pos1val===pos2val &&pos2val===pos3val)
                {

                        

                        showWinner(pos1val);
                        return true;
                    
                }       
            }
        }
        
    };
    newGameBtn.addEventListener("click",resetGame);
    resbtn.addEventListener("click",resetGame);