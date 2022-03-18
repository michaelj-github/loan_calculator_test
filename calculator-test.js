
it('should calculate the monthly rate correctly', function () {
    // ...
    const values = {amount: 100000, years: 30, rate: 5};
    expect(calculateMonthlyPayment(values)).toEqual('536.82');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    // ..
    const values = {amount: 100000, years: 30, rate: 5};
    expect(calculateMonthlyPayment(values).charAt(calculateMonthlyPayment(values).length-3)).toEqual('.');
  });
  
  it('should not return an answer if any input is 0', function () {
    // ...
    const values = {amount: 0, years: 0, rate: 0};
    expect(outputMonthlyPayment.innerText).toEqual("");
  });
  // it('should not return an answer if input is alpha', function () {
  //   // ...
  //   const values = {amount: "a", years: "b", rate: "c"};
  //   expect(outputMonthlyPayment.innerText).toEqual("");
  });
  // it('should not return an answer if input is out of range', function () {
  //   // ...
  //   const values = {amount: 9999999999, years: 999, rate: 999};
  //   expect(outputMonthlyPayment.innerText).toEqual("");
  });

  /// etc
  