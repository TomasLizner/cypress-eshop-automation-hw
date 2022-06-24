describe("Add two most expensive TVs to the shopping cart.", () => {

  beforeEach(()=>{
    cy.visit("https://www.mironet.cz/")
    cy.get('.col-text > .ButtonDef').click()
  })

  it("opens homepage and verifies if expected objects are loaded properly", () => {
    cy.get('[id=shp_logo]').should('be.visible')
    cy.get('[id=EXPS]').should('be.visible')
    cy.get('.BasketSumInfo').should('be.visible')
    cy.get('[id=div_footX').should('be.visible')
  })
})