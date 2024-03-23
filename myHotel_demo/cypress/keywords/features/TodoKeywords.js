/// <reference types="cypress" />

import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("open my hotel website", () => {
  cy.visit("https://panaryco.wixsite.com/myhotel");
});

When("input firstname", (index) => {
  cy.get("#comp-lt33fcq41").type("Jameson").click();
});

When("input maximum length for firstname", (index) => {
  cy.get("#input_comp-lt33fcq41").type("aaabbbccddee").click();
});

And("input lastname", (index) => {
  cy.get("#input_comp-lt33fcs1").type("Montana").click();
});

And("input phone number", (index) => {
  cy.get("#input_comp-lt33fcsi1").type("0891111111").click();
});

And("input email address", (index) => {
  cy.get("#input_comp-lt33fcsf1").type("test@test.com").click();
});

And("select number of adults", (index) => {
  cy.get('#collection_comp-lt33fcsl1').contains('2').click({force: true});
  cy.get('[class="CEK3nk"]').contains('2').click({force: true});
});

And("pet answer", (index) => {
  cy.get('[class="W30iAf wixui-radio-button-group__option"]').contains('No').click({force: true});
});

And("add note", (index) => {
  cy.get('#input_comp-lt33fct3').type("I will arrive at about 10 p.m.");
});

And("accept term and conditions", (index) => {
  cy.get('[type="checkbox"]').check();
});

And("click submit form", (index) => {
  cy.get('#comp-lt33fctj').click();
});

Then("verify form submit sccess", (index) => {
  cy.get("#comp-ltvkcimc").should('contain', 'Thanks for submitting!');
});

Then("verify form should not submit", (index) => {
  cy.get("#comp-ltvkcimc").should('not.visible', 'Thanks for submitting!');
});

Then("verify require firstname field", (index) => {
  cy.get("#comp-ltvkcimc").should('not.contain', 'value_it_should_not_contain');
});

And("verify text for firstname", (index) => {
  cy.get("#input_comp-lt33fcq41").should('have.value', 'aaabbbccdd');
});

Given("open student registration form", () => {
  cy.visit("https://www.jotform.com/build/240795178861469?s=templates");
});

And("input student first name", (index) => {
  cy.get("#first_3").type("Jameson").click();
});

And("select hear about us", (index) => {
  cy.get('select').select('Newspaper');
});
