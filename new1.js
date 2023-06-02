let gameover=false;
const realWin=() =>
{
    let boxtext=document.getElementsByClassName("boxText");
    boxtext=Array.from(boxtext);
    let win=
    [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win.forEach(e  =>{
        
        if((boxtext[e[0]].innerText==boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText==boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText!=''))
        {
            gameover=true;
            // return true;
        }
        
    })
    
}
function playO()
{
    let boxtext=document.getElementsByClassName("boxText");
    boxtext=Array.from(boxtext);
    let index=Math.floor(Math.random()*9);
        while (no_of_X<=4)
        {
            if(boxtext[index].innerText=='')
            {
                boxtext[index].innerText='O';
                break;
            }
            else
            {
                index=Math.floor(Math.random()*9);
            }
        }
}
let no_of_X=0;
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach
(element =>
    {
        let boxText=element.querySelector('.boxText');
        element.addEventListener
        ('click',()=>
        {
            if(boxText.innerText ==='')
            {
                boxText.innerText='X';
                no_of_X+=1;
                // console.log(no_of_X);
                gameover=false;
                realWin();
                // console.log(gameover);
                if(gameover)
                {
                    let e=document.querySelector(".info");
                    e.innerText="X WON!!!";
                }
                else
                {
                    playO();
                    gameover=false;
                    realWin();
                    if(gameover)
                    {
                        let e=document.querySelector(".info");
                        e.innerText="O WON!!!";
                    }
                }
                
                // checkWin();
                
            }
        })
    }
)
reset.addEventListener
(
    'click',()=>
    {
        let bt=document.querySelectorAll(".boxText");
        Array.from(bt).forEach(element =>
            {
                element.innerText='';
            })
            no_of_X=0;
        let e=document.querySelector(".info");
        e.innerText="Lets Play";
    }
)