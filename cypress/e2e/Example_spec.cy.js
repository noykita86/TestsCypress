/*describe('My First Test', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
  })
})
*/
describe ("Test  suite - conjunto de pruebas", () => {

  it('Validar pagina de inicio', () => {

    cy.visit('http://zero.webappsecurity.com')
    cy.get('.active > img').should('be.visible')
    cy.get('.active > .custom > h4').contains('Online Banking')

 })

 it('Prueba E2E - transferencia de fondos',() => {

  cy.visit('http://zero.webappsecurity.com')
  cy.get('#signin_button').click()
  cy.get('#id_usuario').type('username')
  cy.get('#id_passw').type('userpassw')
  cy.get('.btn').click()
  cy.get('#id_tranfer').click()
  cy.get('#Cuentacombo1').select('5')
  cy.get('#Cuentacombo2').select('1')
  cy.get('#cash').type('300')
  cy.get('#descripcion').type('Transferencia prueba 300')
  cy.get('btn_submit').click()
  cy.get('btn_submit').click()
  cy.get('.alert').contains('You successfully submitted your transaction.')
 

  })
})