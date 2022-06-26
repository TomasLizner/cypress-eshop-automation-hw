describe("Add two most expensive TVs to the shopping cart.", () => {

  const PRODUCT = "Televize"
  const SEARCH_FIELD_ID = "EXPS"
  const BASKET_SUM_INFO = ".BasketSumInfo"

  beforeEach(()=>{
    cy.visit("/")
    cy.get('.col-text > .ButtonDef').click()
  })

  it("opens homepage and verifies if expected objects are loaded properly", () => {
    cy.get('[id=shp_logo]').should('be.visible')
    cy.get(`[id=${SEARCH_FIELD_ID}]`).should('be.visible')
    cy.get(`${BASKET_SUM_INFO}`).should('be.visible')
    cy.get('[id=div_footX').should('be.visible')
    cy.get(`${BASKET_SUM_INFO}`).find('span').should('have.text',0)
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
