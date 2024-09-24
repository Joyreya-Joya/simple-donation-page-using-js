function showDiv(id){
    document.getElementById('donation_section').classList.add('hidden');
    document.getElementById('trans_history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}