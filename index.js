function billTotal(){
    event.preventDefault();
    var subTotal = parseFloat(document.getElementById("subtotal").value);
    var tipPercent = parseFloat(document.getElementById("tip").value);
    var total = subTotal + (subTotal * 0.01 * tipPercent);
    var dollars = Math.floor(total);
    var cents = Math.round((total - dollars)*100);
    if(cents === 0)
        document.getElementById("total").innerHTML = `The total amount need to be paid: ${dollars} dollars`;
    else
    document.getElementById("total").innerHTML = `The total amount need to be paid: ${dollars} dollars and ${cents} cents.`;
}