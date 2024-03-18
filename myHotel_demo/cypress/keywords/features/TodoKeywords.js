/// <reference types="cypress" />

import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("open todo page", () => {
  cy.visit("https://panaryco.wixsite.com/myhotel");
});
