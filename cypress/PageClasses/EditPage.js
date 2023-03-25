export class EditPage{
    editUsersInfos(name , phoneNumber , email , birthDay){
        cy.get('#fullname').clear().type(name)
        cy.get('#phone').clear().type(phoneNumber)
        cy.get('#mail').clear().type(email)
        cy.get('.MuiButton-contained').click()
    }
    deleteUserBtnClick(){
        cy.get('.MuiButton-textError').click()
    }
    cancelBtnClick(){
        cy.get('.MuiDialogActions-root > :nth-child(1)').click()
    }
    approveDeleteBtnClick(){
        cy.get('.MuiDialogActions-root > :nth-child(2)').click()
    }
    clickUsersOperationsBtn(){
        cy.get('.MuiList-root > :nth-child(4)').click()
    }
}