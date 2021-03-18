//Navagation
const navSlider= ()=>{
    const burger= document.querySelector(".burger");
    const nav= document.querySelector(".nav-links");
    const navLinks= document.querySelectorAll(".nav-links li");

//Toggle xmovement
    burger.addEventListener("click", ()=> {
        nav.classList.toggle("nav-active");
      
      
 //Animation
    navLinks.forEach((link,index) =>{
    
        if (link.style.animation){
            link.style.animation= "";
         }

         else {
            link.style.animation= `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
            
         }
         

});
    burger.classList.toggle("xmovement");
 
    });

}
    navSlider();


    


   
// Estimate Calculation and Display

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

function getCounty(){
    let zone;
    let c= document.getElementById("county").value;
        if (c=="jefferson")
        {zone=5;}
        if (c=="bulliet")
        {zone=15;}
        else (c=="shelby")
        {zone=25;}

        return zone;
}


  function getEstimate(){
       let workTotal = getPages() + getDocument();
        alert(workTotal);

        }

 



        





        









