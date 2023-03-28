export class UsersPage{
    assertUsersPageVisible(){
        cy.get('.MuiToolbar-regular img').should('be.visible')
    }
    assertAllUsersVisible(){
        cy.get('p.css-z6hbss-MuiTypography-root').should('be.visible')
    }
    clickEditBtn(){
        cy.get(':nth-child(1) > .css-18l9eeq-MuiTableCell-root > :nth-child(1)').scrollIntoView().click()
    }
    getUsers(username){
        return cy.get('p').contains(username)
    }
}