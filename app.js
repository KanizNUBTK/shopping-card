console.log('okey');
function updateCaseNumber(isIncreasing, inputId) {
    const caseInput = document.getElementById(inputId);
    let caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
}
// product1
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true, 'case-number');
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false, 'case-number');
})
//  product2
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber(true, 'phone-number');
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber(true, 'phone-number');
})
