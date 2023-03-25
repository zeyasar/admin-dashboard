/// <reference types = "cypress" />
import { LoginPage } from "../PageClasses/LoginPage";
import { UsersPage } from "../PageClasses/UsersPage";
import { EditPage } from "../PageClasses/EditPage";
const lp = new LoginPage();
const up = new UsersPage();
const ep = new EditPage();

describe('US03 - Kullanici login isleminden sonra Users hakkinda islem yapabilmelidir' , ()=>{
    beforeEach(()=>{
        cy.viewport(1920 , 1080)
        cy.log('Kullanici Login sayfasina gider')
        cy.visit(lp.datas.url)
        cy.log('Kullanici email bilgilerini girerek login butonuna basar')
        lp.loginWithEmail(lp.datas.username)
    })
    it('US03-TC01 : Kullanici Login islemi yapar ve kullanicilari gorebilmelidir', () => {
        cy.log('Kullanici Users sayfasinda butun userslari gormelidir')
        up.assertAllUsersVisible()
    });
    it('US03-TC02 : Kullanici users bilgilerini degistirebilmelidir', () => {
        cy.log('Kullanici bir tane users icin edit buttona tiklar')
        up.clickEditBtn()
        cy.log('Kullanici users bilgilerini degistirmek icin datalari girer ve guncelleme yapar')
        ep.editUsersInfos('Fatih ATAS' , '0506 114 77 62' , 'fatihatas9324@gmail.com')
        ep.clickUsersOperationsBtn()
        ep.clickUsersOperationsBtn()
        up.getUsers('Fatih ATAS').should('be.visible')
    }); 
    it('US03-TC03 : Kullanici sectigi users silebilmelidir', () => {
        cy.log('Kullanici bir tane users icin edit buttona tiklar')
        up.clickEditBtn()
        ep.deleteUserBtnClick()
        ep.approveDeleteBtnClick()
        up.getUsers('Alonzo Effertz').should('be.visible')

    });

})