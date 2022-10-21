let buttonHtml = document.getElementById('btnInvio');
let inputName = document.getElementById('inputName');
let inputKm = document.getElementById('inputKm');
let inputAge = document.getElementById('inputAge');
let priceKm = 0.21;

buttonHtml.addEventListener('click', function(){
    const valueName = inputName.value;
    const valueKm = inputKm.value;
    const valueAge = inputAge.value;
    console.log(valueName, valueKm, valueAge);

    if(valueName == '' || valueKm == '' || valueAge == '' ){
        console.log('compila tutto');
    }else {
        let ticketPrice = valueKm * priceKm;
        let priceMaggiorenne = ticketPrice;
        let priceMinorenne = ticketPrice * 0.80;
        let priceOver65 = ticketPrice * 0.60;
        if( valueAge == 'maggiorenne'){
            document.getElementById('prezzo').innerHTML = `<p>Il prezzo del biglietto e : ${priceMaggiorenne.toFixed(2)}</p>`
        }else if(valueAge == 'minorenne'){
            document.getElementById('prezzo').innerHTML = `<P>Il prezzo del biglietto e : ${priceMinorenne.toFixed(2)}</P>`
        }else if(valueAge == 'over65'){
            document.getElementById('prezzo').innerHTML = `<P>Il prezzo del biglietto e : ${priceOver65.toFixed(2)}</P>`
        }
    }
})