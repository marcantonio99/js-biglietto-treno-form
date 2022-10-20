
let inputKm = document.getElementById('inputKm');
let inputAge = document.getElementById('inputAge');

function ticketPrice() { 

    let km = parseInt(inputKm.value);
    let age = parseInt(inputAge.value);
    console.log(km, age);
    let priceTicket = km * 0.21;

    if ( age >= 18 && age < 65 ){
        document.getElementById('boxPrice').innerHTML = `Il prezzo del biglietto è : ${priceTicket.toFixed(2)}`;
    } else if ( age < 18 ){
        document.getElementById('boxPrice').innerHTML = `Il prezzo del biglietto è : ${(priceTicket * 0.80).toFixed(2)}`;
    } else {
        document.getElementById('boxPrice').innerHTML = `Il prezzo del biglietto è : ${(priceTicket * 0.60).toFixed(2)}`;
    }

}
