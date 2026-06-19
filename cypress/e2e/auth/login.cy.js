import LoginPage from "../../PageObjects/LoginPage"
describe('Login Tests', () => {
    it('Login with valid creds', () => {
        cy.fixture('users').then((users) => {
            LoginPage.visit()
            LoginPage.login(users.validUser.username, users.validUser.password)
            cy.url().should('include', '/inventory.html')
        })
    })
    it('Login with locked out creds', () => {
        cy.fixture('users').then((users) => {
            LoginPage.visit()
            LoginPage.login(users.lockedUser.username, users.lockedUser.password)
            LoginPage.getErrorMessage().should('be.visible').and('contain', 'Epic sadface: Sorry, this user has been locked out.')
        })
    })
})