interface Loan {
    principal: number;
    interestRate: number;
}

interface ConventionalLoan extends Loan {
    months: number;
}

function calculateInterestOnlyLoanPayment(loanTerms: Loan) {
    let interest: number = loanTerms.interestRate / 1200;
    let payment: number;
    payment = loanTerms.principal * interest;
    return "The interest only loan payment is  " + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({
    principal: 30000,
    interestRate: 5,
});
console.log(interestOnlyPayment);

function calculateConventionaltOnlyLoanPayment(
    loanTerms: ConventionalLoan
): string {
    let interest: number = loanTerms.interestRate / 1200;
    let payment: number;
    payment =
        (loanTerms.principal * interest) /
        (1 - Math.pow(1 / (1 + interest), loanTerms.months));
    return "The COnventional loan payment is " + payment.toFixed(2);
}

let conventionalPayment = calculateConventionaltOnlyLoanPayment({
    principal: 30000,
    interestRate: 5,
    months: 180
});
console.log(conventionalPayment);
