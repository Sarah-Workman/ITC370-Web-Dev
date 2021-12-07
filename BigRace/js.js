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




   




function myMove(){

//players

const player1 = document.getElementById("john_Snow");
const player2 = document.getElementById("daenerys_Targaryen");
const player3 = document.getElementById("arya_Stark");


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
        document.getElementById("john_Snow").style.marginLeft = "-30em"
        document.getElementById("john_Snow").style.marginTop = "3em"
        document.getElementById("p1").style.zIndex = "6"
        document.getElementById("p1").style.visibility = "visible"
        document.getElementById("p1").innerHTML = "John Snow Is The Winner!!"
        document.getElementById("john_Snow").addEventListener("dblclick", function(){
        restartRace();
        })
    }else if(d >= 900 ){
      clearInterval(id);
      document.getElementById("daenerys_Targaryen").style.height = "500px"
      document.getElementById("daenerys_Targaryen").style.width = "500px"
      document.getElementById("daenerys_Targaryen").style.marginLeft = "-30em"
      document.getElementById("daenerys_Targaryen").style.marginTop = "2.5em"
      document.getElementById("p2").style.zIndex = "6"
      document.getElementById("p2").style.visibility = "visible"
      document.getElementById("p2").innerHTML = "Daenerys Targaryen Is The Winner!!"
      document.getElementById("daenerys_Targaryen").addEventListener("dblclick", function(){
        restartRace();
        })
       
       
    }else if(a >= 900 ){
        clearInterval(id);
        document.getElementById("arya_Stark").style.height = "500px"
        document.getElementById("arya_Stark").style.width = "500px"
        document.getElementById("arya_Stark").style.marginLeft = "-30em"
        document.getElementById("arya_Stark").style.marginTop = "2.5em"
        document.getElementById("p3").style.zIndex = "6"
        document.getElementById("p3").style.visibility = "visible"
        document.getElementById("p3").innerHTML = "Arya Stark Is The Winner!!"
        document.getElementById("arya_Stark").addEventListener("dblclick", function(){
            restartRace();
            })
    }
    

    
       
    }//else end
  
 }//animate end
        
}//myMove end

function restartRace(){
    //make the night king dissapear again 
    document.getElementById("whiteWalker").style.visibility = "hidden"
     
    //hide paragraphs
    document.getElementById("p1").style.visibility = "hidden"
    document.getElementById("p2").style.visibility = "hidden"
    document.getElementById("p3").style.visibility = "hidden"
   
    //move back to start
    const player1 = document.getElementById("john_Snow");
    const player2 = document.getElementById("daenerys_Targaryen");
    const player3 = document.getElementById("arya_Stark");
   
    let j = 0;
    let d = 0;
    let a = 0;
    
    
    player1.style.left = j + 'px';
    player2.style.left = d + 'px';
    player3.style.left = a + 'px';

    //resize amd reset values
    document.getElementById("john_Snow").style.height = "100px"
        document.getElementById("john_Snow").style.width = "100px"
        document.getElementById("john_Snow").style.marginLeft = "2em"
        
        document.getElementById("john_Snow").style.zIndex = "3"
        

        document.getElementById("daenerys_Targaryen").style.height = "100px"
        document.getElementById("daenerys_Targaryen").style.width = "100px"
        document.getElementById("daenerys_Targaryen").style.marginLeft = "2em"
        document.getElementById("daenerys_Targaryen").style.marginTop = "10em;"
        document.getElementById("daenerys_Targaryen").style.zIndex = "3"
      

        document.getElementById("arya_Stark").style.height = "100px"
        document.getElementById("arya_Stark").style.width = "100px"
        document.getElementById("arya_Stark").style.marginLeft = "2em"
        document.getElementById("arya_Stark").style.marginTop = "20em"
        document.getElementById("arya_Stark").style.zIndex = "3"
        document.getElementById("p1").style.zIndex = "6"
    //change the light back to red 
    document.getElementById('stopImage').src='./images/redStopLight.jfif'
}



 function randomNumber(min, max) {
     return Math.floor(Math.random() * (max - min)) + min;
 }
 //   