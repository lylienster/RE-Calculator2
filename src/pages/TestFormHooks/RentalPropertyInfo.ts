export default interface RentalPropertyInfo {
    reportId: string;
    reportTitle: string;
    dateCreated: string;
  
    //propertyInfo
    address: string;
    city: string;
    state: string;
    zip: string;
    annualPropertyTaxes: number;
    mlsNumber: string;
    salesDescription: string;
  
    //features
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    propertyType: string;
    totalSqFootage: number;
    lotSize: number;
    yearBuilt: number;
  
    // purchaseInfo
    purchasePrice: number;
    afterRepairPrice: number;
    purchaseClosingCost: number;
    estimateRepairCost: number;
    preRentHoldingCost: number;
  
    //loanDetails
    downPaymentPercentage: number;
    loanInterestRate: number;
    loanPeriod: number;
  
    // rentalInfo:
    //income
    monthlyRent: number;
    otherMonthlyIncome: number;
  
    //fixedExpenses
    monthlyElectricyCost: number;
    monthlyWaterAndSewerCost: number;
    monthlyPmiCost: number;
    monthlyGarbageCost: number;
    monthlyHoaCost: number;
    monthlyInsurance: number;
    otherMonthlyExpenses: number;
  
    //variableExpenses
    vacancyRate: number;
    repairsAndMaintenanceRate: number;
    capitalExpendituresRate: number;
    propertyManagementRate: number;
    insuranceRate: number;
    taxRate: number;
  
    //futureAssumptions
    annualIncomeGrowth: number;
    annualPropertyValueGrowth: number;
    annualExpensesGrowth: number;
    salesExpenses: number;
  
    projectionYear: number;
  }

export const convertToRentalPropertyInfo = (data: any) => {
  var formData = {
    ...data,
    annualPropertyTaxes: Number(data.annualPropertyTaxes),
    purchasePrice: Number(data.purchasePrice),
    afterRepairPrice: Number(data.afterRepairPrice),
    purchaseClosingCost: Number(data.purchaseClosingCost),
    estimateRepairCost: Number(data.estimateRepairCost),
    preRentHoldingCost: Number(data.preRentHoldingCost) || 0,
    downPaymentPercentage: Number(data.downPaymentPercentage),
    loanInterestRate: Number(data.loanInterestRate),
    loanPeriod: Number(data.loanPeriod),
    monthlyRent: Number(data.monthlyRent),
    otherMonthlyIncome: Number(data.otherMonthlyIncome),
    monthlyElectricyCost: Number(data.monthlyElectricyCost),
    monthlyWaterAndSewerCost: Number(data.monthlyWaterAndSewerCost),
    monthlyPmiCost: Number(data.monthlyPmiCost),
    monthlyGarbageCost: Number(data.monthlyGarbageCost),
    monthlyHoaCost: Number(data.monthlyHoaCost),
    monthlyInsurance: Number(data.monthlyInsurance),
    otherMonthlyExpenses: Number(data.otherMonthlyExpenses),
    vacancyRate: Number(data.vacancyRate),
    repairsAndMaintenanceRate: Number(data.repairsAndMaintenanceRate),
    capitalExpendituresRate: Number(data.capitalExpendituresRate),
    propertyManagementRate: Number(data.propertyManagementRate),
    insuranceRate: Number(data.insuranceRate) || 0,
    taxRate: Number(data.taxRate) || 0,
    annualIncomeGrowth: Number(data.annualIncomeGrowth),
    annualPropertyValueGrowth: Number(data.annualPropertyValueGrowth),
    annualExpensesGrowth: Number(data.annualExpensesGrowth),
    salesExpenses: Number(data.salesExpenses),
  } as RentalPropertyInfo;

  return formData;
}
  