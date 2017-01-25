# Protractor-Test
Running End-to-End Tests:

The angular-seed app comes with end-to-end tests, again written in Jasmine. These tests are run with the Protractor End-to-End test runner. 
It uses native events and has special features for Angular applications.

The configuration is found at e2e-tests/protractor.conf.js.
The end-to-end tests are found in e2e-tests/scenarios.js.

Protractor simulates interaction with our web app and verifies that the application responds correctly

open a terminal window and run the webdriver: webdriver-manager start
Once you have ensured that the development web server hosting our application is up and running

you can run the end-to-end tests:
open a separate terminal window and run the test case:  protractor protractor.conf.js
 
This script will execute the end-to-end tests against the application being hosted on the development server.

'browserName': 'chrome' 
--------------------------
Running webdriver : webdriver-manager start
Run the end-to-end test :  protractor protractor.conf.js


'browserName': 'phantomjs'
-----------------------------
Running webdriver : webdriver-manager start and phantomjs --webdriver=9515, any webdriver you can select it will work on phantomjs.
Run the end-to-end test :  protractor protractor.conf.js
