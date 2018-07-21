function test1(companyGreeting, company, employeeCount, employeeNames) {
  return function() {
    const expected =
      'XYZ Corporation has 3 employees. Their names are Susan, Becky, and Carl';
    expect(companyGreeting).to.eq(expected);
    expect(company).to.equal('XYZ Corporation');
    expect(employeeCount).to.equal(3);
    expect(employeeNames).to.eql(['Susan', 'Becky', 'Carl']);
  };
}

module.exports = { test1 };
