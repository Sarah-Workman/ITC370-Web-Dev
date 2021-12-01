var id = null;
var id1 = null;
var id2 = null;

function swapImage(image){
    document.getElementById('stopImage').src='./images/greenStopLight.jpg'
}

//stopImage.addEventListener("dblclick", function(){
   // Document.getElementById('stopImage').src='./images/greenStopLight.jpg'
//})



function myMove(){
 
var elem = document.getElementById("john_Snow");
var pos = 0;
clearInterval(id);
id = setInterval(animate, 10)
 function animate(){
   if (pos == 900){
        clearInterval(id);
   }else{ 
    pos++;
       elem.style.left = pos + 'px';
    }//else end
 }//animate end
}//myMove end
function myMove1(){
 
    var elem = document.getElementById("daenerys_Targaryen");
    var pos = 0;
    var x = 0;
   
    clearInterval(id1);
    id = setInterval(animate, 10)
     function animate(){
       if (pos == 900){
            clearInterval(id1);
       }else{ 
          pos = x++ + Math.floor(Math.random() * 11);
           elem.style.left = pos + 'px';
        }//else end
     }// animate end
    }//mymove1 end

    function myMove2(){
 
        var elem = document.getElementById("arya_Stark");
        var pos = 0;
        var xq
        clearInterval(id2);
        id = setInterval(animate, 10)
         function animate(){
           if (pos == 900){
                clearInterval(id2);
           }else{ 
              pos++;
               elem.style.left = pos + 'px';
            }//else end
         }//animate end
        }// myMove2 end