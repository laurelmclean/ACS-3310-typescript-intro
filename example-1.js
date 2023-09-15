// Run the code here, no problems?

function getPriceWithTax(amount, rate) {
	const price = amount.toFixed(2)
	const tax = price * rate
	return (price + tax)
}

const answer = getPriceWithTax(23.99, 9.5)
console.log(answer)

// Run the code here and look at the results
// Does it look right? 
// 23.99227.90499999999997 - no it does not look right
// What went wrong?
// price was converted to a string with .toFixed(2)


