Feature: Search and Place the order for Vegetable

@SeleniumTest
Scenario: Search for Item and Validate results
Given User is on Green Cart Landing page
When User search for Cucumber Vegetable
Then "Cucumber" result are displayed 
And Close the Browser

@SeleniumTest
Scenario Outline: Search for Item and move to checkout page
Given User is on Green Cart Landing page
When User search for <name> Vegetable
And Added items to cart
And user proceeded to checkout page for purchase
Then Verify selcted <name> items are displayed in Checkout page
And Close the Browser

Examples:
|name   |
|Brinjal|
|Beetroot|
