import LoginPage from "../../PageObjects/LoginPage"
describe('Login Tests', ()=>{
    it('Login with valid creds', ()=>{
        cy.fixture('users').then((users)=>{
            LoginPage.visit()
            LoginPage.login(users.validUser.username,users.validUser.password)
            cy.url().should('include','/inventory.html')
        })
    })
})