function inflationCalculator() {
    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');

    //Parse float sluzi za pretvaranje stringa u decimalni broj
    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);

    let years = document.querySelector('#years').value;
    years = parseFloat(years);

    let value = money + (money * (inflationRate / 100));

    for(let i = 1; i< years; i++) {
        value += value * (inflationRate / 100);
    }

    value = value.toFixed(2);
    let newElement = document.createElement('div');
    newElement.className ='new-value';
    newElement.innerText = `Contemporary ${money}€ is worth the same as ${value}€ in ${years} years.`;

    document.querySelector('.container').appendChild(newElement);
}