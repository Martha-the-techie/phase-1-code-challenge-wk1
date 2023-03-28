# phase-1-code-challenge-wk1

## Prerequisite
You will need to set up a local environment for tests to run. On your terminal, run "npm install -g npm" and then run "npm test" to see the test failing and those passing as you progress with the lab.

## Installation

 $ npm test
  this lab
    ✓ has a folder named my-repository
    ✓ has a valid git repository initialized for the my-repository folder
    ✓ has a README.md file in the my-repository folder

  the local repository
    ✓ has README.md as a tracked file
    ✓ has at least one commit
    1) has been pushed up to the remote repository

Example:

  5 passing (18ms)
  1 failing

  1) the local repository
       has been pushed up to the remote repository:
     AssertionError: no record of pushing to a remote was found. Follow the instructions on GitHub to connect and push to a new remote repository: value: expected './my-repository/.git/logs/refs/remotes' to exist.



## Challenges

Challenge 1: Student Grade Generator (Toy Problem)
Write code that prompts the user to input student marks. The input shuld be between 0 and 100. Then output the correct grade:
A > 79, B - 60 to 79, C - 59 to 49, D - 40 - 49, E - less 40.

Challenge 2: Speed Detector (Toy Problem)
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”

Challenge 3: Net Salary Calculator (Toy Problem)
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htmLinks to an external site.  

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.



## Conclusion

The code challenge will be marked and rated by using the following criteris:
1. Github Repository: The Repo has to be present and your code has been pushed to your Github Repository.
2. README file: You should have a well-written README file containing a title, description, project, set-up, author and license.
3. Code comments: Your code should have all the implemented solutions well commented.
4. Working Solution: Your solutions for each challenge should be applicable and provide correct results.


## Author
Martha Maina 
Github account: Martha-the-techie

## License

## Resources
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
https://www.aren.co.ke/payroll/taxrates.htm
https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye