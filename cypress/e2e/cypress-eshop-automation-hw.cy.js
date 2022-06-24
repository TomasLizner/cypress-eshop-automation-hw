describe("Add two most expensive TVs to the shopping cart.", () => {

  const PRODUCT = "Televize"

  beforeEach(()=>{
    cy.visit("https://www.mironet.cz/")
    cy.get('.col-text > .ButtonDef').click()
  })

  it("opens homepage and verifies if expected objects are loaded properly", () => {
    cy.get('[id=shp_logo]').should('be.visible')
    cy.get('[id=EXPS]').should('be.visible')
    cy.get('.BasketSumInfo').should('be.visible')
    cy.get('[id=div_footX').should('be.visible')
  }),
  it.only("navigates to TVs category and adds two most expensive TVs to the shopping cart", () => {
    cy.get('[id=EXPS]').type(`${PRODUCT}{enter}`)
    cy.get('.additional_search_category > span').contains(`${PRODUCT}`).click()
    cy.get('[id=detail-tabs]').contains('Nejdražší').click()
    cy.get('[id=productContainer] input[type=submit').eq(0).click()
    cy.get('.kosik_zpet').eq(0).click()
    cy.get('[id=productContainer] input[type=submit').eq(1).click()
    cy.get('[id=produkty]').find('.tr_kosik_produkt').should('have.length', 2)
  })
})