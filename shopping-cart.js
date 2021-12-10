function quantityValue(id) {
    let valueInString = document.getElementById(id).value;
    let valueInInt = parseInt(valueInString);
    return valueInInt;
}
function clearQuantity(id, _id2) {
    if (document.getElementById(id).value == '0') return;
    document.getElementById(id).value = 0;

    updateAproductsTotalPrice(_id2, 0, 0);


}
function updateQuantityValue(id, newValue) {
    document.getElementById(id).value = newValue;
}

function addQuantity(_id, quantityId, _singleProductTotalPriceId, _singleProductPrice) {
    let previousQuantity = quantityValue(quantityId);
    let newQuantity = previousQuantity + 1;
    updateQuantityValue(quantityId, newQuantity);
    updateAproductsTotalPrice(_singleProductTotalPriceId, newQuantity, _singleProductPrice);


}
function minusQuantity(id, quantityId, _singleProductTotalPriceId, _singleProductPrice) {
    let previousQuantity = quantityValue(quantityId);
    let newQuantity = previousQuantity - 1;
    if (newQuantity >= 0) {
        updateQuantityValue(quantityId, newQuantity);
        updateAproductsTotalPrice(_singleProductTotalPriceId, newQuantity, _singleProductPrice);
    }
    else console.log("Not possible");
}
function updateAproductsTotalPrice(aProductTotalPriceId, quantityValue, singleQuantityPrice) {

    let singleProductTotal = quantityValue * singleQuantityPrice;

    document.getElementById(aProductTotalPriceId).innerText = singleProductTotal;
    grandTotal();
}
function grandTotal() {
    let productsTotal = document.getElementsByClassName('single-product-total');
    let subTotal = 0;
    for (const elements of productsTotal) {
        let oneProductTotal = elements.innerText;
        oneProductTotal = parseFloat(oneProductTotal);
        subTotal += oneProductTotal;

    }
    document.getElementById('sub-total').innerText = subTotal;
    let tax = subTotal / 10;
    document.getElementById('tax').innerText = tax;
    let fullTotal = subTotal + tax;
    document.getElementById('grand-total1').innerText = fullTotal;

}
function checkout() {
    let grandTotal = document.getElementById('grand-total1').innerText;
    grandTotal = parseFloat(grandTotal);
    alert('You have to pay ', (grandTotal));
}
