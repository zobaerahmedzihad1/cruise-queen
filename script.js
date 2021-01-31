document.getElementById( 'first-class-ticket-increase').addEventListener('click', function(){ticketManagement('first', true)})
document.getElementById('first-class-ticket-decrease').addEventListener('click', function(){ticketManagement('first', false)})
document.getElementById( 'economy-class-ticket-increase').addEventListener('click', function(){ticketManagement('economy', true)})
document.getElementById('economy-class-ticket-decrease').addEventListener('click', function(){ticketManagement('economy',false)})


function ticketManagement(ticketClass, isIncrease) {
    const ticketCount = document.getElementById(ticketClass + '-class-ticket-count');
    const ticketCountNumber = parseInt(ticketCount.value);
    let newTicketCountNumber = ticketCountNumber;
    if (isIncrease == false && ticketCountNumber > 0) {
        newTicketCountNumber = ticketCountNumber - 1;
    }
    if (isIncrease == true) {
        newTicketCountNumber = ticketCountNumber + 1;
    }
    ticketCount.value = newTicketCountNumber;
    
    let subTicketTotal = 0;
    if (ticketClass == 'first') {
        subTicketTotal = newTicketCountNumber * 150;
    }
    if (ticketClass == 'economy') {
        subTicketTotal = newTicketCountNumber * 100;
    }
    document.getElementById('sub-total-ticket-price').innerText = subTicketTotal;
    calculateTotalTicketPrice();
}

//calculate total ticket price
function calculateTotalTicketPrice() {
    const firstClassTicketCount = InputValue('first');
    const economyClassTicketCount= InputValue('economy')

    const subtotalTicketPrice = firstClassTicketCount * 150 + economyClassTicketCount * 100 ;
    document.getElementById('sub-total-ticket-price').innerText = subtotalTicketPrice;

    const tax = Math.round(subtotalTicketPrice*.1)
    document.getElementById('tax-amount').innerText = tax;
    const totalTicketPrice = subtotalTicketPrice + tax;
    document.getElementById('total-ticket-price').innerText = totalTicketPrice;
}

function InputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-class-ticket-count')
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

// book now button activities

document.getElementById('ticket-booked').addEventListener('click', function(){
    
    if(document.getElementById('total-ticket-price').innerText == 0 || document.getElementById('total-ticket-price').innerText < 0){
       alert('Please selected at-least 1 (One) Ticket')
    }
    else if(document.getElementById('total-ticket-price').innerText != 0){
    const bookingForm = document.getElementById('ticket-confirm-form');
    bookingForm.style.display = 'none'
    const successfulForm = document.getElementById('congratulations-form');
    successfulForm.style.display = 'block'
    const bookingContent = document.getElementById('content');
    bookingContent.style.marginTop = '80px';
    }
  
})
