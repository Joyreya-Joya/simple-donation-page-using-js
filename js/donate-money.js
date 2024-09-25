
//Noakhali Donation Js Start
document.getElementById('donate_nkhli_btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        let addDonation = inputNumber('nkhaliDonation_input');
        let preDonate = textNumber('noakhali_total_donation');
        takaDonate(addDonation, preDonate, 'noakhali_total_donation');
    });

//FENI Donation Js Start
    document.getElementById('donate_feni_btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        let addDonation = inputNumber('feniDonation_input');
        let preDonate = textNumber('feni_total_donation');
        takaDonate(addDonation, preDonate, 'feni_total_donation');
    });

//Quota Donation Js Start
document.getElementById('donate_quota_btn')
.addEventListener('click', function (event) {
    event.preventDefault();
    let addDonation = inputNumber('quotaDonation_input');
    let preDonate = textNumber('quota_total_donation');
    takaDonate(addDonation, preDonate, 'quota_total_donation');
});

    