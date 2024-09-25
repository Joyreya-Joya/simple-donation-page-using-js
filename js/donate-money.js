document.getElementById('donate_nkhli_btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        let addDonation = inputNumber('nkhaliDonation_input');
        let preDonate = textNumber('noakhali_total_donation');
        let currentBalance = textNumber('current_balance');

        if(isNaN(addDonation)){
            alert('Write only Numbers!!');
            return;
        }
        
        else if(addDonation > 0){
            if(addDonation<=currentBalance){
                
            let totalDonate = preDonate + addDonation;
            document.getElementById('noakhali_total_donation').innerText = totalDonate;


            //transection history
            const currentDate = new Date().toString();
            const div = document.createElement('div');
            div.classList.add('flex', 'flex-col', 'bg-base-100', 'shadow-md', 'space-y-3', 'p-8', 'rounded-2xl', 'border', 'border-brdr_lght_clr');
            div.innerHTML = `
            <h3 class="text-dark1 font-bold text-xl">${addDonation} Taka is Donated for famine-2024 at Feni, Bangladesh</h3>
                    <p class="text-dark2 font-light text-base"> Date: ${currentDate}</p>`;

            document.getElementById('transection_div').appendChild(div);

            }
            else{
                alert('OPS! You do not have that much money')
            }
        }
        else{
            alert('Wrong Ammount');
        }
    });