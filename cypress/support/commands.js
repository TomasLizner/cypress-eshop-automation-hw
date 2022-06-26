Cypress.Commands.add("clickOnAddToCartButton", (buttonOrder) => { 
    cy.get('[id=productContainer] input[type=submit').eq(`${buttonOrder}`).click()
})
