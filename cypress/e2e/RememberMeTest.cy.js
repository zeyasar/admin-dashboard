/// <reference types="cypress" />
import { LoginPage } from "../PageClasses/LoginPage";
const lp = new LoginPage();
describe('US02 - Login Page Remember Me Tests' , ()=>{
    it('US02-TC01 : Kullanici Remember Me kismina tikladiginda ok isareti çikmalidir', () => {
        cy.log('Kullanici Login sayfasina gider')
        cy.visit(lp.datas.url)
        cy.log('Kullanici Remember Me butonuna tiklar')
        lp.clickRememberMe()
        cy.log('Kullanici Remember Me butonun check edildigini gormelidir')
        lp.assertRememberMeChecked()
    });
})