//Active Div
function showDiv(id){
    document.getElementById('donation_section').classList.add('hidden');
    document.getElementById('trans_history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

//Active Button
function active_btn(id){
    document.getElementById('show_donation_sec').classList.remove('activeBtn');
    document.getElementById('show_transaction_history').classList.remove('activeBtn');
    document.getElementById(id).classList.add('activeBtn');
}

//Input Ammount to NUmber
function inputNumber(id){
    let inputNumberValue = document.getElementById(id).value;
    let balance = parseFloat(inputNumberValue);
    return balance;
}

//Text Ammount to NUmber
function textNumber(id){
    let textValue = document.getElementById(id).innerText;
    let textToNumber = parseFloat(textValue);
    return textToNumber;
}

// Calculation of Money 
function takaDonate(addDonation, preDonate, id){
    let currentBalance = textNumber('current_balance');

    if(isNaN(addDonation)){
        alert('Write only Numbers!!');
        return;
    }
    
    else if(addDonation > 0){
        if(addDonation<=currentBalance){
            
        let totalDonate = preDonate + addDonation;
        document.getElementById(id).innerText = totalDonate;
        
        currentBalance = currentBalance - addDonation;
        document.getElementById('current_balance').innerText = currentBalance;
        transHistory(addDonation);
        }
        else{
            alert('OPS! You do not have that much money')
        }
    }
    else{
        alert('Wrong Ammount');
    }
}


//transection History function
function transHistory(ammount){
const currentDate = new Date().toString();
const div = document.createElement('div');
div.classList.add('flex', 'flex-col', 'bg-base-100', 'shadow-md', 'space-y-3', 'p-8', 'rounded-2xl', 'border', 'border-brdr_lght_clr');
div.innerHTML = `
<h3 class="text-dark1 font-bold text-xl">${ammount} Taka is Donated for famine-2024 at Feni, Bangladesh</h3>
        <p class="text-dark2 font-light text-base"> Date: ${currentDate}</p>`;

document.getElementById('transection_div').appendChild(div);

}