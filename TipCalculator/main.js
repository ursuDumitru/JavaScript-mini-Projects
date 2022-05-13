
function tipCalc() {

    const inputSum = document.getElementById('bill').value;
    const serviceSelection = document.getElementById('service-selector').value;

    const bill = inputSum * serviceSelection;
    const total = parseFloat(inputSum) + parseFloat(bill);

    document.querySelector('.final-bill').innerHTML =  'Bill = ' + bill;
    document.querySelector('.final-total').innerHTML = 'Total = ' + total;
}

document.querySelector('.button').onclick = () => {
    tipCalc();
}

