function showDiv(id){
    document.getElementById('donation_section').classList.add('hidden');
    document.getElementById('trans_history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function active_btn(id){
    document.getElementById('show_donation_sec').classList.remove('activeBtn');
    document.getElementById('show_transaction_history').classList.remove('activeBtn');
    document.getElementById(id).classList.add('activeBtn');
}

function inputNumber(id){
    let inputNumberValue = document.getElementById(id).value;
    let balance = parseFloat(inputNumberValue);
    return balance;
}

function textNumber(id){
    let textValue = document.getElementById(id).innerText;
    let textToNumber = parseFloat(textValue);
    return textToNumber;
}

function transHistory(ammount){
const currentDate = new Date().toString();
const div = document.createElement('div');
div.classList.add('flex', 'flex-col', 'bg-base-100', 'shadow-md', 'space-y-3', 'p-8', 'rounded-2xl', 'border', 'border-brdr_lght_clr');
div.innerHTML = `
<h3 class="text-dark1 font-bold text-xl">${ammount} Taka is Donated for famine-2024 at Feni, Bangladesh</h3>
        <p class="text-dark2 font-light text-base"> Date: ${currentDate}</p>`;

document.getElementById('transection_div').appendChild(div);


}