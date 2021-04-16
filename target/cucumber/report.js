$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/feature/Seach.feature");
formatter.feature({
  "line": 1,
  "name": "Search and Place the order for Vegetable",
  "description": "",
  "id": "search-and-place-the-order-for-vegetable",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Search for Item and Validate results",
  "description": "",
  "id": "search-and-place-the-order-for-vegetable;search-for-item-and-validate-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Green Cart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User search for Cucumber Vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "\"Cucumber\" result are displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_is_on_Green_Cart_Landing_page()"
});
formatter.result({
  "duration": 9969037440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_search_for_Vegetable(String)"
});
formatter.result({
  "duration": 3312066547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 1
    }
  ],
  "location": "StepDefination.result_are_displayed(String)"
});
formatter.result({
  "duration": 53053662,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.close_the_browser()"
});
formatter.result({
  "duration": 98561089,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Search for Item and move to checkout page",
  "description": "",
  "id": "search-and-place-the-order-for-vegetable;search-for-item-and-move-to-checkout-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Green Cart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User search for \u003cname\u003e Vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify selcted \u003cname\u003e items are displayed in Checkout page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "search-and-place-the-order-for-vegetable;search-for-item-and-move-to-checkout-page;",
  "rows": [
    {
      "cells": [
        "name"
      ],
      "line": 20,
      "id": "search-and-place-the-order-for-vegetable;search-for-item-and-move-to-checkout-page;;1"
    },
    {
      "cells": [
        "Brinjal"
      ],
      "line": 21,
      "id": "search-and-place-the-order-for-vegetable;search-for-item-and-move-to-checkout-page;;2"
    },
    {
      "cells": [
        "Beetroot"
      ],
      "line": 22,
      "id": "search-and-place-the-order-for-vegetable;search-for-item-and-move-to-checkout-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Search for Item and move to checkout page",
  "description": "",
  "id": "search-and-place-the-order-for-vegetable;search-for-item-and-move-to-checkout-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Green Cart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User search for Brinjal Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify selcted Brinjal items are displayed in Checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_is_on_Green_Cart_Landing_page()"
});
formatter.result({
  "duration": 5003198047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_search_for_Vegetable(String)"
});
formatter.result({
  "duration": 3368421498,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 248494406,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 234060023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 15
    }
  ],
  "location": "StepDefinationOrder.verify_selcted_something_items_are_displayed_in_checkout_page(String)"
});
formatter.result({
  "duration": 43759581,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.close_the_browser()"
});
formatter.result({
  "duration": 173896637,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search for Item and move to checkout page",
  "description": "",
  "id": "search-and-place-the-order-for-vegetable;search-for-item-and-move-to-checkout-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Green Cart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User search for Beetroot Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify selcted Beetroot items are displayed in Checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.user_is_on_Green_Cart_Landing_page()"
});
formatter.result({
  "duration": 4666781781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 16
    }
  ],
  "location": "StepDefination.user_search_for_Vegetable(String)"
});
formatter.result({
  "duration": 3398546056,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.added_items_to_cart()"
});
formatter.result({
  "duration": 206625157,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 188759077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 15
    }
  ],
  "location": "StepDefinationOrder.verify_selcted_something_items_are_displayed_in_checkout_page(String)"
});
formatter.result({
  "duration": 48956031,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.close_the_browser()"
});
formatter.result({
  "duration": 199779271,
  "status": "passed"
});
});