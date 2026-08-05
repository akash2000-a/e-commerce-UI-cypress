import NavigationMenu from "../../PageObjects/NavigationMenu"
import InventoryPage from "../../PageObjects/InventoryPage"

describe('Navigation & Menu Tests', () => {
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            cy.login(users.validUser.username, users.validUser.password)
        })
    })

    it('Hamburger menu open and close', () => {
        // 1. Open the menu
        NavigationMenu.clickHamburgerButton()

        // 2. Close the menu
        NavigationMenu.closeHamburgerMenu()
    })

    it('About link validation', () => {
        NavigationMenu.clickHamburgerButton()

        // Assert href attribute of About link (best practice: don't click external links)
        cy.get(NavigationMenu.selectors.aboutLink)
            .should('have.attr', 'href', 'https://saucelabs.com/')
    })

    it('Logout', () => {
        NavigationMenu.clickHamburgerButton()
        NavigationMenu.clickLogoutButton()

        // Assert redirect to login page and visibility of username input
        cy.url().should('eq', Cypress.config().baseUrl)
        cy.get('#user-name').should('be.visible')
    })

    it('Reset app state', () => {
        // 1. Add an item to cart to set state
        InventoryPage.addItemToCart('Sauce Labs Backpack')
        InventoryPage.getCartBadgeCount(1)

        // 2. Open menu and reset app state
        NavigationMenu.clickHamburgerButton()
        NavigationMenu.clickResetStateButton()

        // 3. Verify cart is empty and badge doesn't exist
        InventoryPage.verifyCartBadgeNotExist()
    })
})
