/**Getting detials from local storage to display user's ticket */

let getdetails = JSON.parse(localStorage.getItem('Train Tickets'))

/**gets time based on the current date */
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


let click = document.getElementById('generateticket')

lastname = getdetails[0].lastname

/**when button is clicked to generate ticket a spinner is to load and generate ticket */
click.addEventListener('click', (e) =>
{ 
    document.getElementById('ticketid').innerHTML = getdetails[0].ticketid
    document.getElementById('name').innerHTML = getdetails[0].firstname +" "+ getdetails[0].lastname
    document.getElementById('boardingtime').innerHTML = time
    document.getElementById('class').innerHTML = "Economy"
    document.getElementById('boardinggate').innerHTML = "Gate B"
    document.getElementById('boardingdate').innerHTML= getdetails[0].departuredate
    document.getElementById('departure').innerHTML= getdetails[0].subwaystation
    document.getElementById('destination').innerHTML = getdetails[0].destination


})
