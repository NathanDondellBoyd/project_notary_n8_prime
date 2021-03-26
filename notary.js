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

    //Collects Information for Client List
    let register= [];
 const addClient= (ev)=>{
     ev.preventDefault();
     let client= {
         first: document.getElementById("first").value,
         last: document.getElementById("last").value,
         middle: document.getElementById("middle").value,
         address: document.getElementById("address").value,
         city: document.getElementById("city").value,
         state: document.getElementById("state").value,
         zip: document.getElementById("zip").value,
         time: document.getElementById("time").value,
         phone: document.getElementById("phone").value,
         email: document.getElementById("email").value
    }

    register.push(client);
    document.forms[0].reset();
    localStorage.setItem("MyClientList", JSON.stringify(register) );
    
     }  
   
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
         amount=10;
          else if (d=="business")
         amount= 25;
        else if(d=="real_estate")
            amount=50;
        else
            amount= 0;
        

        return amount;
        

   
    }


function getCounty(){
    let zone;
    let c= document.getElementById("county").value;
        if (c=="jefferson")
        zone=5;
        else if (c=="bulliet")
        zone=15;
        else if (c=="shelby")
        zone=25;
        else
        zone= 0;

        

      return zone;
}


  function getEstimate(){
       let workTotal = getPages() + getDocument() + getCounty();
        alert(workTotal);
       

        
  }

  document.addEventListener('DOMContentLoaded', ()=> {
      document.getElementById("btn").addEventListener("click",addClient);
  })
