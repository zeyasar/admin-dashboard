export class LoginPage{
    loginWithEmail(email){
        cy.get('#email').type(email)
        cy.get('button.MuiButton-contained').click()
    }
    assertAlertMessageVisible(){
        cy.get('div.css-1wnsr1i').should('be.visible')
    }
    clickRememberMe(){
        cy.get('.MuiTypography-body1').click()
    }
    assertRememberMeChecked(){
        cy.get('span.Mui-checked').should('be.visible')
    }
    datas={
        "url":"http://localhost:3000/login",
        "username":"fatihatas@gmail.com"
    }
}