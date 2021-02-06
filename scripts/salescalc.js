addEventListener("load", main)
// This fucntion will run the calculateSales function once a feature is clicked
function main() {
    btCalcSales.addEventListener("click", calculateSales)
}
//This function calculates the sales of a clicked upon object 
function calculateSales() {
    Price=parseFloat(txPrice.value)
    TaxRate=parseFloat(txTaxRate.value)/100
    Tax=Price*TaxRate
    Total=Price+Tax
    spTotal.innerHTML=Total.toFixed(2)
}

