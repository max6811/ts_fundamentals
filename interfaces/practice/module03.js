function calculateInterestOnlyLoanPayment(loanTerms) {
    var interest = loanTerms.interestRate / 1200;
    var payment;
    payment = loanTerms.principal * interest;
    return "The interest only loan payment is  " + payment.toFixed(2);
}
var interestOnlyPayment = calculateInterestOnlyLoanPayment({
    principal: 30000,
    interestRate: 5,
});
console.log(interestOnlyPayment);
function calculateConventionaltOnlyLoanPayment(loanTerms) {
    var interest = loanTerms.interestRate / 1200;
    var payment;
    payment =
        (loanTerms.principal * interest) /
            (1 - Math.pow(1 / (1 + interest), loanTerms.months));
    return "The COnventional loan payment is " + payment.toFixed(2);
}
var conventionalPayment = calculateConventionaltOnlyLoanPayment({
    principal: 30000,
    interestRate: 5,
    months: 180
});
console.log(conventionalPayment);
