//IncomeInput
const incomeSalary = document.querySelector('#income-salary')
const incomeFreelance = document.querySelector('#income-freelance')
const incomeExtra1 = document.querySelector('#income-extra-1')
const incomeExtra2 = document.querySelector('#income-extra-2')

//coacts Input
const costsFlat = document.querySelector('#costs-flat')
const costsHouseServices = document.querySelector('#costs-house-services')
const costsTransport = document.querySelector('#costs-transport')
const costsCredit = document.querySelector('#costs-credit');

//total input
const totalMonthInput = document.querySelector('#total-month')
const totalDayInput = document.querySelector('#total-day')
const totalYearInput = document.querySelector('#total-year')

let totalMonth, totalDay, totalYear;

//money box
const moneyBoxRange = document.querySelector('#money-box-range')
const accumulationInput = document.querySelector('#accumulation')
const spendInput = document.querySelector('#spend')

let accumulation = 0;
let totalPrecents = 0;

const inputs = document.querySelectorAll('.input');

for (let input of inputs) {
  input.addEventListener('input', () => {
    countingAvailableMoney();
    calculationPrecents();
  })
}

const strToNum = str => str.value ? parseInt(str.value) : 0;

const countingAvailableMoney = () => {
  const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeExtra1) + strToNum(incomeExtra2);
  const totalCosts = strToNum(costsFlat) + strToNum(costsHouseServices) + strToNum(costsTransport) + strToNum(costsCredit);

  totalMonth = totalPerMonth - totalCosts;
  totalMonthInput.value = totalMonth;
}

moneyBoxRange.addEventListener('input', e => {
  const totalPrecentEl = document.querySelector('#total-precents');
  totalPrecents = e.target.value;
  totalPrecentEl.innerHTML = totalPrecents;
  calculationPrecents()
})

const calculationPrecents = () => {
  accumulation = ((totalMonth * totalPrecents) / 100).toFixed();
  accumulationInput.value = accumulation;

  spend.value = totalMonth - accumulation;

  totalDay = (spend.value / 30).toFixed();
  totalDayInput.value = totalDay;

  totalYear = accumulation * 12;
  totalYearInput.value = totalYear;


}