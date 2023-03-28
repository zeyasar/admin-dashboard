/// <reference types="cypress" />
import { LoginPage } from "../PageClasses/LoginPage";
import { UsersPage } from "../PageClasses/UsersPage";
const lp = new LoginPage();
const up = new UsersPage();
describe('US01 - Valid Login Test', () => {
  beforeEach(()=>{
    cy.log('Kullanici Login sayfasina gider')
    cy.visit(lp.datas.url)
  })
  it('US01-TC01 : Kullanici gecerli email adresi ile giris yapabilmelidir', () => {
    cy.log('Kullanici email bilgilerini girerek login butonuna basar')
    lp.loginWithEmail(lp.datas.username)
    cy.log('Kullanici users sayfasinda oldugunu gormelidir')
    up.assertUsersPageVisible()
  })
  it('US01-TC02 : Kullanici "." isareti gecersiz email adresi ile giris yapamamalidir', () => {
    cy.log('Kullanici email bilgilerini girerek login butonuna basar')
    lp.loginWithEmail('fatih@gmailcom')
    cy.log('Kullanici Invalid Email uyarisini gormelidir')
    lp.assertAlertMessageVisible()
  });
  it('US01-TC03 : Kullanici "@" isareti olmadan gecersiz mail adresi ile giris yapamamalidir', () => {
    lp.loginWithEmail('fatihgmail.com')
    cy.log('Kullanici Invalid Email uyarisini gormelidir')
    lp.assertAlertMessageVisible()
  });
})