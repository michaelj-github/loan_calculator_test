window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      // setupIntialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }
  });
  let inputsValid = false;

    // Get the current values from the UI
  // Update the monthly payment
  function update() {
    const inputValues = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(inputValues));
      }

      function getCurrentUIValues() {
        const outputMonthlyPaymentMessage = document.getElementById("monthly-payment");
      
          inputsValid = false;
      if (document.getElementById("loan-amount").value == 0 || document.getElementById("loan-years").value == 0 || document.getElementById("loan-rate").value == 0) {
            outputMonthlyPaymentMessage.innerText = "";
      } else if (document.getElementById("loan-amount").value > 999999999 || document.getElementById("loan-amount").value < 0) {
            outputMonthlyPaymentMessage.innerText = "Enter a valid amount.";
      } else if (document.getElementById("loan-years").value > 99 || document.getElementById("loan-years").value < 0) {
            outputMonthlyPaymentMessage.innerText = "Enter a valid number of years.";
      } else if (document.getElementById("loan-rate").value > 99 || document.getElementById("loan-rate").value < 0) {
            outputMonthlyPaymentMessage.innerText = "Enter a valid interest rate.";
      } else {
            outputMonthlyPaymentMessage.innerText = "";
            inputsValid = true;
      }
          return {
            amount: +(document.getElementById("loan-amount").value),
            years: +(document.getElementById("loan-years").value),
            rate: +(document.getElementById("loan-rate").value),
          }
        }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
    const outputMonthlyPayment = document.getElementById("monthly-payment");
    if (inputsValid) {
      if (monthly > 0) {
  outputMonthlyPayment.innerText = "$" + monthly;
} else if (monthly === 0) {
  outputMonthlyPayment.innerText = "";
}
    }
  }

  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
    // return ((values.amount * ((values.rate / 100) / 12)) / (1 - (1 + ((values.rate / 100) / 12)) ** (-1 * (Math.floor(values.years * 12))))).toFixed(2);
    // make this easier to view and understand
    const principal_P = values.amount;
    const rate_i = (values.rate / 100) / 12;
    const periods_n = Math.floor(values.years * 12);
    return ((principal_P * rate_i) / (1 - (1 + rate_i) ** (-1 * periods_n))).toFixed(2);
  }


  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  // function setupIntialValues() {
  //   const values = {amount: 0, years: 0, rate: 0};
  //   update();
  // }
  
  
