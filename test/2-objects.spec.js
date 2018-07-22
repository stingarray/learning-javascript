const { expect } = require('chai');

// 1. Create an object called "company" with a property called "name" to hold the value "XYZ Corporation"
var company = { name: 'XYZ Corporation' };
// 2. Add a property called "employeeCount" to hold the value 3
company.employeeCount = 3;
// 3. Add a property called "employeeNames" to hold the names of the
// company's employees: "Susan", "Becky", "Carl"
company.employeeNames = ['Susan', 'Becky', 'Carl'];
// 4. Add a property called "greeting" to contain the sentence:
// "XYZ corporation has 3 employees. Their names are Susan, Becky, and Carl"
company.greeting =
  company.name +
  ' has ' +
  company.employeeCount +
  ' employees. Their names are ' +
  company.employeeNames[0] +
  ', ' +
  company.employeeNames[1] +
  ', and ' +
  company.employeeNames[2];

describe('2. objects', function() {

  it('Should 100% pass', function() {
    const { name, employeeCount, employeeNames, greeting } = company;
    const expected =
      'XYZ Corporation has 3 employees. Their names are Susan, Becky, and Carl';

    expect(company).to.have.all.keys([
      'name',
      'employeeCount',
      'employeeNames',
      'greeting'
    ]);

    expect(greeting).to.equal(expected);
    expect(name).to.equal('XYZ Corporation');
    expect(employeeCount).to.equal(3);
    expect(employeeNames).to.eql(['Susan', 'Becky', 'Carl']);
  });
});
