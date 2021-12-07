//Sarah Workman 
//global scope 
var id = null;
let green = './images/greenStopLight.jpg';
let red = './images/redStopLight.jpg';



document.getElementById('stopImage').addEventListener("dblclick", function(){

   

    
    document.getElementById('stopImage').src='./images/greenStopLight.jpg';
    
     var x = document.getElementById('stopImage')
     q = x.getAttribute("src");

    if (q == green){
        myMove();  
  
   
    }else if(q == red){
    restartRace();
}
})





//set up if elseif maybe for the winner screen?




   


function restartRace(){
    document.getElementById("daenerys_TargaryenVid").style.visibility = "hidden"
    document.getElementById("daenerys_TargaryenVid").style.zIndex = "2"

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
   if (j,d,a < 900){
    j += randomNumber(1,5);
    d += randomNumber(1,5);
    a += randomNumber(1,5);

  player1.style.left = j + 'px';
  player2.style.left = d + 'px';
  player3.style.left = a + 'px';

 
       
  if(j,d,a === 200){
    document.getElementById("whiteWalker").style.visibility = "visible"
    if(j,d,a >= 900){
        document.getElementById("whiteWalker").style.visibility = "hidden"
       
    }
}  
      
   }else{ 
    clearInterval(id); 
    if(j >= 900 ){
        //test win message
        clearInterval(id);
        document.getElementById("john_Snow").style.height = "500px"
        document.getElementById("john_Snow").style.width = "500px"
        document.getElementById("john_Snow").style.marginLeft = "10%"
        document.getElementById("john_Snow").style.marginTop = "10%"
        document.getElementById("p1").style.zIndex = "6"
        document.getElementById("p1").innerHTML = "John Snow Is The Winner!!"
        restartRace();
    }else if(d >= 900 ){
      clearInterval(id);
        document.getElementById("daenerys_TargaryenVid").style.visibility = " visible"
        document.getElementById("daenerys_TargaryenVid").style.zIndex = "5"
        document.getElementById("daenerys_TargarenVid").style.minHeight = "300%"
        document.getElementById("daenerys_TargarenVid").style.minWeight = "120%"
        document.getElementById("daenerys_TargarenVid").autoplay;
        restartRace();
       
    }else if(a >= 900 ){
        clearInterval(id);
        document.getElementById("daenerys_TargaryenVid").style.visibility = " visible"
        document.getElementById("daenerys_TargaryenVid").style.zIndex = "5"
        document.getElementById("daenerys_TargarenVid").style.minHeight = "300%"
        document.getElementById("daenerys_TargarenVid").style.minWeight = "120%"
        document.getElementById("daenerys_TargarenVid").autoplay;
        restartRace();
    }
    

    
       
    }//else end
  
 }//animate end
        
}//myMove end




 function randomNumber(min, max) {
     return Math.floor(Math.random() * (max - min)) + min;
 }
 //   