import 'cypress-mochawesome-reporter/register';
import LoginPage from "../PageObjects/LoginPage"
import InventoryPage from "../PageObjects/InventoryPage"

Cypress.Commands.add('login', (username, password) => {
    LoginPage.visit()
    LoginPage.login(username, password)
})

Cypress.Commands.add('setupCart', (items) => {
    cy.fixture('users').then((users) => {
        cy.login(users.validUser.username, users.validUser.password)
    })
    items.forEach((item) => {
        InventoryPage.addItemToCart(item)
    })
    InventoryPage.clickShoppingCartLink()
})