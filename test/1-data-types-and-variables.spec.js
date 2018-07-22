const { test1 } = require("../util/test-util");

// 1. Create a variable called "company" to hold the name of a company called "XYZ Corporation"
var company = "XYZ Corporation";
// 2. Create a variable called "employeeCount" to hold the value 3
var employeeCount = 3;
// 3. Create a variable called "employeeNames" to hold the names of the
// company's employees: "Susan", "Becky", "Carl"
var employeeNames = ["Susan", "Becky", "Carl"];
// 4. Create a variable called "companyGreeting" to contain the sentence:
// "XYZ corporation has 3 employees. Their names are Susan, Becky, and Carl"
var companyGreeting =
  company +
  " has " +
  employeeCount +
  " employees. Their names are " +
  employeeNames[0] +
  ", " +
  employeeNames[1] +
  ", and " +
  employeeNames[2];
describe("1. data types and variables", function() {
  it(
    "Should 100% pass",
    test1(companyGreeting, company, employeeCount, employeeNames)
  );
});
