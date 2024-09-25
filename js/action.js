//showing donation section
document.getElementById('show_donation_sec')
    .addEventListener('click', function () {
        active_btn('show_donation_sec');
        showDiv('donation_section');
        
    });

//showing Transection History section
document.getElementById('show_transaction_history')
    .addEventListener('click', function () {
        active_btn('show_transaction_history');
        showDiv('trans_history');
    });