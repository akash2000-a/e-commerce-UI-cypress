class LoginPage{
    selectors={
        usernameInput:'#user-name',
        passwordInput:'[type="password"]',
        loginButton:'.submit-button'
    }

    visit(){
        cy.visit('/')
    }
    enterUsername(username){
        cy.get(this.selectors.usernameInput).type(username)
    }
    enterPassword(password){
        cy.get(this.selectors.passwordInput).type(password)
    }
    clickLoginButton(){
        cy.get(this.selectors.loginButton).click()
    }
    login(username,password){
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickLoginButton()
    }
}
export default new LoginPage()