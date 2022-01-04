$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search functinality scenarios",
  "description": "",
  "id": "search-functinality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1971437500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether the User is able to search for products",
  "description": "",
  "id": "search-functinality-scenarios;verify-whether-the-user-is-able-to-search-for-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Search"
    },
    {
      "line": 3,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I search for a product \"Samsung SyncMaster 941BW\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see the product in the search resultsil address",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStepDef.i_launch_the_application()"
});
formatter.result({
  "duration": 741946700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung SyncMaster 941BW",
      "offset": 24
    }
  ],
  "location": "Search.i_search_for_a_product_something(String)"
});
formatter.result({
  "duration": 413279000,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_see_the_product_in_the_search_resultsil_address()"
});
formatter.result({
  "duration": 54369400,
  "status": "passed"
});
formatter.after({
  "duration": 648900700,
  "status": "passed"
});
});