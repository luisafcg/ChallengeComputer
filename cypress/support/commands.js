// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addNewComputer', (name, dateIntroduced,dateDiscontinued,nameCompany) =>{
          cy.fixture('elementsPage').then((elements) =>{
              cy.get(elements.elementComputerName).clear().type(name)
              cy.get(elements.elementIntroduced).clear().type(dateIntroduced)
              cy.get(elements.elementDiscontinued).clear().type(dateDiscontinued)
              cy.get(elements.elementCompany).select(nameCompany)
              cy.get(elements.btnCreateComputer).click()
          })
})