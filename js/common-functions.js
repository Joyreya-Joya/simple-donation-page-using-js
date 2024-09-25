function showDiv(id){
    document.getElementById('donation_section').classList.add('hidden');
    document.getElementById('trans_history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
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


// function addDonation{

// }