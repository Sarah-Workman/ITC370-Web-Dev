//Sarah Workman 

var id = null;




function swapImage(image){
    document.getElementById('stopImage').src='./images/greenStopLight.jpg';
    lightChange;
}

function lightChange(image){
    if (document.getElementById('stopImage').src='./images/greenStopLight.jpg'){
        myMove;
    }else (document.getElementById('stopImage').src='./images/redStopLight.jpg');{
        restartRace;
    }
}



//set up if elseif maybe for the winner screen?




   


function restartRace(){

}

function myMove(){
 
//players

const player1 = document.getElementById("john_Snow");
const player2 = document.getElementById("daenerys_Targaryen");
const player3 = document.getElementById("arya_Stark");

//const players =[player1,player2, player3]
let j = 0;
let d = 0;
let a = 0;

clearInterval(id);
id = setInterval(animate, 10)
 function animate(){
   if (j,d,a == 900){
        clearInterval(id);
   }else{ 
         j += randomNumber(1,5);
         d += randomNumber(1,5);
         a += randomNumber(1,5);

       player1.style.left = j + 'px';
       player2.style.left = d + 'px';
       player3.style.left = a + 'px';

       document.getElementById("p1").innerHTML = j;
       document.getElementById("p2").innerHTML = d;
       document.getElementById("p3").innerHTML = a;
    }//else end
 }//animate end
  winner();
}//myMove end




 function randomNumber(min, max) {
     return Math.floor(Math.random() * (max - min)) + min;
 }