/* eslint-disable no-unused-expressions */
/// <reference types="Cypress" />
// ^ строку сверху нужно добавлять для автокомплита

import React from "react";

describe("complete e to e test", () => {
  it(" e to e test", () => {
    cy.visit("/");
    // counter test
    cy.contains("Clicked: 0").click();
    cy.contains("Clicked: 1");
    // TestHook test
    cy.contains("Initial State");
    cy.contains("State Change Button").click();
    cy.contains("Initial State Changed");
    cy.contains("Moe");
    cy.contains("Change Name").click();
    cy.contains("Steve");
    // TestReducer test
    cy.contains("Some text");
    cy.contains("Change Text").click();
    cy.contains("Some other text");
    // TestControlledForm
    cy.get("#text1").type("New Text {enter}"); // (это инпут)
    cy.contains("Change: New Text");
    cy.contains("Submit Value: New Text");

    //axios test
    cy.request("https://jsonplaceholder.typicode.com/posts/1").should((res) => {
      expect(res.body).not.to.be.null;
      cy.contains(res.body.title);
    });
  });
});
