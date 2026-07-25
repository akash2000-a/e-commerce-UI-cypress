import LoginPage from "../../PageObjects/LoginPage"
import users from "../../fixtures/users.json"
describe('Login Tests-- Data driven', () => {
    const scenarios = [
        {
            name: 'Login with valid credentials',
            user: users.validUser,
            expectedType: 'success',
            expectedUrl: '/inventory.html'
        },
        {
            name: 'Login with locked out credentials',
            user: users.lockedUser,
            expectedType: 'error',
            expectedError: 'Epic sadface: Sorry, this user has been locked out.'
        },
        {
            name: 'Login with invalid credentials',
            user: users.invalidUser,
            expectedType: 'error',
            expectedError: 'Epic sadface: Username and password do not match any user in this service'
        }
    ]
    scenarios.forEach((scenario) => {
        it(scenario.name, () => {
            LoginPage.visit()
            LoginPage.login(scenario.user.username, scenario.user.password)
            if (scenario.expectedType === 'success') {
                cy.url().should('include', scenario.expectedUrl)
            } else {
                LoginPage.getErrorMessage().should('be.visible').and('contain', scenario.expectedError)
            }
        })
    })
})