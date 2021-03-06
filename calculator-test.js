
it('should calculate the monthly rate correctly', function () {
    const values = {amount: 100000, years: 30, rate: 5};
    expect(calculateMonthlyPayment(values)).toEqual('536.82');
  });


  it("should return a result with 2 decimal places", function() {
    const values = {amount: 100000, years: 30, rate: 5};
    expect(calculateMonthlyPayment(values).charAt(calculateMonthlyPayment(values).length-3)).toEqual('.');
  });

  /// etc
