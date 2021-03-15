/*
function test() {
    alert ("Success!")
}

test();*/


/*function estimate( ){



}
console.log ( 'Your estimate is' + estimate() )*/

/* Collects data from class = Client 
const client = {
    firstName: 'first_name',
    middleInitial: 'middle_initial',
    lastName: 'last_name',
    address: 'address',
    city: 'city',
    state: 'state',
    zip: 'zip',
    time: 'time',
    phone:'phone',
    email: 'email',
};
console.log(client);
*/

function getPages(){
    
    let p = document.getElementById('pages').value;
     p = parseInt(pages);
    
    
}

function getDocument(){
    let d= document.getElementById('document').value;
        if (document=="Personal")
         { d=10;}
          if (document=="Business")
         { d= 25;}
          if (document=="Real Estate")
        { d= 50;}
        
}

  function getEstimate(){
        const theButton= document.getElementById('theButton');
         let workTotal = getPages() + getDocument();

         theButton.addEventListener('onclick',() => {

         alert( workTotal.value)})

        }

 

    
        
        





        









