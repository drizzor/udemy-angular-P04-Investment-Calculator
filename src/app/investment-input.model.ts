export interface InvestmentInput {
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
}

export interface investmentCalculation {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
}