//Sarah Workman 

var id = null;



function lightChange(image){
    if (document.getElementById('stopImage').src='./images/greenStopLight.jpg'){
        startRace;
    }else (dcoument.getElementById('stopImage').src='./images/redStopLight.jpg');{
        restartRace;
    }
}
function swapImage(image){
    document.getElementById('stopImage').src='./images/greenStopLight.jpg'
}



//set up if elseif maybe for the winner screen?

//players
const player1 = document.getElementsById("john_Snow");
const player2 = document.getElementById("daenerys_Targaryen");
const player3 = document.getElementById("arya_Stark");

function startRace(){

}

function restartRace(){

}

function myMove(){
 

let pos = 0;

clearInterval(id);
id = setInterval(animate, 10)
 function animate(){
   if (pos >= 900){
        clearInterval(id);
   }else{ 
        
     
             
       pos += randomNumber(1,5);
        document.getElementById("p1").innerHTML = pos;
       elem.style.left = pos + 'px';
    }//else end
 }//animate end
}//myMove end





        function randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }