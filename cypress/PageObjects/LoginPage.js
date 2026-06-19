class LoginPage {
    selectors = {
        usernameInput: '#user-name',
        passwordInput: '[type="password"]',
        loginButton: '.submit-button',
        errorMessage: '[data-test="error"]'
    }

    visit() {
        cy.visit('/')
    }
    enterUsername(username) {
        cy.get(this.selectors.usernameInput).type(username)
    }
    enterPassword(password) {
        cy.get(this.selectors.passwordInput).type(password)
    }
    clickLoginButton() {
        cy.get(this.selectors.loginButton).click()
    }
    login(username, password) {
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickLoginButton()
    }
    getErrorMessage() {
        return cy.get(this.selectors.errorMessage)
    }
}
export default new LoginPage()