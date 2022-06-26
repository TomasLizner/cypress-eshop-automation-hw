describe("Add two most expensive TVs to the shopping cart.", () => {

  const PRODUCT = "Televize"
  const SEARCH_FIELD_ID = "EXPS"

  beforeEach(()=>{
    cy.visit("/")
    cy.get('.col-text > .ButtonDef').click()
  })

  it("opens homepage and verifies if expected objects are loaded properly", () => {
    cy.get('[id=shp_logo]').should('be.visible')
    cy.get(`[id=${SEARCH_FIELD_ID}]`).should('be.visible')
    cy.get('.BasketSumInfo').should('be.visible')
    cy.get('[id=div_footX').should('be.visible')
  }),

  it("navigates to TVs category and adds two most expensive TVs to the shopping cart", () => {
    cy.get(`[id=${SEARCH_FIELD_ID}]`).type(`${PRODUCT}{enter}`)
    cy.get('.additional_search_category > span').contains(`${PRODUCT}`).click()
    cy.get('[id=detail-tabs]').contains('Nejdražší').click()
    cy.clickOnAddToCartButton(0)
    cy.get('.kosik_zpet:eq(0)').click()
    cy.clickOnAddToCartButton(1)
    cy.get('[id=produkty]').find('.tr_kosik_produkt').should('have.length', 2)
  })
})
