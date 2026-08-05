class NavigationMenu {
    selectors = {
        hamburgerButton: '[id="react-burger-menu-btn"]',
        menuWrap: '.bm-menu-wrap',
        closeHamburgerMenuButton: '[id="react-burger-cross-btn"]',
        allItemsLink: '[data-test="inventory-sidebar-link"]',
        aboutLink: '[data-test="about-sidebar-link"]',
        logoutButton: '[data-test="logout-sidebar-link"]',
        resetStateButton: '[data-test="reset-sidebar-link"]'
    }
    clickHamburgerButton() {
        cy.get(this.selectors.hamburgerButton).click()

        // check for container to be visible
        cy.get(this.selectors.menuWrap).should('be.visible')
    }
    closeHamburgerMenu() {
        cy.get(this.selectors.closeHamburgerMenuButton).click()

        // check for container to be hidden
        cy.get(this.selectors.menuWrap).should('not.be.visible')
    }
    clickAllItemsLink() {
        cy.get(this.selectors.allItemsLink).click()
    }
    clickAboutLink() {
        cy.get(this.selectors.aboutLink).click()
    }
    clickLogoutButton() {
        cy.get(this.selectors.logoutButton).click()
    }
    clickResetStateButton() {
        cy.get(this.selectors.resetStateButton).click()
    }
}
export default new NavigationMenu()