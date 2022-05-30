
/**Jquery to load page content when spinner is done */
$(window).on('load', function()
{
    $('#overlay').fadeOut(2000)
    $('content').fadeIn(1000)
})



/*get the button element using a regular event listener to add values to the local storage*/
const bookticket = document.getElementById('bookticket')

/*the array for storing the objects that is the drug details*/
let clients = []

/**objects being used */
let clientdetails = {}

/**Selecting button for tracking status of ticket */
let trackid= document.getElementById('trackid')
let viewstatus = document.getElementById('viewstatus')

/**run fucntion when view status button is clicked */
viewstatus.addEventListener('click', (e)=>
{
    let getdetails = JSON.parse(localStorage.getItem('Issued Tickets'))
       if(trackid.value == 9  )
         {
               alert('Ticket is still active')
         }
     else
         {
             alert('Ticket was not issued')
          }
})



/**when button is clicked verification and validation is done */
bookticket.addEventListener('click', (e) => {
    
    /**generates a string of 6 random numbers, converts them to strings, 
     * and display starting the 2nd index of javascript precision(which is 16) */
    refernceid = Math.random().toString(16).substring(2,8)
     
    

    /**getting values from all textfields for validation*/
    let firstname = document.getElementById('firstname').value
    let lastname = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let phonenumber = document.getElementById('phonenumber').value
    let passengers = document.getElementById('passengers').value
    let departuredate = document.getElementById('departuredate').value
    let returndate = document.getElementById('returndate').value
    let subwaystation = document.getElementById('subwaystation').value
    let destination = document.getElementById('destination').value
    let identification_type = document.getElementById('identification').value
    let identification_number = document.getElementById('idnumber').value
    let trainoperator = document.getElementById('trainoperator').value
    
    
    /**if condition throwing alert if feilds are empty */
    if (firstname == "" || lastname == ""|| identification_type == "" || identification_number == "" || departuredate == "" || email == "" || phonenumber == "" || passengers == "" || subwaystation == "" || destination == ""|| trainoperator == "") {
        alert('Please Fill All Fields')

    }

    /** if text fields are not empty collect the values and store them as objects*/
    else {


    /**create objects*/
       clientdetails = {

            personid: identification_number,
            type_of_id: identification_type,
            ticketid: refernceid,
            firstname: firstname,
            lastname: lastname,
            email: email,
            phonenumber: phonenumber,
            passengers: passengers,
            departuredate: departuredate,
            returndate: returndate,
            subwaystation: subwaystation,
            destination: destination,
            trainoperator: trainoperator
        }

        /**Now if the object are not empty push to local storage*/
        if (clientdetails != null) 
        {
            /**converts the local storage back into readeable data */
            let getdetails = JSON.parse(localStorage.getItem('Issued Tickets'))
            if (getdetails == null) 
            {
                getdetails = [];
                
            }

            
            if (getdetails.length >= 1) { 
                /**Validation for checking if the same ticketid is in the local storage */
                /**using for loop to be checking every index in the local storage to check if the ID exists */
                let found = false;
                 for(i=0; i< getdetails.length; i++)
                 {
                    if ( refernceid ===getdetails[i].ticketid) 
                    {
                        found = true;
                    }

                 }

                 if (found) {
                    alert('ID Has Already Been Used')
                 } 
                 else 
                 {
                     /**pushes the object to be saved in the array */
                    clients.push(clientdetails)

                    /**to clear the from */
                    document.forms[0].reset();
                    console.log('Ticket Generated Succesfully', {
                        clients
                    })

                    /**Saving to local storage */
                    localStorage.setItem('Train TIckets', JSON.stringify(clients));


                    
                          window.open("success.html")
                    

                    
                 }
                

                
            } 
            /**it's not used push to local storage*/
            else 
            {
                /**pushes the object to be saved in the array */
                clients.push(clientdetails)

                /**to clear the from */
                document.forms[0].reset();
                console.log('Ticket Genertated Succesfully', {
                    clients
                })

                /**Saving to local storage */
                localStorage.setItem('Train Tickets', JSON.stringify(clients));
                
                window.open("success.html")
                

            }

        }

    }
    

    e.preventDefault()

    
});



