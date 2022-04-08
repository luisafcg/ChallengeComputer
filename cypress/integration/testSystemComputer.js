/// <reference types = "cypress" />

describe ('This test validate page create new computer', () =>{
     beforeEach(() =>{
         cy.visit ('https://computer-database.gatling.io/computers')
     })

     it ("This scenario add new computer using different selector", () =>{
         cy.fixture('elementsPage').then((elements =>{
             cy.xpath(elements.btnAddNewComputer).should('be.visible').click()
         cy.fixture("dataNewComputer").then((data) =>{
             cy.addNewComputer(
                 data.computerName,
                 data.introduced,
                 data.discontinued,
                 data.company   
             )
            cy.xpath(elements.alertSuccessfulMns).should('have.text', "Done !  Computer VivoBook has been created")
         })

         }))
     })

     it("Validate information that have list company select", () =>{
        cy.fixture('elementsPage').then((elements) =>{
        cy.fixture('dataNewComputer').then((data) =>{
            cy.xpath(elements.btnAddNewComputer).click()
            cy.get(elements.elementCompany).should('have.text', data.listCompany)

        })
           
        })
    })
})
