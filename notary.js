
function getPages(){
    
    let p = document.getElementById("pages").value;
     p = parseInt(p);

     return p;
    
    
}

function getDocument(){
    let amount;
    let d= document.getElementById("document").value;
        if (d=="personal")
         { amount=10;}
          if (d=="business")
         { amount= 25;}
        else (d=="real_estate")
         { amount= 50;}

        return amount;
        
}

  function getEstimate(){
      /*  const theButton= document.getElementById('theButton');*/
         let workTotal = getPages() + getDocument();

         

         alert(workTotal);

        }

 

    

        





        









