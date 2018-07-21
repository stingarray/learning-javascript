# Learning JavaScript

## Downloading this project
1. Download and install git from [here](https://git-scm.com/download/win)
2. Once that is done, open the command line (WINDOWS KEY then type cmd), and run the following commands. Be sure to copy and paste because this script deletes folders.

```bash
cd c:\development
RMDIR /Q /S learning-javascript
git clone https://github.com/jreina/learning-javascript.git
cd learning-javascript
code .
```

## Installing
1. If your terminal is not open, press CTRL+`
2. Click on the terminal to focus on it
3. type `npm install`. NPM (node package manager) will download a bunch of JS modules.

## Running Tests
1. If your terminal is not open, press CTRL+`
2. Click on the terminal to focus on it
3. Type `npm test`
4. Read terminal output. If tests are failing, use the information to fix the code and re-run tests until they pass.

<details>
<summary>What a passing test looks like</summary>
<p>

```bash
PS C:\development\learning-javascript> npm test

> learning-javascript@1.0.0 test C:\development\learning-javascript
> mocha



  data types and variables
    √ Should match


  1 passing (6ms)
```
</p>
</details>

<details>
<summary>What a failing test looks like
In the below test run, we are using a variable, `companyGreeting`, which has not been defined.</summary>
<p>

```bash
PS C:\development\learning-javascript> npm test

> learning-javascript@1.0.0 test C:\development\learning-javascript
> mocha

C:\development\learning-javascript\test\1-data-types-and-variables.spec.js:17
    test(companyGreeting, company, employeeCount, employeeNames)
         ^

ReferenceError: companyGreeting is not defined
    at Suite.<anonymous> (C:\development\learning-javascript\test\1-data-types-and-variables.spec.js:17:10)
    at Object.create (C:\development\learning-javascript\node_modules\mocha\lib\interfaces\common.js:112:19)
    at context.describe.context.context (C:\development\learning-javascript\node_modules\mocha\lib\interfaces\bdd.js:40:27)
    at Object.<anonymous> (C:\development\learning-javascript\test\1-data-types-and-variables.spec.js:14:1)
    at Module._compile (module.js:643:30)
    at Object.Module._extensions..js (module.js:654:10)
    at Module.load (module.js:556:32)
    at tryModuleLoad (module.js:499:12)
    at Function.Module._load (module.js:491:3)
    at Module.require (module.js:587:17)
    at require (internal/module.js:11:18)
    at C:\development\learning-javascript\node_modules\mocha\lib\mocha.js:250:27
    at Array.forEach (<anonymous>)
    at Mocha.loadFiles (C:\development\learning-javascript\node_modules\mocha\lib\mocha.js:247:14)
    at Mocha.run (C:\development\learning-javascript\node_modules\mocha\lib\mocha.js:576:10)
    at Object.<anonymous> (C:\development\learning-javascript\node_modules\mocha\bin\_mocha:637:18)
    at Module._compile (module.js:643:30)
    at Object.Module._extensions..js (module.js:654:10)
    at Module.load (module.js:556:32)
    at tryModuleLoad (module.js:499:12)
    at Function.Module._load (module.js:491:3)
    at Function.Module.runMain (module.js:684:10)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:608:3
npm ERR! Test failed.  See above for more details.
```
</p>
</details>
